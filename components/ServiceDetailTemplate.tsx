import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqAccordion } from '@/components/FaqAccordion';
import { siteConfig, ServiceItem } from '@/data/siteData';
import { FaWhatsapp, FaCheckCircle, FaCheck, FaExclamationTriangle, FaShieldAlt, FaLightbulb, FaRocket, FaClock } from 'react-icons/fa';
import { HiOutlineCheckBadge, HiOutlineSparkles, HiOutlineCube, HiOutlineCurrencyRupee } from 'react-icons/hi2';
import { TopicalAuthorityHub } from '@/components/TopicalAuthorityHub';
import { PageSpeedCardGraphic } from '@/components/VisualGraphics';
import { ContactForm } from '@/components/ContactForm';

export const ServiceDetailTemplate: React.FC<{ service: ServiceItem }> = ({ service }) => {
  return (
    <div className="space-y-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: 'Services', href: '/#services' }, { label: service.title }]} />

        {/* 1. HERO SECTION */}
        <section className="bg-gradient-to-br from-brand-50/80 via-white to-slate-50 p-8 sm:p-12 lg:p-16 rounded-3xl border border-slate-200 shadow-subtle space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-white px-3.5 py-1.5 rounded-full border border-brand-200">
                Verified Authority Service
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                {service.meta.h1}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                {service.heroText}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-button hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Get a Free Quote</span>
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Mohd%20Ahmad,%20I%20want%20to%20discuss%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-button hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="w-5 h-5 text-xl" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <PageSpeedCardGraphic />
            </div>
          </div>
        </section>

        {/* 2. PROBLEM OVERVIEW SECTION */}
        {service.problemOverview && (
          <section className="bg-rose-50/70 p-8 sm:p-12 rounded-3xl border border-rose-100 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-rose-700 font-bold text-sm uppercase tracking-wide">
                <FaExclamationTriangle className="w-4 h-4" />
                <span>The Core Challenge</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{service.problemOverview.title}</h2>
              <p className="text-slate-700 leading-relaxed text-base">{service.problemOverview.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {service.problemOverview.points.map((pt, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-rose-200/80 space-y-1">
                  <h4 className="font-bold text-rose-950 text-base">{pt.issue}</h4>
                  <p className="text-slate-600 text-sm">{pt.impact}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. SOLUTIONS & CAPABILITIES */}
        {service.solutionOverview && (
          <section className="bg-emerald-50/70 p-8 sm:p-12 rounded-3xl border border-emerald-100 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm uppercase tracking-wide">
                <FaLightbulb className="w-4 h-4" />
                <span>The Technical Solution</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{service.solutionOverview.title}</h2>
              <p className="text-slate-700 leading-relaxed text-base">{service.solutionOverview.description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {service.solutionOverview.highlights.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-emerald-200 text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-3">
                  <FaCheck className="text-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. QUANTIFIED BENEFITS */}
        {service.benefits && service.benefits.length > 0 && (
          <section className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Quantified Business Benefits</h2>
              <p className="text-slate-600 text-sm">Measurable results engineered for long-term growth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.benefits.map((b, idx) => (
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

        {/* 5. MAIN CONTENT SECTIONS & SIDEBAR */}
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

            {/* FEATURES & STANDARDS */}
            {service.features && (
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <HiOutlineCheckBadge className="w-6 h-6 text-brand-600" />
                  <span>Key Deliverables & Standards Included</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="bg-white p-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-3">
                      <FaCheck className="text-emerald-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. STEP BY STEP PROCESS */}
            {service.stepByStepProcess && service.stepByStepProcess.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <FaRocket className="w-6 h-6 text-brand-600" />
                  <span>Step-by-Step Delivery Methodology</span>
                </h3>
                <div className="space-y-4">
                  {service.stepByStepProcess.map((st, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="bg-brand-600 text-white font-black text-xs px-2.5 py-1 rounded-lg">{st.step}</span>
                        <h4 className="font-bold text-slate-900 text-base">{st.title}</h4>
                      </div>
                      <p className="text-slate-600 text-sm pl-11">{st.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. COMMON MISTAKES TO AVOID */}
            {service.commonMistakes && service.commonMistakes.length > 0 && (
              <div className="bg-amber-50/70 p-8 rounded-3xl border border-amber-200 space-y-6">
                <h3 className="text-2xl font-bold text-amber-950 flex items-center gap-2">
                  <FaExclamationTriangle className="w-6 h-6 text-amber-600" />
                  <span>Common Mistakes Businesses Make</span>
                </h3>
                <div className="space-y-4">
                  {service.commonMistakes.map((cm, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-amber-200/80 space-y-2">
                      <h4 className="font-bold text-slate-900 text-base">{cm.mistake}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed"><span className="font-semibold text-rose-700">The Problem:</span> {cm.impact}</p>
                      <p className="text-slate-700 text-xs leading-relaxed font-medium bg-emerald-50 p-2.5 rounded-xl border border-emerald-200"><span className="font-bold text-emerald-800">Our Fix:</span> {cm.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 8. BEST PRACTICES FOR 2026 */}
            {service.bestPractices && service.bestPractices.length > 0 && (
              <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <FaShieldAlt className="w-6 h-6 text-brand-400" />
                  <span>2026 Web & Technical Best Practices</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.bestPractices.map((bp, idx) => (
                    <div key={idx} className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-1">
                      <h4 className="font-bold text-brand-300 text-sm">{bp.title}</h4>
                      <p className="text-slate-300 text-xs leading-relaxed">{bp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 9. PRICING & TIERS */}
            {service.pricingTiers && service.pricingTiers.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-6">
                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
                    <HiOutlineCurrencyRupee className="w-7 h-7 text-emerald-600" />
                    <span>Transparent Service Pricing & Packages</span>
                  </h3>
                  <p className="text-slate-600 text-xs">Clear scope with zero hidden costs.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {service.pricingTiers.map((tier, idx) => (
                    <div key={idx} className={`p-5 rounded-2xl border ${tier.popular ? 'border-brand-500 bg-brand-50/30 shadow-card' : 'border-slate-200 bg-slate-50'} space-y-4`}>
                      {tier.popular && <span className="bg-brand-600 text-white font-bold text-[10px] uppercase px-2 py-0.5 rounded-full">Recommended</span>}
                      <h4 className="font-bold text-slate-900 text-base">{tier.name}</h4>
                      <div className="text-2xl font-extrabold text-slate-900">{tier.price}</div>
                      <p className="text-slate-500 text-xs">{tier.bestFor}</p>
                      <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-200">
                        {tier.deliverables.map((d, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <FaCheck className="text-emerald-500 text-[10px] flex-shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
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

        {/* 10. FAQS */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">{service.title} FAQs</h2>
            <p className="text-slate-600 text-sm">Clear answers directly from founder Mohd Ahmad.</p>
          </div>
          <FaqAccordion items={service.faqs} />
        </section>
      </div>

      <TopicalAuthorityHub currentSlug={service.slug} />
    </div>
  );
};

