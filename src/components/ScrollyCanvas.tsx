"use client";

import { useEffect, useRef, useState, RefObject } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const frameCount = 120;

const getFramePath = (index: number) => {
  return `/sequence/frame_${index.toString().padStart(3, '0')}_delay-0.066s.webp`;
};

export default function ScrollyCanvas({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(frameCount).fill(null));
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const drawFrame = (frameIndex: number) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Find exact image or fallback to nearest loaded frame
    let img: HTMLImageElement | null = imagesRef.current[frameIndex] || null;
    if (!img) {
      for (let delta = 1; delta < frameCount; delta++) {
        const prev = frameIndex - delta;
        const next = frameIndex + delta;
        if (prev >= 0 && imagesRef.current[prev]) {
          img = imagesRef.current[prev];
          break;
        }
        if (next < frameCount && imagesRef.current[next]) {
          img = imagesRef.current[next];
          break;
        }
      }
    }

    if (!img || !img.width || !img.height) return;

    // Object-fit: cover logic
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  // 1. Load initial frame 0 immediately so page renders without delay
  useEffect(() => {
    const frame0 = new Image();
    frame0.src = getFramePath(0);
    frame0.onload = () => {
      imagesRef.current[0] = frame0;
      setFirstFrameLoaded(true);
    };
    frame0.onerror = () => {
      setFirstFrameLoaded(true);
    };
  }, []);

  // 2. Load remaining frames progressively in background (keyframes first, then rest)
  useEffect(() => {
    let isCancelled = false;

    const loadImagesInBatches = async () => {
      // Step A: Keyframes every 5th index (5, 10, 15, ...)
      const keyframes: number[] = [];
      const rest: number[] = [];

      for (let i = 1; i < frameCount; i++) {
        if (i % 5 === 0) keyframes.push(i);
        else rest.push(i);
      }

      const fetchBatch = async (indices: number[], batchSize = 6) => {
        for (let i = 0; i < indices.length; i += batchSize) {
          if (isCancelled) break;
          const chunk = indices.slice(i, i + batchSize);
          await Promise.all(
            chunk.map(
              (idx) =>
                new Promise<void>((resolve) => {
                  const img = new Image();
                  img.src = getFramePath(idx);
                  img.onload = () => {
                    imagesRef.current[idx] = img;
                    resolve();
                  };
                  img.onerror = () => resolve();
                })
            )
          );
        }
      };

      await fetchBatch(keyframes, 8);
      await fetchBatch(rest, 6);
    };

    loadImagesInBatches();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Handle Canvas sizing and initial drawing when frame 0 is ready
  useEffect(() => {
    if (!firstFrameLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const currentFrame = Math.floor(scrollYProgress.get() * (frameCount - 1));
    drawFrame(currentFrame);

    const resizeObserver = new ResizeObserver(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(Math.floor(scrollYProgress.get() * (frameCount - 1)));
    });

    resizeObserver.observe(document.body);

    return () => resizeObserver.disconnect();
  }, [firstFrameLoaded]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!firstFrameLoaded) return;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.max(0, Math.floor(latest * (frameCount - 1)))
    );
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  return (
    <>
      <canvas
        ref={canvasRef}
        className="h-full w-full block absolute inset-0 z-0 bg-[#121212]"
      />
      {!firstFrameLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white z-50 bg-[#121212]">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4" />
            <div className="tracking-[0.3em] text-sm font-light text-white/70">LOADING..</div>
          </div>
        </div>
      )}
    </>
  );
}

