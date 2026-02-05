import { Psychologist } from "@/types/demo";
import Link from "next/link";

interface PsychologistCardProps {
  psychologist: Psychologist;
}

export default function PsychologistCard({ psychologist }: PsychologistCardProps) {
  const availableSlots = psychologist.availability.filter((s) => s.available).length;

  return (
    <div className="bg-white rounded-2xl border border-sage-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        {/* Avatar placeholder */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sage-300 to-sage-400 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xl font-semibold">
            {psychologist.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-sage-800 mb-1">
            {psychologist.name}
          </h3>
          <p className="text-sm text-sage-600 mb-2">{psychologist.title}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-sage-800">
                {psychologist.rating}
              </span>
            </div>
            <span className="text-sm text-sage-400">
              ({psychologist.reviewCount} reviews)
            </span>
          </div>

          {/* Specialties */}
          <div className="flex flex-wrap gap-2 mb-4">
            {psychologist.specialties.slice(0, 3).map((specialty, index) => (
              <span
                key={index}
                className="text-xs bg-sage-100 text-sage-600 px-2 py-1 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p className="text-sm text-sage-600 mb-4 line-clamp-2">
            {psychologist.bio}
          </p>

          {/* Availability & Book */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-sage-500">
              <span className="text-emerald-600 font-medium">{availableSlots}</span>{" "}
              slots available this week
            </span>
            <Link
              href={`/employee/book?psychologist=${psychologist.id}`}
              className="px-4 py-2 bg-sage-600 text-white text-sm font-medium rounded-lg hover:bg-sage-700 transition-colors"
            >
              Book Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
