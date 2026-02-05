import { Plan } from "@/types/demo";
import Link from "next/link";

interface PlanCardProps {
  plan: Plan;
}

export default function PlanCard({ plan }: PlanCardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl border ${
        plan.popular ? "border-sage-400 shadow-lg" : "border-sage-100"
      } p-6 flex flex-col h-full`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-sage-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-sage-800 mb-2">{plan.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-sage-900">${plan.price}</span>
          <span className="text-sage-500">/{plan.billingPeriod === "monthly" ? "mo" : "yr"}</span>
        </div>
        <p className="text-sm text-sage-500 mt-2">
          Up to {plan.employeeLimit} employees
        </p>
      </div>

      <ul className="space-y-3 mb-6 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            {feature.included ? (
              <svg
                className="w-5 h-5 text-sage-600 flex-shrink-0 mt-0.5"
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
                className="w-5 h-5 text-sage-300 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            <span
              className={`text-sm ${
                feature.included ? "text-sage-700" : "text-sage-400"
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/business/demo"
        className={`w-full py-3 px-4 rounded-xl font-medium text-center transition-colors ${
          plan.popular
            ? "bg-sage-600 text-white hover:bg-sage-700"
            : "bg-sage-100 text-sage-700 hover:bg-sage-200"
        }`}
      >
        Start Free Trial
      </Link>
    </div>
  );
}
