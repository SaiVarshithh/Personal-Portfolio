"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function AmbientBackground() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);
  const smoothX = useSpring(x, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 24 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [x, y, isMobile]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="grid-overlay absolute inset-0 opacity-50 md:opacity-70" />
      <div className="noise" />
      {!isMobile && (
        <motion.div
          className="absolute h-64 w-64 rounded-full bg-cyan-300/8 blur-2xl md:h-80 md:w-80 md:bg-cyan-300/12 md:blur-3xl"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}
      <div className="absolute left-[8%] top-[18%] h-48 w-48 rounded-full bg-blue-500/6 blur-2xl md:h-72 md:w-72 md:bg-blue-500/12 md:blur-3xl" />
      <div className="absolute right-[10%] top-[12%] h-56 w-56 rounded-full bg-indigo-400/6 blur-2xl md:h-80 md:w-80 md:bg-indigo-400/12 md:blur-3xl" />
      <div className="absolute bottom-[10%] left-[36%] h-64 w-64 rounded-full bg-cyan-400/4 blur-2xl md:h-96 md:w-96 md:bg-cyan-400/8 md:blur-3xl" />
    </div>
  );
}
