import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/skyline.jpg')" }}
      />
      <div className="absolute inset-0 bg-denim/80" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <FadeIn>
          <p className="text-medallion tracking-[0.3em] uppercase text-sm font-medium mb-8">
            Valor Financial Advisors
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.1] tracking-tight">
            Your Whole Picture.
            <br />
            <span className="font-semibold text-medallion">
              One Trusted Plan.
            </span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="mt-8 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            Holistic financial planning for individuals and families who demand
            more from their advisor.
          </p>
        </FadeIn>
        <FadeIn delay={0.45}>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <a
              href="https://appointments.valorfs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-medallion text-white font-medium px-10 py-4 rounded-full hover:bg-medallion-dark transition-colors tracking-wide"
            >
              Book a Consultation
            </a>
            <a
              href="#services"
              className="border border-white/25 text-white font-medium px-10 py-4 rounded-full hover:bg-white/10 transition-colors tracking-wide"
            >
              Explore Services
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.6}>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-xs text-white/40 tracking-[0.2em] uppercase">
            <span>Registered Investment Advisor</span>
            <span className="hidden sm:inline text-medallion/40">|</span>
            <span>Fiduciary</span>
            <span className="hidden sm:inline text-medallion/40">|</span>
            <span>Independent</span>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <FadeIn delay={0.8}>
          <a
            href="#services"
            className="text-white/30 text-xs tracking-[0.2em] uppercase flex flex-col items-center gap-3 hover:text-white/60 transition-colors"
          >
            <span>Scroll</span>
            <div className="w-px h-8 bg-white/20" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
