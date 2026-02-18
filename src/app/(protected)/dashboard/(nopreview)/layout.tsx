import Header from "@/components/[dashboard]/Header";

export default function Layout({ children }: LayoutProps<"/dashboard">) {
  return (
    <div className="flex h-full flex-col divide-y divide-stone-200 overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  );
}
