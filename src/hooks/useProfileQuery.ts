import { useSuspenseQuery } from "@tanstack/react-query";
import { getProfile } from "@/utils/quries/profile";

export const useProfileQuery = () => {
  return useSuspenseQuery({
    queryKey: ["PROFILE"],
    queryFn: () => getProfile(),
  });
};
