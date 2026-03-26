export default function Layout({ children }: LayoutProps<"/auth">) {
  return (
    <div className="grid min-h-screen overflow-hidden bg-white dark:bg-neutral-950">
      <main className="flex flex-1 justify-center px-4 py-12 md:items-center md:px-8">
        {children}
      </main>
    </div>
  );
}
