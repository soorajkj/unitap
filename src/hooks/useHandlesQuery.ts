import { useSuspenseQuery } from "@tanstack/react-query";
import { getHandle, getHandles } from "@/utils/quries/handles";

export const useHandlesQuery = () => {
  return useSuspenseQuery({
    queryKey: ["HANDLES"],
    queryFn: getHandles,
  });
};

export const useHandleQuery = (id: string) => {
  return useSuspenseQuery({
    queryKey: ["HANDLE", id],
    queryFn: () => getHandle(id),
  });
};
