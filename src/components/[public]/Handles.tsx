import Link from "next/link";
import type { Public } from "@/types/response";

export default function Handles({ data }: { data: Public }) {
  if (!data?.handles.length) return null;

  return (
    <ul className="flex flex-wrap items-center justify-center gap-4 overflow-x-auto">
      {data?.handles.map((handle) => (
        <li key={handle.id} className="relative m-2 aspect-square size-14">
          <Link
            href="/"
            className="outline- inline-flex size-full shrink items-center justify-center rounded-full bg-neutral-900/40 outline outline-neutral-800 outline-offset-4"
          >
            <p>{handle.platform.name.charAt(0)}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
