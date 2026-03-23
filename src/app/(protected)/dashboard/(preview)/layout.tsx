import Header from "@/components/[dashboard]/Header";
import Previewer from "@/components/[dashboard]/Previewer";

export default function Layout({ children }: LayoutProps<"/dashboard">) {
  return (
    <div className="flex h-full flex-1 divide-x divide-stone-200 overflow-hidden">
      <div className="scrollbar-none flex flex-1 flex-col divide-y divide-stone-200 overflow-y-auto">
        <Header />
        <main className="flex-1 p-6 md:p-12">{children}</main>
      </div>
      <div className="scrollbar-none hidden w-full max-w-xl overflow-y-auto xl:block">
        <Previewer />
      </div>
    </div>
  );
}
