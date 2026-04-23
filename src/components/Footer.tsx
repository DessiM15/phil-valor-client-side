import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-denim text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Image
              src="/images/valor-logo-white.png"
              alt="Valor Financial Advisors"
              width={180}
              height={48}
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Holistic financial planning for individuals and families seeking a
              trusted, fiduciary-first approach.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-medallion mb-4">Quick Links</h4>
            <ul className="space-y-2">
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
                    className="text-white/70 hover:text-medallion transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-medallion mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <Mail size={16} className="text-medallion flex-shrink-0" />
                <a
                  href="mailto:management@valorfs.com"
                  className="hover:text-medallion transition-colors"
                >
                  management@valorfs.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin size={16} className="text-medallion flex-shrink-0" />
                Franklin, TN 37069
              </li>
            </ul>
            <a
              href="https://appointments.valorfs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-medallion text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-medallion-dark transition-colors text-sm"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-white/50 text-xs leading-relaxed">
            Valor Financial Advisors is affiliated with Valor Financial
            Specialists. Investment advisory services offered through Valor
            Financial Specialists, a registered investment advisor. Phil Resch
            is an Investment Advisor Representative of Valor Financial
            Specialists. This website is for informational purposes only and
            does not constitute investment advice, a solicitation, or a
            recommendation to buy or sell any securities. As a fiduciary, we are
            legally obligated to act in our clients&apos; best interests.
          </p>
          <p className="text-white/40 text-xs mt-3">
            &copy; {new Date().getFullYear()} Valor Financial Advisors. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
