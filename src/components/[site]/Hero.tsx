export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-24 lg:py-48">
          <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
            <h1 className="w-full max-w-2xl font-display font-medium text-5xl text-white md:text-6xl lg:text-7xl">
              Bring all your online presence into one powerful destination.
            </h1>
            <p className="w-full max-w-xl text-base text-neutral-400">
              Turn your online presence into one link that tells your story.
              With a single tap, anyone can explore your social media, products
              and content. No clutter, no hassle, just a smooth, unified
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
