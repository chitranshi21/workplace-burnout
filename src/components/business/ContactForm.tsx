"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  orgName: string;
  orgWebsite: string;
  phone: string;
  email: string;
  companySize: string;
  location: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    orgName: "",
    orgWebsite: "",
    phone: "",
    email: "",
    companySize: "",
    location: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-8 border border-sage-100 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-sage-900 mb-2">Thank You!</h3>
        <p className="text-sage-600">
          We&apos;ve received your inquiry and will get back to you shortly.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-sage-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sage-800 placeholder-sage-400";

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-sage-100">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="orgName" className="block text-sm font-medium text-sage-700 mb-1">
            Organisation Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="orgName"
            name="orgName"
            required
            value={formData.orgName}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your company name"
          />
        </div>

        <div>
          <label htmlFor="orgWebsite" className="block text-sm font-medium text-sage-700 mb-1">
            Organisation Website
          </label>
          <input
            type="url"
            id="orgWebsite"
            name="orgWebsite"
            value={formData.orgWebsite}
            onChange={handleChange}
            className={inputClasses}
            placeholder="https://example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-sage-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="companySize" className="block text-sm font-medium text-sage-700 mb-1">
            Number of Employees <span className="text-red-500">*</span>
          </label>
          <select
            id="companySize"
            name="companySize"
            required
            value={formData.companySize}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select company size</option>
            <option value="1-50">1 - 50</option>
            <option value="51-200">51 - 200</option>
            <option value="201-500">201 - 500</option>
            <option value="501-1000">501 - 1,000</option>
            <option value="1001+">1,000+</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="location" className="block text-sm font-medium text-sage-700 mb-1">
            Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            className={inputClasses}
            placeholder="City, Country"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Tell us about your team's needs..."
          />
        </div>
      </div>

      {status === "error" && (
        <div className="mt-4 p-3 rounded-xl bg-red-50 text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      <div className="mt-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
