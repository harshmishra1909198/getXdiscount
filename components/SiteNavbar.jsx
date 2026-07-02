import Link from "next/link";

const PRIMARY_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Contact Us", href: "/support" },
  { label: "Privacy", href: "/privacy-policy" },
];

function NavLink({ item }) {
  const className =
    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-[15px] transition " +
    "text-slate-900 hover:text-orange-700";

  if (item.href.startsWith("#")) {
    return (
      <a href={item.href} className={className}>
        <span>{item.label}</span>
        {item.caret ? <span className="text-sm leading-none text-slate-700">v</span> : null}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      <span>{item.label}</span>
      {item.caret ? <span className="text-sm leading-none text-slate-700">v</span> : null}
    </Link>
  );
}

export function SiteNavbar({
  logoLabel = "Discountifier App",
  logoMark = "VD",
  ctaLabel = "Get Started",
  ctaHref = "https://apps.shopify.com/",
  navItems = PRIMARY_LINKS,
}) {
  return (
    <header className="border-b border-slate-300/80 bg-white">
      <div className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link href="#top" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 text-sm font-black text-white">
            {logoMark}
          </span>
          <span className="block">
            <span className="block text-[17px] font-extrabold tracking-tight text-slate-950">
              {logoLabel}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>

        <div className="justify-self-end">
          <a
            href={ctaHref}
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#5b2500] bg-[#ba4900] px-5 py-2 text-[15px] font-semibold text-white shadow-[0_12px_24px_rgba(186,73,0,0.18)] transition hover:bg-[#d15603]"
          >
            <span className="text-[16px]">+</span>
            <span>{ctaLabel}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 md:hidden">
        <nav className="flex flex-wrap gap-1 px-5 py-3 text-sm sm:px-8 lg:px-12">
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>
      </div>
    </header>
  );
}
