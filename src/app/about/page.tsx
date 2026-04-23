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
import FadeIn from "@/components/FadeIn";

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
      "We provide comprehensive insurance planning across multiple disciplines. From life insurance and annuities that protect your family's future, to disability income and long-term care coverage that safeguards your earning potential, to commercial property & casualty for business owners — we ensure every risk is addressed.",
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
      "For qualified investors seeking diversification beyond traditional stocks and bonds, we offer access to carefully vetted alternative investment opportunities. Our fixed-return and land-backed investment strategies provide additional income streams and portfolio resilience.",
  },
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    description:
      "Whether you're building wealth or transitioning into retirement, our planning covers all angles. We work with employer-sponsored plans (401k), Traditional and Roth IRAs, and specialized strategies like 412(e)(3) defined benefit plans for business owners.",
  },
  {
    icon: Scale,
    title: "Ancillary Services",
    description:
      "Your financial plan isn't complete without addressing estate planning and debt management. We coordinate with estate attorneys on will and trust strategies, provide debt relief guidance, and offer comprehensive financial wellness planning.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Fiduciary Always",
    description:
      "We don't just recommend what's suitable — we recommend what's best. Every recommendation is legally required to be in your best interest.",
  },
  {
    icon: BarChart3,
    title: "Institutional Quality",
    description:
      "You deserve the same tools and access that institutional investors enjoy. Our platform provides sophisticated research and investment vehicles.",
  },
  {
    icon: Compass,
    title: "Truly Holistic",
    description:
      "We integrate investments, insurance, tax strategy, retirement, and estate planning into one cohesive plan.",
  },
  {
    icon: Users,
    title: "Relationship-Driven",
    description:
      "We limit our client base intentionally. You always have direct access to Phil, timely responses, and personalized attention.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/skyline.jpg')" }}
        />
        <div className="absolute inset-0 bg-denim/85" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <FadeIn>
            <p className="text-medallion tracking-[0.3em] uppercase text-xs font-medium mb-6">
              About Us
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.1]">
              About{" "}
              <span className="font-semibold text-medallion">
                Valor Financial Advisors
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-8 text-lg text-white/60 max-w-2xl leading-relaxed font-light">
              Founded on the principle that every client deserves a financial
              partner who sees their complete picture.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Phil's Story */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <Image
                  src="/images/phil-headshot.png"
                  alt="Phil Resch"
                  width={560}
                  height={640}
                  preload
                  className="rounded-sm object-cover w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-medallion/20" />
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <p className="text-medallion tracking-[0.3em] uppercase text-xs font-medium mb-4">
                Your Advisor
              </p>
              <h2 className="text-4xl sm:text-5xl font-light text-denim leading-tight mb-8">
                Phil Resch
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Phil Resch is the founder of Valor Financial Advisors, operating
                as an Investment Advisor Representative affiliated with Valor
                Financial Specialists. Based in Franklin, Tennessee, Phil has
                built his practice on one core belief: your financial plan
                should account for your whole life, not just your investments.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                With expertise spanning investment management, insurance
                planning, retirement strategies, alternative investments, and
                estate coordination, Phil brings a rare breadth of knowledge to
                every client relationship.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Phil specializes in working with high-net-worth individuals and
                families who value a direct, personal relationship with their
                advisor. Every client works directly with Phil — no hand-offs,
                no call centers, and no cookie-cutter plans.
              </p>
              <blockquote className="border-l-2 border-medallion pl-6">
                <p className="text-lg text-denim/70 italic leading-relaxed font-light">
                  &ldquo;I believe financial planning should be comprehensive,
                  transparent, and deeply personal.&rdquo;
                </p>
                <cite className="text-medallion text-xs font-medium mt-3 block tracking-[0.2em] uppercase not-italic">
                  Phil Resch
                </cite>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Valor Difference */}
      <section className="py-28 lg:py-36 bg-denim">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center mb-20">
              <p className="text-medallion tracking-[0.3em] uppercase text-xs font-medium mb-4">
                Our Values
              </p>
              <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight">
                The Valor <span className="font-semibold">Difference</span>
              </h2>
              <p className="mt-6 text-white/50 leading-relaxed">
                For high-net-worth individuals who demand more from their
                financial advisor.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <FadeIn key={value.title} delay={index * 0.1}>
                  <div className="bg-denim p-12">
                    <Icon
                      className="text-medallion mb-5"
                      size={24}
                      strokeWidth={1.5}
                    />
                    <h3 className="text-base font-semibold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl mb-20">
              <p className="text-medallion tracking-[0.3em] uppercase text-xs font-medium mb-4">
                In Detail
              </p>
              <h2 className="text-4xl sm:text-5xl font-light text-denim leading-tight">
                Our <span className="font-semibold">Services</span>
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-0 divide-y divide-pearl">
            {serviceCategories.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={index * 0.05}>
                  <div className="py-10 flex items-start gap-6">
                    <Icon
                      className="text-medallion flex-shrink-0 mt-1"
                      size={22}
                      strokeWidth={1.5}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-denim mb-3 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/skyline.jpg')" }}
        />
        <div className="absolute inset-0 bg-denim/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-6 leading-tight">
              Ready to <span className="font-semibold">Get Started?</span>
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto font-light">
              Schedule a no-obligation consultation to discuss your financial
              goals.
            </p>
            <a
              href="https://appointments.valorfs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-medallion text-white font-medium px-12 py-4 rounded-full hover:bg-medallion-dark transition-colors tracking-wide"
            >
              Book a Consultation
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
