import { hrpc } from "@/lib/hrpc";

export const getLinks = async () => {
  const res = await hrpc.api.links.$get();
  if (!res.ok) throw new Error("Failed to fetch links");
  return await res.json();
};
