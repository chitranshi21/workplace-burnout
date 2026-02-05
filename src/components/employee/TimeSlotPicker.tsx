"use client";

import { useState } from "react";
import { TimeSlot } from "@/types/demo";

interface TimeSlotPickerProps {
  slots: TimeSlot[];
  onSelect: (slot: TimeSlot) => void;
  selectedSlot: TimeSlot | null;
}

export default function TimeSlotPicker({
  slots,
  onSelect,
  selectedSlot,
}: TimeSlotPickerProps) {
  // Group slots by date
  const slotsByDate = slots.reduce((acc, slot) => {
    if (!acc[slot.date]) {
      acc[slot.date] = [];
    }
    acc[slot.date].push(slot);
    return acc;
  }, {} as Record<string, TimeSlot[]>);

  const dates = Object.keys(slotsByDate).sort();
  const [selectedDate, setSelectedDate] = useState(dates[0] || "");

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.getDate(),
      month: date.toLocaleDateString("en-US", { month: "short" }),
    };
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div className="space-y-6">
      {/* Date selector */}
      <div>
        <h4 className="text-sm font-medium text-sage-700 mb-3">Select a date</h4>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {dates.map((date) => {
            const { day, date: dateNum, month } = formatDate(date);
            const hasAvailable = slotsByDate[date].some((s) => s.available);
            const isSelected = selectedDate === date;

            return (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                disabled={!hasAvailable}
                className={`flex flex-col items-center px-4 py-3 rounded-xl min-w-[72px] transition-all ${
                  isSelected
                    ? "bg-sage-600 text-white"
                    : hasAvailable
                    ? "bg-white border border-sage-200 text-sage-700 hover:border-sage-400"
                    : "bg-sage-50 border border-sage-100 text-sage-300 cursor-not-allowed"
                }`}
              >
                <span className="text-xs font-medium">{day}</span>
                <span className="text-xl font-bold">{dateNum}</span>
                <span className="text-xs">{month}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time slots */}
      {selectedDate && (
        <div>
          <h4 className="text-sm font-medium text-sage-700 mb-3">
            Available times on{" "}
            {new Date(selectedDate).toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {slotsByDate[selectedDate].map((slot) => {
              const isSelected = selectedSlot?.id === slot.id;
              return (
                <button
                  key={slot.id}
                  onClick={() => slot.available && onSelect(slot)}
                  disabled={!slot.available}
                  className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-emerald-600 text-white"
                      : slot.available
                      ? "bg-white border border-sage-200 text-sage-700 hover:border-emerald-400 hover:bg-emerald-50"
                      : "bg-sage-50 border border-sage-100 text-sage-300 cursor-not-allowed line-through"
                  }`}
                >
                  {formatTime(slot.time)}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
