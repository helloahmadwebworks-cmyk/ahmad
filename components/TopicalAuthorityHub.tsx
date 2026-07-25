import React from 'react';
import Link from 'next/link';
import { mainServices, citiesList, industriesList } from '@/data/siteData';
import { HiMapPin, HiCodeBracket, HiBuildingOffice } from 'react-icons/hi2';

export const TopicalAuthorityHub: React.FC<{ currentSlug?: string }> = ({ currentSlug }) => {
  return (
    <section className="bg-slate-50 border-t border-b border-slate-200/80 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-subtle">
            SEO Keyword & City Network
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Web Development & SEO Hub Across India
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Explore dedicated service pages, local city developer guides, and industry vertical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services Matrix */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-subtle space-y-4">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm border-b border-slate-100 pb-3">
              <HiCodeBracket className="w-5 h-5 text-brand-600" />
              <span>Core Digital Services</span>
            </div>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              {mainServices.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/${s.slug}`}
                    className={`block py-1 hover:text-brand-600 transition-colors ${
                      currentSlug === s.slug ? 'text-brand-600 font-bold' : ''
                    }`}
                  >
                    → {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities Matrix */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-subtle space-y-4">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm border-b border-slate-100 pb-3">
              <HiMapPin className="w-5 h-5 text-brand-600" />
              <span>City Web Developer Guides</span>
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs font-medium text-slate-600">
              {citiesList.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className={`py-1 hover:text-brand-600 transition-colors ${
                    currentSlug === c.slug ? 'text-brand-600 font-bold' : ''
                  }`}
                >
                  • Dev in {c.cityName}
                </Link>
              ))}
            </div>
          </div>

          {/* Industries Matrix */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-subtle space-y-4">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm border-b border-slate-100 pb-3">
              <HiBuildingOffice className="w-5 h-5 text-brand-600" />
              <span>Industry Solutions</span>
            </div>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              {industriesList.map((ind) => (
                <li key={ind.slug}>
                  <Link
                    href={`/${ind.slug}`}
                    className={`block py-1 hover:text-brand-600 transition-colors ${
                      currentSlug === ind.slug ? 'text-brand-600 font-bold' : ''
                    }`}
                  >
                    → {ind.industryName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
