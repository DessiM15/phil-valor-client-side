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
    <section className="py-20 bg-parchment/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-denim">
              Why Choose Valor
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              What sets us apart is our commitment to you — your goals, your
              family, your future.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <FadeIn key={reason.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-denim rounded-full flex items-center justify-center mx-auto mb-5">
                    <Icon className="text-medallion" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-denim mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
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
