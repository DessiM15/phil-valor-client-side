import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="bg-denim pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Whole Picture.{" "}
              <span className="text-medallion">One Trusted Plan.</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl">
              At Valor Financial Advisors, we take a holistic approach to your
              financial life — from investments and insurance to retirement and
              estate planning. Every recommendation is built around you.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
              <span className="border border-white/20 rounded-full px-4 py-1.5">
                Registered Investment Advisor
              </span>
              <span className="border border-white/20 rounded-full px-4 py-1.5">
                Fiduciary
              </span>
              <span className="border border-white/20 rounded-full px-4 py-1.5">
                Independent
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://appointments.valorfs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-medallion text-white font-semibold px-8 py-3 rounded-lg hover:bg-medallion-dark transition-colors"
              >
                Book a Consultation
              </a>
              <a
                href="#services"
                className="border-2 border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Explore Our Services
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-medallion/20 rounded-2xl rotate-3" />
                <Image
                  src="/images/phil-headshot.png"
                  alt="Phil Resch, Investment Advisor Representative"
                  width={480}
                  height={560}
                  preload
                  className="relative rounded-2xl shadow-2xl object-cover w-full max-w-md"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
