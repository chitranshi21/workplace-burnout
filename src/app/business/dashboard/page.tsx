"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDemoCompany } from "@/hooks/useDemoState";
import { mockPlans } from "@/data/mockPlans";
import { mockDashboardStats } from "@/data/mockCompanies";
import StatCard from "@/components/business/StatCard";
import SimpleChart from "@/components/business/SimpleChart";
import DemoModeBanner from "@/components/shared/DemoModeBanner";

export default function BusinessDashboardPage() {
  const router = useRouter();
  const { companyState, isLoading, clearCompany } = useDemoCompany();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isLoading && !companyState) {
      router.push("/business/demo");
    }
  }, [isLoading, companyState, router]);

  if (isLoading || !companyState) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sage-600" />
      </div>
    );
  }

  const { company } = companyState;
  const plan = mockPlans.find((p) => p.id === company.planId);
  const stats = mockDashboardStats;

  const copyCode = async () => {
    await navigator.clipboard.writeText(company.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-sage-50">
      <DemoModeBanner
        onReset={() => {
          clearCompany();
          router.push("/business");
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-sage-900">{company.name}</h1>
            <p className="text-sage-600">
              {plan?.name} Plan · {company.employeeCount} employees
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/employee"
              className="text-sm text-sage-600 hover:text-sage-800"
            >
              View Employee Portal
            </Link>
          </div>
        </div>

        {/* Company Code Card */}
        <div className="bg-gradient-to-r from-emerald-500 to-sage-600 rounded-2xl p-6 mb-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold mb-1">Your Company Code</h2>
              <p className="text-emerald-100 text-sm">
                Share this code with employees to give them access to mental
                health sessions.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                <span className="text-2xl font-mono font-bold tracking-wider">
                  {company.code}
                </span>
              </div>
              <button
                onClick={copyCode}
                className="p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
                title="Copy code"
              >
                {copied ? (
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
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
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
            value={stats.totalEmployees}
            label="Total Employees"
          />
          <StatCard
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            value={stats.activeEmployees}
            label="Active Users"
            trend={{ value: 12, positive: true }}
          />
          <StatCard
            icon={
              <svg
                className="w-6 h-6"
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
            }
            value={stats.sessionsThisMonth}
            label="Sessions This Month"
            trend={{ value: 8, positive: true }}
          />
          <StatCard
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            }
            value={stats.averageSatisfaction}
            label="Avg. Satisfaction"
          />
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <SimpleChart
            data={stats.monthlyData}
            metric="sessionsBooked"
            label="Sessions Booked"
          />
          <SimpleChart
            data={stats.monthlyData}
            metric="uniqueEmployees"
            label="Active Employees"
          />
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl border border-sage-100 p-6">
          <h3 className="text-lg font-semibold text-sage-800 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {[
              {
                action: "New employee enrolled",
                time: "2 hours ago",
                icon: "user-add",
              },
              {
                action: "Session completed",
                time: "5 hours ago",
                icon: "check",
              },
              {
                action: "Session booked",
                time: "1 day ago",
                icon: "calendar",
              },
              {
                action: "New employee enrolled",
                time: "2 days ago",
                icon: "user-add",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-3 border-b border-sage-50 last:border-0"
              >
                <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600">
                  {item.icon === "user-add" && (
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
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                  )}
                  {item.icon === "check" && (
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                  {item.icon === "calendar" && (
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sage-800 font-medium">{item.action}</p>
                  <p className="text-sm text-sage-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
