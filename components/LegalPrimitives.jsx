export function Container({ children }) {
  return <div className="grid gap-4">{children}</div>;
}

export function Card({ children, className = "" }) {
  return (
    <section
      className={`rounded-[24px] border border-slate-200/70 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-slate-300/70 sm:p-8 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionTitle({ kicker, title, text, id }) {
  return (
    <div id={id}>
      {kicker ? (
        <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
          {kicker}
        </span>
      ) : null}
      <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {text ? <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}

export function Divider() {
  return <div className="my-1 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />;
}

export function HighlightBox({ title, children }) {
  return (
    <aside className="rounded-[20px] border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5">
      <p className="text-sm font-bold text-blue-800">{title}</p>
      <p className="mt-2 text-sm leading-7 text-slate-600">{children}</p>
    </aside>
  );
}

export function AnchorList({ items }) {
  return (
    <nav className="flex flex-wrap gap-2" aria-label="Section links">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export function Badge({ children, tone = "default" }) {
  const toneClass =
    tone === "blue"
      ? "border-blue-200 bg-blue-50 text-blue-700"
      : tone === "violet"
        ? "border-violet-200 bg-violet-50 text-violet-700"
        : "border-slate-200 bg-slate-50 text-slate-600";

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${toneClass}`}
    >
      {children}
    </span>
  );
}

