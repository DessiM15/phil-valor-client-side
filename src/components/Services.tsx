import {
  TrendingUp,
  Shield,
  Heart,
  Landmark,
  PiggyBank,
  Scale,
} from "lucide-react";
import FadeIn from "./FadeIn";

const services = [
  {
    icon: TrendingUp,
    title: "Investment & Advisory",
    description:
      "Personalized portfolio management through our RIA and AUM platform, tailored to your risk tolerance and goals.",
    bullets: [
      "Registered Investment Advisor",
      "Assets Under Management Platform",
      "Portfolio Construction & Rebalancing",
    ],
  },
  {
    icon: Shield,
    title: "Insurance Solutions",
    description:
      "Comprehensive coverage across life, annuity, disability, long-term care, and commercial property & casualty.",
    bullets: [
      "Life Insurance & Annuities",
      "Disability, LTC & Premium Finance",
      "Commercial Property & Casualty",
    ],
  },
  {
    icon: Heart,
    title: "Health Coverage",
    description:
      "Navigate the complexities of healthcare with guidance on ACA marketplace plans and Medicare options.",
    bullets: [
      "ACA Marketplace Plans",
      "Medicare Supplement & Advantage",
      "Open Enrollment Support",
    ],
  },
  {
    icon: Landmark,
    title: "Alternative Investments",
    description:
      "Access institutional-quality alternative investment opportunities typically reserved for high-net-worth investors.",
    bullets: [
      "Fixed-Return Strategies",
      "Land-Backed Investments",
      "Diversification Beyond Traditional Markets",
    ],
  },
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    description:
      "Strategic retirement planning including employer-sponsored plans, IRAs, and specialized tax-advantaged strategies.",
    bullets: [
      "401(k) & Employer Plans",
      "Traditional & Roth IRA",
      "412(e)(3) Defined Benefit Plans",
    ],
  },
  {
    icon: Scale,
    title: "Ancillary Services",
    description:
      "Essential estate and financial wellness services to protect your legacy and strengthen your financial foundation.",
    bullets: [
      "Will & Trust Coordination",
      "Debt Relief Strategies",
      "Financial Wellness Planning",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mb-20">
            <p className="text-medallion tracking-[0.3em] uppercase text-xs font-medium mb-4">
              What We Do
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-denim leading-tight">
              Comprehensive{" "}
              <span className="font-semibold">Financial Services</span>
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed">
              From investments to insurance, retirement to estate planning — we
              cover every aspect of your financial life under one roof.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-pearl">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.08}>
                <div className="bg-white p-10 hover:bg-pearl/30 transition-colors h-full">
                  <Icon className="text-medallion mb-6" size={28} strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-denim mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-medallion/60 mt-0.5">&#8212;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
