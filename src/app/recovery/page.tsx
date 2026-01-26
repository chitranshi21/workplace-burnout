'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface RecoveryStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  tips: string[];
}

const recoverySteps: RecoveryStep[] = [
  {
    number: 1,
    title: 'Acknowledge Burnout',
    description: "Admit you're feeling burnt out - it's the first step to feeling better.",
    icon: 'check',
    color: 'emerald',
    tips: [
      "Recognize that burnout is real and valid",
      "Don't minimize your feelings",
      "Acceptance is the foundation of recovery",
      "Be honest with yourself about your current state"
    ]
  },
  {
    number: 2,
    title: 'Take a Break',
    description: 'Give yourself time away from work - it can do wonders.',
    icon: 'pause',
    color: 'sky',
    tips: [
      "Use your vacation days - they exist for a reason",
      "Even short breaks help restore energy",
      "Step away from work-related devices",
      "Create mental distance from work responsibilities"
    ]
  },
  {
    number: 3,
    title: 'Prioritize Rest',
    description: 'Get plenty of sleep - your body needs it to bounce back.',
    icon: 'moon',
    color: 'indigo',
    tips: [
      "Aim for 7-9 hours of quality sleep",
      "Create a consistent sleep schedule",
      "Make your bedroom a sanctuary for rest",
      "Avoid screens before bedtime"
    ]
  },
  {
    number: 4,
    title: 'Relax Your Mind',
    description: 'Try yoga or meditation - they really help chill your mind out.',
    icon: 'brain',
    color: 'purple',
    tips: [
      "Practice the 4-7-8 breathing technique",
      "Start with just 5 minutes of daily meditation",
      "Try body scan relaxation exercises",
      "Use guided meditation apps if helpful"
    ]
  },
  {
    number: 5,
    title: 'Recharge in Nature',
    description: 'Go outdoors - nature has a calming effect and helps recharge your batteries.',
    icon: 'tree',
    color: 'green',
    tips: [
      "Take daily walks in green spaces",
      "Practice forest bathing (shinrin-yoku)",
      "Garden or tend to plants",
      "Simply sit outside and observe nature"
    ]
  },
  {
    number: 6,
    title: 'Unwind Regularly',
    description: 'Find activities that help you unwind - make relaxation a regular thing.',
    icon: 'coffee',
    color: 'amber',
    tips: [
      "Schedule relaxation like appointments",
      "Find what truly relaxes you personally",
      "Make unwinding non-negotiable",
      "Try warm baths, reading, or hobbies"
    ]
  },
  {
    number: 7,
    title: 'Embrace Creativity',
    description: "Get into something creative - it's a great way to distract yourself positively.",
    icon: 'palette',
    color: 'pink',
    tips: [
      "Engage in art, music, or writing",
      "Try new creative hobbies",
      "Creativity doesn't require perfection",
      "Focus on the process, not the outcome"
    ]
  },
  {
    number: 8,
    title: 'Disconnect Regularly',
    description: 'Take breaks from your phone - digital detoxing can clear your mind.',
    icon: 'phone-off',
    color: 'slate',
    tips: [
      "Set phone-free times each day",
      "Turn off non-essential notifications",
      "Create tech-free zones in your home",
      "Take weekend digital sabbaticals"
    ]
  },
  {
    number: 9,
    title: 'Identify Burnout Triggers',
    description: 'Figure out what caused your burnout - it helps prevent it in the future.',
    icon: 'search',
    color: 'orange',
    tips: [
      "Keep a journal of stress patterns",
      "Notice what drains your energy most",
      "Identify workplace triggers specifically",
      "Recognize personal vulnerability factors"
    ]
  },
  {
    number: 10,
    title: 'Make Positive Changes',
    description: 'Make adjustments - tweak things to reduce stress and find more balance.',
    icon: 'refresh',
    color: 'teal',
    tips: [
      "Set and maintain healthy boundaries",
      "Communicate needs to your employer",
      "Consider role or workload changes",
      "Build sustainable work habits"
    ]
  }
];

const iconMap: Record<string, React.ReactNode> = {
  'check': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  'pause': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'moon': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
  'brain': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  'tree': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'coffee': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  'palette': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  'phone-off': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  'search': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  'refresh': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  )
};

const colorClasses: Record<string, { bg: string; text: string; border: string; light: string }> = {
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-200', light: 'bg-emerald-50' },
  sky: { bg: 'bg-sky-500', text: 'text-sky-600', border: 'border-sky-200', light: 'bg-sky-50' },
  indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600', border: 'border-indigo-200', light: 'bg-indigo-50' },
  purple: { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200', light: 'bg-purple-50' },
  green: { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-200', light: 'bg-green-50' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-200', light: 'bg-amber-50' },
  pink: { bg: 'bg-pink-500', text: 'text-pink-600', border: 'border-pink-200', light: 'bg-pink-50' },
  slate: { bg: 'bg-slate-500', text: 'text-slate-600', border: 'border-slate-200', light: 'bg-slate-50' },
  orange: { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-200', light: 'bg-orange-50' },
  teal: { bg: 'bg-teal-500', text: 'text-teal-600', border: 'border-teal-200', light: 'bg-teal-50' }
};

export default function RecoveryPage() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const toggleComplete = (stepNumber: number) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepNumber)) {
      newCompleted.delete(stepNumber);
    } else {
      newCompleted.add(stepNumber);
    }
    setCompletedSteps(newCompleted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-sky-100 to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-800 mb-6 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-sky-200 flex items-center justify-center">
              <svg className="w-7 h-7 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-sage-900">Recovery Toolbox</h1>
              <p className="text-sky-700">Phase 3 of your wellbeing journey</p>
            </div>
          </div>
          <p className="text-sage-600 max-w-2xl">
            Prioritizing self-care and setting boundaries are essential steps to preventing and recovering from burnout. Follow these 10 steps to regain your energy and balance.
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-sage-100 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-sage-700">Your Progress</span>
            <span className="text-sm text-sage-500">{completedSteps.size} of 10 steps</span>
          </div>
          <div className="h-2 bg-sage-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full transition-all duration-500"
              style={{ width: `${(completedSteps.size / 10) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="bg-sky-50 rounded-2xl p-6 mb-8 border border-sky-100">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sky-200 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-sage-800 mb-1">Remember</h3>
              <p className="text-sage-600 text-sm">
                Being fully ON during work hours and truly OFF when it&apos;s time to rest is a game-changer. It&apos;s like reminding yourself: &ldquo;I&apos;m my priority!&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Visual Toolbox Diagram */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 mb-8 border border-sage-100 shadow-sm">
          <h2 className="text-xl font-semibold text-sage-800 mb-6 text-center">The Burnout Recovery Toolbox</h2>

          {/* Circular Layout for Desktop, Grid for Mobile */}
          <div className="hidden md:block relative w-full max-w-lg mx-auto" style={{ height: '400px' }}>
            {/* Center Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full flex items-center justify-center shadow-lg z-10">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>

            {/* Steps in Circle */}
            {recoverySteps.map((step, index) => {
              const angle = (index * 36 - 90) * (Math.PI / 180);
              const radius = 160;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const colors = colorClasses[step.color];

              return (
                <button
                  key={step.number}
                  onClick={() => setSelectedStep(selectedStep === step.number ? null : step.number)}
                  className={`absolute w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    completedSteps.has(step.number)
                      ? 'ring-2 ring-emerald-400 ring-offset-2'
                      : ''
                  } ${
                    selectedStep === step.number
                      ? `${colors.bg} text-white shadow-lg scale-110`
                      : `${colors.light} ${colors.text}`
                  }`}
                  style={{
                    left: `calc(50% + ${x}px - 28px)`,
                    top: `calc(50% + ${y}px - 28px)`
                  }}
                >
                  <span className="font-bold text-sm">{step.number}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Grid */}
          <div className="md:hidden grid grid-cols-5 gap-2 mb-6">
            {recoverySteps.map((step) => {
              const colors = colorClasses[step.color];
              return (
                <button
                  key={step.number}
                  onClick={() => setSelectedStep(selectedStep === step.number ? null : step.number)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    completedSteps.has(step.number)
                      ? 'ring-2 ring-emerald-400'
                      : ''
                  } ${
                    selectedStep === step.number
                      ? `${colors.bg} text-white`
                      : `${colors.light} ${colors.text}`
                  }`}
                >
                  <span className="font-bold text-sm">{step.number}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Step Details */}
          {selectedStep && (
            <div className={`mt-6 rounded-xl p-5 border ${colorClasses[recoverySteps[selectedStep - 1].color].border} ${colorClasses[recoverySteps[selectedStep - 1].color].light}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${colorClasses[recoverySteps[selectedStep - 1].color].bg} text-white flex items-center justify-center`}>
                    {iconMap[recoverySteps[selectedStep - 1].icon]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800">
                      {selectedStep}. {recoverySteps[selectedStep - 1].title}
                    </h3>
                    <p className={`text-sm ${colorClasses[recoverySteps[selectedStep - 1].color].text}`}>
                      {recoverySteps[selectedStep - 1].description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleComplete(selectedStep)}
                  className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    completedSteps.has(selectedStep)
                      ? 'bg-emerald-500 border-emerald-500 text-white'
                      : 'border-sage-300 hover:border-sage-400'
                  }`}
                >
                  {completedSteps.has(selectedStep) && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
              <ul className="mt-4 space-y-2">
                {recoverySteps[selectedStep - 1].tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-sage-600">
                    <svg className={`w-4 h-4 ${colorClasses[recoverySteps[selectedStep - 1].color].text} flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!selectedStep && (
            <p className="text-center text-sage-500 text-sm mt-4">
              Click on a step number to see details and tips
            </p>
          )}
        </div>

        {/* All Steps List */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-sage-800 mb-4">All Recovery Steps</h3>
          {recoverySteps.map((step) => {
            const colors = colorClasses[step.color];
            return (
              <div
                key={step.number}
                className={`bg-white rounded-xl p-4 border transition-all ${
                  completedSteps.has(step.number)
                    ? 'border-emerald-200 bg-emerald-50/50'
                    : 'border-sage-100 hover:border-sage-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleComplete(step.number)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      completedSteps.has(step.number)
                        ? 'bg-emerald-500 text-white'
                        : `${colors.light} ${colors.text}`
                    }`}
                  >
                    {completedSteps.has(step.number) ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className="font-bold text-sm">{step.number}</span>
                    )}
                  </button>
                  <div className="flex-grow">
                    <h4 className={`font-medium ${completedSteps.has(step.number) ? 'text-emerald-700' : 'text-sage-800'}`}>
                      {step.title}
                    </h4>
                    <p className="text-sm text-sage-500">{step.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedStep(selectedStep === step.number ? null : step.number)}
                    className="text-sage-400 hover:text-sage-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Completion Message */}
        {completedSteps.size === 10 && (
          <div className="mt-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Congratulations!</h3>
            <p className="text-emerald-100 max-w-md mx-auto">
              You&apos;ve completed all 10 recovery steps. Remember, recovery is a journey - revisit these tools whenever you need them.
            </p>
          </div>
        )}

        {/* Professional Help */}
        <div className="mt-8 bg-sage-50 rounded-2xl p-6 border border-sage-100">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-grow">
              <h4 className="font-semibold text-sage-800 mb-1">Need Additional Support?</h4>
              <p className="text-sage-600 text-sm">
                No one can do it alone. Talk about it with friends, family, or professionals.
              </p>
            </div>
            <a
              href="https://pauloviawe.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-sage-600 text-white rounded-lg font-medium text-sm hover:bg-sage-700 transition-colors"
            >
              Contact Paul Oviawe
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link href="/prevention" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Prevention
          </Link>
          <Link href="/assessment" className="inline-flex items-center gap-2 px-5 py-2.5 bg-sage-600 text-white rounded-xl font-medium hover:bg-sage-700 transition-colors">
            Take Assessment
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
