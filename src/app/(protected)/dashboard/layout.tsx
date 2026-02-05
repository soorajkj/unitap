import Header from "@/components/[dashboard]/Header";
import Sidebar from "@/components/[dashboard]/Sidebar";

export default function Layout({ children }: LayoutProps<"/dashboard">) {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex size-full bg-stone-50">
        <Sidebar />
        <div className="flex flex-1 flex-col p-2 pt-0">
          <Header />
          <main className="flex-1 overflow-y-auto rounded-2xl border border-stone-200 bg-stone-50 p-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
