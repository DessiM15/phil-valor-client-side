import Image from "next/image";
import FadeIn from "./FadeIn";

export default function AboutPhil() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <Image
                src="/images/phil-headshot.png"
                alt="Phil Resch"
                width={560}
                height={640}
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
              Meet <span className="font-semibold">Phil Resch</span>
            </h2>
            <blockquote className="border-l-2 border-medallion pl-6 mb-8">
              <p className="text-xl text-denim/70 italic leading-relaxed font-light">
                &ldquo;Your whole picture. One trusted plan. I believe every
                client deserves a financial strategy that sees the full
                picture — not just one piece of it.&rdquo;
              </p>
            </blockquote>
            <p className="text-xs font-semibold text-medallion uppercase tracking-[0.2em] mb-6">
              Investment Advisor Representative
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Phil Resch is the founder of Valor Financial Advisors, affiliated
              with Valor Financial Specialists. With deep expertise across
              investments, insurance, retirement planning, and alternative
              strategies, Phil takes a truly holistic approach to financial
              planning.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
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
              className="inline-block border border-denim text-denim font-medium px-8 py-3.5 rounded-full hover:bg-denim hover:text-white transition-colors tracking-wide text-sm"
            >
              Meet with Phil
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
