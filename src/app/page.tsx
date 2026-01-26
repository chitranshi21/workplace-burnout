import Link from 'next/link';
import WorldMap from '@/components/WorldMap';

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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
              Identify the signs of burnout, learn prevention strategies, and discover your path to recovery with evidence-based tools and guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sage-600 text-white rounded-xl font-medium hover:bg-sage-700 transition-colors shadow-lg shadow-sage-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Take Self-Assessment
              </Link>
              <Link
                href="/identification"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-sage-700 rounded-xl font-medium hover:bg-sage-50 transition-colors border border-sage-200"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Author Attribution */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-sm border border-sage-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center text-white font-semibold">
                PO
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-sage-800">Paul Oviawe</p>
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
          </div>
        </div>
      </section>

      {/* Journey Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
              Your Journey to Balance
            </h2>
            <p className="text-sage-600 max-w-2xl mx-auto">
              Workplace burnout is a syndrome resulting from chronic workplace stress that has not been successfully managed. Navigate through three essential phases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Identify Card */}
            <Link href="/identification" className="group">
              <div className="card-hover bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-sage-800 mb-2">1. Identify</h3>
                <p className="text-sage-600 text-sm mb-4">
                  Recognize the physical, emotional, and behavioral signs of burnout before they escalate.
                </p>
                <div className="flex items-center text-amber-600 text-sm font-medium">
                  Learn the signs
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Prevent Card */}
            <Link href="/prevention" className="group">
              <div className="card-hover bg-gradient-to-br from-sage-50 to-emerald-50 rounded-2xl p-6 border border-sage-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-sage-800 mb-2">2. Prevent</h3>
                <p className="text-sage-600 text-sm mb-4">
                  Build sustainable habits around sleep, nutrition, exercise, and boundaries.
                </p>
                <div className="flex items-center text-sage-600 text-sm font-medium">
                  Prevention tips
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Recover Card */}
            <Link href="/recovery" className="group">
              <div className="card-hover bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-6 border border-sky-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-sage-800 mb-2">3. Recover</h3>
                <p className="text-sage-600 text-sm mb-4">
                  Follow a structured 10-step recovery toolbox to regain your energy and balance.
                </p>
                <div className="flex items-center text-sky-600 text-sm font-medium">
                  Recovery toolbox
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
            <svg className="w-10 h-10 text-sage-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl sm:text-2xl text-sage-700 italic mb-6">
              &ldquo;Burnout is a syndrome resulting from chronic workplace stress that has not been successfully managed.&rdquo;
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
              Global Burnout Risk Map
            </h2>
            <p className="text-sage-600 max-w-2xl mx-auto">
              Workplace burnout risk varies significantly across regions based on work culture, regulations, and societal norms. Western Europe leads with strong work-life balance policies.
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
            Take our quick self-assessment to understand your current stress levels and get personalized recommendations.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-sage-700 rounded-xl font-medium hover:bg-sage-50 transition-colors"
          >
            Start Assessment
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-sage-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-sage-700 flex items-center justify-center">
                <svg className="w-5 h-5 text-sage-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="text-sage-300 font-medium">Rekindle</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://pauloviawe.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage-400 hover:text-sage-200 transition-colors text-sm"
              >
                By Paul Oviawe
              </a>
              <span className="text-sage-600">|</span>
              <span className="text-sage-400 text-sm">
                Stress and Anxiety Relief
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
