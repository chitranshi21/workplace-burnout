import { Plan } from "@/types/demo";

export const mockPlans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 299,
    billingPeriod: "monthly",
    employeeLimit: 25,
    sessionsPerEmployee: 5,
    features: [
      { text: "Up to 25 employees", included: true },
      { text: "5 sessions per employee", included: true },
      { text: "Email support", included: true },
      { text: "Basic analytics", included: true },
      { text: "Dedicated account manager", included: false },
      { text: "Custom integrations", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: 699,
    billingPeriod: "monthly",
    employeeLimit: 100,
    sessionsPerEmployee: 5,
    popular: true,
    features: [
      { text: "Up to 100 employees", included: true },
      { text: "5 sessions per employee", included: true },
      { text: "Priority support", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom integrations", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 1499,
    billingPeriod: "monthly",
    employeeLimit: 500,
    sessionsPerEmployee: 5,
    features: [
      { text: "Up to 500 employees", included: true },
      { text: "5 sessions per employee", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Full analytics suite", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom integrations", included: true },
    ],
  },
];
