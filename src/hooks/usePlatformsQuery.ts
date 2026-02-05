import { useSuspenseQuery } from "@tanstack/react-query";
import { getPlatforms } from "@/utils/quries/platforms";

export const usePlatformsQuery = () => {
  return useSuspenseQuery({
    queryKey: ["PLATFORMS"],
    queryFn: getPlatforms,
  });
};
