import LenisProvider from "@/components/LenisProvider";

export default function Layout({ children }: LayoutProps<"/[username]">) {
  return (
    <LenisProvider options={{ lerp: 0.1 }}>
      <div className="grid min-h-screen w-full place-items-center overflow-y-auto bg-stone-950 px-6 py-12">
        {children}
      </div>
    </LenisProvider>
  );
}
