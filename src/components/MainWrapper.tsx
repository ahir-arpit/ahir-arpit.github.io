"use client";

import { useRef } from "react";
import ScrollyCanvas from "./ScrollyCanvas";
import Overlay from "./Overlay";

export default function MainWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <ScrollyCanvas containerRef={containerRef} />
        <Overlay containerRef={containerRef} />
        {/* Soft gradient fade at the bottom — blends hero into next section */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
