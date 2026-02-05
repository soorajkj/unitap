import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import CreateHandle from "@/components/[dashboard]/CreateHandle";
import CreateLink from "@/components/[dashboard]/CreateLink";
import Handles from "@/components/[dashboard]/Handles";
import Links from "@/components/[dashboard]/Links";
import Signout from "@/components/[dashboard]/Signout";
import { getQueryClient } from "@/lib/queryClient";
import { getHandles } from "@/utils/quries/handles";
import { getLinks } from "@/utils/quries/links";
import { getPlatforms } from "@/utils/quries/platforms";

export default async function Page() {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["PLATFORMS"],
      queryFn: getPlatforms,
    }),
    queryClient.prefetchQuery({ queryKey: ["HANDLES"], queryFn: getHandles }),
    queryClient.prefetchQuery({
      queryKey: ["LINKS"],
      queryFn: getLinks,
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Handles />
      <Links />
      <CreateHandle />
      <CreateLink />
      <Signout />
    </HydrationBoundary>
  );
}
