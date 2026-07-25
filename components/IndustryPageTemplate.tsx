import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqAccordion } from '@/components/FaqAccordion';
import { siteConfig, IndustryItem } from '@/data/siteData';
import { FaWhatsapp, FaCheckCircle, FaExclamationTriangle, FaCheck } from 'react-icons/fa';
import { HiOutlineSparkles, HiOutlineCheckBadge } from 'react-icons/hi2';
import { TopicalAuthorityHub } from '@/components/TopicalAuthorityHub';
import { ContactForm } from '@/components/ContactForm';

export const IndustryPageTemplate: React.FC<{ industry: IndustryItem }> = ({ industry }) => {
  return (
    <div className="space-y-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: 'Industries', href: '/#industries' }, { label: industry.industryName }]} />

        {/* HERO */}
        <section className="bg-gradient-to-br from-brand-50/80 via-white to-slate-50 p-8 sm:p-12 lg:p-16 rounded-3xl border border-slate-200 shadow-subtle space-y-6">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-white px-3.5 py-1.5 rounded-full border border-brand-200">
              Industry Vertical Solution
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {industry.meta.h1}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {industry.heroText}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Mohd%20Ahmad,%20I%20want%20to%20discuss%20a%20website%20for%20${encodeURIComponent(industry.industryName)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-button transition-all"
              >
                <FaWhatsapp className="w-5 h-5 text-xl" />
                <span>Discuss Project for {industry.industryName}</span>
              </a>
            </div>
          </div>
        </section>

        {/* CHALLENGES vs SOLUTIONS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-rose-50/60 p-8 rounded-3xl border border-rose-100 space-y-4">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-lg">
              <FaExclamationTriangle className="w-5 h-5" />
              <span>Common Industry Challenges</span>
            </div>
            <ul className="space-y-3">
              {industry.challenges.map((c, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-emerald-50/60 p-8 rounded-3xl border border-emerald-100 space-y-4">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-lg">
              <FaCheckCircle className="w-5 h-5" />
              <span>Ahmad Web Works Solutions</span>
            </div>
            <ul className="space-y-3">
              {industry.solutions.map((s, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                  <FaCheck className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-card space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">Essential Features Included</h2>
            <p className="text-slate-600 text-sm">Specially designed conversion elements for {industry.industryName}.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.keyFeatures.map((feat, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                <HiOutlineSparkles className="w-6 h-6 text-brand-600" />
                <h4 className="font-bold text-slate-900 text-sm">{feat}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900">Build Your {industry.industryName} Website</h2>
            <p className="text-slate-600 text-sm">
              Get a custom, high-converting digital platform built specifically for your niche. Direct 1-on-1 development with Mohd Ahmad.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </section>

        {/* FAQS */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion items={industry.faqs} />
        </section>
      </div>

      <TopicalAuthorityHub currentSlug={industry.slug} />
    </div>
  );
};
