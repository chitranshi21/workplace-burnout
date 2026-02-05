import { MonthlyStats } from "@/types/demo";

interface SimpleChartProps {
  data: MonthlyStats[];
  metric: "sessionsBooked" | "uniqueEmployees";
  label: string;
}

export default function SimpleChart({ data, metric, label }: SimpleChartProps) {
  const maxValue = Math.max(...data.map((d) => d[metric]));

  return (
    <div className="bg-white rounded-2xl border border-sage-100 p-6">
      <h3 className="text-lg font-semibold text-sage-800 mb-6">{label}</h3>
      <div className="flex items-end gap-2 h-40">
        {data.map((item, index) => {
          const height = (item[metric] / maxValue) * 100;
          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex flex-col items-center justify-end h-32">
                <span className="text-xs text-sage-600 mb-1">{item[metric]}</span>
                <div
                  className="w-full bg-gradient-to-t from-sage-500 to-sage-400 rounded-t-lg transition-all duration-500"
                  style={{ height: `${height}%`, minHeight: "8px" }}
                />
              </div>
              <span className="text-xs text-sage-500">{item.month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
