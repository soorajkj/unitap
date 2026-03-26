"use client";

import Image from "next/image";

type Testimonial = (typeof TESTIMONIALS)[number];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-24 py-24">
          <div className="grid place-items-center">
            <div className="w-full max-w-xl space-y-4 text-center">
              <p className="font-mono text-sm text-neutral-300 uppercase">
                <span className="text-neutral-400">[03]</span> Testimonials
              </p>
              <h2 className="font-display text-4xl text-balance text-white sm:text-4xl lg:text-5xl">
                Hear What People Are Saying
              </h2>
              <p className="text-base text-balance text-neutral-400">
                See how Unitap helps creators, developers, and brands share
                everything they do with one simple Tap. Our users love how easy
                it is to showcase their links and track engagement.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <Testimonial key={i.toString()} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative grid w-full overflow-hidden rounded-xl bg-neutral-900/80 p-6 after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:inset-shadow-xs after:inset-shadow-white/10 focus-visible:z-1 focus-visible:outline focus-visible:outline-blue-800">
      <div className="grid gap-4">
        <p className="text-sm font-medium text-white">{testimonial.feedback}</p>
        <div className="flex items-center gap-2">
          <div className="aspect-square size-9 overflow-hidden rounded-lg border-2 border-neutral-800/60 object-cover outline outline-neutral-800">
            <Image
              width={36}
              height={36}
              alt=""
              src={
                "https://framerusercontent.com/images/cqChKLWqP0ows29uNwTw42aUI.jpg?scale-down-to=512&width=1024&height=1024"
              }
              className=""
            />
          </div>
          <div>
            <p className="text-sm text-neutral-400 [&_strong]:font-medium [&_strong]:text-white">
              <strong className="block">{testimonial.name}</strong>
              {testimonial.position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const TESTIMONIALS = [
  {
    name: "Jonathan Kvarfordt",
    position: "VP of GTM Strategy & Marketing",
    feedback:
      "Unitap made it ridiculously easy to organize all my links in one place. I stopped worrying about what to put in my bio and just focused on creating. It’s fast, clean, and does exactly what I need.",
  },
  {
    name: "Olly Fawcett",
    position: "Startup Founder",
    feedback:
      "I’ve tried a lot of link-in-bio tools, but Unitap feels the most polished. The customization is simple, the UI is calm, and it actually looks professional when I share it with clients.",
  },
  {
    name: "Chris Grimsey",
    position: "Indie developer",
    feedback:
      "Unitap helped me showcase my product, socials, and newsletter without sending people all over the place. Setup took minutes, and the experience feels premium for something this simple.",
  },
].map((t) => ({
  ...t,
}));
