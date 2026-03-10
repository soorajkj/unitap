import { Button } from "@base-ui/react/button";
import { PlusSignIcon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Pricing() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-24 py-24">
          <div className="grid place-items-center">
            <div className="w-full max-w-xl space-y-4 text-center">
              <p className="font-mono text-neutral-300 text-sm uppercase">
                <span className="text-neutral-600">[02]</span> Pricing
              </p>
              <h2 className="text-balance font-display text-4xl text-white sm:text-4xl lg:text-5xl">
                Predictable pricing, design to scale
              </h2>
              <p className="text-balance text-base text-neutral-400">
                Simple, transparent pricing built to grow with you. Start free
                and upgrade when you’re ready to unlock more power.
              </p>
            </div>
          </div>
          <div className="relative col-span-full grid gap-4 md:grid-cols-3">
            {PLANS.map((plan, i) => {
              return (
                <div
                  key={i.toString()}
                  className="relative flex flex-col overflow-hidden rounded-2xl bg-neutral-900/80 p-6 text-neutral-400 after:pointer-events-none after:absolute after:inset-0 after:inset-shadow-white/10 after:inset-shadow-xs after:rounded-2xl focus-visible:z-1 focus-visible:outline focus-visible:outline-blue-800"
                >
                  <h2 className="font-medium text-base text-neutral-200">
                    {plan.plan}
                  </h2>
                  <h3 className="mb-4 font-bold text-4xl text-white">
                    {plan.price}
                    <span className="font-normal text-base text-neutral-400">
                      {" "}
                      per month
                    </span>
                  </h3>
                  <p className="mb-3 text-pretty text-neutral-200 text-sm">
                    {plan.description}
                  </p>
                  <div className="mb-4">{plan.button}</div>
                  <ul className="mb-5 flex-1 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-1.5 text-sm [&_svg]:size-3.5"
                      >
                        <span aria-hidden="true">
                          <span className="sr-only">Included</span>
                          <HugeiconsIcon icon={Tick02Icon} />
                        </span>
                        {feature}{" "}
                      </li>
                    ))}
                  </ul>
                  {plan.addons && (
                    <>
                      <div className="relative mb-2 w-full">
                        <span className="relative w-fit font-medium text-sm">
                          Optional <b>add-ons:</b>
                        </span>
                      </div>
                      <ul className="space-y-2.5 pb-7">
                        {plan.addons.map((addon) => (
                          <li
                            key={addon.name}
                            className="flex items-center gap-1.5 text-sm [&_svg]:size-3.5"
                          >
                            <span aria-hidden="true" className="relative">
                              <span className="sr-only">Add-on</span>
                              <HugeiconsIcon icon={PlusSignIcon} />
                            </span>
                            {addon.name}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export const PLANS = [
  {
    plan: "Free",
    description: "For individuals getting started with a simple  page.",
    price: "$0",
    billing: "forever",
    button: (
      <Button className="relative w-full cursor-pointer overflow-hidden whitespace-nowrap rounded-full border border-transparent bg-neutral-800 px-4 py-3 font-medium text-sm text-white leading-none transition after:pointer-events-none after:absolute after:inset-0 after:inset-shadow-white/10 after:inset-shadow-xs after:rounded-2xl focus:outline-none focus-visible:z-1 focus-visible:outline focus-visible:outline-blue-800 focus-visible:ring-offset-1">
        Get started
      </Button>
    ),

    features: [
      "1 Unitap page",
      "Up to 10 links",
      "Social icons",
      "Basic themes",
      "Basic analytics",
      "Unitap branding",
    ],
  },
  {
    plan: "Pro",
    description:
      "For creators and professionals who want more control and insights.",
    price: "$9",
    billing: "per month",
    button: (
      <Button className="relative w-full cursor-pointer overflow-hidden whitespace-nowrap rounded-full border border-transparent bg-lime-500 px-4 py-3 font-medium text-neutral-950 text-sm leading-none transition after:pointer-events-none after:absolute after:inset-0 after:inset-shadow-white/10 after:inset-shadow-xs after:rounded-2xl focus:outline-none focus-visible:z-1 focus-visible:outline focus-visible:outline-blue-800 focus-visible:ring-offset-1">
        Upgarde to pro
      </Button>
    ),
    highlight: true,
    features: [
      "Everything in Free, plus",
      "Unlimited links",
      "Advanced analytics",
      "Custom themes",
      "Remove Unitap branding",
      "Link scheduling",
      "Priority support",
    ],
  },
  {
    plan: "Business",
    description:
      "For teams, brands, and power users who need advanced capabilities.",
    price: "$19",
    billing: "per month",
    button: (
      <Button className="relative w-full cursor-pointer overflow-hidden whitespace-nowrap rounded-full border border-transparent bg-white px-4 py-3 font-medium text-neutral-950 text-sm leading-none transition after:pointer-events-none after:absolute after:inset-0 after:inset-shadow-white/10 after:inset-shadow-xs after:rounded-2xl focus:outline-none focus-visible:z-1 focus-visible:outline focus-visible:outline-blue-800 focus-visible:ring-offset-1">
        Get business
      </Button>
    ),
    features: [
      "Everything in Pro, plus",
      "Multiple Unitap pages",
      "Custom domain support",
      "Advanced analytics dashboard",
      "API access (coming soon)",
      "Integrations",
    ],
    addons: [
      {
        name: "Custom Design Packs",
        description: "Premium themes and layout styles",
      },
    ],
  },
];
