export default function Watermark() {
  return (
    <div className="mt-auto flex items-center justify-center gap-1 pt-16">
      <p className="text-sm text-neutral-400">
        © {new Date().getFullYear()} Unitap by @sooraj
      </p>
    </div>
  );
}
