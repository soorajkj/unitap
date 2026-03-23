import Sidebar from "@/components/[dashboard]/Sidebar";

export default function Layout({ children }: LayoutProps<"/dashboard">) {
  return (
    <div className="h-screen w-screen overflow-hidden bg-neutral-100">
      <div className="flex size-full overflow-hidden bg-neutral-100/20">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
