// Subscription Plans
export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  billingPeriod: "monthly" | "annually";
  employeeLimit: number;
  sessionsPerEmployee: number;
  features: PlanFeature[];
  popular?: boolean;
}

// Psychologists
export interface TimeSlot {
  id: string;
  date: string; // ISO date string
  time: string; // e.g., "09:00", "14:30"
  available: boolean;
}

export interface Psychologist {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  imageUrl: string;
  bio: string;
  availability: TimeSlot[];
}

// Company
export interface Company {
  id: string;
  name: string;
  code: string;
  planId: string;
  employeeCount: number;
  registeredAt: string;
  contactEmail: string;
  contactName: string;
}

// Employee
export interface Employee {
  id: string;
  name: string;
  email: string;
  companyId: string;
  sessionsRemaining: number;
  totalSessions: number;
}

// Sessions
export type SessionStatus = "upcoming" | "completed" | "cancelled";

export interface Session {
  id: string;
  employeeId: string;
  psychologistId: string;
  psychologistName: string;
  date: string;
  time: string;
  status: SessionStatus;
  notes?: string;
}

// Demo State
export interface DemoCompanyState {
  company: Company;
  enrolledEmployees: number;
  totalSessionsUsed: number;
}

export interface DemoEmployeeState {
  employee: Employee;
  sessions: Session[];
}

export interface DemoState {
  company: DemoCompanyState | null;
  employee: DemoEmployeeState | null;
}

// Analytics for Dashboard
export interface MonthlyStats {
  month: string;
  sessionsBooked: number;
  uniqueEmployees: number;
}

export interface DashboardStats {
  totalEmployees: number;
  activeEmployees: number;
  sessionsThisMonth: number;
  averageSatisfaction: number;
  monthlyData: MonthlyStats[];
}
