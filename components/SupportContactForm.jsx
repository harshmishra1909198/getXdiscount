"use client";

import { useState } from "react";

export function SupportContactForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setMessage("");

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to send message.");
      }

      form.reset();
      setStatus("success");
      setMessage("Message sent successfully.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send message.");
    }
  };

  const fields = [
    { label: "Name", name: "name", type: "text", placeholder: "Your full name" },
    { label: "Email", name: "email", type: "email", placeholder: "Email address" },
    { label: "Subject", name: "subject", type: "text", placeholder: "How can we help?" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="grid gap-4">
        {fields.map((field) => (
          <label key={field.name} className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">
              {field.label}
            </span>
            <input
              required
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              className="h-12 w-full rounded-[14px] border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#ba4900] focus:ring-4 focus:ring-[#ba4900]/10"
            />
          </label>
        ))}

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Message</span>
          <textarea
            required
            name="message"
            rows={6}
            placeholder="Write your message"
            className="w-full rounded-[14px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#ba4900] focus:ring-4 focus:ring-[#ba4900]/10"
          />
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-12 items-center justify-center rounded-[14px] border border-[#5b2500] bg-[#ba4900] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(186,73,0,0.18)] transition hover:bg-[#d15603] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {message ? (
          <p
            className={`rounded-[14px] px-4 py-3 text-sm font-medium ${
              status === "success"
                ? "border border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border border-rose-200 bg-rose-50 text-rose-800"
            }`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
