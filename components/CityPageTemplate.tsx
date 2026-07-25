import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqAccordion } from '@/components/FaqAccordion';
import { siteConfig, CityItem } from '@/data/siteData';
import { FaWhatsapp, FaMapMarkerAlt, FaCheckCircle, FaCheck } from 'react-icons/fa';
import { HiCodeBracket, HiChartBar, HiShoppingBag, HiMapPin } from 'react-icons/hi2';
import { GmbMapGraphic } from '@/components/VisualGraphics';
import { TopicalAuthorityHub } from '@/components/TopicalAuthorityHub';
import { ContactForm } from '@/components/ContactForm';

export const CityPageTemplate: React.FC<{ city: CityItem }> = ({ city }) => {
  return (
    <div className="space-y-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: 'Cities', href: '/#cities' }, { label: `Website Dev in ${city.cityName}` }]} />

        {/* HERO */}
        <section className="bg-gradient-to-br from-brand-50/80 via-white to-slate-50 p-8 sm:p-12 lg:p-16 rounded-3xl border border-slate-200 shadow-subtle space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700 bg-white px-3.5 py-1.5 rounded-full border border-brand-200">
                <FaMapMarkerAlt className="w-3.5 h-3.5 text-brand-600" />
                <span>Serving {city.cityName} Businesses</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {city.meta.h1}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                {city.intro}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed bg-white p-4 rounded-xl border border-slate-200/80">
                {city.citySpecificText}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Mohd%20Ahmad,%20I%20want%20to%20discuss%20a%20website%20project%20in%20${encodeURIComponent(city.cityName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-button transition-all"
                >
                  <FaWhatsapp className="w-5 h-5 text-xl" />
                  <span>Discuss Project for {city.cityName}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <GmbMapGraphic />
            </div>
          </div>
        </section>

        {/* SERVICES IN CITY */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">Digital Services Available in {city.cityName}</h2>
            <p className="text-slate-600 text-sm">Targeted web development, Shopify, & SEO solutions for {city.cityName} companies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-4">
              <HiCodeBracket className="w-10 h-10 text-brand-600" />
              <h3 className="text-xl font-bold text-slate-900">Website Development in {city.cityName}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Custom business website development for {city.cityName} businesses. Fast-loading, mobile-responsive, and SEO-optimized from day one.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-4">
              <HiChartBar className="w-10 h-10 text-brand-600" />
              <h3 className="text-xl font-bold text-slate-900">SEO Services in {city.cityName}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Comprehensive local and national SEO services helping {city.cityName} businesses rank on Google Page 1 for target keywords.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-4">
              <HiShoppingBag className="w-10 h-10 text-brand-600" />
              <h3 className="text-xl font-bold text-slate-900">Shopify Development in {city.cityName}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Launch or upgrade your online store with expert Shopify development tailored for {city.cityName} brands selling nationwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-4">
              <HiMapPin className="w-10 h-10 text-brand-600" />
              <h3 className="text-xl font-bold text-slate-900">Google Business Profile in {city.cityName}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dominate Google Maps searches in {city.cityName}. Attract direct phone calls, map directions, and walk-in customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 font-bold flex items-center justify-center">LP</div>
              <h3 className="text-xl font-bold text-slate-900">Landing Page Design in {city.cityName}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                High-converting landing pages for {city.cityName} campaigns. Maximize lead captures from your Google Ads and Facebook Ads.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 font-bold flex items-center justify-center">RD</div>
              <h3 className="text-xl font-bold text-slate-900">Website Redesign in {city.cityName}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Outdated website? Upgrade to a modern, lightning-fast design that boosts conversion rates and search rankings.
              </p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE SECTION */}
        <section className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Why {city.cityName} Businesses Choose Ahmad Web Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {city.whyChoose.map((reason, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 text-xs font-bold text-slate-700 leading-relaxed flex items-start gap-3">
                <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900">Start Your {city.cityName} Web Project</h2>
            <p className="text-slate-600 text-sm">
              Work directly with founder Mohd Ahmad. Get a free proposal and transparent pricing for your {city.cityName} business.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </section>

        {/* FAQS */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">{city.cityName} Web Development FAQs</h2>
          </div>
          <FaqAccordion items={city.faqs} />
        </section>
      </div>

      <TopicalAuthorityHub currentSlug={city.slug} />
    </div>
  );
};
