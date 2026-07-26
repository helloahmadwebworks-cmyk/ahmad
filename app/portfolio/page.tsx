import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { portfolioProjects, siteConfig } from '@/data/siteData';
import { FaWhatsapp, FaExternalLinkAlt } from 'react-icons/fa';
import { HiOutlineChartBar, HiOutlineCheckCircle } from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'Client Work & Portfolio | Website Developer in India — Ahmad Web Works',
  description: 'View recent website development, Shopify eCommerce, and SEO projects by Mohd Ahmad. Real case studies, sub-2 second load speeds, and Google Page 1 rankings.',
  alternates: { canonical: `${siteConfig.baseUrl}/portfolio` }
};

export default function PortfolioPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumbs items={[{ label: 'Portfolio & Case Studies' }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-50/80 via-white to-slate-50 p-8 sm:p-12 lg:p-16 rounded-3xl border border-slate-200 shadow-subtle space-y-6">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-white px-3.5 py-1.5 rounded-full border border-brand-200">
            Real Work & Metrics
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Client Work & Case Studies — Proven Web & SEO Results
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every website and digital strategy built by Mohd Ahmad is measured by real business outcomes — Google rankings, sub-3s speeds, and qualified customer leads.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-button hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Get a Free Quote</span>
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Mohd%20Ahmad,%20I%20want%20to%20discuss%20my%20website%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-button hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp Direct (+91 9084326728)</span>
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((proj) => (
            <div key={proj.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-card flex flex-col justify-between hover:border-brand-300 transition-all">
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                    {proj.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{proj.location}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">{proj.title}</h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{proj.category}</p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">{proj.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                  {proj.metrics.map((m, idx) => (
                    <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                      <div className="text-sm font-extrabold text-slate-900">{m.value}</div>
                      <div className="text-[10px] text-slate-500 font-medium mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Deliverables</div>
                <div className="flex flex-wrap gap-2">
                  {proj.deliverables.map((del, dIdx) => (
                    <span key={dIdx} className="text-xs bg-white text-slate-700 font-medium px-3 py-1 rounded-lg border border-slate-200">
                      ✓ {del}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Mohd%20Ahmad,%20I%20saw%20the%20${encodeURIComponent(proj.title)}%20case%20study%20and%20want%20a%20similar%20website.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs hover:text-emerald-700"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Get Similar Website for Your Business →</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <h2 className="text-3xl font-extrabold">Want a High-Performance Website Like These?</h2>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
          Let's discuss your business requirements directly with Mohd Ahmad. Get a transparent quote and strategy roadmap.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-button hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Get a Free Quote</span>
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Mohd%20Ahmad,%20I%20want%20to%20discuss%20my%20website%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-button hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Discuss on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
