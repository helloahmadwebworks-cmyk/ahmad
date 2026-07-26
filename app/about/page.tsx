import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/siteData';
import { FaWhatsapp, FaCheck, FaUserCheck, FaShieldAlt, FaRocket, FaLightbulb, FaClock, FaStar } from 'react-icons/fa';
import {
  HiRocketLaunch,
  HiSparkles,
  HiCheckBadge,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
  HiOutlineCpuChip
} from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'About Mohd Ahmad | Professional Freelance Web Developer & SEO Expert — Ahmad Web Works',
  description: 'Meet Mohd Ahmad, founder of Ahmad Web Works. Freelance web developer & SEO expert serving clients across India. Direct communication, fast delivery, transparent pricing.',
  alternates: {
    canonical: `${siteConfig.baseUrl}/about`,
  }
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumbs items={[{ label: 'About Mohd Ahmad' }]} />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-brand-50/70 via-white to-slate-50 p-8 sm:p-12 lg:p-16 rounded-3xl border border-slate-200 shadow-subtle space-y-6">
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-white px-3.5 py-1.5 rounded-full border border-brand-200">
            About Founder & Studio Architecture
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Engineering High-Performance Digital Lead Platforms Built for Indian Business Growth
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            In a digital market crowded with agencies that overpromise, outsource development to inexperienced juniors, and deliver bloated websites that fail to rank, <strong>Ahmad Web Works</strong> was established with a singular mission: to give every Indian business a high-converting, sub-3 second digital lead engine backed by transparent pricing and direct 1-on-1 founder accountability.
          </p>
        </div>
      </section>

      {/* WHO IS MOHD AHMAD & ORIGIN STORY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            Founder Story & Philosophy
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Who Is Mohd Ahmad?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            My name is <strong>Mohd Ahmad</strong>. I am a professional website developer, Shopify specialist, and Search Engine Optimization (SEO) strategist based in Aligarh, Uttar Pradesh, serving clients across India. Unlike traditional agencies where your project gets passed down a chain of account managers and interns, I handle every line of code, UI design, technical SEO configuration, and speed audit personally.
          </p>
          <p className="text-slate-600 leading-relaxed">
            My journey began with a passion for web engineering and search algorithms. I noticed a glaring problem in the market: small-to-medium businesses were paying large sums for websites that looked visually acceptable but performed terribly on mobile 4G networks, lacked schema structured data, and failed to generate customer leads or phone calls.
          </p>
          <p className="text-slate-600 leading-relaxed">
            I founded Ahmad Web Works to bridge this gap. By combining clean modern tech stacks (Next.js, React, Tailwind CSS, lightweight WordPress Liquid architectures) with white-hat SEO methodology, I help business owners transform their online presence into predictable lead engines.
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
              <FaWhatsapp className="w-5 h-5 text-xl" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-6">
          <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
            <HiOutlineShieldCheck className="w-6 h-6 text-brand-600" />
            <span>The 5 Core Guiding Principles</span>
          </h3>
          <div className="space-y-4 pt-1 text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-50 text-brand-700 font-extrabold flex items-center justify-center text-xs flex-shrink-0">1</span>
              <div>
                <strong className="text-slate-900 block">Direct Founder Accountability:</strong>
                <span>You communicate and build directly with Mohd Ahmad with zero middlemen.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-50 text-brand-700 font-extrabold flex items-center justify-center text-xs flex-shrink-0">2</span>
              <div>
                <strong className="text-slate-900 block">Sub-3 Second Load Speed Standard:</strong>
                <span>Every site passes Google Core Web Vitals (LCP, CLS, INP) on mobile devices.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-50 text-brand-700 font-extrabold flex items-center justify-center text-xs flex-shrink-0">3</span>
              <div>
                <strong className="text-slate-900 block">Built-in Technical SEO & Schema:</strong>
                <span>Proper heading hierarchy, canonical tags, open graph, and JSON-LD schema included.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-50 text-brand-700 font-extrabold flex items-center justify-center text-xs flex-shrink-0">4</span>
              <div>
                <strong className="text-slate-900 block">100% Transparent Fixed Pricing:</strong>
                <span>Clear upfront quotes with zero hidden charges, scope creep fees, or billing surprises.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-50 text-brand-700 font-extrabold flex items-center justify-center text-xs flex-shrink-0">5</span>
              <div>
                <strong className="text-slate-900 block">1 Year Dedicated Technical Support:</strong>
                <span>Continued support and guidance to keep your platform running smoothly.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENCY vs AHMAD WEB WORKS COMPARISON */}
      <section className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900">Why Work With Mohd Ahmad vs Traditional Agencies</h2>
          <p className="text-slate-600 text-sm">Clear structural advantages of direct developer partnership.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-subtle text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-4 font-bold">Feature / Standard</th>
                <th className="p-4 font-bold text-brand-300">Ahmad Web Works (Mohd Ahmad)</th>
                <th className="p-4 font-bold text-slate-400">Traditional Digital Agencies</th>
                <th className="p-4 font-bold text-slate-400">Cheap Freelance Marketplaces</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="p-4 font-semibold text-slate-900">Project Communication</td>
                <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Direct 1-on-1 WhatsApp with Founder</td>
                <td className="p-4 text-slate-500">Account Managers & Ticket Queues</td>
                <td className="p-4 text-slate-500">Unreliable / Language Barriers</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Mobile Speed Target</td>
                <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Sub-3 Seconds (90+ PageSpeed)</td>
                <td className="p-4 text-slate-500">5-8 Seconds (Bloated Templates)</td>
                <td className="p-4 text-slate-500">Unoptimized Heavy Code</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Technical SEO & Schema</td>
                <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Built-in JSON-LD & Canonical Tags</td>
                <td className="p-4 text-slate-500">Extra Upsell Fee Required</td>
                <td className="p-4 text-slate-500">Completely Missing</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Delivery Timeline</td>
                <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Fast 7-14 Days Guaranteed</td>
                <td className="p-4 text-slate-500">30-60 Days (Bureaucratic Delays)</td>
                <td className="p-4 text-slate-500">Unpredictable Milestones</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Pricing Transparency</td>
                <td className="p-4 font-bold text-emerald-700 bg-emerald-50/50">Fixed Honest Quotes (Zero Hidden Fees)</td>
                <td className="p-4 text-slate-500">High Overhead & Retainer Bloat</td>
                <td className="p-4 text-slate-500">Cheap Upfront / Hidden Extras</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* TECH STACK & TOOLS */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900">Mastered Technologies & Frameworks</h2>
          <p className="text-slate-600 text-sm">Modern tech stack engineered for speed, security, and scalability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-card space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
              <HiOutlineCpuChip className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-2">Frontend & Code Frameworks</h3>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" /> Next.js 15, React, TypeScript</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" /> Tailwind CSS & Vanilla CSS Design Systems</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" /> Custom WordPress & Liquid Themes</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" /> Framer Motion Micro-Animations</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-card space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
              <HiOutlineGlobeAlt className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-2">SEO & Analytics Suite</h3>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" /> Google Search Console & GA4 Setup</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" /> Schema.org JSON-LD Structured Data</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" /> Ahrefs & Competitor Gap Intelligence</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" /> Google PageSpeed & Core Web Vitals</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-card space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
              <HiOutlineShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-2">eCommerce & Lead Funnels</h3>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" /> Shopify Store Setup & Customization</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" /> Razorpay, PhonePe, Paytm & COD</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" /> WhatsApp Direct Lead Integration</li>
              <li className="flex items-center gap-2"><FaCheck className="text-emerald-500" /> Web3Forms & GTM Event Tracking</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

