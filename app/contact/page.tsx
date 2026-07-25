import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/data/siteData';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact Mohd Ahmad | Website Developer & SEO Expert India — Ahmad Web Works',
  description: 'Contact Mohd Ahmad at Ahmad Web Works for professional website development, Shopify store setup, digital marketing, and SEO services. WhatsApp: +91 9084326728. Email: helloahmadwebworks@gmail.com.',
  alternates: { canonical: `${siteConfig.baseUrl}/contact` }
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumbs items={[{ label: 'Contact Mohd Ahmad' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-50/80 via-white to-slate-50 p-8 sm:p-12 lg:p-16 rounded-3xl border border-slate-200 shadow-subtle space-y-6">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-white px-3.5 py-1.5 rounded-full border border-brand-200">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Contact Mohd Ahmad — Let's Build Your Website
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have a project in mind or need a quote? Reach out directly via WhatsApp, email, or fill out the form below. Work directly with founder Mohd Ahmad with zero middlemen.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT LAYOUT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Side */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-card space-y-8">
            <h2 className="text-2xl font-bold border-b border-slate-800 pb-4">Direct Contact Details</h2>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 text-xl">
                  <FaWhatsapp />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">WhatsApp (Fastest Response)</div>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    +91 9084326728
                  </a>
                  <p className="text-xs text-slate-400 mt-1">Available 9am to 9pm IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0 text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Official Email</div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base font-bold text-white hover:text-brand-400 transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-xs text-slate-400 mt-1">Direct inbox of Mohd Ahmad</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0 text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Studio Headquarters</div>
                  <div className="text-base font-bold text-white">Aligarh, Uttar Pradesh, India</div>
                  <p className="text-xs text-slate-400 mt-1">Serving Clients Across India & International Remote</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0 text-xl">
                  <FaClock />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Working Hours</div>
                  <div className="text-sm font-semibold text-white">Monday – Sunday: 9:00 AM – 9:00 PM IST</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
              ⚡ All project communication, reviews, updates, and maintenance requests are handled directly by founder Mohd Ahmad.
            </div>
          </div>
        </div>

        {/* Interactive Form Side */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
