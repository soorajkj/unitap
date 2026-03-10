"use client";

import type { LenisRef } from "lenis/react";
import { type LenisProps, ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "motion";
import { useEffect, useRef } from "react";

export default function LenisProvider({ children, ...props }: LenisProps) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const update = (data: { timestamp: number }) => {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    };

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis root={true} {...props}>
      {children}
    </ReactLenis>
  );
}
