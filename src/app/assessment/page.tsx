'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

interface Question {
  id: number;
  text: string;
  category: 'exhaustion' | 'detachment' | 'inefficacy';
}

const questions: Question[] = [
  { id: 1, text: "I feel emotionally drained from my work", category: 'exhaustion' },
  { id: 2, text: "I feel used up at the end of the workday", category: 'exhaustion' },
  { id: 3, text: "I feel tired when I get up in the morning and have to face another day at work", category: 'exhaustion' },
  { id: 4, text: "Working all day is really a strain for me", category: 'exhaustion' },
  { id: 5, text: "I feel burned out from my work", category: 'exhaustion' },
  { id: 6, text: "I have become less interested in my work since I started this job", category: 'detachment' },
  { id: 7, text: "I have become less enthusiastic about my work", category: 'detachment' },
  { id: 8, text: "I have become more cynical about whether my work contributes anything", category: 'detachment' },
  { id: 9, text: "I doubt the significance of my work", category: 'detachment' },
  { id: 10, text: "I feel disconnected from my colleagues", category: 'detachment' },
  { id: 11, text: "I cannot deal with problems effectively at work", category: 'inefficacy' },
  { id: 12, text: "I feel I'm not making an effective contribution at work", category: 'inefficacy' },
  { id: 13, text: "I feel I'm not as good at my job as I used to be", category: 'inefficacy' },
  { id: 14, text: "I struggle to concentrate on my tasks", category: 'inefficacy' },
  { id: 15, text: "I feel overwhelmed by my responsibilities", category: 'inefficacy' }
];

const answerOptions = [
  { value: 0, label: 'Never' },
  { value: 1, label: 'Rarely' },
  { value: 2, label: 'Sometimes' },
  { value: 3, label: 'Often' },
  { value: 4, label: 'Very Often' },
  { value: 5, label: 'Always' }
];

type Answers = Record<number, number>;

export default function AssessmentPage() {
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;

  const setAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateResults = () => {
    const exhaustionScore = questions
      .filter(q => q.category === 'exhaustion')
      .reduce((sum, q) => sum + (answers[q.id] || 0), 0);

    const detachmentScore = questions
      .filter(q => q.category === 'detachment')
      .reduce((sum, q) => sum + (answers[q.id] || 0), 0);

    const inefficacyScore = questions
      .filter(q => q.category === 'inefficacy')
      .reduce((sum, q) => sum + (answers[q.id] || 0), 0);

    const totalScore = exhaustionScore + detachmentScore + inefficacyScore;
    const maxScore = questions.length * 5;
    const percentage = Math.round((totalScore / maxScore) * 100);

    return {
      exhaustion: exhaustionScore,
      exhaustionMax: 25,
      detachment: detachmentScore,
      detachmentMax: 25,
      inefficacy: inefficacyScore,
      inefficacyMax: 25,
      total: totalScore,
      max: maxScore,
      percentage
    };
  };

  const getResultLevel = (percentage: number) => {
    if (percentage < 25) return { level: 'Low', color: 'emerald', description: "Your scores suggest you're managing workplace stress well. Continue practicing healthy habits and self-care to maintain this balance." };
    if (percentage < 50) return { level: 'Moderate', color: 'amber', description: "You're showing some signs of workplace stress. Consider implementing more prevention strategies and monitoring your energy levels." };
    if (percentage < 75) return { level: 'High', color: 'orange', description: "Your scores indicate significant burnout symptoms. It's important to take action now - review the prevention tips and consider the recovery toolbox." };
    return { level: 'Severe', color: 'red', description: "Your responses suggest severe burnout. Please prioritize seeking professional support and consider discussing your situation with a counselor or healthcare provider." };
  };

  const getCategoryLevel = (score: number, max: number) => {
    const percentage = (score / max) * 100;
    if (percentage < 25) return 'Low';
    if (percentage < 50) return 'Moderate';
    if (percentage < 75) return 'High';
    return 'Severe';
  };

  const results = calculateResults();
  const resultLevel = getResultLevel(results.percentage);

  const handleSubmit = () => {
    if (answeredCount === questions.length) {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const resetAssessment = () => {
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
        {/* Header */}
        <div className="bg-gradient-to-br from-sage-100 to-emerald-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sage-700 hover:text-sage-800 mb-6 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-2">Your Results</h1>
            <p className="text-sage-600">Based on your responses to the burnout assessment</p>
          </div>
        </div>

        {/* Results Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Overall Score */}
          <div className={`bg-${resultLevel.color}-50 rounded-2xl p-8 border border-${resultLevel.color}-200 mb-8`}>
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-${resultLevel.color}-100 mb-4`}>
                <span className={`text-3xl font-bold text-${resultLevel.color}-600`}>{results.percentage}%</span>
              </div>
              <h2 className={`text-2xl font-bold text-${resultLevel.color}-700 mb-2`}>
                {resultLevel.level} Burnout Risk
              </h2>
              <p className={`text-${resultLevel.color}-600 max-w-lg mx-auto`}>
                {resultLevel.description}
              </p>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="bg-white rounded-2xl p-6 border border-sage-100 mb-8">
            <h3 className="text-lg font-semibold text-sage-800 mb-6">Score Breakdown</h3>
            <div className="space-y-6">
              {/* Exhaustion */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-medium text-sage-700">Emotional Exhaustion</span>
                    <p className="text-xs text-sage-500">Feeling emotionally drained and depleted</p>
                  </div>
                  <span className="text-sm font-medium text-sage-600">
                    {results.exhaustion}/{results.exhaustionMax} ({getCategoryLevel(results.exhaustion, results.exhaustionMax)})
                  </span>
                </div>
                <div className="h-3 bg-sage-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-500"
                    style={{ width: `${(results.exhaustion / results.exhaustionMax) * 100}%` }}
                  />
                </div>
              </div>

              {/* Detachment */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-medium text-sage-700">Cynicism & Detachment</span>
                    <p className="text-xs text-sage-500">Feeling disconnected from work and colleagues</p>
                  </div>
                  <span className="text-sm font-medium text-sage-600">
                    {results.detachment}/{results.detachmentMax} ({getCategoryLevel(results.detachment, results.detachmentMax)})
                  </span>
                </div>
                <div className="h-3 bg-sage-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full transition-all duration-500"
                    style={{ width: `${(results.detachment / results.detachmentMax) * 100}%` }}
                  />
                </div>
              </div>

              {/* Inefficacy */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-medium text-sage-700">Reduced Efficacy</span>
                    <p className="text-xs text-sage-500">Feeling ineffective and unproductive at work</p>
                  </div>
                  <span className="text-sm font-medium text-sage-600">
                    {results.inefficacy}/{results.inefficacyMax} ({getCategoryLevel(results.inefficacy, results.inefficacyMax)})
                  </span>
                </div>
                <div className="h-3 bg-sage-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-500"
                    style={{ width: `${(results.inefficacy / results.inefficacyMax) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-2xl p-6 border border-sage-100 mb-8">
            <h3 className="text-lg font-semibold text-sage-800 mb-4">Recommended Next Steps</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/identification" className="group p-4 bg-amber-50 rounded-xl border border-amber-100 hover:border-amber-200 transition-all">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h4 className="font-medium text-sage-800 mb-1">Identify Symptoms</h4>
                <p className="text-xs text-sage-500">Learn to recognize the signs</p>
              </Link>

              <Link href="/prevention" className="group p-4 bg-sage-50 rounded-xl border border-sage-100 hover:border-sage-200 transition-all">
                <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-medium text-sage-800 mb-1">Prevention Tips</h4>
                <p className="text-xs text-sage-500">Build healthy habits</p>
              </Link>

              <Link href="/recovery" className="group p-4 bg-sky-50 rounded-xl border border-sky-100 hover:border-sky-200 transition-all">
                <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-medium text-sage-800 mb-1">Recovery Toolbox</h4>
                <p className="text-xs text-sage-500">10 steps to recover</p>
              </Link>
            </div>
          </div>

          {/* Professional Help */}
          {results.percentage >= 50 && (
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-1">Consider Professional Support</h4>
                  <p className="text-red-700 text-sm mb-3">
                    Your scores suggest you may benefit from speaking with a mental health professional.
                    Consider contacting an Employee Assistance Programme (EAP) if available through your employer.
                  </p>
                  <a
                    href="https://pauloviawe.nl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-700 font-medium text-sm hover:text-red-800"
                  >
                    Contact Paul Oviawe for professional guidance
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={resetAssessment}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-sage-700 rounded-xl font-medium hover:bg-sage-50 transition-colors border border-sage-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Retake Assessment
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-sage-600 text-white rounded-xl font-medium hover:bg-sage-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-xs text-sage-400 text-center">
            This assessment is for informational purposes only and is not a medical diagnosis.
            If you&apos;re concerned about your mental health, please consult a healthcare professional.
          </p>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-sage-900">Burnout Self-Assessment</h1>
              <p className="text-sage-600">Understand your current stress levels</p>
            </div>
          </div>
          <p className="text-sage-600 max-w-2xl">
            Answer the following questions honestly based on how you&apos;ve felt over the past few weeks.
            There are no right or wrong answers.
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-sage-100 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-sage-700">Progress</span>
            <span className="text-sm text-sage-500">{answeredCount} of {questions.length} questions</span>
          </div>
          <div className="h-2 bg-sage-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sage-400 to-emerald-400 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className={`bg-white rounded-2xl p-6 border transition-all ${
                answers[question.id] !== undefined
                  ? 'border-sage-300 shadow-sm'
                  : 'border-sage-100'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-sm font-medium text-sage-600">
                  {index + 1}
                </span>
                <p className="text-sage-800 font-medium pt-1">{question.text}</p>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 ml-12">
                {answerOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setAnswer(question.id, option.value)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      answers[question.id] === option.value
                        ? 'bg-sage-600 text-white'
                        : 'bg-sage-50 text-sage-600 hover:bg-sage-100'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleSubmit}
            disabled={answeredCount < questions.length}
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-lg transition-all ${
              answeredCount === questions.length
                ? 'bg-sage-600 text-white hover:bg-sage-700 shadow-lg shadow-sage-200'
                : 'bg-sage-200 text-sage-400 cursor-not-allowed'
            }`}
          >
            {answeredCount === questions.length ? (
              <>
                View My Results
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </>
            ) : (
              `Answer ${questions.length - answeredCount} more question${questions.length - answeredCount !== 1 ? 's' : ''}`
            )}
          </button>
          <p className="mt-4 text-sm text-sage-500">
            Your answers are not stored and remain completely private.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
