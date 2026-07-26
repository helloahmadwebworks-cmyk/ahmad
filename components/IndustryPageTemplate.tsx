import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqAccordion } from '@/components/FaqAccordion';
import { siteConfig, IndustryItem } from '@/data/siteData';
import { FaWhatsapp, FaCheckCircle, FaExclamationTriangle, FaCheck, FaShieldAlt, FaRocket, FaLightbulb } from 'react-icons/fa';
import { HiOutlineSparkles, HiOutlineCheckBadge } from 'react-icons/hi2';
import { TopicalAuthorityHub } from '@/components/TopicalAuthorityHub';
import { ContactForm } from '@/components/ContactForm';

export const IndustryPageTemplate: React.FC<{ industry: IndustryItem }> = ({ industry }) => {
  return (
    <div className="space-y-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: 'Industries', href: '/#industries' }, { label: industry.industryName }]} />

        {/* 1. HERO SECTION */}
        <section className="bg-gradient-to-br from-brand-50/80 via-white to-slate-50 p-8 sm:p-12 lg:p-16 rounded-3xl border border-slate-200 shadow-subtle space-y-6">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-white px-3.5 py-1.5 rounded-full border border-brand-200">
              Industry Vertical Solution
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              {industry.meta.h1}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {industry.heroText}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-button hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Get a Free Quote</span>
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Mohd%20Ahmad,%20I%20want%20to%20discuss%20a%20website%20for%20${encodeURIComponent(industry.industryName)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-button hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <FaWhatsapp className="w-5 h-5 text-xl" />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>
        </section>

        {/* 2. MARKET OVERVIEW */}
        {industry.marketOverview && (
          <section className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-white px-3 py-1 rounded-full border border-brand-200">Industry Insights</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{industry.marketOverview.title}</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">{industry.marketOverview.description}</p>
            </div>
            {industry.marketOverview.consumerTrends && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {industry.marketOverview.consumerTrends.map((tr, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-800 flex items-start gap-2.5">
                    <HiOutlineSparkles className="text-brand-600 mt-0.5 flex-shrink-0" />
                    <span>{tr}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 3. PROBLEM OVERVIEW SECTION */}
        {industry.problemOverview && (
          <section className="bg-rose-50/70 p-8 sm:p-12 rounded-3xl border border-rose-100 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-rose-700 font-bold text-sm uppercase tracking-wide">
                <FaExclamationTriangle className="w-4 h-4" />
                <span>Niche Industry Challenges</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{industry.problemOverview.title}</h2>
              <p className="text-slate-700 leading-relaxed text-base">{industry.problemOverview.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {industry.problemOverview.points.map((pt, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-rose-200/80 space-y-1">
                  <h4 className="font-bold text-rose-950 text-base">{pt.issue}</h4>
                  <p className="text-slate-600 text-sm">{pt.impact}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. CHALLENGES vs SOLUTIONS */}
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

        {/* 5. QUANTIFIED BENEFITS */}
        {industry.benefits && industry.benefits.length > 0 && (
          <section className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Quantified Results for {industry.industryName}</h2>
              <p className="text-slate-600 text-sm">Targeted design strategies tailored to increase inquiries and sales.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industry.benefits.map((b, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-card space-y-3">
                  {b.metric && (
                    <span className="inline-block bg-brand-50 text-brand-700 font-black text-xl px-3 py-1 rounded-xl border border-brand-100">
                      {b.metric}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. KEY FEATURES */}
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

        {/* 7. STEP BY STEP ROLLOUT */}
        {industry.stepByStepProcess && industry.stepByStepProcess.length > 0 && (
          <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-card space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-brand-700 font-bold text-sm uppercase tracking-wide">
                <FaRocket className="w-4 h-4 text-brand-600" />
                <span>Our Rollout Process</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Step-by-Step Delivery for {industry.industryName}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industry.stepByStepProcess.map((st, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="bg-brand-600 text-white font-black text-xs px-2.5 py-1 rounded-lg">{st.step}</span>
                    <h4 className="font-bold text-slate-900 text-base">{st.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm pl-11">{st.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. COMMON MISTAKES TO AVOID */}
        {industry.commonMistakes && industry.commonMistakes.length > 0 && (
          <section className="bg-amber-50/70 p-8 sm:p-12 rounded-3xl border border-amber-200 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950 flex items-center gap-2">
              <FaExclamationTriangle className="w-6 h-6 text-amber-600" />
              <span>Common Mistakes in {industry.industryName} Websites</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industry.commonMistakes.map((cm, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-amber-200/80 space-y-2">
                  <h4 className="font-bold text-slate-900 text-base">{cm.mistake}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed"><span className="font-semibold text-rose-700">The Impact:</span> {cm.impact}</p>
                  <p className="text-slate-700 text-xs leading-relaxed font-medium bg-emerald-50 p-2 rounded-xl border border-emerald-200"><span className="font-bold text-emerald-800">Our Fix:</span> {cm.solution}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 9. INDUSTRY BEST PRACTICES */}
        {industry.bestPractices && industry.bestPractices.length > 0 && (
          <section className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-brand-400 font-bold text-xs uppercase tracking-wide">
                <FaShieldAlt className="w-4 h-4" />
                <span>Niche Best Practices</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold">2026 UX & Conversion Standards for {industry.industryName}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industry.bestPractices.map((bp, idx) => (
                <div key={idx} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-1">
                  <h4 className="font-bold text-brand-300 text-base">{bp.title}</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">{bp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10. CONTACT FORM */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Build Your {industry.industryName} Website</h2>
            <p className="text-slate-600 text-sm">
              Get a custom, high-converting digital platform built specifically for your niche. Direct 1-on-1 development with Mohd Ahmad.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </section>

        {/* 11. FAQS */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion items={industry.faqs} />
        </section>
      </div>

      <TopicalAuthorityHub currentSlug={industry.slug} />
    </div>
  );
};

