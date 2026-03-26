export default function Features() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-24 py-24">
          <div className="grid place-items-center">
            <div className="w-full max-w-2xl space-y-4 text-center">
              <p className="font-mono text-sm text-neutral-300 uppercase">
                <span className="text-neutral-400">[01]</span> Features
              </p>
              <h2 className="font-display text-4xl text-balance text-white sm:text-4xl lg:text-5xl">
                Everything You Need, Just One click Away
              </h2>
              <p className="text-base text-balance text-neutral-400">
                Unitap empowers you to go beyond just sharing links. From
                detailed analytics to advanced customization and seamless
                integrations, our platform gives you the tools to grow, engage,
                and understand your audience
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {FEATURES.map((feature, i) => (
              <div
                key={i.toString()}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-neutral-900/80 p-6 text-neutral-400 after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:inset-shadow-xs after:inset-shadow-white/10 focus-visible:z-1 focus-visible:outline focus-visible:outline-blue-800">
                  <h3 className="mb-2 font-medium text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    title: "Custom domains",
    description:
      "Use your own domain name to make your page more professional.",
  },
  {
    title: "Custom Themes",
    description:
      "Personalize your Unitap with beautiful themes, colors, and layouts that match your brand.",
  },
  {
    title: "Advanced Analytics",
    description:
      "See which links your audience taps the most with simple and powerful analytics.",
  },
  {
    title: "Lightning Fast Pages",
    description:
      "Your Unitap loads instantly so visitors never bounce before seeing your content.",
  },
  {
    title: "Mobile Optimized",
    description:
      "Designed for mobile first, ensuring your page looks perfect on every device.",
  },
  {
    title: "Easy Customization",
    description:
      "Update links, reorder items, and customize your page in seconds without any technical skills.",
  },
];
