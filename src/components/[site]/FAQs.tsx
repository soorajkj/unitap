import { Accordion } from "@base-ui/react/accordion";
import { PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function FAQs() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-24 py-24">
          <div className="grid place-items-center">
            <div className="w-full max-w-xl space-y-4 text-center">
              <p className="font-mono text-neutral-300 text-sm uppercase">
                <span className="text-neutral-600">[04]</span> FAQ's
              </p>
              <h2 className="text-balance font-display text-4xl text-white sm:text-4xl lg:text-5xl">
                Still Unsure? Let’s Clear It Up
              </h2>
              <p className="text-balance text-base text-neutral-400">
                Get clear answers about how Unitap works, pricing,
                customization, and everything you need to launch your page with
                confidence.
              </p>
            </div>
          </div>
          <Accordion.Root
            multiple={true}
            className="mx-auto flex w-full max-w-md flex-col justify-center space-y-2"
          >
            {FAQS.map((faq, i) => (
              <Accordion.Item
                key={i.toString()}
                className="relative overflow-hidden rounded-xl bg-neutral-900/80 after:pointer-events-none after:absolute after:inset-0 after:inset-shadow-white/10 after:inset-shadow-xs after:rounded-xl focus-visible:z-1 focus-visible:outline focus-visible:outline-blue-800"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full cursor-pointer items-baseline justify-between gap-4 p-4 text-left text-white">
                    {faq.question}
                    <div className="inline-flex size-4 shrink items-center justify-center">
                      <HugeiconsIcon
                        icon={PlusSignIcon}
                        className="size-3.5 shrink-0 transition-all ease-out group-data-panel-open:rotate-45 group-data-panel-open:scale-110"
                      />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="h-(--accordion-panel-height) select-none overflow-hidden text-base text-neutral-400 transition-all ease-out data-ending-style:h-0 data-starting-style:h-0">
                  <div className="relative p-4 pt-0">{faq.answer}</div>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}

export const FAQS = [
  {
    question: "What is Unitap?",
    answer:
      "Unitap is a minimal link-in-bio tool that lets you share all your important links through one clean, fast-loading page.",
  },
  {
    question: "How is Unitap different from other link tools?",
    answer:
      "Unitap focuses on speed and simplicity. No cluttered widgets, no heavy templates — just a clean page designed to load instantly.",
  },
  {
    question: "Can I customize my Unitap page?",
    answer:
      "Yes. You can choose themes, add or reorder links, and personalize your username to match your brand.",
  },
  {
    question: "Does Unitap provide analytics?",
    answer:
      "Yes. You can track basic link clicks to understand which links your audience engages with the most.",
  },
  {
    question: "Is Unitap free to use?",
    answer:
      "Yes. Unitap offers a free plan with essential features. A Pro plan with advanced options will be available soon.",
  },
  {
    question: "Do I need technical knowledge to use Unitap?",
    answer:
      "No. You can create and manage your page in minutes without writing any code.",
  },
];
