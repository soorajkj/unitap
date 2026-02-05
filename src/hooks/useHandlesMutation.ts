import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import type z from "zod";
import { getQueryClient } from "@/lib/queryClient";
import type { Handle } from "@/types/response";
import { createHandle, reorderHandles } from "@/utils/quries/handles";
import type {
  createHandleSchema,
  reorderHandlesSchema,
} from "@/utils/validators/handles";

export const useHandlesCreateMutation = () => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (data: z.infer<typeof createHandleSchema>) =>
      createHandle(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["HANDLES"] });
    },
  });
};

type ReorderHandlesSchema = z.infer<typeof reorderHandlesSchema>;

export const useReorderHandleMutation = () => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (platformIds: ReorderHandlesSchema) =>
      reorderHandles(platformIds),

    onMutate: async (payload) => {
      await queryClient.cancelQueries({ queryKey: ["HANDLES"] });
      const pre = queryClient.getQueryData<Handle[]>(["HANDLES"]);
      queryClient.setQueryData<Handle[]>(["HANDLES"], (old) => {
        if (!old) return old;
        const map = new Map(old.map((h) => [h.platformId, h]));
        const reordered: Handle[] = [];
        for (const [index, platformId] of payload.platformIds.entries()) {
          const handle = map.get(platformId);
          if (!handle) return old;

          reordered.push({
            ...handle,
            order: index,
          });
        }

        return reordered;
      });

      return { pre };
    },
    onError: (_err, _vars, context) => {
      if (!context?.pre) return;
      queryClient.setQueryData(["HANDLES"], context.pre);
      toast("Failed to reorder handles. Please try again.");
    },
    onSuccess: () => toast("Handles reordered successfully."),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["HANDLES"] }),
  });
};
