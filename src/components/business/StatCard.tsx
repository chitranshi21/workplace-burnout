import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string | number;
  label: string;
  trend?: {
    value: number;
    positive: boolean;
  };
}

export default function StatCard({ icon, value, label, trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-sage-100 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center text-sage-600">
          {icon}
        </div>
        {trend && (
          <span
            className={`text-sm font-medium ${
              trend.positive ? "text-green-600" : "text-red-600"
            }`}
          >
            {trend.positive ? "+" : "-"}{Math.abs(trend.value)}%
          </span>
        )}
      </div>
      <div className="text-3xl font-bold text-sage-900 mb-1">{value}</div>
      <div className="text-sm text-sage-500">{label}</div>
    </div>
  );
}
