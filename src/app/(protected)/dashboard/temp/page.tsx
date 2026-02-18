import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { CompetitorsTable } from "@/components/[dashboard]/CompetitorsTable";
import { DomainsChart } from "@/components/[dashboard]/DomainsChart";
import { DomainsTable } from "@/components/[dashboard]/DomainsTable";
import { VisibilityChart } from "@/components/[dashboard]/VisiblityChart";
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
      <div className="grid gap-1 bg-stone-50">
        <div className="flex items-center gap-2 p-4 py-2 text-gray-500 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-cloud h-4 w-4"
            aria-hidden="true"
          >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
          <span className="font-medium text-gray-600">Overview</span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span>
            Attio's Visibility trending up by{" "}
            <span className="font-semibold text-gray-900">5.2%</span> this month
          </span>
          <div className="ml-auto flex items-center gap-4 text-xs">
            <span>
              Visibility:{" "}
              <span className="font-semibold text-gray-900">3/14</span>{" "}
              <span className="text-red-500">▼</span>
            </span>
            <span>
              Sentiment:{" "}
              <span className="font-semibold text-gray-900">2/14</span>{" "}
              <span className="text-green-500">▲</span>
            </span>
            <span>
              Position:{" "}
              <span className="font-semibold text-gray-900">5/14</span>{" "}
              <span className="text-green-500">▲</span>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200">
          <div className="h-full lg:col-span-7">
            <VisibilityChart />
          </div>
          <div className="h-full lg:col-span-5">
            <CompetitorsTable />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200">
          <div className="h-full lg:col-span-7">
            <DomainsTable />
          </div>
          <div className="h-full lg:col-span-5">
            <DomainsChart />
          </div>
        </div>
      </div>
    </HydrationBoundary>
  );
}
