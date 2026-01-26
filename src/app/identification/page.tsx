'use client';

import { useState } from 'react';
import Link from 'next/link';

const familiarTales = [
  "I'll just stay home for a few weeks",
  "I feel weak",
  "I'm ashamed",
  "I don't recognise myself anymore",
  "I feel guilty towards my colleagues and employer",
  "Will this ever be okay?",
  "I've never felt this way before",
  "I feel insecure",
  "Others don't understand me",
  "How can I explain what I'm feeling?",
  "How can I move on with my life?",
  "Is this normal?"
];

const bodilyReactions = [
  { symptom: "Constant fatigue", icon: "battery" },
  { symptom: "Heavy eyes", icon: "eye" },
  { symptom: "No control over your body", icon: "body" },
  { symptom: "Total exhaustion", icon: "tired" },
  { symptom: "Excessive sweating", icon: "droplet" },
  { symptom: "Feeling jittery", icon: "lightning" },
  { symptom: "Sore muscles", icon: "muscle" },
  { symptom: "Neck and shoulder pain", icon: "neck" },
  { symptom: "Lower back pain", icon: "back" },
  { symptom: "Tension in the jaw", icon: "jaw" },
  { symptom: "Difficulty speaking", icon: "speech" },
  { symptom: "Blurred vision", icon: "eye" },
  { symptom: "Abdominal pain", icon: "stomach" },
  { symptom: "Stomach ache", icon: "stomach" },
  { symptom: "Red spots on the skin", icon: "skin" },
  { symptom: "Poorly functioning immune system", icon: "shield" },
  { symptom: "Oversleeping", icon: "sleep" },
  { symptom: "Deteriorated physical condition", icon: "body" },
  { symptom: "Colds/strep throat", icon: "cold" },
  { symptom: "More frequent flu-like symptoms", icon: "cold" },
  { symptom: "Headaches/migraines", icon: "head" },
  { symptom: "Ringing in the ears/tinnitus", icon: "ear" },
  { symptom: "Hormonal fluctuations", icon: "hormone" },
  { symptom: "Rapid breathing/hyperventilation", icon: "breath" },
  { symptom: "Weight loss", icon: "weight" },
  { symptom: "Hunger (overeating)", icon: "food" },
  { symptom: "Intestinal problems", icon: "stomach" },
  { symptom: "Hair loss", icon: "hair" },
  { symptom: "Acne/pimples", icon: "skin" },
  { symptom: "High blood pressure", icon: "heart" },
  { symptom: "Increased heart rate", icon: "heart" },
  { symptom: "Dizziness", icon: "dizzy" }
];

const thoughtsAndActions = [
  { symptom: "Underperforming", category: "work" },
  { symptom: "Making unnecessary mistakes", category: "work" },
  { symptom: "Shame", category: "emotional" },
  { symptom: "Inability to enjoy simple pleasures", category: "emotional" },
  { symptom: "Feeling depressed", category: "emotional" },
  { symptom: "Lack of interest", category: "emotional" },
  { symptom: "Good and bad days", category: "emotional" },
  { symptom: "Distrust", category: "emotional" },
  { symptom: "Powerlessness", category: "emotional" },
  { symptom: "Behavioral changes", category: "behavioral" },
  { symptom: "(More) smoking", category: "behavioral" },
  { symptom: "(More) drinking", category: "behavioral" },
  { symptom: "(Loss) of sex drive", category: "behavioral" },
  { symptom: "(More) drug/substance use", category: "behavioral" },
  { symptom: "Sleeping poorly", category: "behavioral" },
  { symptom: "Sleeping excessively", category: "behavioral" },
  { symptom: "Difficulty getting out of bed", category: "behavioral" },
  { symptom: "Confused", category: "cognitive" },
  { symptom: "Avoiding parties or birthdays", category: "social" },
  { symptom: "Limiting social contact", category: "social" },
  { symptom: "Crying", category: "emotional" },
  { symptom: "Cynicism", category: "emotional" },
  { symptom: "Worrying", category: "cognitive" },
  { symptom: "Fear of failure", category: "cognitive" },
  { symptom: "Guilt", category: "emotional" },
  { symptom: "Relationship problems", category: "social" },
  { symptom: "Poor recovery", category: "behavioral" },
  { symptom: "Suicidal thoughts", category: "severe" }
];

type TabType = 'familiar' | 'body' | 'mind';

export default function IdentificationPage() {
  const [activeTab, setActiveTab] = useState<TabType>('familiar');
  const [checkedSymptoms, setCheckedSymptoms] = useState<Set<string>>(new Set());

  const toggleSymptom = (symptom: string) => {
    const newChecked = new Set(checkedSymptoms);
    if (newChecked.has(symptom)) {
      newChecked.delete(symptom);
    } else {
      newChecked.add(symptom);
    }
    setCheckedSymptoms(newChecked);
  };

  const checkedCount = checkedSymptoms.size;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-100 to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-6 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-200 flex items-center justify-center">
              <svg className="w-7 h-7 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-sage-900">Identify Burnout</h1>
              <p className="text-amber-700">Phase 1 of your wellbeing journey</p>
            </div>
          </div>
          <p className="text-sage-600 max-w-2xl">
            Recognizing the signs of burnout is the first step toward recovery. Below are common symptoms organized by category.
            Check any that resonate with your current experience.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-sage-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-3 overflow-x-auto">
            <button
              onClick={() => setActiveTab('familiar')}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'familiar'
                  ? 'bg-amber-100 text-amber-700'
                  : 'text-sage-600 hover:bg-sage-50'
              }`}
            >
              Familiar Tales
            </button>
            <button
              onClick={() => setActiveTab('body')}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'body'
                  ? 'bg-amber-100 text-amber-700'
                  : 'text-sage-600 hover:bg-sage-50'
              }`}
            >
              Body Reactions
            </button>
            <button
              onClick={() => setActiveTab('mind')}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === 'mind'
                  ? 'bg-amber-100 text-amber-700'
                  : 'text-sage-600 hover:bg-sage-50'
              }`}
            >
              Thoughts & Actions
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Familiar Tales */}
        {activeTab === 'familiar' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-sage-100 shadow-sm">
              <h2 className="text-xl font-semibold text-sage-800 mb-2">Familiar Tales</h2>
              <p className="text-sage-600 text-sm mb-6">
                Do any of these thoughts sound familiar? These are common expressions from people experiencing burnout.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {familiarTales.map((tale, index) => (
                  <button
                    key={index}
                    onClick={() => toggleSymptom(tale)}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      checkedSymptoms.has(tale)
                        ? 'bg-amber-50 border-amber-200 text-amber-800'
                        : 'bg-sage-50/50 border-sage-100 text-sage-700 hover:bg-sage-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center mt-0.5 ${
                        checkedSymptoms.has(tale)
                          ? 'bg-amber-500 border-amber-500'
                          : 'border-sage-300'
                      }`}>
                        {checkedSymptoms.has(tale) && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm italic">&ldquo;{tale}&rdquo;</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Body Reactions */}
        {activeTab === 'body' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-sage-100 shadow-sm">
              <h2 className="text-xl font-semibold text-sage-800 mb-2">Bodily Reactions</h2>
              <p className="text-sage-600 text-sm mb-6">
                Burnout manifests physically in many ways. Your body often signals distress before your mind fully recognizes it.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {bodilyReactions.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => toggleSymptom(item.symptom)}
                    className={`text-left p-3 rounded-xl border transition-all ${
                      checkedSymptoms.has(item.symptom)
                        ? 'bg-amber-50 border-amber-200 text-amber-800'
                        : 'bg-sage-50/50 border-sage-100 text-sage-700 hover:bg-sage-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center ${
                        checkedSymptoms.has(item.symptom)
                          ? 'bg-amber-500 border-amber-500'
                          : 'border-sage-300'
                      }`}>
                        {checkedSymptoms.has(item.symptom) && (
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm">{item.symptom}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Thoughts & Actions */}
        {activeTab === 'mind' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-sage-100 shadow-sm">
              <h2 className="text-xl font-semibold text-sage-800 mb-2">Thoughts & Actions</h2>
              <p className="text-sage-600 text-sm mb-6">
                Burnout affects how we think, feel, and behave. These changes can impact work, relationships, and daily life.
              </p>

              <div className="space-y-6">
                {/* Emotional */}
                <div>
                  <h3 className="text-sm font-medium text-sage-500 uppercase tracking-wide mb-3">Emotional</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {thoughtsAndActions.filter(t => t.category === 'emotional').map((item, index) => (
                      <button
                        key={index}
                        onClick={() => toggleSymptom(item.symptom)}
                        className={`text-left p-3 rounded-xl border transition-all ${
                          checkedSymptoms.has(item.symptom)
                            ? 'bg-amber-50 border-amber-200 text-amber-800'
                            : 'bg-sage-50/50 border-sage-100 text-sage-700 hover:bg-sage-50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center ${
                            checkedSymptoms.has(item.symptom)
                              ? 'bg-amber-500 border-amber-500'
                              : 'border-sage-300'
                          }`}>
                            {checkedSymptoms.has(item.symptom) && (
                              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm">{item.symptom}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Behavioral */}
                <div>
                  <h3 className="text-sm font-medium text-sage-500 uppercase tracking-wide mb-3">Behavioral</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {thoughtsAndActions.filter(t => t.category === 'behavioral').map((item, index) => (
                      <button
                        key={index}
                        onClick={() => toggleSymptom(item.symptom)}
                        className={`text-left p-3 rounded-xl border transition-all ${
                          checkedSymptoms.has(item.symptom)
                            ? 'bg-amber-50 border-amber-200 text-amber-800'
                            : 'bg-sage-50/50 border-sage-100 text-sage-700 hover:bg-sage-50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center ${
                            checkedSymptoms.has(item.symptom)
                              ? 'bg-amber-500 border-amber-500'
                              : 'border-sage-300'
                          }`}>
                            {checkedSymptoms.has(item.symptom) && (
                              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm">{item.symptom}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cognitive & Work */}
                <div>
                  <h3 className="text-sm font-medium text-sage-500 uppercase tracking-wide mb-3">Cognitive & Work</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {thoughtsAndActions.filter(t => t.category === 'cognitive' || t.category === 'work').map((item, index) => (
                      <button
                        key={index}
                        onClick={() => toggleSymptom(item.symptom)}
                        className={`text-left p-3 rounded-xl border transition-all ${
                          checkedSymptoms.has(item.symptom)
                            ? 'bg-amber-50 border-amber-200 text-amber-800'
                            : 'bg-sage-50/50 border-sage-100 text-sage-700 hover:bg-sage-50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center ${
                            checkedSymptoms.has(item.symptom)
                              ? 'bg-amber-500 border-amber-500'
                              : 'border-sage-300'
                          }`}>
                            {checkedSymptoms.has(item.symptom) && (
                              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm">{item.symptom}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3 className="text-sm font-medium text-sage-500 uppercase tracking-wide mb-3">Social</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {thoughtsAndActions.filter(t => t.category === 'social').map((item, index) => (
                      <button
                        key={index}
                        onClick={() => toggleSymptom(item.symptom)}
                        className={`text-left p-3 rounded-xl border transition-all ${
                          checkedSymptoms.has(item.symptom)
                            ? 'bg-amber-50 border-amber-200 text-amber-800'
                            : 'bg-sage-50/50 border-sage-100 text-sage-700 hover:bg-sage-50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center ${
                            checkedSymptoms.has(item.symptom)
                              ? 'bg-amber-500 border-amber-500'
                              : 'border-sage-300'
                          }`}>
                            {checkedSymptoms.has(item.symptom) && (
                              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm">{item.symptom}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Severe Warning */}
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-red-800 mb-1">Important Notice</h4>
                      <p className="text-sm text-red-700">
                        If you&apos;re experiencing suicidal thoughts, please seek immediate professional help.
                        Contact your local emergency services or a mental health crisis line.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Summary Card */}
        {checkedCount > 0 && (
          <div className="mt-8 bg-amber-50 rounded-2xl p-6 border border-amber-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-amber-800 mb-1">
                  You&apos;ve identified {checkedCount} symptom{checkedCount !== 1 ? 's' : ''}
                </h3>
                <p className="text-amber-700 text-sm">
                  {checkedCount >= 10
                    ? "This suggests you may be experiencing significant burnout. Consider taking the full assessment and exploring recovery options."
                    : checkedCount >= 5
                    ? "Several symptoms suggest you may be at risk. Prevention strategies can help."
                    : "Being aware of early signs is important. Consider prevention strategies."}
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/prevention"
                  className="inline-flex items-center justify-center px-4 py-2 bg-white text-amber-700 rounded-lg font-medium text-sm hover:bg-amber-100 transition-colors border border-amber-200"
                >
                  Prevention Tips
                </Link>
                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center px-4 py-2 bg-amber-600 text-white rounded-lg font-medium text-sm hover:bg-amber-700 transition-colors"
                >
                  Full Assessment
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Home
          </Link>
          <Link href="/prevention" className="inline-flex items-center gap-2 px-5 py-2.5 bg-sage-600 text-white rounded-xl font-medium hover:bg-sage-700 transition-colors">
            Next: Prevention
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
