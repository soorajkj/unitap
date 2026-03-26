"use client";

import { useProfileQuery } from "@/hooks/useProfilesQuery";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

export default function IPhoneMockup() {
  const { data: profile } = useProfileQuery();
  const queryClient = useQueryClient();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const username = profile?.username;
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${username}`;

  useEffect(() => {
    const channel = new BroadcastChannel("profile-sync");

    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      if (
        event.type === "updated" &&
        event.action.type === "success" &&
        ["PROFILE", "LINKS", "HANDLES"].some((key) =>
          (event.query.queryKey as string[]).includes(key),
        )
      ) {
        channel.postMessage({ type: "PROFILE_REFRESH" });
      }
    });

    return () => {
      unsubscribe();
      channel.close();
    };
  }, [queryClient]);

  return (
    <div
      style={{
        transform: "scale(0.70)",
        width: "414px",
        height: "896px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "55px",
          border: "10px solid var(--color-neutral-900)",
          overflow: "hidden",
          background: "black",
        }}
      >
        {/* Dynamic Island */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            height: "26px",
            width: "110px",
            borderRadius: "999px",
            background: "black",
            zIndex: 20,
          }}
        />

        {/* Screen */}
        <iframe
          ref={iframeRef}
          title="IPhone device preview"
          src={url}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "45px",
          }}
        />

        {/* Buttons (optional, keep proportional) */}
        <div
          style={{
            position: "absolute",
            top: "120px",
            left: "-14px",
            height: "40px",
            width: "8px",
            background: "black",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
}
