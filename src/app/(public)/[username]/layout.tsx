export default function Layout({ children }: LayoutProps<"/[username]">) {
  return (
    <div className="grid h-screen w-full place-items-center overflow-y-auto bg-stone-950 px-6 py-12">
      {children}
    </div>
  );
}
