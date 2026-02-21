import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import CreateLink from "@/components/[dashboard]/CreateLink";
import LinksViews from "@/components/[dashboard]/LinksViews";
import ProfileEditor from "@/components/[dashboard]/ProfileEditor";
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
    <div className="mx-auto flex w-full max-w-lg flex-col gap-8 py-12">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProfileEditor />
        <CreateLink />
        <LinksViews />
      </HydrationBoundary>
    </div>
  );
}
