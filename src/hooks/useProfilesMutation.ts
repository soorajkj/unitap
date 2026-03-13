import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { getQueryClient } from "@/lib/queryClient";
import type { Profile } from "@/types/response";
import { createProfile, updateProfile } from "@/utils/quries/profile";
import type {
  ProfileCreateSchema,
  ProfileUpdateSchema,
} from "@/utils/validators/profile";

export const useProfileCreateMutation = () => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (data: ProfileCreateSchema) => createProfile(data),
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ["PROFILE"] });
      const pre = queryClient.getQueryData<Profile>(["PROFILE"]);

      queryClient.setQueryData<Profile>(["PROFILE"], (old) => {
        if (!old) return old;
        return { ...old, ...data };
      });

      return { pre };
    },
    onError: (_err, _newLink, context) => {
      if (context?.pre) {
        queryClient.setQueryData(["PROFILE"], context.pre);
      }
    },
    onSuccess: () => toast.success("Profile created successfully"),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["PROFILE"] });
    },
  });
};

export const useProfileUpdateMutation = () => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (data: ProfileUpdateSchema) => updateProfile(data),
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ["PROFILE"] });
      const pre = queryClient.getQueryData<Profile>(["PROFILE"]);

      queryClient.setQueryData<Profile>(["PROFILE"], (old) => {
        if (!old) return old;
        return { ...old, ...data };
      });

      return { pre };
    },
    onError: (_err, _newLink, context) => {
      if (context?.pre) {
        queryClient.setQueryData(["PROFILE"], context.pre);
      }
    },
    onSuccess: () => toast.success("Profile updated successfully"),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["PROFILE"] });
    },
  });
};
