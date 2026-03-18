export default function Test() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-36">
          <div className="grid gap-16">
            <h2 className="max-w-xl font-sans text-2xl font-medium text-pretty text-neutral-400">
              Interfere{" "}
              <span className="rounded-md bg-blue-600/15 px-1 py-0.5 text-blue-400">
                finds
              </span>{" "}
              issues in your app, understands what&apos;s happening, and owns
              resolution from first signal to production.
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i.toString()}>
                  <div className="flex flex-1 flex-col gap-4">
                    <div className="relative flex h-64 w-full items-center justify-center opacity-100 transition-opacity duration-300 ease-out">
                      <div className="relative flex h-full w-full items-center justify-center rounded-2xl border border-neutral-900 p-1">
                        <div className="flex h-full w-full flex-col items-start justify-start gap-2 overflow-hidden rounded-xl border border-neutral-900 bg-linear-to-b from-neutral-900/40 to-transparent p-4 select-none">
                          <div className="flex w-full items-start justify-between gap-2">
                            <div className="flex flex-col items-start justify-center gap-2">
                              <p className="text-caption-sm text-tertiary-foreground font-sans font-normal tracking-[0.05em] uppercase">
                                #112
                              </p>
                              <div className="flex items-center justify-center gap-2">
                                <svg
                                  className="text-tertiary-foreground"
                                  fill="none"
                                  height={16}
                                  role="graphics-symbol"
                                  viewBox="0 0 16 16"
                                  width={16}
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <title>Key</title>
                                  <path
                                    clipRule="evenodd"
                                    d="M10.5 1C8.01472 1 6 3.01472 6 5.5C6 5.76248 6.02253 6.02011 6.06586 6.27093C6.11066 6.53018 6.04452 6.74837 5.91845 6.87444L1.58579 11.2071C1.21071 11.5822 1 12.0909 1 12.6213V14.5C1 14.7761 1.22386 15 1.5 15H4C4.27614 15 4.5 14.7761 4.5 14.5V13.5H5.5C5.77614 13.5 6 13.2761 6 13V12H7C7.13261 12 7.25979 11.9473 7.35355 11.8536L9.12556 10.0816C9.25163 9.95548 9.46982 9.88934 9.72907 9.93414C9.9799 9.97747 10.2375 10 10.5 10C12.9853 10 15 7.98528 15 5.5C15 3.01472 12.9853 1 10.5 1ZM10.5 3C10.2239 3 10 3.22386 10 3.5C10 3.77614 10.2239 4 10.5 4C11.3284 4 12 4.67157 12 5.5C12 5.77614 12.2239 6 12.5 6C12.7761 6 13 5.77614 13 5.5C13 4.11929 11.8807 3 10.5 3Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                  />
                                </svg>
                                <p className="line-clamp-1 font-sans text-sm font-medium text-white">
                                  Reset password flow issue
                                </p>
                              </div>
                            </div>
                            <div className="border-border-default flex size-5 shrink-0 items-center justify-center rounded-full border border-dashed">
                              <svg
                                className="text-tertiary-foreground size-3"
                                fill="none"
                                height={16}
                                role="graphics-symbol"
                                viewBox="0 0 16 16"
                                width={16}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <title>User</title>
                                <path
                                  clipRule="evenodd"
                                  d="M4.99998 4C4.99998 2.34315 6.34312 1 7.99998 1C9.65683 1 11 2.34315 11 4C11 5.65685 9.65683 7 7.99998 7C6.34312 7 4.99998 5.65685 4.99998 4Z"
                                  fill="currentColor"
                                  fillRule="evenodd"
                                />
                                <path
                                  clipRule="evenodd"
                                  d="M2.50081 13.4036C2.55237 10.4104 4.99463 8 7.99998 8C11.0054 8 13.4477 10.4105 13.4992 13.4038C13.5026 13.6023 13.3882 13.784 13.2077 13.8668C11.6218 14.5945 9.85766 15 8.00019 15C6.14255 15 4.37827 14.5945 2.79219 13.8666C2.61174 13.7838 2.49739 13.6021 2.50081 13.4036Z"
                                  fill="currentColor"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="mt-2 flex w-full flex-col items-start justify-center gap-1">
                            <div className="h-2.5 w-full animate-pulse rounded-xs bg-neutral-800" />
                            <div className="h-2.5 w-full animate-pulse rounded-xs bg-neutral-800" />
                            <div className="h-2.5 w-28 animate-pulse rounded-xs bg-neutral-800" />
                          </div>
                        </div>
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-b from-transparent to-neutral-950" />
                    </div>
                    <span className="font-mono text-xs leading-none font-normal text-neutral-400 select-none">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-1 text-pretty">
                      <h3 className="font-sans text-base font-medium text-white">
                        Understand what&apos;s going wrong
                      </h3>
                      <p className="font-sans text-sm font-normal text-neutral-400">
                        Interfere goes beyond logs, metrics, and traces. It
                        finds the root cause and explains what’s broken, why,
                        and who it impacts.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
