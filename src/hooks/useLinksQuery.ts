import { useSuspenseQuery } from "@tanstack/react-query";
import { getLinks } from "@/utils/quries/links";

export const useLinksQuery = () => {
  return useSuspenseQuery({
    queryKey: ["LINKS"],
    queryFn: getLinks,
  });
};
