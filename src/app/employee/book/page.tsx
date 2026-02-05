"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useDemoEmployee } from "@/hooks/useDemoState";
import { mockPsychologists } from "@/data/mockPsychologists";
import { Psychologist, TimeSlot, Session } from "@/types/demo";
import PsychologistCard from "@/components/employee/PsychologistCard";
import TimeSlotPicker from "@/components/employee/TimeSlotPicker";
import DemoModeBanner from "@/components/shared/DemoModeBanner";

function BookSessionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { employeeState, isLoading, bookSession, logout } = useDemoEmployee();

  const preselectedId = searchParams.get("psychologist");
  const [selectedPsychologist, setSelectedPsychologist] =
    useState<Psychologist | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [step, setStep] = useState<"browse" | "select-time" | "confirm">(
    "browse"
  );
  const [isBooking, setIsBooking] = useState(false);

  useEffect(() => {
    if (!isLoading && !employeeState) {
      router.push("/employee");
    }
  }, [isLoading, employeeState, router]);

  useEffect(() => {
    if (preselectedId) {
      const psychologist = mockPsychologists.find((p) => p.id === preselectedId);
      if (psychologist) {
        setSelectedPsychologist(psychologist);
        setStep("select-time");
      }
    }
  }, [preselectedId]);

  if (isLoading || !employeeState) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sage-600" />
      </div>
    );
  }

  const { employee } = employeeState;

  if (employee.sessionsRemaining <= 0) {
    return (
      <div className="min-h-screen bg-sage-50">
        <DemoModeBanner
          onReset={() => {
            logout();
            router.push("/employee");
          }}
        />
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-white rounded-2xl border border-sage-100 p-8">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-amber-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-sage-900 mb-2">
              No Sessions Remaining
            </h1>
            <p className="text-sage-600 mb-6">
              You&apos;ve used all your available sessions for this month. Your
              sessions will refresh at the start of next month.
            </p>
            <Link
              href="/employee/dashboard"
              className="inline-flex items-center gap-2 px-5 py-3 bg-sage-600 text-white rounded-xl font-medium hover:bg-sage-700 transition-colors"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleSelectPsychologist = (psychologist: Psychologist) => {
    setSelectedPsychologist(psychologist);
    setSelectedSlot(null);
    setStep("select-time");
  };

  const handleConfirmBooking = async () => {
    if (!selectedPsychologist || !selectedSlot) return;

    setIsBooking(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const session: Session = {
      id: `session-${Date.now()}`,
      employeeId: employee.id,
      psychologistId: selectedPsychologist.id,
      psychologistName: selectedPsychologist.name,
      date: selectedSlot.date,
      time: selectedSlot.time,
      status: "upcoming",
    };

    const success = bookSession(session);

    if (success) {
      router.push("/employee/dashboard");
    } else {
      setIsBooking(false);
    }
  };

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
        <div className="mb-8">
          <Link
            href="/employee/dashboard"
            className="inline-flex items-center gap-1 text-sage-600 hover:text-sage-800 mb-4"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-sage-900">Book a Session</h1>
          <p className="text-sage-600">
            {employee.sessionsRemaining} session
            {employee.sessionsRemaining !== 1 ? "s" : ""} remaining this month
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className={`flex items-center gap-2 ${
              step === "browse" ? "text-sage-800" : "text-sage-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === "browse"
                  ? "bg-sage-600 text-white"
                  : "bg-sage-200 text-sage-600"
              }`}
            >
              1
            </div>
            <span className="hidden sm:inline text-sm font-medium">
              Choose Psychologist
            </span>
          </div>
          <div className="flex-1 h-px bg-sage-200" />
          <div
            className={`flex items-center gap-2 ${
              step === "select-time" ? "text-sage-800" : "text-sage-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === "select-time"
                  ? "bg-sage-600 text-white"
                  : "bg-sage-200 text-sage-600"
              }`}
            >
              2
            </div>
            <span className="hidden sm:inline text-sm font-medium">
              Select Time
            </span>
          </div>
          <div className="flex-1 h-px bg-sage-200" />
          <div
            className={`flex items-center gap-2 ${
              step === "confirm" ? "text-sage-800" : "text-sage-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step === "confirm"
                  ? "bg-sage-600 text-white"
                  : "bg-sage-200 text-sage-600"
              }`}
            >
              3
            </div>
            <span className="hidden sm:inline text-sm font-medium">Confirm</span>
          </div>
        </div>

        {/* Content */}
        {step === "browse" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-sage-800 mb-4">
              Our Psychologists
            </h2>
            {mockPsychologists.map((psychologist) => (
              <div
                key={psychologist.id}
                onClick={() => handleSelectPsychologist(psychologist)}
                className="cursor-pointer"
              >
                <PsychologistCard psychologist={psychologist} />
              </div>
            ))}
          </div>
        )}

        {step === "select-time" && selectedPsychologist && (
          <div>
            <button
              onClick={() => {
                setStep("browse");
                setSelectedPsychologist(null);
              }}
              className="text-sage-600 hover:text-sage-800 text-sm mb-4 flex items-center gap-1"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Change psychologist
            </button>

            <div className="bg-white rounded-2xl border border-sage-100 p-6 mb-6">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-sage-100">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sage-300 to-sage-400 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {selectedPsychologist.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-sage-800">
                    {selectedPsychologist.name}
                  </h3>
                  <p className="text-sm text-sage-500">
                    {selectedPsychologist.title}
                  </p>
                </div>
              </div>

              <TimeSlotPicker
                slots={selectedPsychologist.availability}
                onSelect={(slot) => {
                  setSelectedSlot(slot);
                  setStep("confirm");
                }}
                selectedSlot={selectedSlot}
              />
            </div>
          </div>
        )}

        {step === "confirm" && selectedPsychologist && selectedSlot && (
          <div className="bg-white rounded-2xl border border-sage-100 p-6">
            <h2 className="text-lg font-semibold text-sage-800 mb-6">
              Confirm Your Booking
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4 p-4 bg-sage-50 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage-300 to-sage-400 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {selectedPsychologist.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sage-800">
                    {selectedPsychologist.name}
                  </p>
                  <p className="text-sm text-sage-500">
                    {selectedPsychologist.title}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-sage-50 rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-emerald-600"
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
                <div>
                  <p className="font-semibold text-sage-800">
                    {new Date(selectedSlot.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-sm text-sage-500">
                    {selectedSlot.time.split(":")[0]}:
                    {selectedSlot.time.split(":")[1]}{" "}
                    {parseInt(selectedSlot.time.split(":")[0]) >= 12
                      ? "PM"
                      : "AM"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep("select-time")}
                className="flex-1 py-3 px-4 bg-sage-100 text-sage-700 rounded-xl font-medium hover:bg-sage-200 transition-colors"
              >
                Change Time
              </button>
              <button
                onClick={handleConfirmBooking}
                disabled={isBooking}
                className="flex-1 py-3 px-4 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isBooking ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Booking...
                  </>
                ) : (
                  "Confirm Booking"
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BookSessionPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sage-600" />
        </div>
      }
    >
      <BookSessionContent />
    </Suspense>
  );
}
