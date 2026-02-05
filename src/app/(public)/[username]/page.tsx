import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Profile from "@/components/[public]/Profile";
import { getQueryClient } from "@/lib/queryClient";
import { getPublicProfile } from "@/utils/quries/publicProfile";

// generate metadata for SEO

export default async function Page({ params }: PageProps<"/[username]">) {
  const { username } = await params;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["PROFILE", username],
    queryFn: () => getPublicProfile(username),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Profile username={username} />
    </HydrationBoundary>
  );
}
