export function LegalLayout({ title, description, children, badge = "Discountifier App" }) {
  return (
    <div className="min-h-screen bg-[#fff9f6]">
      <main className="w-full pb-16 pt-8">
        <section className="overflow-hidden rounded-none bg-[#fff9f6] px-5 py-10 sm:px-8 lg:px-12 lg:py-14 xl:px-16">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
              {badge}
            </span>
            <h1 className="mt-4 max-w-[11ch] text-[clamp(2.8rem,5.8vw,5.2rem)] font-black leading-[0.92] tracking-[-0.06em] text-black">
              {title}
            </h1>
            <p className="mt-7 max-w-[40rem] text-[1.08rem] leading-9 text-slate-700">
              {description}
            </p>
          </div>
        </section>

        <div className="mt-6 px-5 sm:px-8 lg:px-12 xl:px-16">{children}</div>
      </main>
    </div>
  );
}
