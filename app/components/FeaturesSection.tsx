import { Zap, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience blazing-fast performance with infrastructure optimized to handle real-time workloads and global scaling.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Protected by advanced encryption, compliance standards, and security monitoring trusted by Fortune 500 companies.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Make data-backed decisions using real-time dashboards powered by actionable insights and predictive trends.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Everything you need to succeed</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powerful features designed to help you build, scale, and manage your business effortlessly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="
                group p-8 rounded-2xl border border-gray-800 bg-[#0d0d0d] 
                transition-all duration-500 ease-out shadow-md
                hover:-translate-y-2 hover:shadow-orange-500/30 hover:border-orange-500
              "
            >
              {/* Icon Container */}
              <div
                className="
                  w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6
                  transition-all duration-500
                  group-hover:bg-orange-500 group-hover:rotate-6 group-hover:shadow-lg
                "
              >
                <f.icon className="w-7 h-7 text-orange-500 group-hover:text-black transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {f.title}
              </h3>

              <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
