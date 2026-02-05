interface SessionBalanceProps {
  remaining: number;
  total: number;
}

export default function SessionBalance({ remaining, total }: SessionBalanceProps) {
  const used = total - remaining;

  return (
    <div className="bg-white rounded-2xl border border-sage-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-sage-800">Session Balance</h3>
        <span className="text-sm text-sage-500">This month</span>
      </div>

      <div className="flex items-center gap-2 mb-4">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`flex-1 h-3 rounded-full transition-all ${
              index < remaining
                ? "bg-emerald-500"
                : "bg-sage-200"
            }`}
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-3xl font-bold text-sage-900">{remaining}</span>
          <span className="text-sage-500 ml-1">of {total} remaining</span>
        </div>
        <div className="text-sm text-sage-500">
          {used} session{used !== 1 ? "s" : ""} used
        </div>
      </div>
    </div>
  );
}
