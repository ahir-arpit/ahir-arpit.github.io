"use client";

import { useEffect, useRef, useState, RefObject } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const frameCount = 120;

const getFramePath = (index: number) => {
  return `/sequence/frame_${index.toString().padStart(3, '0')}_delay-0.066s.webp`;
};

export default function ScrollyCanvas({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFramePath(i);

      const onImageLoad = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setLoaded(true);
        }
      };

      img.onload = onImageLoad;
      // In case images are missing in the sequence directory, just proceed so we don't block forever
      img.onerror = onImageLoad;

      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (frameIndex: number) => {
    if (!canvasRef.current || images.length === 0 || !images[frameIndex]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[frameIndex];

    // Safety check for empty/errored images
    if (!img.width || !img.height) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    // Calculate object-fit: cover logic
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

  // Draw initial frame and handle resizing
  useEffect(() => {
    if (!loaded || !canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resizeObserver = new ResizeObserver(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(Math.floor(scrollYProgress.get() * (frameCount - 1)));
    });

    resizeObserver.observe(document.body);

    drawFrame(0);

    return () => resizeObserver.disconnect();
  }, [loaded, images]);


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!loaded) return;
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
      {!loaded && (
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
