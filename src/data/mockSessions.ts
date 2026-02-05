import { Session } from "@/types/demo";

// Sample sessions for the demo employee
export const mockSessions: Session[] = [
  {
    id: "session-1",
    employeeId: "demo-employee",
    psychologistId: "dr-emma-chen",
    psychologistName: "Dr. Emma Chen",
    date: "2024-01-10",
    time: "10:00",
    status: "completed",
    notes: "Initial consultation - discussed workplace stressors and coping strategies.",
  },
  {
    id: "session-2",
    employeeId: "demo-employee",
    psychologistId: "dr-emma-chen",
    psychologistName: "Dr. Emma Chen",
    date: "2024-01-24",
    time: "10:00",
    status: "completed",
    notes: "Follow-up session - introduced mindfulness techniques for daily stress management.",
  },
];

// Get sessions for a specific employee
export function getEmployeeSessions(employeeId: string): Session[] {
  return mockSessions.filter((session) => session.employeeId === employeeId);
}
