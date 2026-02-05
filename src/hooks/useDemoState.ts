"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Company,
  Employee,
  Session,
  DemoCompanyState,
  DemoEmployeeState,
} from "@/types/demo";
import { mockCompanies } from "@/data/mockCompanies";
import { mockSessions } from "@/data/mockSessions";

const COMPANY_STORAGE_KEY = "rekindle_demo_company";
const EMPLOYEE_STORAGE_KEY = "rekindle_demo_employee";

// Company Demo State Hook
export function useDemoCompany() {
  const [companyState, setCompanyState] = useState<DemoCompanyState | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(COMPANY_STORAGE_KEY);
    if (stored) {
      try {
        setCompanyState(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse company state:", e);
      }
    }
    setIsLoading(false);
  }, []);

  const registerCompany = useCallback((company: Company) => {
    const newState: DemoCompanyState = {
      company,
      enrolledEmployees: 0,
      totalSessionsUsed: 0,
    };
    localStorage.setItem(COMPANY_STORAGE_KEY, JSON.stringify(newState));
    setCompanyState(newState);
    return newState;
  }, []);

  const updateCompanyStats = useCallback(
    (enrolledEmployees: number, totalSessionsUsed: number) => {
      if (!companyState) return;
      const newState: DemoCompanyState = {
        ...companyState,
        enrolledEmployees,
        totalSessionsUsed,
      };
      localStorage.setItem(COMPANY_STORAGE_KEY, JSON.stringify(newState));
      setCompanyState(newState);
    },
    [companyState]
  );

  const clearCompany = useCallback(() => {
    localStorage.removeItem(COMPANY_STORAGE_KEY);
    setCompanyState(null);
  }, []);

  return {
    companyState,
    isLoading,
    registerCompany,
    updateCompanyStats,
    clearCompany,
  };
}

// Employee Demo State Hook
export function useDemoEmployee() {
  const [employeeState, setEmployeeState] = useState<DemoEmployeeState | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(EMPLOYEE_STORAGE_KEY);
    if (stored) {
      try {
        setEmployeeState(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse employee state:", e);
      }
    }
    setIsLoading(false);
  }, []);

  const loginWithCode = useCallback((code: string): DemoEmployeeState | null => {
    // Check pre-seeded companies first
    const preSeededCompany = mockCompanies.find(
      (c) => c.code.toUpperCase() === code.toUpperCase()
    );

    // Check localStorage for registered companies
    const storedCompany = localStorage.getItem(COMPANY_STORAGE_KEY);
    let registeredCompany: DemoCompanyState | null = null;
    if (storedCompany) {
      try {
        registeredCompany = JSON.parse(storedCompany);
      } catch (e) {
        console.error("Failed to parse company state:", e);
      }
    }

    const company =
      preSeededCompany ||
      (registeredCompany?.company.code.toUpperCase() === code.toUpperCase()
        ? registeredCompany.company
        : null);

    if (!company) {
      return null;
    }

    // Create demo employee
    const employee: Employee = {
      id: "demo-employee",
      name: "Demo User",
      email: "demo@example.com",
      companyId: company.id,
      sessionsRemaining: 5,
      totalSessions: 5,
    };

    // Get any existing sessions or use mock ones
    const existingState = localStorage.getItem(EMPLOYEE_STORAGE_KEY);
    let sessions: Session[] = [];

    if (existingState) {
      try {
        const parsed = JSON.parse(existingState);
        if (parsed.employee?.companyId === company.id) {
          // Same company, keep existing state
          setEmployeeState(parsed);
          return parsed;
        }
      } catch (e) {
        console.error("Failed to parse employee state:", e);
      }
    }

    // For pre-seeded company, use mock sessions
    if (preSeededCompany) {
      sessions = [...mockSessions];
      employee.sessionsRemaining = 5 - sessions.length;
    }

    const newState: DemoEmployeeState = {
      employee,
      sessions,
    };

    localStorage.setItem(EMPLOYEE_STORAGE_KEY, JSON.stringify(newState));
    setEmployeeState(newState);
    return newState;
  }, []);

  const bookSession = useCallback(
    (session: Session) => {
      if (!employeeState) return false;
      if (employeeState.employee.sessionsRemaining <= 0) return false;

      const updatedEmployee: Employee = {
        ...employeeState.employee,
        sessionsRemaining: employeeState.employee.sessionsRemaining - 1,
      };

      const newState: DemoEmployeeState = {
        employee: updatedEmployee,
        sessions: [...employeeState.sessions, session],
      };

      localStorage.setItem(EMPLOYEE_STORAGE_KEY, JSON.stringify(newState));
      setEmployeeState(newState);
      return true;
    },
    [employeeState]
  );

  const cancelSession = useCallback(
    (sessionId: string) => {
      if (!employeeState) return;

      const sessionIndex = employeeState.sessions.findIndex(
        (s) => s.id === sessionId
      );
      if (sessionIndex === -1) return;

      const session = employeeState.sessions[sessionIndex];
      if (session.status !== "upcoming") return;

      const updatedSessions = employeeState.sessions.map((s) =>
        s.id === sessionId ? { ...s, status: "cancelled" as const } : s
      );

      const updatedEmployee: Employee = {
        ...employeeState.employee,
        sessionsRemaining: employeeState.employee.sessionsRemaining + 1,
      };

      const newState: DemoEmployeeState = {
        employee: updatedEmployee,
        sessions: updatedSessions,
      };

      localStorage.setItem(EMPLOYEE_STORAGE_KEY, JSON.stringify(newState));
      setEmployeeState(newState);
    },
    [employeeState]
  );

  const logout = useCallback(() => {
    localStorage.removeItem(EMPLOYEE_STORAGE_KEY);
    setEmployeeState(null);
  }, []);

  return {
    employeeState,
    isLoading,
    loginWithCode,
    bookSession,
    cancelSession,
    logout,
  };
}

// Reset all demo data
export function resetDemoData() {
  localStorage.removeItem(COMPANY_STORAGE_KEY);
  localStorage.removeItem(EMPLOYEE_STORAGE_KEY);
  window.location.reload();
}
