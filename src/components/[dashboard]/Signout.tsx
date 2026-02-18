"use client";

import { Avatar } from "@base-ui/react/avatar";
import { Button } from "@base-ui/react/button";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/authClient";
import { getQueryClient } from "@/lib/queryClient";

export default function Signout() {
  const router = useRouter();
  const queryClient = getQueryClient();
  const { data: session, isPending } = authClient.useSession();

  const handleSignout = async () => {
    await authClient.signOut();
    queryClient.clear();
    router.push("/auth/signin");
  };

  if (isPending) return null;

  return (
    <Avatar.Root
      render={
        <Button className="cursor-pointer">
          <Avatar.Image src="" className="size-full" />
          <Avatar.Fallback className="inline-flex size-full items-center justify-center rounded-full bg-violet-600 font-medium text-white text-xs">
            {session?.user.email.slice(0, 2).toUpperCase()}
          </Avatar.Fallback>
        </Button>
      }
      className="flex aspect-square size-10"
      onClick={handleSignout}
    ></Avatar.Root>
  );
}
