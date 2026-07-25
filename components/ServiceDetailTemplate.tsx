import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqAccordion } from '@/components/FaqAccordion';
import { siteConfig, ServiceItem } from '@/data/siteData';
import { FaWhatsapp, FaCheckCircle, FaCheck } from 'react-icons/fa';
import { HiOutlineCheckBadge } from 'react-icons/hi2';
import { TopicalAuthorityHub } from '@/components/TopicalAuthorityHub';
import { PageSpeedCardGraphic } from '@/components/VisualGraphics';
import { ContactForm } from '@/components/ContactForm';

export const ServiceDetailTemplate: React.FC<{ service: ServiceItem }> = ({ service }) => {
  return (
    <div className="space-y-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/#services' }, { label: service.title }]} />

        {/* HERO */}
        <section className="bg-gradient-to-br from-brand-50/80 via-white to-slate-50 p-8 sm:p-12 lg:p-16 rounded-3xl border border-slate-200 shadow-subtle space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-white px-3.5 py-1.5 rounded-full border border-brand-200">
                SEO Lead Engine Service
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {service.meta.h1}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                {service.heroText}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Mohd%20Ahmad,%20I%20want%20to%20discuss%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-button transition-all"
                >
                  <FaWhatsapp className="w-5 h-5 text-xl" />
                  <span>Get Free Quote on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <PageSpeedCardGraphic />
            </div>
          </div>
        </section>

        {/* CONTENT SECTIONS & SIDEBAR */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-10">
            {service.contentSections.map((sec, idx) => (
              <div key={idx} className="space-y-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-card">
                <h2 className="text-2xl font-bold text-slate-900">{sec.title}</h2>
                {Array.isArray(sec.body) ? (
                  <ul className="space-y-3 pt-2">
                    {sec.body.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                        <FaCheckCircle className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">{sec.body}</p>
                )}
              </div>
            ))}

            {/* KEY FEATURES LIST */}
            {service.features && (
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <HiOutlineCheckBadge className="w-6 h-6 text-brand-600" />
                  <span>Key Deliverables & Standards</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="bg-white p-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-3">
                      <FaCheck className="text-emerald-500" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SIDEBAR LEAD FORM */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sticky top-28 space-y-6">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">{service.title} FAQs</h2>
            <p className="text-slate-600 text-sm">Clear answers directly from founder Mohd Ahmad.</p>
          </div>
          <FaqAccordion items={service.faqs} />
        </section>
      </div>

      <TopicalAuthorityHub currentSlug={service.slug} />
    </div>
  );
};
