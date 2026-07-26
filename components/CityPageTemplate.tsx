import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqAccordion } from '@/components/FaqAccordion';
import { siteConfig, CityItem } from '@/data/siteData';
import { FaWhatsapp, FaMapMarkerAlt, FaCheckCircle, FaCheck, FaExclamationTriangle, FaShieldAlt, FaRocket, FaBuilding, FaGlobe } from 'react-icons/fa';
import { HiCodeBracket, HiChartBar, HiShoppingBag, HiMapPin, HiOutlineSparkles, HiOutlineCheckBadge } from 'react-icons/hi2';
import { GmbMapGraphic } from '@/components/VisualGraphics';
import { TopicalAuthorityHub } from '@/components/TopicalAuthorityHub';
import { ContactForm } from '@/components/ContactForm';

export const CityPageTemplate: React.FC<{ city: CityItem }> = ({ city }) => {
  return (
    <div className="space-y-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: 'Cities', href: '/#cities' }, { label: `Website Dev in ${city.cityName}` }]} />

        {/* 1. HERO SECTION */}
        <section className="bg-gradient-to-br from-brand-50/80 via-white to-slate-50 p-8 sm:p-12 lg:p-16 rounded-3xl border border-slate-200 shadow-subtle space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700 bg-white px-3.5 py-1.5 rounded-full border border-brand-200">
                <FaMapMarkerAlt className="w-3.5 h-3.5 text-brand-600" />
                <span>Serving {city.cityName} Businesses</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                {city.meta.h1}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                {city.intro}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed bg-white p-4 rounded-xl border border-slate-200/80">
                {city.citySpecificText}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-button hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Get a Free Quote</span>
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Mohd%20Ahmad,%20I%20want%20to%20discuss%20a%20website%20project%20in%20${encodeURIComponent(city.cityName)}.`}
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
              <GmbMapGraphic />
            </div>
          </div>
        </section>

        {/* 2. LOCAL MARKET OVERVIEW */}
        {city.marketOverview && (
          <section className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-white px-3 py-1 rounded-full border border-brand-200">Market Intelligence</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{city.marketOverview.title}</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">{city.marketOverview.description}</p>
            </div>
            {city.marketOverview.localTrends && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {city.marketOverview.localTrends.map((tr, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-800 flex items-start gap-2.5">
                    <FaBuilding className="text-brand-600 mt-0.5 flex-shrink-0" />
                    <span>{tr}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 3. PROBLEM OVERVIEW SECTION */}
        {city.problemOverview && (
          <section className="bg-rose-50/70 p-8 sm:p-12 rounded-3xl border border-rose-100 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-rose-700 font-bold text-sm uppercase tracking-wide">
                <FaExclamationTriangle className="w-4 h-4" />
                <span>Common Digital Bottlenecks in {city.cityName}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{city.problemOverview.title}</h2>
              <p className="text-slate-700 leading-relaxed text-base">{city.problemOverview.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {city.problemOverview.points.map((pt, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-rose-200/80 space-y-1">
                  <h4 className="font-bold text-rose-950 text-base">{pt.issue}</h4>
                  <p className="text-slate-600 text-sm">{pt.impact}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. SERVICES & SOLUTIONS IN CITY */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">Digital Solutions Engineered for {city.cityName}</h2>
            <p className="text-slate-600 text-sm">Targeted web development, Shopify eCommerce, & Google Page 1 SEO solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {city.services.map((srv, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-4">
                {idx === 0 && <HiCodeBracket className="w-10 h-10 text-brand-600" />}
                {idx === 1 && <HiChartBar className="w-10 h-10 text-brand-600" />}
                {idx === 2 && <HiShoppingBag className="w-10 h-10 text-brand-600" />}
                {idx === 3 && <HiMapPin className="w-10 h-10 text-brand-600" />}
                {idx >= 4 && <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 font-bold flex items-center justify-center">LP</div>}
                <h3 className="text-xl font-bold text-slate-900">{srv.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{srv.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. QUANTIFIED BENEFITS */}
        {city.benefits && city.benefits.length > 0 && (
          <section className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Why {city.cityName} Brands Outperform Competitors</h2>
              <p className="text-slate-600 text-sm">Concrete advantages built into every custom build.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {city.benefits.map((b, idx) => (
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

        {/* 6. STEP BY STEP PROCESS IN CITY */}
        {city.stepByStepProcess && city.stepByStepProcess.length > 0 && (
          <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-card space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-brand-700 font-bold text-sm uppercase tracking-wide">
                <FaRocket className="w-4 h-4 text-brand-600" />
                <span>Our Execution Model</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Step-by-Step Delivery for {city.cityName} Businesses</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {city.stepByStepProcess.map((st, idx) => (
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

        {/* 7. COMMON MISTAKES IN LOCAL WEB DEV */}
        {city.commonMistakes && city.commonMistakes.length > 0 && (
          <section className="bg-amber-50/70 p-8 sm:p-12 rounded-3xl border border-amber-200 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950 flex items-center gap-2">
              <FaExclamationTriangle className="w-6 h-6 text-amber-600" />
              <span>Common Mistakes {city.cityName} Business Owners Make</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {city.commonMistakes.map((cm, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-amber-200/80 space-y-2">
                  <h4 className="font-bold text-slate-900 text-base">{cm.mistake}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed"><span className="font-semibold text-rose-700">The Risk:</span> {cm.impact}</p>
                  <p className="text-slate-700 text-xs leading-relaxed font-medium bg-emerald-50 p-2 rounded-xl border border-emerald-200"><span className="font-bold text-emerald-800">Our Fix:</span> {cm.solution}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. BEST PRACTICES FOR LOCAL SEO IN CITY */}
        {city.bestPractices && city.bestPractices.length > 0 && (
          <section className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-brand-400 font-bold text-xs uppercase tracking-wide">
                <FaShieldAlt className="w-4 h-4" />
                <span>Local Search Optimization</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">2026 Local SEO & Speed Standards for {city.cityName}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {city.bestPractices.map((bp, idx) => (
                <div key={idx} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-1">
                  <h4 className="font-bold text-brand-300 text-base">{bp.title}</h4>
                  <p className="text-slate-300 text-xs leading-relaxed">{bp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 9. WHY CHOOSE SECTION */}
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

        {/* 10. CONTACT FORM */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Start Your {city.cityName} Web Project</h2>
            <p className="text-slate-600 text-sm">
              Work directly with founder Mohd Ahmad. Get a free proposal and transparent pricing for your {city.cityName} business.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </section>

        {/* 11. FAQS */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">{city.cityName} Web Development FAQs</h2>
          </div>
          <FaqAccordion items={city.faqs} />
        </section>
      </div>

      <TopicalAuthorityHub currentSlug={city.slug} />
    </div>
  );
};

