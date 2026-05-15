import Link from "next/link";

const FEATURE_CARDS = [
  {
    title: "Volume discounts",
    text: "Create simple tiered offers that are easy to understand and launch.",
  },
  {
    title: "B2B pricing",
    text: "Set customer-specific pricing with a clean, merchant-friendly flow.",
  },
  {
    title: "Schedule offers",
    text: "Plan promotions ahead of time and keep everything organized.",
  },
  {
    title: "Storefront widgets",
    text: "Show savings clearly with polished cards and simple messaging.",
  },
];

const INSTALL_STEPS = [
  {
    step: "01",
    title: "Install",
    text: "Connect your Shopify store and open the app.",
  },
  {
    step: "02",
    title: "Create",
    text: "Choose discount tiers, rules, and display preferences.",
  },
  {
    step: "03",
    title: "Launch",
    text: "Preview the setup and publish when ready.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main className="w-full pb-16 pt-8">
        <section
          id="top"
          className="grid gap-8 overflow-hidden rounded-none bg-[#fff9f6] px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-12 lg:py-14 xl:px-16"
        >
          <div className="flex flex-col justify-center">
            <h1 className="max-w-[11ch] text-[clamp(2.8rem,5.8vw,5.2rem)] font-black leading-[0.92] tracking-[-0.06em] text-black">
              A Holistic Discounts
              <br />
              Solution for
              <br />
              <span className="text-[#b94a00]">Shopify!</span>
            </h1>

            <p className="mt-7 max-w-[40rem] text-[1.08rem] leading-9 text-slate-700">
              A simple way to create volume discounts, B2B pricing, and scheduled
              offers inside Shopify. Set it up fast, keep the interface clean, and make
              it easy for merchants to understand what happens next.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["No code setup", "Fast to launch", "Mobile friendly"].map((item) => (
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
                <span>Get the app on Shopify</span>
              </a>
              <a
                href="#installation"
                className="inline-flex min-h-12 items-center justify-center rounded-[8px] border-2 border-[#353535] bg-white px-6 py-3 text-[1.02rem] font-semibold text-[#b94a00] transition hover:-translate-y-0.5 hover:bg-orange-50"
              >
                View Demo
              </a>
            </div>
          </div>

          <div className="relative min-h-[520px] justify-self-end lg:min-h-[620px] lg:w-full lg:max-w-[760px]">
            <div className="pointer-events-none absolute right-0 top-8 h-[380px] w-[560px] rounded-[40px] bg-[#2e2d2b] shadow-[0_28px_70px_rgba(0,0,0,0.16)]" />
            <div className="pointer-events-none absolute right-[20px] top-[18px] h-[380px] w-[560px] rounded-[28px] bg-white shadow-[0_16px_45px_rgba(0,0,0,0.12)]" />
            <div className="pointer-events-none absolute right-[250px] top-[18px] h-[380px] w-[132px] rounded-[28px_0_0_28px] bg-[#7a523f]" />

            <div className="pointer-events-none absolute right-[34px] top-[46px] h-[356px] w-[518px] overflow-hidden rounded-[22px] border-4 border-[#2c2c2c] bg-white">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2 text-[11px] text-slate-500">
                <div className="flex gap-6 pl-16">
                  <span>home</span>
                  <span>products</span>
                  <span>category</span>
                  <span>offers</span>
                </div>
                <span className="rounded bg-[#2d2d2d] px-3 py-1 text-white">sign in/up</span>
              </div>

              <div className="relative h-[222px] p-4">
                <div className="absolute left-0 top-0 h-0 w-0 border-l-[0] border-r-[62px] border-t-[62px] border-r-transparent border-t-[#b44a00]" />
                <div className="absolute left-2 top-1 -rotate-6 bg-[#b44a00] px-2.5 py-1 text-[26px] font-black leading-none text-white shadow-sm">
                  SALE
                </div>
                <div className="absolute left-3 top-12 rotate-[-8deg] bg-[#9c2e00] px-2 py-1 text-[8px] font-semibold text-white">
                  UP TO 50% OFF
                </div>

                <div className="ml-[140px] flex h-full items-start gap-4">
                  <div className="flex h-[126px] w-[148px] items-center justify-center rounded-[8px] bg-[#f4f1ec]">
                    <div className="h-18 w-22 -rotate-[20deg] rounded-[18px] bg-gradient-to-br from-red-700 to-red-400 shadow-[0_10px_20px_rgba(0,0,0,0.15)]" />
                  </div>
                  <div className="max-w-[176px]">
                    <p className="text-[18px] font-bold text-slate-900">American Boots</p>
                    <div className="mt-1 text-[#f5b400]">★★★★★</div>
                    <p className="mt-2 text-[11px] leading-5 text-slate-600">
                      The new shoe is inspired by the first model of British celebrity. It
                      is a unique and selected collection for now.
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-[13px]">
                      <span className="font-semibold">$120</span>
                      <span className="font-bold text-[#b94a00]">$60.0</span>
                      <button className="rounded bg-[#b50000] px-3 py-1.5 text-white">Buy</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-y border-slate-200 bg-slate-50 px-4 py-3">
                <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm">
                  <span className="text-[13px] text-slate-600">Next discount</span>
                  <div className="flex items-center gap-2.5">
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    <span className="h-3 w-3 rounded-full border-2 border-emerald-500 bg-white" />
                    <span className="h-3 w-3 rounded-full border-2 border-red-500 bg-white" />
                    <span className="h-3 w-3 rounded-full border-2 border-red-300 bg-white" />
                  </div>
                </div>

                <div className="mt-3 flex gap-3">
                  <button className="rounded-md border border-slate-400 bg-white px-4 py-2 text-[12px]">
                    continue shopping
                  </button>
                  <button className="rounded-md border border-[#b94a00] bg-[#b94a00] px-4 py-2 text-[12px] text-white">
                    Add to cart
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-3 text-slate-400">
                <span className="h-2 w-24 rounded-full bg-slate-200" />
                <span className="ml-auto text-base">⌂</span>
                <span className="text-sm">☺</span>
                <span className="text-sm">@</span>
                <span className="text-sm">T</span>
                <span className="text-sm">◌</span>
              </div>
            </div>

            <div className="pointer-events-none absolute left-[22px] top-[96px] h-[340px] w-[184px] overflow-hidden rounded-[30px] border-4 border-[#2f2f2f] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.18)]">
              <div className="h-7 bg-white" />
              <div className="border-y border-slate-200 px-3 py-2">
                <div className="flex items-center justify-between text-[12px] text-slate-500">
                  <span>🏠</span>
                  <span>≡</span>
                </div>
              </div>

              <div className="relative p-2.5">
                <div className="absolute left-0 top-0 h-0 w-0 border-l-[0] border-r-[42px] border-t-[42px] border-r-transparent border-t-[#b44a00]" />
                <div className="absolute left-1 top-1 -rotate-6 bg-[#b44a00] px-2 py-1 text-[16px] font-black leading-none text-white">
                  SALE
                </div>
                <div className="absolute left-1 top-9 rotate-[-8deg] bg-[#9c2e00] px-2 py-0.5 text-[7px] font-semibold text-white">
                  UP TO 50% OFF
                </div>

                <div className="mt-9 rounded-md border border-slate-300 p-2">
                  <div className="flex items-start gap-2">
                    <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-red-700 to-red-400" />
                    <div className="flex-1">
                      <p className="text-[10px] font-bold">American Boots</p>
                      <p className="text-[8px] leading-4 text-slate-600">
                        The new shoe is inspired by...
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-[9px]">
                        <span>$120</span>
                        <span className="font-bold text-[#b94a00]">$60.0</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-2 w-full rounded bg-[#b50000] py-1 text-[9px] text-white">
                    Buy
                  </button>
                </div>

                <div className="mt-2.5 flex gap-2">
                  <div className="flex-1 rounded border border-slate-200 p-1 text-center text-[7px] text-[#b94a00]">
                    15% off
                  </div>
                  <div className="flex-1 rounded border border-slate-200 p-1 text-center text-[7px] text-[#b94a00]">
                    18% off
                  </div>
                  <div className="flex-1 rounded border border-slate-200 p-1 text-center text-[7px] text-[#b94a00]">
                    25% off
                  </div>
                </div>

                <div className="mt-2.5 rounded bg-slate-100 px-2 py-1 text-[8px] text-slate-500">
                  Next discount
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="h-1.5 w-1.5 rounded-full border border-emerald-500 bg-white" />
                  <span className="h-1.5 w-1.5 rounded-full border border-red-500 bg-white" />
                  <span className="h-1.5 w-1.5 rounded-full border border-red-300 bg-white" />
                </div>
                <button className="mt-2.5 w-full rounded border border-slate-400 py-1 text-[9px]">
                  continue shopping
                </button>
                <button className="mt-2 w-full rounded bg-[#b94a00] py-1 text-[9px] text-white">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 border-y border-slate-200/70 bg-white px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10 xl:px-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
                Why choose us
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Simple, clear, and conversion-focused
              </h2>
            </div>
            <Link
              href="/privacy-policy"
              className="text-sm font-semibold text-blue-700 transition hover:text-blue-800"
            >
              View privacy policy →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {FEATURE_CARDS.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-soft"
              >
                <p className="text-lg font-bold text-slate-950">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="volume-discounts"
          className="grid gap-10 border-y border-slate-200/70 bg-[#fffdfb] px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-12 lg:py-14 xl:px-16"
        >
          <div className="relative flex min-h-[420px] items-center justify-center">
            <div className="absolute left-6 top-8 h-48 w-48 rounded-full bg-[#f7d7d4] blur-3xl" />
            <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-[#f4c7bf] blur-3xl" />
            <div className="absolute left-2 bottom-4 h-28 w-28 rounded-full bg-[#ffd29c] blur-2xl" />

            <div className="relative h-[360px] w-[500px] max-w-full">
              <div className="absolute left-2 top-4 h-[340px] w-[465px] rounded-[4px] bg-[#2d2c2b] shadow-[0_20px_45px_rgba(0,0,0,0.16)]" />
              <div className="absolute left-6 top-0 h-[340px] w-[465px] rounded-[4px] border-[2px] border-[#2b2b2b] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.14)]">
                <div className="flex h-5 items-center bg-[#b01e1e] px-4">
                  <div className="h-3 w-36 rounded-sm bg-white" />
                </div>

                <div className="px-6 py-5">
                  <div className="rounded-[16px] border border-slate-200 bg-white p-4 shadow-[0_8px_18px_rgba(15,23,42,0.12)]">
                    <p className="text-sm font-semibold text-slate-700">
                      Add a discount based on quantity range
                    </p>
                    <div className="mt-4 space-y-3">
                      {[
                        { qty: "10", discount: "10" },
                        { qty: "20", discount: "12" },
                        { qty: "30", discount: "15" },
                      ].map((row) => (
                        <div key={row.qty} className="grid grid-cols-[1fr_1fr_auto] gap-2">
                          <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
                            {row.qty}
                          </div>
                          <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
                            {row.discount}
                          </div>
                          <div className="flex items-center gap-1 text-slate-400">
                            <span className="rounded border border-slate-200 px-2 py-1 text-xs">
                              %
                            </span>
                            <span className="rounded border border-slate-200 px-2 py-1 text-xs">
                              🗑
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-[170px_1fr] gap-4">
                    <div className="rounded-[14px] border border-slate-200 bg-white p-4 shadow-[0_8px_18px_rgba(15,23,42,0.1)]">
                      <div className="text-xs font-semibold text-slate-500">Size</div>
                      <div className="mt-3 flex gap-2 text-[10px] font-semibold text-slate-700">
                        <span className="rounded-full bg-slate-900 px-2 py-1 text-white">S</span>
                        <span className="rounded-full bg-slate-100 px-2 py-1">M</span>
                        <span className="rounded-full bg-slate-100 px-2 py-1">L</span>
                        <span className="rounded-full bg-slate-100 px-2 py-1">XL</span>
                        <span className="rounded-full bg-slate-100 px-2 py-1">XXL</span>
                      </div>
                      <div className="mt-4 text-xs font-semibold text-slate-500">Color</div>
                      <div className="mt-3 flex gap-2">
                        <span className="h-4 w-4 rounded-full bg-red-500 ring-2 ring-slate-100" />
                        <span className="h-4 w-4 rounded-full bg-blue-500 ring-2 ring-slate-100" />
                        <span className="h-4 w-4 rounded-full bg-amber-700 ring-2 ring-slate-100" />
                        <span className="h-4 w-4 rounded-full bg-slate-800 ring-2 ring-slate-100" />
                      </div>
                      <div className="mt-4 flex items-center justify-between rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-500">
                        <span>20</span>
                        <span>+</span>
                      </div>
                      <button className="mt-3 w-full rounded bg-[#111] py-2 text-[11px] text-white">
                        ADD TO CART
                      </button>
                    </div>

                    <div className="rounded-[14px] border border-slate-200 bg-white shadow-[0_8px_18px_rgba(15,23,42,0.1)]">
                      <div className="grid grid-cols-[1fr_1fr] border-b border-slate-200 bg-[#b01e1e] text-sm font-semibold text-white">
                        <div className="px-4 py-2">Buy</div>
                        <div className="px-4 py-2 text-center">Get</div>
                      </div>
                      {[
                        ["10 or more", "10% off"],
                        ["20 or more", "12% off"],
                        ["30 or more", "$15 off"],
                        ["50 or more", "18% off"],
                      ].map(([buy, get]) => (
                        <div
                          key={buy}
                          className="grid grid-cols-[1fr_1fr] border-b border-slate-200 text-sm"
                        >
                          <div className="px-4 py-2 text-slate-700">{buy}</div>
                          <div className="border-l border-slate-200 px-4 py-2 text-center text-[#b01e1e]">
                            {get}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-0 h-16 w-28 rounded-full bg-[#b72020]" />
              <div className="absolute right-2 bottom-3 h-14 w-16 rounded-full bg-[#f38b35]" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="max-w-xl text-[clamp(2.3rem,4vw,4.1rem)] font-black leading-[0.98] tracking-[-0.05em] text-black">
              Automatic volume discounts and tiered pricing to boost larger purchases
            </h2>
            <p className="mt-8 max-w-xl text-[1.05rem] leading-9 text-slate-500">
              Encourage large-quantity purchases with automatic volume discounts and
              tiered pricing. Reward customers to buy more and save more.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://apps.shopify.com/"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] border-4 border-[#353535] bg-[#ba4900] px-5 py-3 text-[1.05rem] font-semibold text-white shadow-[0_4px_0_#353535] transition hover:-translate-y-0.5"
              >
                <span className="text-lg">🛍</span>
                <span>Get it on Shopify</span>
              </a>
              <a
                href="/support#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-[4px] border-2 border-[#353535] bg-white px-6 py-3 text-[1.05rem] font-medium text-[#b94a00] transition hover:-translate-y-0.5 hover:bg-orange-50"
              >
                View Demo
              </a>
            </div>
          </div>
        </section>

        <section
          id="installation"
          className="mt-6 border-y border-slate-200/70 bg-white px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10 xl:px-16"
        >
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
              Installation
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              How installation works
            </h2>
            <p className="mt-3 text-base leading-8 text-slate-600">
              A simple, merchant-friendly flow. This section is intentionally clean so
              the page feels close to a premium Shopify SaaS product.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {INSTALL_STEPS.map((item) => (
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

        <section
          id="b2b-pricing"
          className="grid gap-10 border-y border-slate-200/70 bg-[#fffdfb] px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-12 lg:py-14 xl:px-16"
        >
          <div className="flex flex-col justify-center">
            <h2 className="max-w-xl text-[clamp(2.2rem,3.7vw,3.7rem)] font-black leading-[0.98] tracking-[-0.05em] text-black">
              B2B discounts by tagging specific customer groups for personalized pricing
            </h2>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-9 text-slate-500">
              Target specific B2B wholesale customers or groups with customer tags.
              Offer personalized pricing for your B2B clients. Increase engagement and
              loyalty with exclusive discounts designed for your customers.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://apps.shopify.com/"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] border-4 border-[#353535] bg-[#ba4900] px-5 py-3 text-[1.05rem] font-semibold text-white shadow-[0_4px_0_#353535] transition hover:-translate-y-0.5"
              >
                <span className="text-lg">🛍</span>
                <span>Get it on Shopify</span>
              </a>
              <a
                href="/support#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-[4px] border-2 border-[#353535] bg-white px-6 py-3 text-[1.05rem] font-medium text-[#b94a00] transition hover:-translate-y-0.5 hover:bg-orange-50"
              >
                View Demo
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px]">
            <div className="absolute right-6 top-0 h-40 w-40 rounded-full bg-[#f6e5e3] blur-3xl" />
            <div className="absolute right-32 top-6 h-28 w-28 rounded-full bg-[#f1d7cc] blur-2xl" />

            <div className="absolute right-4 top-6 h-[360px] w-[590px] max-w-full overflow-hidden rounded-[170px_160px_150px_160px] border border-slate-300 bg-[#fff9f8] p-4">
              <img
                src="/discountray-b2b.webp"
                alt="B2B discount and customer tagging illustration"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </section>

        <section
          id="variant-discounts"
          className="grid gap-10 border-y border-slate-200/70 bg-white px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:px-12 lg:py-14 xl:px-16"
        >
          <div className="relative flex min-h-[430px] items-center justify-center">
            <div className="absolute left-6 top-8 h-44 w-44 rounded-full bg-[#dff0f6] blur-3xl" />
            <div className="absolute left-24 bottom-8 h-40 w-40 rounded-full bg-[#cde6f0] blur-3xl" />
            <div className="absolute right-20 top-14 h-24 w-24 rounded-full bg-[#f9d9c4] blur-2xl" />

            <div className="relative h-[360px] w-[600px] max-w-full">
              <div className="absolute left-0 bottom-0 h-[300px] w-[560px] rounded-full bg-[#cfe7f3]" />
              <div className="absolute left-8 bottom-8 h-[270px] w-[560px] rounded-full bg-[#b9dbe9]" />
              <div className="absolute left-0 top-10 h-12 w-20 rounded-full bg-white/90" />
              <div className="absolute left-[260px] top-4 h-64 w-[168px] rounded-[28px] border-[8px] border-[#333] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
                <div className="h-6 rounded-t-[20px] bg-[#f7f7f7]" />
                <div className="px-4 py-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500">✦</span>
                    <span className="h-3 w-10 rounded-full bg-slate-200" />
                    <span className="text-[10px] text-slate-500">✓</span>
                  </div>
                  <div className="mt-3 h-2 w-24 rounded bg-slate-200" />
                  <div className="mt-2 grid gap-2">
                    <div className="h-2 rounded bg-slate-200" />
                    <div className="h-2 w-5/6 rounded bg-slate-200" />
                    <div className="h-2 w-4/5 rounded bg-slate-200" />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-[#f05a3f]" />
                    <span className="h-5 w-5 rounded-full bg-[#eaeaea]" />
                    <span className="h-5 w-5 rounded-full bg-[#7db3e2]" />
                  </div>
                  <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[10px] text-slate-500">
                    <span className="inline-block h-2 w-10 rounded bg-slate-300" />
                    <div className="mt-2 flex items-center justify-between">
                      <span className="h-2 w-12 rounded bg-slate-300" />
                      <span className="h-2 w-12 rounded bg-slate-300" />
                    </div>
                  </div>
                  <button className="mt-4 w-full rounded bg-[#b01e1e] py-2 text-[10px] font-semibold text-white">
                    PAY NOW
                  </button>
                </div>
              </div>

              <div className="absolute left-[18px] bottom-8 h-32 w-28 rounded-[14px] border-[6px] border-[#333] bg-transparent">
                <div className="absolute left-[-12px] bottom-[-10px] h-24 w-16 rounded-b-[16px] border-b-[6px] border-l-[6px] border-r-[6px] border-[#333]" />
                <div className="absolute left-[-10px] bottom-[-6px] h-4 w-4 rounded-full border-[4px] border-[#333]" />
                <div className="absolute left-3 top-4 h-12 w-10 border-l-[3px] border-b-[3px] border-[#333] rotate-[-18deg]" />
              </div>

              <div className="absolute left-[110px] top-[86px] h-[190px] w-[190px] rounded-[22px] border-[8px] border-[#b01e1e] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
                <div className="px-3 py-3">
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-12 rounded bg-slate-200" />
                    <div className="rounded bg-[#2f9c68] px-2 py-1 text-[8px] font-semibold text-white">
                      + Add Range
                    </div>
                  </div>
                  <div className="mt-3 rounded border border-slate-200 bg-white p-2">
                    <div className="grid grid-cols-[1.1fr_0.7fr_0.7fr] gap-2 text-[8px] text-slate-500">
                      <span>Variants/Quantity</span>
                      <span>Quantity</span>
                      <span>Discount</span>
                    </div>
                    <div className="mt-2 space-y-2">
                      {[
                        ["Medium/Orange", "12", "15"],
                        ["Large/Sea Green", "14", "18"],
                      ].map(([name, qty, discount]) => (
                        <div key={name} className="grid grid-cols-[1.1fr_0.7fr_0.7fr] gap-2">
                          <div className="rounded border border-slate-200 px-2 py-1 text-[8px] text-slate-500">
                            {name}
                          </div>
                          <div className="rounded border border-slate-200 px-2 py-1 text-[8px] text-slate-500">
                            {qty}
                          </div>
                          <div className="rounded border border-slate-200 px-2 py-1 text-[8px] text-slate-500">
                            {discount}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute right-[40px] top-[44px] h-[240px] w-[230px] rounded-[12px] border-[8px] border-[#7a0f0f] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.16)]">
                <div className="h-6 rounded-t-[4px] bg-[#f8f8f8]" />
                <div className="px-4 py-4">
                  <p className="text-[18px] font-black text-[#b01e1e]">B2B</p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-[9px] text-slate-500">
                    <div className="h-6 rounded bg-slate-100" />
                    <div className="h-6 rounded bg-slate-100" />
                    <div className="h-6 rounded bg-slate-100" />
                    <div className="h-6 rounded bg-slate-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="max-w-xl text-[clamp(2.2rem,3.7vw,3.7rem)] font-black leading-[0.98] tracking-[-0.05em] text-black">
              Variant-specific quantity discounts for detailed, flexible pricing
            </h2>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-9 text-slate-500">
              Tailor discounts according to your products! Offer unique quantity-based
              discount options for each variant, giving customers flexible choices.
              Helps to clear your stocked items by providing discounts for specific
              variants.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://apps.shopify.com/"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] border-4 border-[#353535] bg-[#ba4900] px-5 py-3 text-[1.05rem] font-semibold text-white shadow-[0_4px_0_#353535] transition hover:-translate-y-0.5"
              >
                <span className="text-lg">🛍</span>
                <span>Get it on Shopify</span>
              </a>
              <a
                href="/support#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-[4px] border-2 border-[#353535] bg-white px-6 py-3 text-[1.05rem] font-medium text-[#b94a00] transition hover:-translate-y-0.5 hover:bg-orange-50"
              >
                View Demo
              </a>
            </div>
          </div>
        </section>

        <section
          id="scheduled-promotions"
          className="grid gap-10 border-y border-slate-200/70 bg-[#fffdfb] px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-12 lg:py-14 xl:px-16"
        >
          <div className="flex flex-col justify-center">
            <h2 className="max-w-xl text-[clamp(2.2rem,3.7vw,3.7rem)] font-black leading-[0.98] tracking-[-0.05em] text-black">
              Schedule discounts for a seamless, time-based promotional offer
            </h2>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-9 text-slate-500">
              Plan ahead and let your promotions work like clockwork! Schedule your
              offers and promotions in advance to focus on your core tasks. DiscountRay
              will handle the rest on your behalf. Drive sales and wow your customers
              with time-based promotional offers easily and quickly.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://apps.shopify.com/"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] border-4 border-[#353535] bg-[#ba4900] px-5 py-3 text-[1.05rem] font-semibold text-white shadow-[0_4px_0_#353535] transition hover:-translate-y-0.5"
              >
                <span className="text-lg">🛍</span>
                <span>Get it on Shopify</span>
              </a>
              <a
                href="/support#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-[4px] border-2 border-[#353535] bg-white px-6 py-3 text-[1.05rem] font-medium text-[#b94a00] transition hover:-translate-y-0.5 hover:bg-orange-50"
              >
                View Demo
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[430px] items-center justify-center">
            <div className="absolute right-10 top-2 h-56 w-56 rounded-full bg-[#f6e4de] blur-3xl" />
            <div className="absolute left-16 top-8 h-20 w-20 rounded-full bg-[#f1d7cc] blur-2xl" />
            <div className="relative h-[360px] w-[560px] max-w-full">
              <img
                src="/discountray-schedule.webp"
                alt="Schedule discount illustration"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </section>

        <section
          id="support"
          className="border-y border-slate-200/70 bg-[#f8e8d8] px-5 py-10 sm:px-8 lg:px-12 xl:px-16"
        >
          <div className="grid gap-6 rounded-[28px] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#b94a00]">
                Support
              </span>
              <h2 className="mt-4 max-w-xl text-[clamp(2.2rem,3.6vw,3.3rem)] font-black leading-[0.96] tracking-[-0.05em] text-black">
                Need help? Contact and support live on one page.
              </h2>
              <p className="mt-4 max-w-xl text-[1.02rem] leading-8 text-slate-600">
                Use the support page for questions about installation, pricing,
                merchant setup, or policy details. It keeps the contact flow in one
                place, so users do not have to hunt between pages.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="/support"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[4px] border-4 border-[#353535] bg-[#ba4900] px-5 py-3 text-[1.05rem] font-semibold text-white shadow-[0_4px_0_#353535] transition hover:-translate-y-0.5"
                >
                  <span>Open Support Page</span>
                </a>
                <a
                  href="/support#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-[4px] border-2 border-[#353535] bg-white px-6 py-3 text-[1.05rem] font-medium text-[#b94a00] transition hover:-translate-y-0.5 hover:bg-orange-50"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-[#fff9f6] p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                What you&apos;ll find
              </p>
              <div className="mt-4 grid gap-3">
                {[
                  "A single support and contact page",
                  "Copyable support email and quick response note",
                  "FAQs for setup, billing, and policy questions",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
