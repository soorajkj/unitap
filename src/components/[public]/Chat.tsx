export default function Chat() {
  return (
    <div className="hidden flex-col gap-2">
      <div className="relative w-fit max-w-72 overflow-hidden rounded-xl rounded-bl-none bg-stone-900 px-4 py-2.5 text-sm text-white after:pointer-events-none after:absolute after:inset-0 after:inset-shadow-2xs after:inset-shadow-white/5 after:rounded-xl">
        Hey! I'm Alexa, a brand designer based in Manchester. How can I help?
      </div>
      <div className="relative w-fit max-w-72 self-end overflow-hidden rounded-xl rounded-br-none bg-stone-700/50 px-4 py-2.5 text-right text-sm text-white after:pointer-events-none after:absolute after:inset-0 after:inset-shadow-2xs after:inset-shadow-white/5 after:rounded-xl">
        Can I see your work?
      </div>
      <div className="relative w-fit max-w-72 overflow-hidden rounded-xl rounded-bl-none bg-stone-900 px-4 py-2.5 text-sm text-white after:pointer-events-none after:absolute after:inset-0 after:inset-shadow-2xs after:inset-shadow-white/5 after:rounded-xl">
        Sure! I mostly work on things like visual identities and other marketing
        collateral
      </div>
      <div className="relative w-fit max-w-72 overflow-hidden rounded-xl rounded-bl-none bg-stone-900 px-4 py-2.5 text-sm text-white after:pointer-events-none after:absolute after:inset-0 after:inset-shadow-2xs after:inset-shadow-white/5 after:rounded-xl">
        Here's some recent work
      </div>
      <div className="relative w-fit max-w-72 self-end overflow-hidden rounded-xl rounded-br-none bg-stone-700/50 px-4 py-2.5 text-right text-sm text-white after:pointer-events-none after:absolute after:inset-0 after:inset-shadow-2xs after:inset-shadow-white/5 after:rounded-xl">
        Sure! I've been a brand designer for around 8 years and have been lucky
        enough to do identity work and brand design for clients ranging from
        early stage startups to publicly listed enterprises.
      </div>
    </div>
  );
}
