import Signout from "./Signout";

export default function Sidebar() {
  return (
    <aside className="h-full w-16 bg-white">
      <div className="flex h-full flex-col items-center justify-end py-4">
        <Signout />
      </div>
    </aside>
  );
}
