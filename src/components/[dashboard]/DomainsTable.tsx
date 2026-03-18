"use client";

import { Button } from "@base-ui/react/button";
import Image from "next/image";
import { cn } from "tailwind-variants";

const domains = [
  {
    id: 1,
    domain: "reddit.com",
    type: "UGC",
    typeColor: "bg-blue-100 text-blue-700",
    used: "32%",
    citations: "41%",
    icon: "https://www.google.com/s2/favicons?domain=reddit.com&sz=128",
  },
  {
    id: 2,
    domain: "techradar.com",
    type: "Editorial",
    typeColor: "bg-violet-100 text-violet-700",
    used: "43%",
    citations: "46%",
    icon: "https://www.google.com/s2/favicons?domain=techradar.com&sz=128",
  },
  {
    id: 3,
    domain: "wikipedia.org",
    type: "Reference",
    typeColor: "bg-violet-100 text-violet-700",
    used: "31%",
    citations: "40%",
    icon: "https://www.google.com/s2/favicons?domain=wikipedia.org&sz=128",
  },
  {
    id: 4,
    domain: "youtube.com",
    type: "UGC",
    typeColor: "bg-blue-100 text-blue-700",
    used: "39%",
    citations: "34%",
    icon: "https://www.google.com/s2/favicons?domain=youtube.com&sz=128",
  },
  {
    id: 5,
    domain: "google.com",
    type: "Corporate",
    typeColor: "bg-pink-100 text-pink-700",
    used: "39%",
    citations: "34%",
    icon: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  },
];

export function DomainsTable() {
  return (
    <div className="flex h-full flex-col bg-white p-6">
      <div className="mb-6 flex items-center gap-4 border-b border-gray-100 pb-1 text-sm font-medium">
        <Button className="border-b-2 border-gray-900 px-1 pb-3 text-gray-900">
          Domains
        </Button>
        <Button className="px-1 pb-3 text-gray-400 transition-colors hover:text-gray-600">
          URLs
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-stone-100">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs font-medium text-gray-400 [&_th]:border-r [&_th]:border-stone-100">
              <th className="w-8 p-2 font-normal">#</th>
              <th className="p-2 font-normal">Domain</th>
              <th className="p-2 font-normal">Type</th>
              <th className="p-2 font-normal">Used</th>
              <th className="p-2 font-normal">Avg. Citations</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {domains.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-50 transition-colors last:border-0 hover:bg-gray-50/50 [&_td]:border-r [&_td]:border-stone-100"
              >
                <td className="p-2 font-mono text-xs text-gray-400">
                  {item.id}
                </td>
                <td className="p-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.icon}
                      alt={item.domain}
                      width={20}
                      height={20}
                      className="h-5 w-5 rounded-full"
                    />
                    <span className="font-medium text-gray-900">
                      {item.domain}
                    </span>
                  </div>
                </td>
                <td className="p-2">
                  <span
                    className={cn(
                      "rounded px-2 py-0.5 text-[11px] font-semibold tracking-wide uppercase",
                      item.typeColor,
                    )}
                  >
                    {item.type}
                  </span>
                </td>
                <td className="p-2 font-medium text-gray-700">{item.used}</td>
                <td className="p-2 font-medium text-gray-700">
                  {item.citations}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
