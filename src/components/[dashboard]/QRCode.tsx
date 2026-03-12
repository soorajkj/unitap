/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: "" */

"use client";

import { Button } from "@base-ui/react/button";
import { ArrowDown03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { toPng, toSvg } from "html-to-image";
import { useRef } from "react";
import { renderSVG } from "uqr";

export default function QRCode() {
  const ref = useRef(null);
  const svg = renderSVG("https://unitapin.vercel.app/jakijemyre");

  const handleDownloadImage = async (type: "png" | "svg" = "png") => {
    if (!ref.current) return;
    const fn = { png: toPng, svg: toSvg }[type];
    const data = await fn(ref.current);
    const a = document.createElement("a");
    a.href = data;
    a.download = `qr.${type}`;
    a.click();
  };

  return (
    <div className="grid w-full gap-4">
      <div className="grid gap-4">
        <p className="text-neutral-600 text-sm">
          Here is your unique Unitree QR code that will direct people to your
          Linktree when scanned.
        </p>
        <div className="grid place-content-center">
          <div
            className="size-32"
            ref={ref}
            dangerouslySetInnerHTML={{ __html: svg }}
          ></div>
        </div>
      </div>
      <div className="grid gap-px">
        <Button
          onClick={() => handleDownloadImage("png")}
          className="relative inline-flex shrink cursor-pointer items-center gap-3 whitespace-nowrap rounded-lg border border-transparent bg-white p-4 text-neutral-950 text-sm transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0"
        >
          <div className="flex grow flex-col items-start">
            <p className="font-medium">Download PNG</p>
            <span className="text-neutral-600">High quality image</span>
          </div>
          <div className="flex items-center gap-1">
            <HugeiconsIcon icon={ArrowDown03Icon} />
            <span>.PNG</span>
          </div>
        </Button>
        <Button
          onClick={() => handleDownloadImage("svg")}
          className="relative inline-flex shrink cursor-pointer items-center gap-3 whitespace-nowrap rounded-lg border border-transparent bg-white p-4 text-neutral-950 text-sm transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0"
        >
          <div className="flex grow flex-col items-start">
            <p className="font-medium">Download SVG</p>
            <span className="text-neutral-600">Scalable vector graphic</span>
          </div>
          <div className="flex items-center gap-1">
            <HugeiconsIcon icon={ArrowDown03Icon} />
            <span>.SVG</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
