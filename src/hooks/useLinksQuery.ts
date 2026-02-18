import { useSuspenseQuery } from "@tanstack/react-query";
import { getLinks, getLinksAcrchives } from "@/utils/quries/links";

export const useLinksQuery = () => {
  return useSuspenseQuery({
    queryKey: ["LINKS"],
    queryFn: getLinks,
  });
};

export const useLinksArchivesQuery = () => {
  return useSuspenseQuery({
    queryKey: ["LINKS_ARCHIVES"],
    queryFn: getLinksAcrchives,
  });
};
