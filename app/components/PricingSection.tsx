"use client";

import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

const plans: Plan[] = [
  {
    name: "Basic",
    price: "$9",
    period: "/month",
    description: "Perfect for individuals and small projects getting started.",
    features: ["Up to 5 projects", "Basic analytics", "24/7 email support", "1GB storage", "API access"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Ideal for growing teams that need more power and flexibility.",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "API access",
      "Custom integrations",
      "Team collaboration",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large organizations with advanced security needs.",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Dedicated account manager",
      "Custom SLA",
      "SSO authentication",
      "Audit logs",
      "On-premise deployment",
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-3">
          Choose the plan that best fits your needs. Cancel anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan: Plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col p-8 rounded-3xl border border-gray-700 
              bg-[#111] backdrop-blur-lg shadow-xl transition-all duration-300 
              hover:-translate-y-2 hover:scale-[1.05] hover:shadow-orange-500/40
              ${plan.highlighted ? "border-orange-500 shadow-orange-500/50 animate-pulse" : ""}
            `}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-black px-4 py-1 text-sm font-semibold rounded-full">
                Most Popular
              </div>
            )}

            <h3 className="text-white text-2xl font-semibold mb-3">{plan.name}</h3>
            <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

            <div className="text-white mb-6">
              <span className="text-5xl font-extrabold">{plan.price}</span>
              <span className="text-lg text-gray-500">{plan.period}</span>
            </div>

            <ul className="space-y-4 flex-grow text-left">
              {plan.features.map((feature: string) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="text-orange-500 h-5 w-5" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={`w-full mt-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 
                hover:-translate-y-1 hover:shadow-xl
                ${plan.highlighted ? "bg-orange-500 text-black hover:bg-orange-600" : "bg-white/10 text-white hover:bg-white/20"}
              `}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
