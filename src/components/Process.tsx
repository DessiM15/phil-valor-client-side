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
    <section id="process" className="py-28 lg:py-36 bg-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mb-20">
            <p className="text-medallion tracking-[0.3em] uppercase text-xs font-medium mb-4">
              Our Process
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-denim leading-tight">
              How It <span className="font-semibold">Works</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.title} delay={index * 0.12}>
                <div className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[70%] w-[60%] border-t border-dashed border-denim/15" />
                  )}
                  <span className="text-6xl font-extralight text-denim/10 block mb-4">
                    {step.number}
                  </span>
                  <Icon
                    className="text-medallion mb-4"
                    size={24}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-base font-semibold text-denim mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
