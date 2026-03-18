export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-lime-400 px-3 py-2">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-center">
          <p className="text-xs text-neutral-950 lg:text-sm">
            <span className="hidden lg:block">
              We&apos;re building Unitap in public. Some features may change as
              we improve the experience. Thanks for being early!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
