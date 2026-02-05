import Banner from "@/components/[site]/Banner";
import Footer from "@/components/[site]/Footer";
import Header from "@/components/[site]/Header";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-stone-50 text-stone-600">
      <Banner />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
