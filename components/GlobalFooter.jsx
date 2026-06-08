import Link from "next/link";

const LINK_GROUPS = [
  {
    title: "Useful Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Contact & Support", href: "/support" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms-of-service" },
    ],
  },
];

export function GlobalFooter() {
  const footerBadges = ["Tiered offers", "Storefront block", "Merchant support"];

  return (
    <footer className="mt-6 bg-[#271a13] px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-14 xl:px-16">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(220px,0.7fr)]">
        <div>
          <div className="inline-flex items-center gap-3 rounded-[22px] bg-white px-4 py-2.5 text-slate-900 shadow-sm">
            <img
              src="/volume-discount-logo.png"
              alt="Volume Discount App logo"
              className="h-8 w-8 rounded-lg object-contain"
            />
            <span className="text-lg font-black tracking-tight">VolumeX</span>
          </div>

          <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-white/78">
            Build simple volume discount experiences that help Shopify merchants
            increase order value without adding complexity.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {footerBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold text-white/85 shadow-sm backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="text-[1.2rem] font-semibold">{group.title}</h3>
            <div className="mt-7 space-y-4 text-white/80">
              {group.links.map((link) =>
                link.href === "#" ? (
                  <span key={link.label} className="block cursor-default">
                    {link.label}
                  </span>
                ) : (
                  <Link key={link.label} href={link.href} className="block transition hover:text-white">
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
