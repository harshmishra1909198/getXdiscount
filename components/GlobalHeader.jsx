import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Contact & Support", href: "/support" },
  { label: "Privacy", href: "/privacy-policy" },
];

export function GlobalHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-300/80 bg-white">
      <div className="grid w-full grid-cols-[minmax(0,1fr)_auto] gap-x-3 gap-y-3 px-4 py-3 sm:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-4 lg:px-12 lg:py-4">
        <Link href="/" className="order-1 flex items-center gap-2 sm:gap-3 lg:order-1">
          <img
            src="/discountifier-logo.jpg"
            alt="Discountifier App logo"
            className="h-10 w-10 rounded-xl object-contain sm:h-12 sm:w-12"
          />
          <span>
            <span className="block text-[15px] font-extrabold tracking-tight text-slate-950 sm:text-[17px]">
              Discountifier App
            </span>
            <span className="block text-[11px] text-slate-500 sm:text-xs">Shopify app</span>
          </span>
        </Link>

        <a
          className="order-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#5b2500] bg-[#ba4900] px-4 py-2 text-[13px] font-semibold text-white shadow-[0_12px_24px_rgba(186,73,0,0.18)] transition hover:bg-[#d15603] lg:order-3 lg:min-h-12 lg:px-5 lg:text-[15px]"
          href="https://apps.shopify.com/"
        >
          <span className="text-[15px]">🛍</span>
          <span className="hidden sm:inline">Get Started</span>
          <span className="sm:hidden">Start</span>
        </a>

        <nav className="order-3 col-span-2 flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-0.5 text-[14px] text-slate-900 sm:text-[15px] lg:order-2 lg:col-span-1 lg:justify-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-3 py-2 transition hover:bg-orange-50 hover:text-orange-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
