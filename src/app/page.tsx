import Link from "next/link";
import WorldMap from "@/components/WorldMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sage-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sage-200 rounded-full opacity-30 blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-sage-300 rounded-full opacity-20 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 rounded-full text-sage-700 text-sm font-medium mb-6">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Your Wellbeing Matters
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-900 mb-6 leading-tight">
              Rekindle
            </h1>
            <p className="text-xl sm:text-2xl text-sage-600 mb-4">
              Your Guide to Workplace Wellbeing
            </p>
            <p className="text-sage-500 mb-8 max-w-2xl mx-auto">
              Identify the signs of burnout, learn prevention strategies, and
              discover your path to recovery with evidence-based tools and
              guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sage-600 text-white rounded-xl font-medium hover:bg-sage-700 transition-colors shadow-lg shadow-sage-200"
              >
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                Self Assessment
              </Link>
              <Link
                href="/identification"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-sage-700 rounded-xl font-medium hover:bg-sage-50 transition-colors border border-sage-200"
              >
                Learn More
                <svg
                  className="w-4 h-4"
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
              </Link>
            </div>

            {/* Attribution Section */}
            <div className="flex flex-row items-center justify-center gap-4">
              {/* Author Attribution */}
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-sm border border-sage-100">
                <div className="text-left">
                  <p className="text-sm font-medium text-sage-600">Author</p>
                  <a
                    href="https://pauloviawe.nl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-sage-500 hover:text-sage-600 transition-colors"
                  >
                    pauloviawe.nl
                  </a>
                </div>
              </div>

              {/* Builder Attribution */}
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-sm border border-sage-100">
                <div className="text-left">
                  <p className="text-sm font-medium text-sage-600">Builder</p>
                  <a
                    href="https://www.linkedin.com/in/shubhamchitranshi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-sage-500 hover:text-sage-600 transition-colors"
                  >
                    Shubham
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
              Your Journey to Work-Life Balance
            </h2>
            <p className="text-sage-600 max-w-2xl mx-auto">
              Workplace burnout is a syndrome resulting from chronic workplace
              stress that has not been successfully managed. Navigate through
              three essential phases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Identify Card */}
            <Link href="/identification" className="group">
              <div className="card-hover bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-sage-800 mb-2">
                  1. Identification
                </h3>
                <p className="text-sage-600 text-sm mb-4">
                  Recognize the physical, emotional, and behavioral signs of
                  burnout before they escalate.
                </p>
                <div className="flex items-center text-amber-600 text-sm font-medium">
                  Learn the signs
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                </div>
              </div>
            </Link>

            {/* Prevent Card */}
            <Link href="/prevention" className="group">
              <div className="card-hover bg-gradient-to-br from-sage-50 to-emerald-50 rounded-2xl p-6 border border-sage-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-sage-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-sage-800 mb-2">
                  2. Prevention
                </h3>
                <p className="text-sage-600 text-sm mb-4">
                  Build sustainable habits around sleep, nutrition, exercise,
                  and boundaries.
                </p>
                <div className="flex items-center text-sage-600 text-sm font-medium">
                  Prevention tips
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                </div>
              </div>
            </Link>

            {/* Recover Card */}
            <Link href="/recovery" className="group">
              <div className="card-hover bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-6 border border-sky-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-sage-800 mb-2">
                  3. Recovery
                </h3>
                <p className="text-sage-600 text-sm mb-4">
                  Follow a structured 10-step recovery toolbox to regain your
                  energy and balance.
                </p>
                <div className="flex items-center text-sky-600 text-sm font-medium">
                  Recovery toolbox
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHO Quote */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="text-center">
            <svg
              className="w-10 h-10 text-sage-300 mx-auto mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl sm:text-2xl text-sage-700 italic mb-6">
              &ldquo;Burnout is a syndrome resulting from chronic workplace
              stress that has not been successfully managed.&rdquo;
            </p>
            <cite className="text-sage-500 not-italic font-medium">
              &mdash; World Health Organization (WHO)
            </cite>
          </blockquote>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
              Global Work-Life Balance Map
            </h2>
            <p className="text-sage-600 max-w-2xl mx-auto">
              Work-life balance sensitivity varies across regions. Western &amp;
              Central Europe, Canada, and Japan prioritize balance and avoid
              burnout. Other regions face greater work-life imbalances.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <WorldMap />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-sage-600 to-sage-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Not sure if you&apos;re experiencing burnout?
          </h2>
          <p className="text-sage-100 mb-8 max-w-xl mx-auto">
            Take our quick self-assessment to understand your current stress
            levels and get personalized recommendations.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-sage-700 rounded-xl font-medium hover:bg-sage-50 transition-colors"
          >
            Start Assessment
            <svg
              className="w-4 h-4"
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
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
