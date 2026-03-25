"use client";

import { notFound } from "next/navigation";
import { usePublicProfileQuery } from "@/hooks/usePublicProfileQuery";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import Chat from "./Chat";
import Handles from "./Handles";
import Links from "./Links";
import PermaLink from "./PermaLink";
import Watermark from "./Watermark";

export default function Profile({ username }: { username: string }) {
  const { data } = usePublicProfileQuery(username);
  const queryClient = useQueryClient();

  useEffect(() => {
    console.log("[Profile Tab] Initializing BroadcastChannel: profile-sync");
    const channel = new BroadcastChannel("profile-sync");

    channel.onmessage = (event) => {
      console.log("[Profile Tab] Received message:", event.data);
      if (event.data?.type === "PROFILE_REFRESH") {
        console.log("[Profile Tab] Refreshing data for:", username);
        queryClient.refetchQueries({ queryKey: ["PROFILES", username] });
      }
    };

    return () => {
      console.log("[Profile Tab] Closing BroadcastChannel: profile-sync");
      channel.close();
    };
  }, [queryClient, username]);

  if (!data) return notFound();

  return (
    <div className="flex size-full max-w-md flex-1 flex-col gap-8">
      <PermaLink data={data} />
      <Handles data={data} />
      <Links data={data} />
      <Chat />
      <Watermark />
    </div>
  );
}
