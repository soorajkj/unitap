import { useSuspenseQuery } from "@tanstack/react-query";
import { getHandles } from "@/utils/quries/handles";

export const useHandlesQuery = () => {
  return useSuspenseQuery({
    queryKey: ["HANDLES"],
    queryFn: getHandles,
  });
};
