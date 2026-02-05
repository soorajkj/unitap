import { hrpc } from "@/lib/hrpc";

export const getPlatforms = async () => {
  const res = await hrpc.api.platforms.$get();
  if (!res.ok) throw new Error("Failed to fetch platforms");
  return await res.json();
};
