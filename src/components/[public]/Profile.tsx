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
    const channel = new BroadcastChannel("profile-sync");

    channel.onmessage = (event) => {
      if (event.data?.type === "PROFILE_REFRESH") {
        queryClient.refetchQueries({ queryKey: ["PROFILES", username] });
      }
    };

    return () => channel.close();
  }, [queryClient, username]);

  if (!data) return notFound();

  return (
    <main className="flex size-full max-w-md flex-1 flex-col gap-8">
      <PermaLink data={data} />
      <Handles data={data} />
      <Links data={data} />
      <Chat />
      <Watermark />
    </main>
  );
}
