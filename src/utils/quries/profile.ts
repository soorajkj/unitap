import { hrpc } from "@/lib/hrpc";
import type { ProfileUpdateInput } from "@/utils/validators/profile";

export const getProfile = async () => {
  const res = await hrpc.api.profile.$get();
  if (!res.ok) throw new Error("Failed to fetch profile");
  return await res.json();
};

export const updateProfile = async (data: ProfileUpdateInput) => {
  const res = await hrpc.api.profile.$patch({ json: data });
  if (!res.ok) throw new Error("Failed to update profile");
  return await res.json();
};
