import type { Public } from "@/types/response";

export default function Links({ data }: { data: Public }) {
  if (!data?.links.length) return null;

  return (
    <ul>
      {data.links.map((link) => (
        <li key={link.id}>
          <p>{link.title}</p>
        </li>
      ))}
    </ul>
  );
}
