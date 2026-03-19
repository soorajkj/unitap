export default function Layout({ children }: LayoutProps<"/auth">) {
  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden bg-white lg:grid-cols-2 dark:bg-neutral-950">
      <div className="relative hidden items-center justify-between overflow-hidden bg-neutral-50 lg:flex dark:bg-neutral-900"></div>
      <div className="flex flex-col bg-white dark:bg-neutral-950">
        <div className="flex flex-1 justify-center px-4 py-12 md:items-center md:px-8">
          {children}
        </div>
      </div>
    </div>
  );
}
