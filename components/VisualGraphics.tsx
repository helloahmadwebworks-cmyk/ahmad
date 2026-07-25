import React from 'react';
import { FaStar, FaGoogle, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle, FaBolt } from 'react-icons/fa';
import { HiOutlineSparkles, HiOutlineShieldCheck, HiOutlineChartBar } from 'react-icons/hi2';

export const PageSpeedCardGraphic: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card-hover space-y-6 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -z-10 group-hover:bg-emerald-100 transition-colors" />
      
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg">
            <FaBolt />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">Google PageSpeed Score</h4>
            <p className="text-xs text-slate-500">Core Web Vitals Passed • Sub-2.0s</p>
          </div>
        </div>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          PASSED
        </span>
      </div>

      {/* Score gauge showcase */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">99<span className="text-xs font-medium text-slate-500">/100</span></div>
          <div className="text-[11px] font-semibold text-slate-700">Performance</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
          <div className="text-2xl sm:text-3xl font-extrabold text-brand-600">100<span className="text-xs font-medium text-slate-500">/100</span></div>
          <div className="text-[11px] font-semibold text-slate-700">SEO Score</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">1.2s</div>
          <div className="text-[11px] font-semibold text-slate-700">LCP Speed</div>
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600 font-medium">
        <div className="flex items-center justify-between">
          <span>First Contentful Paint (FCP)</span>
          <span className="font-bold text-emerald-600">0.8s (Fast)</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Cumulative Layout Shift (CLS)</span>
          <span className="font-bold text-emerald-600">0.00 (Zero Shift)</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Interaction to Next Paint (INP)</span>
          <span className="font-bold text-emerald-600">38ms (Instant)</span>
        </div>
      </div>
    </div>
  );
};

export const GmbMapGraphic: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card-hover space-y-5 relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
          <FaGoogle className="text-blue-500 text-lg" />
          <span>Google Maps Local 3-Pack</span>
        </div>
        <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200">
          Rank #1
        </span>
      </div>

      {/* Mocked Local 3-Pack Item */}
      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-extrabold text-slate-900 text-base">Ahmad Web Works</h4>
            <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold mt-0.5">
              <span>4.9</span>
              <div className="flex text-amber-400">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="text-slate-500 font-normal">(48+ Local Reviews)</span>
            </div>
            <p className="text-xs text-slate-600 mt-1">Website Developer • Aligarh & Nationwide</p>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-slate-200/60">
          <button className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-2 rounded-xl flex items-center justify-center gap-1.5">
            <FaPhoneAlt className="text-[10px]" /> Call Business
          </button>
          <button className="flex-1 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-xs py-2 rounded-xl flex items-center justify-center gap-1.5">
            <FaMapMarkerAlt className="text-brand-600 text-[11px]" /> Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export const SeoCodeSnippetGraphic: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 sm:p-8 shadow-card space-y-4 border border-slate-800 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-slate-400 font-sans font-semibold text-xs">
          <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
          <span className="ml-2 text-slate-300">schema-jsonld.ts</span>
        </div>
        <span className="text-[10px] text-emerald-400 font-sans bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
          Valid Schema.org
        </span>
      </div>

      <pre className="overflow-x-auto leading-relaxed text-slate-300">
{`{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Ahmad Web Works",
  "founder": "Mohd Ahmad",
  "url": "https://ahmadwebworks.com",
  "telephone": "+919084326728",
  "areaServed": ["Aligarh", "Delhi", "Noida", "Mumbai", "India"],
  "knowsAbout": ["Website Development", "Shopify SEO", "Google Maps 3-Pack"]
}`}
      </pre>
    </div>
  );
};
