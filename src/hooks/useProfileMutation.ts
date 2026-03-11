import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import type { z } from "zod";
import { getQueryClient } from "@/lib/queryClient";
import type { Profile } from "@/types/response";
import { updateProfile } from "@/utils/quries/profile";
import type { profileUpdateSchema } from "@/utils/validators/profile";

export const useProfileUpdateMutation = () => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (data: z.infer<typeof profileUpdateSchema>) =>
      updateProfile(data),
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
