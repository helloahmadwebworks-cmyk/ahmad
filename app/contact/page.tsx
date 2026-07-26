import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/data/siteData';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { HiOutlineChatBubbleLeftRight, HiOutlineDocumentCheck, HiOutlineBuildingOffice } from 'react-icons/hi2';

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
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-white px-3.5 py-1.5 rounded-full border border-brand-200">
            Direct Founder Consultation
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Contact Mohd Ahmad — Let's Build Your Digital Lead Engine
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have a project in mind, need a speed audit, or want a custom website quote? Reach out directly via WhatsApp, email, or fill out the form below. Work 1-on-1 with founder Mohd Ahmad with zero middlemen or agency account managers.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT LAYOUT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Side */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-card space-y-8">
            <h2 className="text-2xl font-bold border-b border-slate-800 pb-4">Direct Communication Channels</h2>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 text-xl">
                  <FaWhatsapp />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">WhatsApp (Fastest 15-Min Response)</div>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-extrabold text-white hover:text-emerald-400 transition-colors"
                  >
                    +91 9084326728
                  </a>
                  <p className="text-xs text-slate-400 mt-1">Direct messaging with founder Mohd Ahmad (9am to 9pm IST)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0 text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Official Email Inbox</div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base font-bold text-white hover:text-brand-400 transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-xs text-slate-400 mt-1">Send your project scope document or RFP details</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0 text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Studio Location</div>
                  <div className="text-base font-bold text-white">Aligarh, Uttar Pradesh, India</div>
                  <p className="text-xs text-slate-400 mt-1">Serving clients in Delhi NCR, Mumbai, Bengaluru, & Pan-India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0 text-xl">
                  <FaClock />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-semibold">Operational Hours</div>
                  <div className="text-sm font-semibold text-white">Monday – Sunday: 9:00 AM – 9:00 PM IST</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
              ⚡ All communication, technical proposals, staging site reviews, and maintenance requests are handled directly by founder Mohd Ahmad.
            </div>
          </div>
        </div>

        {/* Interactive Form Side */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>

      {/* WHAT HAPPENS NEXT SECTION */}
      <section className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900">What Happens After You Contact Us?</h2>
          <p className="text-slate-600 text-sm">Transparent onboarding workflow from initial message to live launch.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 font-black flex items-center justify-center text-sm">
              01
            </div>
            <h4 className="font-bold text-slate-900 text-base">15-Minute Discovery</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We discuss your business targets, target cities, required services, and current website bottlenecks via WhatsApp or call.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 font-black flex items-center justify-center text-sm">
              02
            </div>
            <h4 className="font-bold text-slate-900 text-base">Clear Proposal & Quote</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              You receive a written proposal outlining exact deliverables, 7-14 day timeline milestones, and fixed pricing with zero hidden fees.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 font-black flex items-center justify-center text-sm">
              03
            </div>
            <h4 className="font-bold text-slate-900 text-base">Build, Audit & Launch</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mohd Ahmad develops your site, runs Core Web Vitals speed tests, codes schema JSON-LD, and deploys your website live.
            </p>
          </div>
        </div>
      </section>

      {/* REGIONAL SERVICE COVERAGE */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-card space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <HiOutlineBuildingOffice className="w-6 h-6 text-brand-600" />
          <span>Regional & Pan-India Service Coverage</span>
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          While headquartered in <strong>Aligarh</strong>, Mohd Ahmad works directly with business owners, healthcare clinics, D2C brands, and startups across all major Indian commercial hubs including <strong>Delhi NCR, Noida, Gurugram, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, and Ahmedabad</strong> via seamless remote collaboration.
        </p>
      </section>
    </div>
  );
}

