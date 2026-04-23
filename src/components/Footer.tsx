import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-denim text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <Image
              src="/images/valor-logo-white.png"
              alt="Valor Financial Advisors"
              width={160}
              height={44}
              className="h-[55px] w-auto mb-6"
            />
            <p className="text-white/40 text-sm leading-relaxed">
              Holistic financial planning for individuals and families seeking a
              trusted, fiduciary-first approach.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium text-medallion tracking-[0.2em] uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "/#services" },
                { label: "About Phil", href: "/#about" },
                { label: "Our Process", href: "/#process" },
                { label: "Contact", href: "/#contact" },
                { label: "About Valor", href: "/about" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-medallion transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-medallion tracking-[0.2em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <Mail size={14} className="text-medallion/60 flex-shrink-0" />
                <a
                  href="mailto:management@valorfs.com"
                  className="hover:text-medallion transition-colors"
                >
                  management@valorfs.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <MapPin size={14} className="text-medallion/60 flex-shrink-0" />
                Franklin, TN 37069
              </li>
            </ul>
            <a
              href="https://appointments.valorfs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 border border-medallion/50 text-medallion text-sm font-medium px-6 py-2.5 rounded-full hover:bg-medallion hover:text-white transition-colors tracking-wide"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-white/25 text-xs leading-relaxed">
            Valor Financial Advisors is affiliated with Valor Financial
            Specialists. Investment advisory services offered through Valor
            Financial Specialists, a registered investment advisor. Phil Resch
            is an Investment Advisor Representative of Valor Financial
            Specialists. This website is for informational purposes only and
            does not constitute investment advice, a solicitation, or a
            recommendation to buy or sell any securities. As a fiduciary, we are
            legally obligated to act in our clients&apos; best interests.
          </p>
          <p className="text-white/20 text-xs mt-4">
            &copy; {new Date().getFullYear()} Valor Financial Advisors. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
