"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { RefObject, useEffect, useState } from "react";

export default function Overlay({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2, 1], [0, -100, -100]);

  // Section 2: 25% to 55%
  const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4, 0.55, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.2, 0.4, 1], [100, 100, 0, 0]);

  // Section 3: 75% to 95%
  const opacity3 = useTransform(scrollYProgress, [0, 0.65, 0.75, 0.85, 0.95, 1], [0, 0, 1, 1, 0, 0]);
  const y3 = useTransform(scrollYProgress, [0, 0.65, 0.85, 1], [100, 100, 0, 0]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center px-8 md:px-24 z-10">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute w-full flex justify-end max-w-7xl mx-auto pr-4 md:pr-0"
      >
        <div className="flex flex-col items-start">
          <span className="font-serif text-3xl md:text-5xl text-[#2dd4bf] mb-2 md:mb-4 tracking-wide">Hello! I'm</span>
          <h1 className="text-6xl md:text-[8rem] font-sans font-bold tracking-tight text-gray-200 leading-[1.1]">
            ARPIT<br />
            YADAV
          </h1>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute w-full flex justify-end max-w-7xl mx-auto pr-4 md:pr-0"
      >
        <div className="flex flex-col items-start relative ml-auto">
          <div className="relative mt-4 md:mt-6">
            <h2 className="text-5xl md:text-[5.5rem] lg:text-[6.5rem] font-sans font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#2dd4bf]/60 to-transparent absolute -top-8 md:-top-12 left-0 z-0 select-none">
              SOFTWARE
            </h2>
            <h2 className="text-5xl md:text-[5.5rem] lg:text-[6.5rem] font-sans font-bold tracking-tight text-gray-200 relative z-10">
              DEVELOPER
            </h2>
          </div>
        </div>
      </motion.div>
      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute top-24 md:top-32 lg:top-40 w-full flex justify-end px-8 md:px-16 lg:px-24"
      >
        <div className="flex flex-col items-end text-right">
          <h2 className="text-4xl md:text-5xl lg:text-[5.5rem] font-sans font-black tracking-tighter leading-none drop-shadow-2xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-[#2dd4bf] block">Code</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400 block mt-2 md:mt-3">Create</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-500 block mt-2 md:mt-3">Innovate</span>
          </h2>
        </div>
      </motion.div>
    </div>
  );
}
