import { Button } from "@base-ui/react";
import { Call02Icon, Email, Globe02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import UtilsGroup from "./UtilsGroup";
import { Public } from "@/types/response";

export default function PermaLink({ data }: { data: Public }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="mx-auto size-20 overflow-hidden rounded-full border border-neutral-900">
        <Image
          src="https://framerusercontent.com/images/KHBalqjT3whOnFoXBqOacDZLOpg.png"
          width={80}
          height={80}
          alt="Profile Image"
        />
      </div>
      <h2 className="text-center text-2xl font-medium text-white">
        {data?.title}
      </h2>
      <div className="text-center text-neutral-400">
        Est. 1989 · Manchester, UK · he/him
      </div>
      <p className="text-center text-neutral-400">{data?.bio}</p>
      <div className="flex flex-wrap items-center justify-center gap-1">
        {data?.phone && (
          <Button className="relative inline-flex h-8 shrink cursor-pointer items-center justify-center gap-1 rounded-lg border border-transparent px-2 py-2 text-base leading-none whitespace-nowrap text-white transition hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-neutral-400">
            <HugeiconsIcon icon={Call02Icon} strokeWidth={2} />
            {data?.phone}
          </Button>
        )}
        {data?.website && (
          <Button className="relative inline-flex h-8 shrink cursor-pointer items-center justify-center gap-1 rounded-lg border border-transparent px-2 py-2 text-base leading-none whitespace-nowrap text-white transition hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-neutral-400">
            <HugeiconsIcon icon={Globe02Icon} strokeWidth={2} />
            {data?.website}
          </Button>
        )}
        {data?.email && (
          <Button className="relative inline-flex h-8 shrink cursor-pointer items-center justify-center gap-1 rounded-lg border border-transparent px-2 py-2 text-base leading-none whitespace-nowrap text-white transition hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-neutral-400">
            <HugeiconsIcon icon={Email} strokeWidth={2} />
            {data?.email}
          </Button>
        )}
      </div>
      <UtilsGroup data={data} />
    </div>
  );
}
