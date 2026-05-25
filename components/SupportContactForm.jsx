"use client";

import { useMemo, useRef, useState } from "react";

export function SupportContactForm() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [attachments, setAttachments] = useState([]);
  const fileInputRef = useRef(null);

  const attachmentLabel = useMemo(() => {
    if (attachments.length === 0) {
      return "No images attached";
    }

    if (attachments.length === 1) {
      return `${attachments[0].name || "Screenshot"} attached`;
    }

    return `${attachments.length} images attached`;
  }, [attachments]);

  const addFiles = (files) => {
    const imageFiles = Array.from(files || []).filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length === 0) {
      return;
    }

    setAttachments((current) => [...current, ...imageFiles].slice(0, 5));
  };

  const handleFileChange = (event) => {
    addFiles(event.target.files);
    event.target.value = "";
  };

  const handlePaste = (event) => {
    const pastedFiles = Array.from(event.clipboardData?.items || [])
      .filter((item) => item.kind === "file" && item.type.startsWith("image/"))
      .map((item) => item.getAsFile())
      .filter(Boolean);

    if (pastedFiles.length > 0) {
      addFiles(pastedFiles);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(form);

    attachments.forEach((file) => {
      formData.append("attachments", file);
    });

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to send message.");
      }

      form.reset();
      setAttachments([]);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Unable to send message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-[22px] bg-[#a98272] p-6 sm:p-8"
      aria-label="Support contact form"
    >
      <div className="grid gap-5">
        {[
          { label: "Name", name: "name", placeholder: "Your full name", type: "text" },
          { label: "Email", name: "email", placeholder: "Email address", type: "email" },
          { label: "Subject", name: "subject", placeholder: "How can we help?", type: "text" },
        ].map((field) => (
          <label key={field.label} className="block">
            <span className="mb-3 block text-[1.05rem] font-medium text-white">
              {field.label} <span className="text-rose-200">*</span>
            </span>
            <input
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required
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
            required
            onPaste={handlePaste}
            className="w-full rounded-[16px] border border-slate-200 bg-white px-4 py-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#ba4900] focus:ring-4 focus:ring-[#ba4900]/10"
          />
          <p className="mt-2 text-xs leading-6 text-white/85">
            Paste a screenshot directly into this box, or attach an image below.
          </p>
        </label>

        <div className="rounded-[16px] border border-white/15 bg-white/10 p-4 text-white">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex min-h-11 items-center justify-center rounded-[10px] border border-white/30 bg-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Attach image
            </button>
            <span className="text-sm text-white/85">{attachmentLabel}</span>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />

          {attachments.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-3">
              {attachments.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className="flex items-center gap-3 rounded-[12px] border border-white/20 bg-white/10 px-3 py-2 text-xs text-white"
                >
                  <span className="max-w-[200px] truncate">{file.name || `Image ${index + 1}`}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setAttachments((current) => current.filter((_, currentIndex) => currentIndex !== index))
                    }
                    className="rounded-full bg-black/20 px-2 py-0.5 text-[11px] font-semibold transition hover:bg-black/30"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-12 items-center justify-center rounded-[4px] border-4 border-[#353535] bg-[#ba4900] px-5 py-3 text-[1.05rem] font-semibold text-white shadow-[0_4px_0_#353535] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" ? (
          <p className="rounded-[14px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
            Message sent successfully. We will reply by email.
          </p>
        ) : null}

        {status === "error" ? (
          <p className="rounded-[14px] border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-800">
            {errorMessage || "Something went wrong while sending your message."}
          </p>
        ) : null}
      </div>
    </form>
  );
}
