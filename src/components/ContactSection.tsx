"use client";

import { useState } from "react";
import { Mail, MapPin, Calendar } from "lucide-react";

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
    <section id="contact" className="py-20 bg-pearl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-denim">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to take the first step? Reach out to schedule a conversation
            or ask us a question.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-denim mb-2">
                  Message Received
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-denim mb-1.5"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-medallion/50 focus:border-medallion text-gray-900"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-denim mb-1.5"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-medallion/50 focus:border-medallion text-gray-900"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-denim mb-1.5"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-medallion/50 focus:border-medallion text-gray-900"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-denim mb-1.5"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-medallion/50 focus:border-medallion resize-none text-gray-900"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-medallion text-white font-semibold px-6 py-3 rounded-lg hover:bg-medallion-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-medallion/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-medallion" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-denim mb-2">
                    Book a Consultation
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Schedule a no-obligation introductory call to discuss your
                    financial goals.
                  </p>
                  <a
                    href="https://appointments.valorfs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-denim text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-denim-light transition-colors text-sm"
                  >
                    Schedule Now
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-medallion/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-medallion" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-denim mb-2">
                    Email Us
                  </h3>
                  <a
                    href="mailto:management@valorfs.com"
                    className="text-medallion hover:text-medallion-dark transition-colors"
                  >
                    management@valorfs.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-medallion/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-medallion" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-denim mb-2">
                    Location
                  </h3>
                  <p className="text-gray-600">Franklin, TN 37069</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
