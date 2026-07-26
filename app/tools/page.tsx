import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { freeToolsList } from '@/data/siteData';
import { HiOutlineSparkles, HiOutlineArrowRight, HiOutlineBolt, HiOutlineCheckCircle, HiOutlineClock } from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'Free Web & SEO Marketing Tools | Ahmad Web Works',
  description: 'Explore free web calculators, speed scanners, and local SEO audit tools built by Ahmad Web Works to help Indian businesses grow online.',
  keywords: ['free web tools', 'seo audit calculator', 'website speed checker', 'gmb checker', 'website cost calculator']
};

export default function ToolsHubPage() {
  return (
    <div className="space-y-16 pb-24 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumbs items={[{ label: 'Free Tools' }]} />

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-brand-900 via-slate-900 to-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-4 py-1.5 rounded-full">
              <HiOutlineSparkles className="w-4 h-4 text-brand-400" />
              <span>Developer-Built Free Tools</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Free Marketing &amp; Website Performance Tools
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Use our interactive calculators and scanners to audit your website speed, evaluate local Google search rankings, and optimize your business for maximum client conversions.
            </p>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Available Tools ({freeToolsList.length})
            </h2>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Updated Regularly</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeToolsList.map((tool) => (
              <div
                key={tool.id}
                className={`rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                  tool.isAvailable
                    ? 'bg-white border-slate-200 hover:border-brand-400 shadow-card hover:shadow-card-hover'
                    : 'bg-slate-50/70 border-slate-200/80 opacity-75'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl ${
                      tool.isAvailable ? 'bg-brand-50 text-brand-600' : 'bg-slate-200 text-slate-500'
                    }`}>
                      <HiOutlineBolt className="w-6 h-6" />
                    </div>
                    {tool.badge && (
                      <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                        tool.isAvailable
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-slate-200 text-slate-600 border border-slate-300'
                      }`}>
                        {tool.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900">
                    {tool.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {tool.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  {tool.isAvailable ? (
                    <Link
                      href={`/${tool.slug}`}
                      className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-button transition-all w-full justify-center"
                    >
                      <span>Launch Tool Now</span>
                      <HiOutlineArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 bg-slate-100 py-3 rounded-xl border border-slate-200">
                      <HiOutlineClock className="w-4 h-4 text-slate-400" />
                      <span>In Active Development</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
