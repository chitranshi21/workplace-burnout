"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDemoEmployee } from "@/hooks/useDemoState";
import SessionBalance from "@/components/shared/SessionBalance";
import SessionCard from "@/components/employee/SessionCard";
import DemoModeBanner from "@/components/shared/DemoModeBanner";

export default function EmployeeDashboardPage() {
  const router = useRouter();
  const { employeeState, isLoading, cancelSession, logout } = useDemoEmployee();

  useEffect(() => {
    if (!isLoading && !employeeState) {
      router.push("/employee");
    }
  }, [isLoading, employeeState, router]);

  if (isLoading || !employeeState) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sage-600" />
      </div>
    );
  }

  const { employee, sessions } = employeeState;

  // Sort sessions: upcoming first, then by date
  const sortedSessions = [...sessions].sort((a, b) => {
    if (a.status === "upcoming" && b.status !== "upcoming") return -1;
    if (a.status !== "upcoming" && b.status === "upcoming") return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const upcomingSessions = sortedSessions.filter((s) => s.status === "upcoming");
  const pastSessions = sortedSessions.filter((s) => s.status !== "upcoming");

  return (
    <div className="min-h-screen bg-sage-50">
      <DemoModeBanner
        onReset={() => {
          logout();
          router.push("/employee");
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-sage-900">
              Welcome, {employee.name}
            </h1>
            <p className="text-sage-600">Your mental wellness dashboard</p>
          </div>
          <Link
            href="/employee/book"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-sage-600 text-white rounded-xl font-medium hover:bg-sage-700 transition-colors"
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Book Session
          </Link>
        </div>

        {/* Session Balance */}
        <div className="mb-8">
          <SessionBalance
            remaining={employee.sessionsRemaining}
            total={employee.totalSessions}
          />
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <Link
            href="/employee/book"
            className="bg-white rounded-xl border border-sage-100 p-4 hover:shadow-md transition-shadow group"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <svg
                className="w-5 h-5 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-sage-800">Book a Session</h3>
            <p className="text-sm text-sage-500">Schedule with a psychologist</p>
          </Link>

          <Link
            href="/assessment"
            className="bg-white rounded-xl border border-sage-100 p-4 hover:shadow-md transition-shadow group"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <svg
                className="w-5 h-5 text-amber-600"
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
            </div>
            <h3 className="font-semibold text-sage-800">Self Assessment</h3>
            <p className="text-sm text-sage-500">Check your burnout levels</p>
          </Link>

          <Link
            href="/recovery"
            className="bg-white rounded-xl border border-sage-100 p-4 hover:shadow-md transition-shadow group"
          >
            <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <svg
                className="w-5 h-5 text-sky-600"
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
            <h3 className="font-semibold text-sage-800">Recovery Tools</h3>
            <p className="text-sm text-sage-500">Self-help resources</p>
          </Link>
        </div>

        {/* Sessions */}
        <div className="space-y-8">
          {/* Upcoming Sessions */}
          <div>
            <h2 className="text-lg font-semibold text-sage-800 mb-4">
              Upcoming Sessions
            </h2>
            {upcomingSessions.length > 0 ? (
              <div className="space-y-3">
                {upcomingSessions.map((session) => (
                  <SessionCard
                    key={session.id}
                    session={session}
                    onCancel={cancelSession}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-sage-100 p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-sage-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sage-600 mb-3">No upcoming sessions</p>
                <Link
                  href="/employee/book"
                  className="text-sage-700 font-medium hover:text-sage-900"
                >
                  Book your first session
                </Link>
              </div>
            )}
          </div>

          {/* Past Sessions */}
          {pastSessions.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-sage-800 mb-4">
                Past Sessions
              </h2>
              <div className="space-y-3">
                {pastSessions.map((session) => (
                  <SessionCard key={session.id} session={session} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
