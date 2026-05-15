"use client";

const DEFAULT_SUBJECT = "Support Request";

function buildMailto(recipient, values) {
  const subject = values.subject?.trim() || DEFAULT_SUBJECT;
  const bodyLines = [
    `Name: ${values.name?.trim() || ""}`,
    `Email: ${values.email?.trim() || ""}`,
    "",
    values.message?.trim() || "",
  ];

  const params = new URLSearchParams();
  params.set("subject", subject);
  params.set("body", bodyLines.join("\n"));

  return `mailto:${recipient}?${params.toString()}`;
}

export function SupportContactForm({ recipient }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const mailto = buildMailto(recipient, {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 rounded-[22px] bg-[#a98272] p-6 sm:p-8">
      <div className="grid gap-5">
        {[
          { label: "Name", name: "name", placeholder: "Your full name" },
          { label: "Email", name: "email", placeholder: "Email address" },
          { label: "Subject", name: "subject", placeholder: "How can we help?" },
        ].map((field) => (
          <label key={field.label} className="block">
            <span className="mb-3 block text-[1.05rem] font-medium text-white">
              {field.label} <span className="text-rose-200">*</span>
            </span>
            <input
              name={field.name}
              type="text"
              placeholder={field.placeholder}
              className="h-16 w-full rounded-[16px] border border-slate-200 bg-white px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#ba4900] focus:ring-4 focus:ring-[#ba4900]/10"
            />
          </label>
        ))}

        <label className="block">
          <span className="mb-3 block text-[1.05rem] font-medium text-white">
            Message <span className="text-rose-200">*</span>
          </span>
          <textarea
            name="message"
            rows={5}
            placeholder="Write your message"
            className="w-full rounded-[16px] border border-slate-200 bg-white px-4 py-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#ba4900] focus:ring-4 focus:ring-[#ba4900]/10"
          />
        </label>

        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-[4px] border-4 border-[#353535] bg-[#ba4900] px-5 py-3 text-[1.05rem] font-semibold text-white shadow-[0_4px_0_#353535] transition hover:-translate-y-0.5"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
