export default function Chat() {
  return (
    <div className="hidden flex-col gap-2">
      <div className="relative w-fit max-w-72 overflow-hidden rounded-xl rounded-bl-none bg-stone-900 px-4 py-2.5 text-sm text-white after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:inset-shadow-2xs after:inset-shadow-white/5">
        Hey! I&apos;m Alexa, a brand designer based in Manchester. How can I
        help?
      </div>
      <div className="relative w-fit max-w-72 self-end overflow-hidden rounded-xl rounded-br-none bg-stone-700/50 px-4 py-2.5 text-right text-sm text-white after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:inset-shadow-2xs after:inset-shadow-white/5">
        Can I see your work?
      </div>
      <div className="relative w-fit max-w-72 overflow-hidden rounded-xl rounded-bl-none bg-stone-900 px-4 py-2.5 text-sm text-white after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:inset-shadow-2xs after:inset-shadow-white/5">
        Sure! I mostly work on things like visual identities and other marketing
        collateral
      </div>
      <div className="relative w-fit max-w-72 overflow-hidden rounded-xl rounded-bl-none bg-stone-900 px-4 py-2.5 text-sm text-white after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:inset-shadow-2xs after:inset-shadow-white/5">
        Here&apos;s some recent work
      </div>
      <div className="relative w-fit max-w-72 self-end overflow-hidden rounded-xl rounded-br-none bg-stone-700/50 px-4 py-2.5 text-right text-sm text-white after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:inset-shadow-2xs after:inset-shadow-white/5">
        Sure! I&apos;ve been a brand designer for around 8 years and have been
        lucky enough to do identity work and brand design for clients ranging
        from early stage startups to publicly listed enterprises.
      </div>
    </div>
  );
}
