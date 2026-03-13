import { hrpc } from "@/lib/hrpc";
import type {
  ProfileCreateSchema,
  ProfileUpdateSchema,
} from "@/utils/validators/profile";

export const getProfile = async () => {
  const res = await hrpc.api.profile.$get();
  if (!res.ok) throw new Error("Failed to fetch profile");
  return await res.json();
};

export const createProfile = async (data: ProfileCreateSchema) => {
  const res = await hrpc.api.profile.$post({ json: data });
  if (!res.ok) throw new Error("Failed to create profile");
  return await res.json();
};

export const updateProfile = async (data: ProfileUpdateSchema) => {
  const res = await hrpc.api.profile.$patch({ json: data });
  if (!res.ok) throw new Error("Failed to update profile");
  return await res.json();
};
