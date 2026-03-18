import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 py-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-sm">
            <div className="mb-5 space-y-1 text-sm text-white">
              <p>Searchable Limited</p>
              <p>B1, 9 Tanner St</p>
              <p>London, SE1 3LE</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
            <div>
              <h3 className="mb-4 text-sm font-medium text-white">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="https://docs.searchable.com"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/resources"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/guide"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/data"
                  >
                    AI Search Data
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium text-white">
                Free Tools
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/chatgpt-product-visibility-report"
                  >
                    ChatGPT Shopping Checker
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/try-agent"
                  >
                    Free AI SEO Agent
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/free-visibility-report"
                  >
                    Free AI Visibility Score
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/ucp-readiness"
                  >
                    AI Shopping Agent Checker
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium text-white">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/customers"
                  >
                    Customers
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/authors"
                  >
                    Authors
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/careers"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="https://join.slack.com/t/searchablecommunity/shared_invite/zt-3jynfw88g-P5LjrLsPRpRBjHZiMUDBpA"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium text-white">Compare</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/"
                  >
                    All Comparisons
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/"
                  >
                    vs Semrush
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/"
                  >
                    vs Ahrefs
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-neutral-400 transition hover:underline"
                    href="/"
                  >
                    vs Profound
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 py-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full max-w-3xl space-y-2">
            <p className="text-xs text-neutral-400">
              © {/* */}
              {new Date().getFullYear()}
              {/* */} Unitap.ai | &quot;Unitap&quot; and the Unitap logo are
              trademarks of the company
            </p>
            <p className="text-xs text-neutral-400">
              Registered in India. All rights reserved.
            </p>
            <p className="text-xs leading-relaxed text-neutral-400">
              DISCLAIMER: The content on this website is provided for general
              informational purposes only and does not constitute professional
              advice. We make no representations or warranties regarding the
              accuracy, completeness, or reliability of the information
              provided. Any reliance you place on this information is strictly
              at your own risk.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
