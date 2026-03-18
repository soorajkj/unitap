import { Button } from "@base-ui/react";
import { Call02Icon, Email, Globe02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import UtilsGroup from "./UtilsGroup";

export default function PermaLink() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="mx-auto size-20 overflow-hidden rounded-full border border-stone-900">
        <Image
          src="https://framerusercontent.com/images/KHBalqjT3whOnFoXBqOacDZLOpg.png"
          width={80}
          height={80}
          alt="Profile Image"
        />
      </div>
      <h2 className="text-center text-2xl font-medium text-white">
        Robert Scott
      </h2>
      <div className="text-center text-stone-400">
        Est. 1989 · Manchester, UK · she/her
      </div>
      <p className="text-center text-stone-400">
        Sarah is a fashion-focused content creator, brand ambassador and
        influencer based in NYC.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-1">
        <Button className="relative inline-flex h-8 shrink cursor-pointer items-center justify-center gap-1 rounded-lg border border-transparent px-2 py-2 text-base leading-none whitespace-nowrap text-white transition hover:bg-stone-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-stone-400">
          <HugeiconsIcon icon={Call02Icon} strokeWidth={2} />
          +1 234 567 8901
        </Button>{" "}
        <Button className="relative inline-flex h-8 shrink cursor-pointer items-center justify-center gap-1 rounded-lg border border-transparent px-2 py-2 text-base leading-none whitespace-nowrap text-white transition hover:bg-stone-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-stone-400">
          <HugeiconsIcon icon={Globe02Icon} strokeWidth={2} />
          sarahgreen.com
        </Button>
        <Button className="relative inline-flex h-8 shrink cursor-pointer items-center justify-center gap-1 rounded-lg border border-transparent px-2 py-2 text-base leading-none whitespace-nowrap text-white transition hover:bg-stone-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-stone-400">
          <HugeiconsIcon icon={Email} strokeWidth={2} />
          sarahgreen@gmail.com
        </Button>{" "}
      </div>
      <div>
        <UtilsGroup />
      </div>
    </div>
  );
}
