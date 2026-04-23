"use client";

import { useState } from "react";
import { Mail, MapPin, Calendar } from "lucide-react";
import FadeIn from "./FadeIn";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-28 lg:py-36 bg-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl mb-20">
            <p className="text-medallion tracking-[0.3em] uppercase text-xs font-medium mb-4">
              Get Started
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-denim leading-tight">
              Get in <span className="font-semibold">Touch</span>
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed">
              Ready to take the first step? Reach out to schedule a conversation
              or ask us a question.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <div className="bg-white p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <Mail className="text-medallion mx-auto mb-4" size={32} strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-denim mb-2">
                    Message Received
                  </h3>
                  <p className="text-gray-500">
                    Thank you for reaching out. We&apos;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-denim tracking-wider uppercase mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-medallion text-gray-900 bg-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-denim tracking-wider uppercase mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-medallion text-gray-900 bg-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium text-denim tracking-wider uppercase mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-medallion text-gray-900 bg-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-denim tracking-wider uppercase mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-medallion resize-none text-gray-900 bg-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-denim text-white font-medium px-10 py-3.5 rounded-full hover:bg-denim-light transition-colors tracking-wide text-sm mt-4"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-8 lg:pl-8">
              <div className="pb-8 border-b border-denim/10">
                <div className="flex items-start gap-4">
                  <Calendar
                    className="text-medallion flex-shrink-0 mt-1"
                    size={20}
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="text-base font-semibold text-denim mb-2">
                      Book a Consultation
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      Schedule a no-obligation introductory call to discuss your
                      financial goals.
                    </p>
                    <a
                      href="https://appointments.valorfs.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-medallion text-medallion font-medium px-6 py-2.5 rounded-full hover:bg-medallion hover:text-white transition-colors text-sm tracking-wide"
                    >
                      Schedule Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="pb-8 border-b border-denim/10">
                <div className="flex items-start gap-4">
                  <Mail
                    className="text-medallion flex-shrink-0 mt-1"
                    size={20}
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="text-base font-semibold text-denim mb-2">
                      Email Us
                    </h3>
                    <a
                      href="mailto:management@valorfs.com"
                      className="text-gray-500 hover:text-medallion transition-colors text-sm"
                    >
                      management@valorfs.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4">
                  <MapPin
                    className="text-medallion flex-shrink-0 mt-1"
                    size={20}
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="text-base font-semibold text-denim mb-2">
                      Location
                    </h3>
                    <p className="text-gray-500 text-sm">Franklin, TN 37069</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
