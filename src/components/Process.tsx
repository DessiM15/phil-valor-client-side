import { CalendarCheck, Target, FileText, Handshake } from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Book a Consultation",
    description:
      "Schedule a no-obligation introductory call to discuss your financial situation and goals.",
  },
  {
    icon: Target,
    number: "02",
    title: "Risk Profile Assessment",
    description:
      "We evaluate your risk tolerance, time horizon, and financial objectives to understand your unique needs.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Custom Plan & Portfolio",
    description:
      "Receive a comprehensive financial plan and tailored investment portfolio strategy built around you.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Ongoing Partnership",
    description:
      "Regular reviews, proactive adjustments, and continuous support as your life and goals evolve.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-denim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Getting started is simple. Our streamlined process ensures you feel
              confident every step of the way.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.title} delay={index * 0.15}>
                <div className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[calc(100%-20%)] h-px bg-medallion/30" />
                  )}
                  <div className="relative text-center">
                    <div className="w-20 h-20 bg-denim-light border-2 border-medallion/40 rounded-full flex items-center justify-center mx-auto mb-5">
                      <Icon className="text-medallion" size={32} />
                    </div>
                    <span className="text-medallion font-bold text-sm tracking-wider">
                      STEP {step.number}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
