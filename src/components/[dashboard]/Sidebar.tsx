import Signout from "./Signout";
import UserActions from "./UserActions";

export default function Sidebar() {
  return (
    <aside className="h-full w-60 bg-white">
      <div className="flex h-full flex-col items-center justify-between py-4">
        <UserActions />
        <Signout />
      </div>
    </aside>
  );
}
