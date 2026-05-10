"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function AmbientBackground() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 24 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [x, y]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="grid-overlay absolute inset-0 opacity-70" />
      <div className="noise" />
      <motion.div
        className="absolute h-80 w-80 rounded-full bg-cyan-300/12 blur-3xl"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-blue-500/12 blur-3xl" />
      <div className="absolute right-[10%] top-[12%] h-80 w-80 rounded-full bg-indigo-400/12 blur-3xl" />
      <div className="absolute bottom-[10%] left-[36%] h-96 w-96 rounded-full bg-cyan-400/8 blur-3xl" />
    </div>
  );
}
