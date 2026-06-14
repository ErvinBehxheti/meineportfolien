"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees */
  maxTilt?: number;
  glare?: boolean;
  style?: React.CSSProperties;
};

/**
 * Pointer-tracking 3D tilt surface with a soft light glare.
 * Children can use translateZ() for layered depth – transform-style is preserved.
 */
export default function TiltCard({
  children,
  className,
  maxTilt = 7,
  glare = true,
  style,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const rotateX = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useSpring(useMotionValue(0), { stiffness: 180, damping: 24 });

  const glareImage = useMotionTemplate`radial-gradient(480px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.16), transparent 65%)`;

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || e.pointerType === "touch" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-py * maxTilt);
    rotateY.set(px * maxTilt);
    glareX.set(px * 100 + 50);
    glareY.set(py * 100 + 50);
    glareOpacity.set(1);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  }

  return (
    <div className="perspective-1200">
      <motion.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={cn("relative preserve-3d", className)}
        style={{ rotateX, rotateY, ...style }}
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            className="absolute inset-0 pointer-events-none rounded-[inherit] z-20"
            style={{ backgroundImage: glareImage, opacity: glareOpacity }}
          />
        )}
      </motion.div>
    </div>
  );
}
