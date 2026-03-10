"use client";

import { notFound } from "next/navigation";
import { usePublicProfileQuery } from "@/hooks/usePublicProfileQuery";
import Chat from "./Chat";
import Handles from "./Handles";
import Links from "./Links";
import PermaLink from "./PermaLink";
import Watermark from "./Watermark";

export default function Profile({ username }: { username: string }) {
  const { data } = usePublicProfileQuery(username);

  if (!data) return notFound();

  return (
    <div className="flex size-full max-w-md flex-1 flex-col gap-8">
      <PermaLink />
      <Handles data={data} />
      <Links data={data} />
      <Chat />
      <Watermark />
    </div>
  );
}
