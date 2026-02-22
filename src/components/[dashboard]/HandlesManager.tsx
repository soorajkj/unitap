import CreateHandle from "@/components/[dashboard]/CreateHandle";
import HandlesDisplay from "@/components/[dashboard]/HandlesDisplay";

export default function HandlesManager() {
  return (
    <div className="flex items-center gap-2">
      <HandlesDisplay />
      <CreateHandle />
    </div>
  );
}
