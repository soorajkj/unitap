export default function Layout({ children }: LayoutProps<"/auth">) {
  return (
    <div className="h-dvh w-full overflow-hidden">
      <div className="grid size-full place-items-center">{children}</div>
    </div>
  );
}
