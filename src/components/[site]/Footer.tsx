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
              <h3 className="mb-4 font-medium text-sm text-white">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="https://docs.searchable.com"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/resources"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/blog"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/guide"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/data"
                  >
                    AI Search Data
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-medium text-sm text-white">
                Free Tools
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/chatgpt-product-visibility-report"
                  >
                    ChatGPT Shopping Checker
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/try-agent"
                  >
                    Free AI SEO Agent
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/free-visibility-report"
                  >
                    Free AI Visibility Score
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/ucp-readiness"
                  >
                    AI Shopping Agent Checker
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-medium text-sm text-white">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/customers"
                  >
                    Customers
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/authors"
                  >
                    Authors
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/careers"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="https://join.slack.com/t/searchablecommunity/shared_invite/zt-3jynfw88g-P5LjrLsPRpRBjHZiMUDBpA"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-medium text-sm text-white">Compare</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/compare"
                  >
                    All Comparisons
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/compare/searchable-vs-semrush"
                  >
                    vs Semrush
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/compare/searchable-vs-ahrefs"
                  >
                    vs Ahrefs
                  </a>
                </li>
                <li>
                  <a
                    className="text-neutral-400 text-sm transition hover:underline"
                    href="/compare/searchable-vs-profound"
                  >
                    vs Profound
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 py-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full max-w-3xl space-y-2">
            <p className="text-neutral-400 text-xs">
              © {/* */}
              {new Date().getFullYear()}
              {/* */} Unitap.ai | "Unitap" and the Unitap logo are trademarks of
              the company
            </p>
            <p className="text-neutral-400 text-xs">
              Registered in India. All rights reserved.
            </p>
            <p className="text-neutral-400 text-xs leading-relaxed">
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
