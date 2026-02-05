"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDemoCompany } from "@/hooks/useDemoState";
import { mockPlans } from "@/data/mockPlans";
import { generateCompanyCode } from "@/data/mockCompanies";
import { Company } from "@/types/demo";

export default function BusinessDemoPage() {
  const router = useRouter();
  const { registerCompany } = useDemoCompany();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    contactEmail: "",
    employeeCount: "",
    selectedPlan: "professional",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = "Contact name is required";
    }
    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
      newErrors.contactEmail = "Please enter a valid email";
    }
    if (!formData.employeeCount) {
      newErrors.employeeCount = "Employee count is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = () => {
    const selectedPlan = mockPlans.find((p) => p.id === formData.selectedPlan);
    if (!selectedPlan) return;

    const company: Company = {
      id: `company-${Date.now()}`,
      name: formData.companyName,
      code: generateCompanyCode(),
      planId: formData.selectedPlan,
      employeeCount: parseInt(formData.employeeCount),
      registeredAt: new Date().toISOString(),
      contactEmail: formData.contactEmail,
      contactName: formData.contactName,
    };

    registerCompany(company);
    router.push("/business/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-sage-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-sage-600">
              Step {step} of 2
            </span>
            <Link
              href="/business"
              className="text-sm text-sage-500 hover:text-sage-700"
            >
              Cancel
            </Link>
          </div>
          <div className="h-2 bg-sage-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${step * 50}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-sage-100 p-8 shadow-sm">
          {step === 1 ? (
            <>
              <h1 className="text-2xl font-bold text-sage-900 mb-2">
                Company Information
              </h1>
              <p className="text-sage-600 mb-8">
                Tell us about your organization to get started.
              </p>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-sage-700 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.companyName ? "border-red-300" : "border-sage-200"
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent`}
                    placeholder="Acme Corporation"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contactName"
                    className="block text-sm font-medium text-sage-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    value={formData.contactName}
                    onChange={(e) =>
                      setFormData({ ...formData, contactName: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.contactName ? "border-red-300" : "border-sage-200"
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent`}
                    placeholder="Jane Smith"
                  />
                  {errors.contactName && (
                    <p className="mt-1 text-sm text-red-500">{errors.contactName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contactEmail"
                    className="block text-sm font-medium text-sage-700 mb-2"
                  >
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    value={formData.contactEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, contactEmail: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.contactEmail ? "border-red-300" : "border-sage-200"
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent`}
                    placeholder="jane@acme.com"
                  />
                  {errors.contactEmail && (
                    <p className="mt-1 text-sm text-red-500">{errors.contactEmail}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="employeeCount"
                    className="block text-sm font-medium text-sage-700 mb-2"
                  >
                    Number of Employees
                  </label>
                  <select
                    id="employeeCount"
                    value={formData.employeeCount}
                    onChange={(e) =>
                      setFormData({ ...formData, employeeCount: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.employeeCount ? "border-red-300" : "border-sage-200"
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white`}
                  >
                    <option value="">Select range</option>
                    <option value="25">1-25</option>
                    <option value="50">26-50</option>
                    <option value="100">51-100</option>
                    <option value="250">101-250</option>
                    <option value="500">251-500</option>
                  </select>
                  {errors.employeeCount && (
                    <p className="mt-1 text-sm text-red-500">{errors.employeeCount}</p>
                  )}
                </div>
              </div>

              <button
                onClick={handleNext}
                className="w-full mt-8 py-3 px-4 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors"
              >
                Continue to Plan Selection
              </button>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-sage-900 mb-2">
                Select Your Plan
              </h1>
              <p className="text-sage-600 mb-8">
                Choose the plan that best fits your team size.
              </p>

              <div className="space-y-4">
                {mockPlans.map((plan) => (
                  <label
                    key={plan.id}
                    className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.selectedPlan === plan.id
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-sage-200 hover:border-sage-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="plan"
                          value={plan.id}
                          checked={formData.selectedPlan === plan.id}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              selectedPlan: e.target.value,
                            })
                          }
                          className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sage-800">
                              {plan.name}
                            </span>
                            {plan.popular && (
                              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-sage-500">
                            Up to {plan.employeeLimit} employees
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-sage-900">
                          ${plan.price}
                        </div>
                        <div className="text-xs text-sage-500">/month</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 px-4 bg-sage-100 text-sage-700 rounded-xl font-medium hover:bg-sage-200 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 py-3 px-4 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors"
                >
                  Complete Registration
                </button>
              </div>
            </>
          )}
        </div>

        <p className="text-center text-sm text-sage-500 mt-6">
          This is a demo. No real data is collected or stored.
        </p>
      </div>
    </div>
  );
}
