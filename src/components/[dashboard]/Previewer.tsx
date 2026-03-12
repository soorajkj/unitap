"use client";

import { useIsClient } from "usehooks-ts";
import Share from "@/components/[dashboard]/Share";

export default function Previewer() {
  const isMounted = useIsClient();

  if (!isMounted) return null;

  return (
    <div className="flex size-full flex-col">
      <div className="h-auto w-full">
        <div className="flex h-14 items-center justify-center">
          <Share />
        </div>
      </div>
      <div className="grid flex-1 place-content-center overflow-y-auto">
        <div className="flex items-center justify-center">
          <div
            style={{
              position: "relative",
              height: "600px",
              width: "288px",
              borderRadius: "45px",
              border: "8px solid var(--color-neutral-900)",
            }}
          >
            {/* Dynamic Island */}
            <div
              style={{
                position: "absolute",
                top: "8px",
                left: "50%",
                transform: "translateX(-50%)",
                height: "22px",
                width: "90px",
                borderRadius: "999px",
                background: "var(--color-neutral-900)",
                zIndex: 20,
              }}
            />
            {/* Inner Border */}
            <div
              style={{
                position: "absolute",
                inset: "-1px",
                borderRadius: "37px",
                border: "3px solid var(--color-neutral-400)",
                pointerEvents: "none",
              }}
            />
            {/* Screen */}
            <div
              style={{
                position: "relative",
                height: "100%",
                width: "100%",
                borderRadius: "37px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--color-neutral-200)",
              }}
            ></div>
            {/* Silent Switch */}
            <div
              style={{
                position: "absolute",
                top: "80px",
                left: "-12px",
                height: "32px",
                width: "6px",
                borderRadius: "4px 0 0 4px",
                background: "var(--color-neutral-900)",
              }}
            />
            {/* Volume Up */}
            <div
              style={{
                position: "absolute",
                top: "144px",
                left: "-12px",
                height: "48px",
                width: "6px",
                borderRadius: "4px 0 0 4px",
                background: "var(--color-neutral-900)",
              }}
            />
            {/* Volume Down */}
            <div
              style={{
                position: "absolute",
                top: "208px",
                left: "-12px",
                height: "48px",
                width: "6px",
                borderRadius: "4px 0 0 4px",
                background: "var(--color-neutral-900)",
              }}
            />
            {/* Power Button */}
            <div
              style={{
                position: "absolute",
                top: "144px",
                right: "-12px",
                height: "64px",
                width: "6px",
                borderRadius: "0 4px 4px 0",
                background: "var(--color-neutral-900)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
