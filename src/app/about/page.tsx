import type { Metadata } from "next";
import Image from "next/image";
import {
  TrendingUp,
  Shield,
  Heart,
  Landmark,
  PiggyBank,
  Scale,
  ShieldCheck,
  BarChart3,
  Compass,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Valor Financial Advisors",
  description:
    "Learn about Phil Resch and Valor Financial Advisors — our philosophy, services, and commitment to holistic, fiduciary-first financial planning.",
};

const serviceCategories = [
  {
    icon: TrendingUp,
    title: "Investment & Advisory Services",
    description:
      "Our investment advisory platform gives you access to institutional-quality portfolio management. As a Registered Investment Advisor, we construct diversified portfolios aligned with your risk tolerance, time horizon, and financial objectives. Our Assets Under Management (AUM) platform provides ongoing monitoring, rebalancing, and tax-efficient strategies to keep your wealth growing.",
  },
  {
    icon: Shield,
    title: "Insurance Solutions",
    description:
      "We provide comprehensive insurance planning across multiple disciplines. From life insurance and annuities that protect your family's future, to disability income and long-term care coverage that safeguards your earning potential, to commercial property & casualty for business owners — we ensure every risk is addressed. Our premium financing solutions help high-net-worth clients optimize their insurance strategies.",
  },
  {
    icon: Heart,
    title: "Health Coverage",
    description:
      "Navigating healthcare can be overwhelming. We guide clients through ACA marketplace plans, Medicare Supplement and Advantage options, and open enrollment decisions. Whether you're approaching 65 or seeking coverage for your family, we'll help you find the right plan at the right cost.",
  },
  {
    icon: Landmark,
    title: "Alternative Investments",
    description:
      "For qualified investors seeking diversification beyond traditional stocks and bonds, we offer access to carefully vetted alternative investment opportunities. Our fixed-return and land-backed investment strategies provide additional income streams and portfolio resilience outside of public market volatility.",
  },
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    description:
      "Whether you're building wealth or transitioning into retirement, our planning covers all angles. We work with employer-sponsored plans (401k), Traditional and Roth IRAs, and specialized strategies like 412(e)(3) defined benefit plans for business owners seeking maximum tax-deferred contributions.",
  },
  {
    icon: Scale,
    title: "Ancillary Services",
    description:
      "Your financial plan isn't complete without addressing estate planning and debt management. We coordinate with estate attorneys on will and trust strategies, provide debt relief guidance, and offer comprehensive financial wellness planning to strengthen your overall foundation.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Fiduciary Always",
    description:
      "We don't just recommend what's suitable — we recommend what's best. As a fiduciary, every recommendation we make is legally required to be in your best interest.",
  },
  {
    icon: BarChart3,
    title: "Institutional Quality",
    description:
      "You deserve the same tools and access that institutional investors enjoy. Our platform provides sophisticated research, analytics, and investment vehicles typically reserved for the ultra-wealthy.",
  },
  {
    icon: Compass,
    title: "Truly Holistic",
    description:
      "Most advisors focus on just one slice of your financial life. We integrate investments, insurance, tax strategy, retirement, and estate planning into one cohesive plan.",
  },
  {
    icon: Users,
    title: "Relationship-Driven",
    description:
      "We limit our client base intentionally. This means you always have direct access to Phil, timely responses, and the personalized attention your financial life deserves.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-denim pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                About{" "}
                <span className="text-medallion">Valor Financial Advisors</span>
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Founded on the principle that every client deserves a financial
                partner who sees their complete picture, Valor Financial
                Advisors delivers institutional-quality planning with a personal
                touch.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-medallion/20 rounded-2xl rotate-3" />
                <Image
                  src="/images/phil-headshot.png"
                  alt="Phil Resch"
                  width={400}
                  height={480}
                  preload
                  className="relative rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phil's Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-denim mb-8">
            Phil Resch — Your Financial Partner
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Phil Resch is the founder of Valor Financial Advisors, operating
              as an Investment Advisor Representative affiliated with Valor
              Financial Specialists. Based in Franklin, Tennessee, Phil has built
              his practice on one core belief: your financial plan should account
              for your whole life, not just your investments.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              With expertise spanning investment management, insurance planning,
              retirement strategies, alternative investments, and estate
              coordination, Phil brings a rare breadth of knowledge to every
              client relationship. This holistic approach means clients don't
              need to coordinate between multiple advisors — Phil serves as the
              single point of contact for their complete financial strategy.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Phil specializes in working with high-net-worth individuals and
              families who value a direct, personal relationship with their
              advisor. Every client works directly with Phil — no hand-offs to
              junior associates, no call centers, and no cookie-cutter plans.
            </p>
            <blockquote className="border-l-4 border-medallion pl-6 my-8">
              <p className="text-xl text-denim/80 italic">
                &ldquo;I believe financial planning should be comprehensive,
                transparent, and deeply personal. When you work with me, you get
                a partner who is invested in your success — not just your
                portfolio.&rdquo;
              </p>
              <cite className="text-medallion font-semibold text-sm mt-2 block">
                — Phil Resch, Investment Advisor Representative
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Valor Difference */}
      <section className="py-20 bg-parchment/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-denim">
              The Valor Difference
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              For high-net-worth individuals who demand more from their financial
              advisor, here's what sets Valor apart.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-xl p-8 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-denim rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-medallion" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-denim mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-denim">
              Our Services in Detail
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A closer look at the comprehensive services we offer under one
              roof.
            </p>
          </div>
          <div className="space-y-8">
            {serviceCategories.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`rounded-xl p-8 ${
                    index % 2 === 0 ? "bg-pearl" : "bg-parchment/20"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-medallion/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-medallion" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-denim mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-denim">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Schedule a no-obligation consultation to discuss your financial
            goals. Let&apos;s build a plan that works for your whole picture.
          </p>
          <a
            href="https://appointments.valorfs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-medallion text-white font-semibold px-10 py-4 rounded-lg hover:bg-medallion-dark transition-colors text-lg"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
