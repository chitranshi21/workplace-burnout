import { Company, DashboardStats } from "@/types/demo";

export const mockCompanies: Company[] = [
  {
    id: "acme-corp",
    name: "ACME Corporation",
    code: "ACME2024",
    planId: "professional",
    employeeCount: 75,
    registeredAt: "2024-01-15T10:00:00Z",
    contactEmail: "hr@acme-corp.com",
    contactName: "Jane Smith",
  },
];

export const mockDashboardStats: DashboardStats = {
  totalEmployees: 75,
  activeEmployees: 42,
  sessionsThisMonth: 28,
  averageSatisfaction: 4.7,
  monthlyData: [
    { month: "Sep", sessionsBooked: 18, uniqueEmployees: 12 },
    { month: "Oct", sessionsBooked: 24, uniqueEmployees: 18 },
    { month: "Nov", sessionsBooked: 32, uniqueEmployees: 25 },
    { month: "Dec", sessionsBooked: 22, uniqueEmployees: 16 },
    { month: "Jan", sessionsBooked: 35, uniqueEmployees: 28 },
    { month: "Feb", sessionsBooked: 28, uniqueEmployees: 22 },
  ],
};

export function generateCompanyCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}
