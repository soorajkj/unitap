"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/core/button";
import { authClient } from "@/lib/authClient";
import { getQueryClient } from "@/lib/queryClient";

export default function Signout() {
  const router = useRouter();
  const queryClient = getQueryClient();

  const handleSignout = async () => {
    await authClient.signOut();
    queryClient.clear();
    router.push("/auth/signin");
  };

  return <Button onClick={handleSignout}>Signout</Button>;
}
