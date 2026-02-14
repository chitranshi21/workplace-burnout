import Footer from "@/components/Footer";
import ContactForm from "@/components/business/ContactForm";

export default function BusinessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-sage-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full opacity-30 blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 bg-sage-300 rounded-full opacity-20 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-6">
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              For Businesses
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-900 mb-6 leading-tight">
              Invest in Your Team&apos;s
              <span className="text-emerald-600"> Mental Wellness</span>
            </h1>
            <p className="text-xl text-sage-600 mb-8 max-w-2xl mx-auto">
              REKINDLE is a Benelux-based corporate mental health platform that connects your employees with a dedicated network of over 100 certified psychologists, counsellors, and coaches for personalised one-on-one therapy — purpose-built for small businesses across Belgium, the Netherlands, and Luxembourg.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-900 mb-2">76%</div>
              <p className="text-sage-600 text-sm">of employees report workplace stress</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">3x</div>
              <p className="text-sage-600 text-sm">ROI on mental health programs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-900 mb-2">40%</div>
              <p className="text-sage-600 text-sm">reduction in absenteeism</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">92%</div>
              <p className="text-sage-600 text-sm">employee satisfaction rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sage-900 mb-4">
              Why Companies Choose Rekindle
            </h2>
            <p className="text-sage-600 max-w-2xl mx-auto">
              A comprehensive mental wellness solution designed for modern workplaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-sage-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-sage-800 mb-2">
                Licensed Professional Psychologists
              </h3>
              <p className="text-sage-600 text-sm">
                Access to licensed professional psychologists experienced in burnout and workplace stress, providing evidence-based therapeutic support tailored to your organization&apos;s needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-sage-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-sage-800 mb-2">
                Step-by-Step Guidance
              </h3>
              <p className="text-sage-600 text-sm">
                A structured approach covering Identification, Prevention, Recovery, and Post-Recovery Support to address burnout at every stage of the employee journey.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-sage-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-sage-800 mb-2">
                First Aid Intervention
              </h3>
              <p className="text-sage-600 text-sm">
                Psychological First Aid (PFA) for your workplace &mdash; an evidence-based approach to support employees during and after distressing events. Trained responders help stabilize affected team members, reduce acute stress, and connect them to ongoing professional care before issues escalate into chronic burnout.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-sage-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-sage-800 mb-2">
                Year-End Report
              </h3>
              <p className="text-sage-600 text-sm">
                Comprehensive annual report covering workplace stress statistics, employee satisfaction scores, burnout risk indicators, program engagement rates, absenteeism trends, and return-on-investment metrics &mdash; giving leadership actionable insights into workforce wellbeing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-sage-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-sage-800 mb-2">
                Specialized Company Assessments
              </h3>
              <p className="text-sage-600 text-sm">
                Custom assessments tailored to your organization&apos;s unique challenges, identifying department-specific stressors, cultural factors, and structural issues that contribute to employee burnout.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-sage-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-sage-800 mb-2">
                50% Discount on Therapy
              </h3>
              <p className="text-sage-600 text-sm">
                Employees enrolled through Rekindle receive a 50% discount on individual therapy sessions, making professional mental health support accessible and affordable for your entire team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sage-900 mb-4">
              Let&apos;s Talk
            </h2>
            <p className="text-sage-600 max-w-2xl mx-auto">
              Tell us about your organization and we&apos;ll get back to you with a tailored plan for your team&apos;s wellbeing.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
