import { useSuspenseQuery } from "@tanstack/react-query";
import { getPublicProfile } from "@/utils/quries/publicProfile";

export const usePublicProfileQuery = (username: string) => {
  return useSuspenseQuery({
    queryKey: ["PROFILE", username],
    queryFn: () => getPublicProfile(username),
  });
};
