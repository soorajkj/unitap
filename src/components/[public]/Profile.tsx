"use client";

import { notFound } from "next/navigation";
import { usePublicProfileQuery } from "@/hooks/usePublicProfileQuery";
import Handles from "./Handles";
import Links from "./Links";
import Watermark from "./Watermark";

export default function Profile({ username }: { username: string }) {
  const { data } = usePublicProfileQuery(username);

  if (!data) return notFound();

  return (
    <div className="flex size-full max-w-md flex-col gap-8">
      <Handles data={data} />
      <Links data={data} />
      <Watermark />
    </div>
  );
}
