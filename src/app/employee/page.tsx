"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDemoEmployee } from "@/hooks/useDemoState";

export default function EmployeePortalPage() {
  const router = useRouter();
  const { loginWithCode } = useDemoEmployee();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!code.trim()) {
      setError("Please enter a company code");
      setIsLoading(false);
      return;
    }

    const result = loginWithCode(code.trim());

    if (result) {
      router.push("/employee/dashboard");
    } else {
      setError("Invalid company code. Please check with your HR department.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <span className="font-semibold text-xl text-sage-800">Rekindle</span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-sage-100 p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-sage-900 mb-2 text-center">
            Employee Portal
          </h1>
          <p className="text-sage-600 text-center mb-8">
            Enter your company code to access your mental wellness benefits.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="code"
                className="block text-sm font-medium text-sage-700 mb-2"
              >
                Company Code
              </label>
              <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value.toUpperCase());
                  setError("");
                }}
                placeholder="e.g., ACME2024"
                className={`w-full px-4 py-3 rounded-xl border ${
                  error ? "border-red-300" : "border-sage-200"
                } focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-center text-lg tracking-wider font-mono uppercase`}
                maxLength={12}
              />
              {error && (
                <p className="mt-2 text-sm text-red-500 text-center">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-sage-600 text-white rounded-xl font-medium hover:bg-sage-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  Verifying...
                </>
              ) : (
                <>
                  Access Portal
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-sage-100">
            <p className="text-sm text-sage-500 text-center">
              Don&apos;t have a code?{" "}
              <span className="text-sage-700">
                Contact your HR department to get enrolled.
              </span>
            </p>
          </div>
        </div>

        {/* Demo hint */}
        <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <div>
              <p className="text-sm font-medium text-amber-800">
                Demo Mode
              </p>
              <p className="text-sm text-amber-700">
                Try code <strong className="font-mono">ACME2024</strong> to explore the employee experience.
              </p>
            </div>
          </div>
        </div>

        {/* Business link */}
        <p className="text-center mt-6 text-sm text-sage-500">
          Are you an employer?{" "}
          <Link href="/business" className="text-sage-700 hover:text-sage-900 font-medium">
            Learn about our B2B plans
          </Link>
        </p>
      </div>
    </div>
  );
}
