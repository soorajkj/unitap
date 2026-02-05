"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const cardVariants = {
  active: {
    flex: 6,
  },
  inactive: {
    flex: 1,
  },
};

export function generateIDByWord(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-") // spaces & non-words → -
    .replace(/^-+|-+$/g, ""); // trim leading/trailing -
}

export const testimonials = [
  {
    name: "Jonathan Kvarfordt",
    position: "VP of GTM Strategy & Marketing",
    feedback:
      "Taptree made it ridiculously easy to organize all my links in one place. I stopped worrying about what to put in my bio and just focused on creating. It’s fast, clean, and does exactly what I need.",
  },
  {
    name: "Olly Fawcett",
    position: "Startup Founder",
    feedback:
      "I’ve tried a lot of link-in-bio tools, but Taptree feels the most polished. The customization is simple, the UI is calm, and it actually looks professional when I share it with clients.",
  },
  {
    name: "Chris Grimsey",
    position: "Indie developer",
    feedback:
      "Taptree helped me showcase my product, socials, and newsletter without sending people all over the place. Setup took minutes, and the experience feels premium for something this simple.",
  },
].map((t) => ({
  ...t,
  id: generateIDByWord(t.name),
}));

type Feedback = (typeof testimonials)[number];

export default function Testimonials() {
  const [active, setActive] = useState(testimonials[0].id);

  return (
    <section className="relative overflow-hidden bg-stone-100">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-stone-200 border-x py-24">
          <div className="flex flex-col gap-px bg-stone-200 py-px lg:h-96 lg:flex-row">
            {testimonials.map((t) => (
              <Testimonial
                key={t.id}
                t={t}
                active={active}
                setActive={setActive}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial({
  t,
  active,
  setActive,
}: {
  t: Feedback;
  active: string;
  setActive: (id: string) => void;
}) {
  return (
    <motion.div
      key={t.id}
      layout
      variants={cardVariants}
      animate={active === t.id ? "active" : "inactive"}
      transition={{ ease: "easeInOut" }}
      onClick={() => setActive(t.id)}
      className="cursor-pointer overflow-hidden bg-stone-50"
    >
      <div className="flex h-full flex-col items-center justify-center">
        {active === t.id ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full p-8"
          >
            <div className="flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-6">
              <div className="relative">
                <div className="relative grid size-24 place-content-center lg:size-44">
                  <Image fill src="/images/johnathan.avif" alt="" />
                </div>
              </div>
              <div className="flex-1">
                <div className="w-full max-w-xl">
                  <p className="mb-4 font-medium font-serif text-stone-950 text-xl">
                    “{t.feedback}”
                  </p>
                  <p className="text-sm text-stone-900 [&_strong]:font-medium">
                    <strong>{t.name}</strong>, {t.position}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="size-full bg-stone-100">
            <div className="flex h-12 items-center px-6 lg:size-full lg:justify-center lg:px-0">
              <p className="font-semibold text-2xl text-stone-950 uppercase opacity-30 lg:hidden">
                {t.name}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
