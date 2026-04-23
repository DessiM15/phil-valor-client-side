import { ShieldCheck, BarChart3, Compass, Users } from "lucide-react";
import FadeIn from "./FadeIn";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Fiduciary Standard",
    description:
      "We are legally bound to act in your best interest — always. No hidden agendas, no conflicts of interest.",
  },
  {
    icon: BarChart3,
    title: "Institutional-Grade Tools",
    description:
      "Access the same research, analytics, and investment platforms used by the world's top financial institutions.",
  },
  {
    icon: Compass,
    title: "Holistic Approach",
    description:
      "We look at your complete financial picture — investments, insurance, tax strategy, estate, and more — in one integrated plan.",
  },
  {
    icon: Users,
    title: "Personal Relationship",
    description:
      "You'll work directly with Phil, not a call center. We build lasting partnerships based on trust and transparency.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 lg:py-36 bg-denim">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-20">
            <p className="text-medallion tracking-[0.3em] uppercase text-xs font-medium mb-4">
              The Valor Difference
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight">
              Why Choose <span className="font-semibold">Valor</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <FadeIn key={reason.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-px h-12 bg-medallion/30 mx-auto mb-6" />
                  <Icon
                    className="text-medallion mx-auto mb-5"
                    size={28}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-base font-semibold text-white mb-3 tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {reason.description}
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
