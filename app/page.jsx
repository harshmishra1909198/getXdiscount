import Link from "next/link";

const FEATURE_CHIPS = [
  "Embedded Shopify admin",
  "Theme app extension ready",
  "No code setup for merchants",
];

const DASHBOARD_CARDS = [
  {
    title: "Qty breaks",
    text: "Flexible tiered discounts",
  },
  {
    title: "Targeting",
    text: "Products and customer segments",
  },
  {
    title: "Schedules",
    text: "Launch and stop automatically",
  },
];

const PROBLEM_CARDS = [
  {
    title: "Weak incentives",
    text: "Simple single-value discounts often fail to push shoppers toward larger cart sizes.",
  },
  {
    title: "Limited targeting",
    text: "Merchants need better control over which customers and products receive each offer.",
  },
  {
    title: "Messy storefront messaging",
    text: "If savings are not obvious on the product page, shoppers miss the reason to buy more.",
  },
  {
    title: "Campaign friction",
    text: "Launching timed promotions should not require theme edits or repetitive manual work.",
  },
];

const SOLUTION_POINTS = [
  "Build tiered offers that reward bigger carts.",
  "Target the right products and shoppers.",
  "Schedule campaigns around launches.",
  "Present every offer in a clear, storefront-ready format.",
];

const FEATURES = [
  {
    title: "Quantity breaks",
    text: "Build tiered discounts that reward higher quantities with stronger savings.",
  },
  {
    title: "Customer targeting",
    text: "Show offers to all shoppers, logged-in customers, specific groups, or tag-based segments.",
  },
  {
    title: "Product control",
    text: "Apply rules by product, collection, vendor, or tags to keep promotions focused.",
  },
  {
    title: "Scheduling",
    text: "Start and stop campaigns automatically for launches, holidays, and time-boxed promotions.",
  },
  {
    title: "Storefront styling",
    text: "Present discount tables in a cleaner format that feels native to the storefront.",
  },
  {
    title: "Performance tracking",
    text: "Review active offers and campaign impact inside the embedded admin experience.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Install the app",
    text: "Connect the app to your Shopify store and open the embedded admin dashboard.",
  },
  {
    step: "02",
    title: "Create offer rules",
    text: "Choose discount tiers, targeting conditions, exclusions, and campaign timing.",
  },
  {
    step: "03",
    title: "Enable the storefront block",
    text: "Add the theme app extension block so shoppers can see savings directly on product pages.",
  },
  {
    step: "04",
    title: "Launch and monitor",
    text: "Activate the offer, confirm storefront visibility, and review performance over time.",
  },
];

const VISUAL_SHOWCASE = [
  {
    kicker: "Merchandising",
    title: "Highlight the best-value tier",
    text: "Draw attention to the quantity break that delivers the strongest margin-friendly lift.",
  },
  {
    kicker: "Segmentation",
    title: "Run offers for the right shoppers",
    text: "Support promotions for logged-in buyers, tagged customers, or selected customer lists.",
  },
  {
    kicker: "Automation",
    title: "Schedule launches without extra work",
    text: "Set start and end times in advance so campaigns stay aligned with your launch calendar.",
  },
];

const BENEFITS = [
  "Increase order value with clearer quantity incentives",
  "Reduce setup friction with embedded admin workflows",
  "Keep promotion logic focused with product and customer targeting",
  "Show discount value directly where buying decisions happen",
];

const USE_CASES = [
  {
    title: "Apparel",
    text: "Encourage multi-unit purchases by rewarding shoppers for buying multiple sizes, colors, or staple items from the same collection.",
  },
  {
    title: "Beauty",
    text: "Bundle replenishment products and promote stronger savings on repeat-purchase items like skincare sets or daily essentials.",
  },
  {
    title: "Seasonal",
    text: "Run timed promotions around launches, holidays, or clearance windows without theme edits.",
  },
];

const FAQ = [
  "Do I need to edit theme code manually?",
  "Can I target specific products or customer groups?",
  "Can I schedule promotions in advance?",
  "Will shoppers see the discount tiers on product pages?",
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main className="w-full pb-16 pt-8">
        <section
          id="top"
          className="grid gap-8 overflow-hidden rounded-none bg-[#fff9f6] px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:px-12 lg:py-14 xl:px-16"
        >
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
              Built for Shopify growth
            </span>
            <h1 className="mt-5 max-w-[12ch] text-[clamp(2.8rem,5.8vw,5.2rem)] font-black leading-[0.92] tracking-[-0.06em] text-black">
              Increase average order value with smarter volume discounts
            </h1>

            <p className="mt-7 max-w-[40rem] text-[1.08rem] leading-9 text-slate-700">
              Create Shopify volume offers with quantity breaks, free shipping tiers,
              customer targeting, scheduling, and storefront-ready discount blocks in
              minutes.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {FEATURE_CHIPS.map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://apps.shopify.com/"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[8px] border-2 border-[#353535] bg-[#ba4900] px-5 py-3 text-[1.02rem] font-semibold text-white shadow-[0_4px_0_#353535] transition hover:-translate-y-0.5"
              >
                <span className="text-lg">🛍</span>
                <span>Install on Shopify</span>
              </a>
              <a
                href="#features"
                className="inline-flex min-h-12 items-center justify-center rounded-[8px] border-2 border-[#353535] bg-white px-6 py-3 text-[1.02rem] font-semibold text-[#b94a00] transition hover:-translate-y-0.5 hover:bg-orange-50"
              >
                See how it works
              </a>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
              No coding required. Fast setup. Built to launch advanced promotions
              without extra complexity.
            </p>
          </div>

          <div className="relative min-h-[520px] justify-self-end lg:min-h-[620px] lg:w-full lg:max-w-[760px]">
            <div className="pointer-events-none absolute left-8 top-8 h-[420px] w-[560px] rounded-[36px] bg-[#2e2d2b] shadow-[0_28px_70px_rgba(0,0,0,0.16)]" />
            <div className="pointer-events-none absolute left-[34px] top-[18px] h-[440px] w-[600px] rounded-[28px] bg-white shadow-[0_16px_45px_rgba(0,0,0,0.12)]" />

            <div className="pointer-events-none absolute left-[56px] top-[46px] h-[410px] w-[556px] overflow-hidden rounded-[22px] border-4 border-[#2c2c2c] bg-white">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2 text-[11px] text-slate-500">
                <div className="flex gap-6 pl-10">
              <span>Volume Discount Dashboard</span>
                </div>
                <span className="rounded bg-[#2d2d2d] px-3 py-1 text-white">Offer builder snapshot</span>
              </div>

              <div className="grid gap-4 p-5">
                <div className="grid gap-4 md:grid-cols-[minmax(0,1.15fr)_minmax(220px,0.85fr)]">
                  <div className="rounded-[18px] border border-slate-200 bg-[#fdf7f0] p-4 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                      STOREFRONT PREVIEW
                    </p>
                    <h3 className="mt-2 text-[22px] font-black tracking-[-0.04em] text-slate-950">
                      Buy more and save
                    </h3>
                    <div className="mt-4 space-y-3">
                      {["Buy 2+ / Save 10%", "Buy 3+ / Save 15% + Free Shipping", "Buy 5+ / Save 20%"].map(
                        (row) => (
                          <div
                            key={row}
                            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                          >
                            <span>{row.split(" / ")[0]}</span>
                            <span className="font-semibold text-[#b94a00]">{row.split(" / ")[1]}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {DASHBOARD_CARDS.map((item) => (
                      <div key={item.title} className="rounded-[18px] border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-slate-900">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    "Tiered offers - Create multi-quantity pricing rules",
                    "Customer rules - Target logged-in, tagged, or specific buyers",
                    "Storefront block - Show savings clearly on product pages",
                    "Scheduled launches - Run promotions on your own timeline",
                  ].map((item) => (
                    <div key={item} className="rounded-[18px] border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 border-y border-slate-200/70 bg-white px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10 xl:px-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
                The problem
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Most discount tools either oversimplify promotions or make them painful to manage.
              </h2>
            </div>
            <Link
              href="/privacy-policy"
              className="text-sm font-semibold text-blue-700 transition hover:text-blue-800"
            >
              View privacy policy →
            </Link>
          </div>

          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600">
            Bigger carts improve store economics, but getting customers to buy more
            without hurting margin takes better offer logic and a clearer storefront
            presentation.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {PROBLEM_CARDS.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-soft"
              >
                <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="features"
          className="grid gap-10 border-y border-slate-200/70 bg-[#fffdfb] px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-12 lg:py-14 xl:px-16"
        >
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
              The solution
            </span>
            <h2 className="mt-4 max-w-xl text-[clamp(2.2rem,3.7vw,3.7rem)] font-black leading-[0.98] tracking-[-0.05em] text-black">
              Volume Discount App gives Shopify merchants a cleaner way to drive larger orders.
            </h2>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-9 text-slate-500">
              Build tiered offers that reward bigger carts, target the right products
              and shoppers, schedule campaigns around launches, and present every offer
              in a clear, storefront-ready format.
            </p>

            <div className="mt-8 grid gap-3">
              {SOLUTION_POINTS.map((point) => (
                <div
                  key={point}
                  className="rounded-[18px] border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {FEATURES.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-soft"
              >
                <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-y border-slate-200/70 bg-white px-5 py-10 sm:px-8 lg:px-12 lg:py-14 xl:px-16"
        >
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
              How it works
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Launch your first volume offer in four simple steps.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {STEPS.map((item) => (
              <div key={item.step} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold tracking-[0.18em] text-slate-500">
                  {item.step}
                </span>
                <p className="mt-4 text-lg font-bold text-slate-950">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-y border-slate-200/70 bg-[#fffdfb] px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:px-12 lg:py-14 xl:px-16">
          <div className="relative flex min-h-[320px] items-center justify-center">
            <div className="absolute left-6 top-8 h-44 w-44 rounded-full bg-[#dff0f6] blur-3xl" />
            <div className="absolute left-24 bottom-8 h-40 w-40 rounded-full bg-[#cde6f0] blur-3xl" />

            <div className="grid w-full gap-4">
              {VISUAL_SHOWCASE.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    {item.kicker}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
              Benefits
            </span>
            <h2 className="mt-4 max-w-xl text-[clamp(2.2rem,3.7vw,3.7rem)] font-black leading-[0.98] tracking-[-0.05em] text-black">
              Built to move shoppers from browsing to buying more.
            </h2>

            <div className="mt-8 space-y-3">
              {BENEFITS.map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm"
                >
                  + {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="use-cases"
          className="grid gap-10 border-y border-slate-200/70 bg-white px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:px-12 lg:py-14 xl:px-16"
        >
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
              Use cases
            </span>
            <h2 className="mt-4 max-w-xl text-[clamp(2.2rem,3.7vw,3.7rem)] font-black leading-[0.98] tracking-[-0.05em] text-black">
              Common Shopify merchandising workflows supported by the app.
            </h2>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-9 text-slate-500">
              Build offers for repeat-purchase products, seasonal launches, and
              higher-volume collections without changing storefront code manually.
            </p>
          </div>

          <div className="grid gap-4">
            {USE_CASES.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  {item.title}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-950">
                  {item.title === "Apparel"
                    ? "Encourage multi-unit purchases"
                    : item.title === "Beauty"
                      ? "Bundle replenishment products"
                      : "Launch short-window campaigns"}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="border-y border-slate-200/70 bg-[#fffdfb] px-5 py-10 sm:px-8 lg:px-12 lg:py-14 xl:px-16"
        >
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Common questions before you install.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {FAQ.map((question) => (
              <article key={question} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">{question}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 py-10 sm:px-8 lg:px-12 lg:py-14 xl:px-16">
          <div className="rounded-[28px] border border-slate-200 bg-[#f8e8d8] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10">
            <span className="inline-flex w-fit rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#b94a00]">
              Ready to launch
            </span>
            <h2 className="mt-4 max-w-3xl text-[clamp(2.2rem,3.7vw,3.8rem)] font-black leading-[0.98] tracking-[-0.05em] text-black">
              Turn more product views into bigger carts with the app.
            </h2>
            <p className="mt-5 max-w-3xl text-[1.05rem] leading-9 text-slate-600">
              Launch Shopify volume discounts that are easy to set up, easy to
              understand, and built to help merchants increase order value.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://apps.shopify.com/"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] border-4 border-[#353535] bg-[#ba4900] px-5 py-3 text-[1.05rem] font-semibold text-white shadow-[0_4px_0_#353535] transition hover:-translate-y-0.5"
              >
                <span className="text-lg">🛍</span>
                <span>Start free trial</span>
              </a>
              <a
                href="#features"
                className="inline-flex min-h-12 items-center justify-center rounded-[4px] border-2 border-[#353535] bg-white px-6 py-3 text-[1.05rem] font-medium text-[#b94a00] transition hover:-translate-y-0.5 hover:bg-orange-50"
              >
                Explore features
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
