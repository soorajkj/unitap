import Banner from "@/components/[site]/Banner";
import Footer from "@/components/[site]/Footer";
import Header from "@/components/[site]/Header";
import LenisProvider from "@/components/LenisProvider";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <LenisProvider>
      <div className="relative h-full min-h-screen bg-neutral-950">
        <Banner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LenisProvider>
  );
}
