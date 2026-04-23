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
    <section id="services" className="py-20 bg-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-denim">
              Comprehensive Financial Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              From investments to insurance, retirement to estate planning — we
              cover every aspect of your financial life under one roof.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-pearl h-full">
                  <div className="w-12 h-12 bg-medallion/10 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="text-medallion" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-denim mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm text-gray-500 flex items-start gap-2"
                      >
                        <span className="text-medallion mt-1 flex-shrink-0">
                          &bull;
                        </span>
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
