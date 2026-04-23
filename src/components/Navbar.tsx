"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pearl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/valor-logo.png"
              alt="Valor Financial Advisors"
              width={180}
              height={48}
              preload
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-denim font-medium hover:text-medallion transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://appointments.valorfs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-medallion text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-medallion-dark transition-colors"
            >
              Book a Consultation
            </a>
          </div>

          <button
            className="md:hidden text-denim p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-pearl">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-denim font-medium py-2 hover:text-medallion transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://appointments.valorfs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-medallion text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-medallion-dark transition-colors"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
