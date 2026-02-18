import Sidebar from "@/components/[dashboard]/Sidebar";

export default function Layout({ children }: LayoutProps<"/dashboard">) {
  return (
    <div className="h-screen w-screen overflow-hidden bg-stone-100">
      <div className="flex size-full divide-x divide-stone-200 overflow-hidden bg-stone-100/20">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
