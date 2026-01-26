'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface PreventionTip {
  id: string;
  title: string;
  icon: string;
  description: string;
  doList: string[];
  dontList?: string[];
  quote?: string;
}

const preventionTips: PreventionTip[] = [
  {
    id: 'sleep',
    title: 'Sleep',
    icon: 'moon',
    description: 'Many people with burnout symptoms experience sleep problems. The hormone melatonin is naturally produced to make you feel sleepy, but this rhythm can be disrupted by chronic stress and excessive cortisol production.',
    doList: [
      'Relaxation exercises or meditation',
      'Yoga',
      'Daytime exercise',
      'Sauna',
      'Massage',
      'Light dinner',
      'Intimacy',
      'Dark bedroom',
      'Walking before bed',
      'Warm shower or bath before bed'
    ],
    dontList: [
      'Alcohol',
      'Light exposure',
      'Coffee',
      'Stress',
      'Adrenaline',
      'Worrying',
      'Intensive internet use',
      'Intense conversations'
    ],
    quote: 'If awake for more than 15 minutes, get out of bed and do a quiet activity until comfortable.'
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    icon: 'leaf',
    description: "Good nutrition during burnout helps strengthen your body. When experiencing symptoms, it's easy to reach for quick sugars and carbohydrates, skip meals, or crave the wrong foods.",
    doList: [
      'Magnesium: whole grains, leafy vegetables, fruit, legumes, seeds, nuts - combats tension and stress',
      'Vitamin B: meat, fish, eggs, potatoes, cheese, vegetables - gives energy and improves mood',
      'Folic acid: broccoli, spinach, Brussels sprouts, whole-wheat bread - better memory and concentration',
      'Vitamin C: fruits - essential for immune system',
      'Omega-3 fatty acids: salmon, mackerel, eel, herring - good for heart and brain'
    ]
  },
  {
    id: 'nature',
    title: 'Nature',
    icon: 'tree',
    description: 'Nature is a great place to recover from burnout symptoms. It provides peace and space to distract yourself. Gardening lowers the stress hormone cortisol.',
    doList: [
      'LOOK - What do you see around you? What colours and shapes?',
      'SMELL - What scents do you perceive? Smell leaves and flowers',
      'FEEL - The wind, the sun, touch tree bark or leaves',
      'HEAR - Birds rustling, wind in the trees',
      'Walk slower than normal and focus on senses one by one',
      'Write down your experiences when you get home'
    ],
    quote: 'Nature offers gentle fascination - you naturally and effortlessly absorb it, helping recover from attention fatigue.'
  },
  {
    id: 'exercise',
    title: 'Exercise',
    icon: 'activity',
    description: 'Body movement is fundamental to human health. Exercise is always important, but even more so during burnout. Even if feeling drained, exercise is healthy!',
    doList: [
      'Commit to at least half an hour of exercise every day',
      'Walking, cycling, or running helps get out of your head',
      'Exercise releases endorphins that make you feel better',
      'A half-hour walk before bed helps you "let go"'
    ],
    quote: 'Humans evolved to move. The modern workplace offers too many opportunities to conserve energy.'
  },
  {
    id: 'boundaries',
    title: 'Boundary Setting',
    icon: 'shield',
    description: 'Speaking out for yourself boosts self-esteem and confidence. Overworking is one of the most common boundary-related problems at work.',
    doList: [
      'Set clear work hours and stick to them',
      'Avoid answering emails at midnight or on weekends',
      'Recognize that your personal life matters',
      'Speak up even when others won\'t listen',
      'Understand boundaries benefit everyone - family, employer, coworkers'
    ],
    quote: 'Boundaries are good for everyone, but they aren\'t always easy to maintain. There\'s no guarantee setting them will improve your situation, but not setting them leads to burnout.'
  },
  {
    id: 'mindfulness',
    title: 'Mindfulness',
    icon: 'brain',
    description: "Mindfulness is about being present in the here and now. It's about accepting life with compassion and a non-judgmental stance.",
    doList: [
      'Bring attention back to now throughout the day',
      'Focus on your breathing and settle into your body',
      'Practice the 4-7-8 breathing technique:',
      '  1. Inhale through nose for 4 counts',
      '  2. Hold breath for 7 counts',
      '  3. Exhale through mouth for 8 counts'
    ],
    quote: 'This breathing can help focus mind and body away from worries and repetitive thoughts.'
  },
  {
    id: 'accept',
    title: 'Accept & Let Go',
    icon: 'heart',
    description: 'Accepting what you can\'t change is rational advice. You have little or no control over many things in life.',
    doList: [
      'Accept reality as it presents itself',
      'Be aware you have limited control',
      'Go with the flow instead of swimming against the current',
      'Release the illusion of control that causes tension'
    ],
    quote: 'Trying hard to maintain the appearance of control creates even more tension - precisely what you didn\'t want.'
  },
  {
    id: 'life-events',
    title: 'Life Events',
    icon: 'calendar',
    description: 'Expanding family, divorce, loss, job insecurity, and health problems can temporarily throw you off balance. Everyone has their own way and pace of coping.',
    doList: [
      'Take time to regain balance and process loss',
      'Seek support from those who listen without judgement',
      'Find people who let you cry it out and are there for you',
      'Consider professional help to guide you through loss'
    ]
  }
];

const iconMap: Record<string, React.ReactNode> = {
  moon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  leaf: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  tree: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  activity: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  brain: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  heart: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  calendar: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
};

export default function PreventionPage() {
  const [expandedTip, setExpandedTip] = useState<string | null>('sleep');

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50/50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-sage-100 to-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sage-700 hover:text-sage-800 mb-6 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-sage-200 flex items-center justify-center">
              <svg className="w-7 h-7 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-sage-900">Prevention Tips</h1>
              <p className="text-sage-700">Phase 2 of your wellbeing journey</p>
            </div>
          </div>
          <p className="text-sage-600 max-w-2xl">
            Better to avoid the worst and start using these pre-burnout tips. You can start restoring your energy balance yourself with these evidence-based strategies.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Quote */}
        <div className="bg-sage-50 rounded-2xl p-6 mb-8 border border-sage-100">
          <blockquote className="text-center">
            <p className="text-sage-700 italic">
              &ldquo;Burnout is similar to riding a camel through a very hot desert until it dies. In order to keep riding and avoid burnout, the camel needs to eat, drink, sleep, and reflect during breaks.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* Tips Accordion */}
        <div className="space-y-4">
          {preventionTips.map((tip, index) => (
            <div
              key={tip.id}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                expandedTip === tip.id ? 'border-sage-300 shadow-lg' : 'border-sage-100'
              }`}
            >
              <button
                onClick={() => setExpandedTip(expandedTip === tip.id ? null : tip.id)}
                className="w-full p-5 flex items-center gap-4 text-left"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                  expandedTip === tip.id ? 'bg-sage-500 text-white' : 'bg-sage-100 text-sage-600'
                }`}>
                  {iconMap[tip.icon]}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-sage-400 uppercase">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <h3 className="text-lg font-semibold text-sage-800">{tip.title}</h3>
                  </div>
                  {expandedTip !== tip.id && (
                    <p className="text-sm text-sage-500 mt-1 line-clamp-1">{tip.description}</p>
                  )}
                </div>
                <svg
                  className={`w-5 h-5 text-sage-400 transition-transform flex-shrink-0 ${
                    expandedTip === tip.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedTip === tip.id && (
                <div className="px-5 pb-5 pt-0">
                  <div className="border-t border-sage-100 pt-5">
                    <p className="text-sage-600 mb-6">{tip.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Do List */}
                      <div className="bg-sage-50 rounded-xl p-4">
                        <h4 className="font-medium text-sage-700 mb-3 flex items-center gap-2">
                          <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {tip.dontList ? 'For Good Results' : 'Tips'}
                        </h4>
                        <ul className="space-y-2">
                          {tip.doList.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-sage-600">
                              <span className="text-sage-400 mt-1">-</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Don't List */}
                      {tip.dontList && (
                        <div className="bg-red-50 rounded-xl p-4">
                          <h4 className="font-medium text-red-700 mb-3 flex items-center gap-2">
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Avoid
                          </h4>
                          <ul className="space-y-2">
                            {tip.dontList.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-red-600">
                                <span className="text-red-400 mt-1">-</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Quote */}
                    {tip.quote && (
                      <div className="mt-4 bg-amber-50 rounded-xl p-4 border border-amber-100">
                        <p className="text-sm text-amber-700 italic">
                          &ldquo;{tip.quote}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Professional Help CTA */}
        <div className="mt-12 bg-gradient-to-br from-sage-500 to-sage-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-2">Need Professional Support?</h3>
              <p className="text-sage-100">
                If you&apos;re concerned about physical or mental symptoms, consult a specialist psychologist or counsellor through an Employee Assistance Programme (EAP) referral in your company.
              </p>
            </div>
            <a
              href="https://pauloviawe.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-sage-700 rounded-xl font-medium hover:bg-sage-50 transition-colors flex-shrink-0"
            >
              Contact Paul Oviawe
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link href="/identification" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Identification
          </Link>
          <Link href="/recovery" className="inline-flex items-center gap-2 px-5 py-2.5 bg-sage-600 text-white rounded-xl font-medium hover:bg-sage-700 transition-colors">
            Next: Recovery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
