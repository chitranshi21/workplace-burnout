import { Session } from "@/types/demo";

interface SessionCardProps {
  session: Session;
  onCancel?: (sessionId: string) => void;
}

export default function SessionCard({ session, onCancel }: SessionCardProps) {
  const isUpcoming = session.status === "upcoming";
  const isCompleted = session.status === "completed";
  const isCancelled = session.status === "cancelled";

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div
      className={`bg-white rounded-xl border p-4 ${
        isCancelled ? "border-sage-200 opacity-60" : "border-sage-100"
      }`}
    >
      <div className="flex items-start gap-4">
        {/* Date badge */}
        <div
          className={`flex flex-col items-center justify-center w-14 h-14 rounded-xl ${
            isUpcoming
              ? "bg-emerald-100 text-emerald-700"
              : isCompleted
              ? "bg-sage-100 text-sage-600"
              : "bg-sage-50 text-sage-400"
          }`}
        >
          <span className="text-xs font-medium uppercase">
            {new Date(session.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </span>
          <span className="text-xl font-bold">
            {new Date(session.date).getDate()}
          </span>
        </div>

        {/* Session details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="font-semibold text-sage-800">
                {session.psychologistName}
              </h4>
              <p className="text-sm text-sage-500">
                {formatDate(session.date)} at {session.time}
              </p>
            </div>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                isUpcoming
                  ? "bg-emerald-100 text-emerald-700"
                  : isCompleted
                  ? "bg-sage-100 text-sage-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
            </span>
          </div>

          {session.notes && (
            <p className="text-sm text-sage-600 mt-2 line-clamp-2">
              {session.notes}
            </p>
          )}

          {isUpcoming && onCancel && (
            <button
              onClick={() => onCancel(session.id)}
              className="mt-3 text-sm text-red-600 hover:text-red-700 font-medium"
            >
              Cancel Session
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
