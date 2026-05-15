import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Contact & Support", href: "/support" },
  { label: "Privacy", href: "/privacy-policy" },
];

export function GlobalHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-300/80 bg-white">
      <div className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/volume-discount-logo.png"
            alt="Volume Discount App logo"
            className="h-12 w-12 rounded-xl object-contain"
          />
          <span>
            <span className="block text-[17px] font-extrabold tracking-tight text-slate-950">
              Volume Discount App
            </span>
            <span className="block text-xs text-slate-500">Shopify public app</span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-1 text-[15px] text-slate-900">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 transition hover:text-orange-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://apps.shopify.com/"
          className="inline-flex min-h-12 items-center gap-2 rounded-[8px] border-2 border-[#353535] bg-white px-4 py-2 text-[15px] font-semibold text-orange-700 shadow-sm transition hover:bg-orange-50"
        >
          <span className="text-[16px]">🛍</span>
          <span>Get Started</span>
        </a>
      </div>
    </header>
  );
}
