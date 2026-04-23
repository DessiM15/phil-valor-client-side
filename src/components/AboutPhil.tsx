import Image from "next/image";
import FadeIn from "./FadeIn";

export default function AboutPhil() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-parchment rounded-2xl -rotate-2" />
                <Image
                  src="/images/phil-headshot.png"
                  alt="Phil Resch speaking"
                  width={440}
                  height={520}
                  className="relative rounded-2xl shadow-lg object-cover"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <h2 className="text-3xl sm:text-4xl font-bold text-denim mb-6">
              Meet Phil Resch
            </h2>
            <blockquote className="border-l-4 border-medallion pl-6 mb-6">
              <p className="text-xl text-denim/80 italic leading-relaxed">
                &ldquo;Your whole picture. One trusted plan. I believe every
                client deserves a financial strategy that sees the full
                picture — not just one piece of it.&rdquo;
              </p>
            </blockquote>
            <p className="text-sm font-semibold text-medallion uppercase tracking-wider mb-4">
              Investment Advisor Representative
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Phil Resch is the founder of Valor Financial Advisors, affiliated
              with Valor Financial Specialists. With deep expertise across
              investments, insurance, retirement planning, and alternative
              strategies, Phil takes a truly holistic approach to financial
              planning.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Based in Franklin, Tennessee, Phil works directly with
              high-net-worth individuals and families to build comprehensive
              financial plans that align every aspect of their financial
              life — from wealth accumulation to preservation and legacy
              planning.
            </p>
            <a
              href="https://appointments.valorfs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-medallion text-white font-semibold px-8 py-3 rounded-lg hover:bg-medallion-dark transition-colors"
            >
              Meet with Phil
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
