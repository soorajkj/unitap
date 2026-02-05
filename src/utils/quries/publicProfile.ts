import { hrpc } from "@/lib/hrpc";

export const getPublicProfile = async (username: string) => {
  const res = await hrpc.api.public[":username"].$get({ param: { username } });
  if (!res.ok) throw new Error("Failed to fetch profile");
  return await res.json();
};
