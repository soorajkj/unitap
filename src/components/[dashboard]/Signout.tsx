"use client";

import { Avatar } from "@base-ui/react/avatar";
import { Button } from "@base-ui/react/button";
import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import DropdownMenu from "@/components/core/dropdown-menu";
import { authClient } from "@/lib/authClient";
import { getQueryClient } from "@/lib/queryClient";

export default function Signout() {
  const router = useRouter();
  const queryClient = getQueryClient();
  const { data: session } = authClient.useSession();

  const handleSignout = async () => {
    await authClient.signOut();
    queryClient.clear();
    router.push("/auth/signin");
  };

  return (
    <DropdownMenu.DropdownMenuRoot>
      <DropdownMenu.DropdownMenuTrigger
        render={
          <Button className="rounded-full">
            <Avatar.Root>
              <Avatar.Image
                src={session?.user.image ?? undefined}
                alt={session?.user.name}
              />
              <Avatar.Fallback>
                {session?.user.email.slice(0, 2).toUpperCase()}
              </Avatar.Fallback>
            </Avatar.Root>
          </Button>
        }
      />
      <DropdownMenu.DropdownMenuContent align="end">
        <DropdownMenu.DropdownMenuGroup>
          <DropdownMenu.DropdownMenuItem>
            <BadgeCheckIcon />
            Account
          </DropdownMenu.DropdownMenuItem>
          <DropdownMenu.DropdownMenuItem>
            <CreditCardIcon />
            Billing
          </DropdownMenu.DropdownMenuItem>
          <DropdownMenu.DropdownMenuItem>
            <BellIcon />
            Notifications
          </DropdownMenu.DropdownMenuItem>
        </DropdownMenu.DropdownMenuGroup>
        <DropdownMenu.DropdownMenuSeparator />
        <DropdownMenu.DropdownMenuItem onClick={handleSignout}>
          <LogOutIcon />
          Sign Out
        </DropdownMenu.DropdownMenuItem>
      </DropdownMenu.DropdownMenuContent>
    </DropdownMenu.DropdownMenuRoot>
  );
}
