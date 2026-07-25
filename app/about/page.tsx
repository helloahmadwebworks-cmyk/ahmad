import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/siteData';
import { FaWhatsapp, FaCheck, FaUserCheck } from 'react-icons/fa';
import {
  HiRocketLaunch,
  HiSparkles,
  HiCheckBadge
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
      <section className="bg-gradient-to-br from-brand-50/70 via-white to-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-subtle space-y-6">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-white px-3 py-1 rounded-full border border-brand-200">
            About Founder & Studio
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            About Ahmad Web Works — Built on Skill, Backed by Results
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            In a world full of digital agencies that overpromise and underdeliver, Ahmad Web Works was built on a simple but powerful idea: every business in India deserves a professional, high-performing digital presence — without the confusion, delays, and inflated costs that come with traditional agencies.
          </p>
        </div>
      </section>

      {/* WHO IS MOHD AHMAD */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            Founder Story
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Who Is Mohd Ahmad?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            My name is <strong>Mohd Ahmad</strong>. I am a professional freelance website developer and SEO expert, and the founder, developer, designer, and strategist behind Ahmad Web Works. When you work with me, you work with me directly — not an account manager, not an outsourced team, not a junior developer. <strong>Me.</strong>
          </p>
          <p className="text-slate-600 leading-relaxed">
            I started my journey in web development out of a deep curiosity about how the internet works and a desire to help businesses succeed online. Over time, that curiosity turned into expertise — and that expertise turned into Ahmad Web Works.
          </p>
          <p className="text-slate-600 leading-relaxed">
            I specialize in website development, Shopify eCommerce, search engine optimization, and Google Business Profile optimization. I have worked with businesses across multiple industries — from local clinics and restaurants in Aligarh to startups and eCommerce brands across India.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Mohd%20Ahmad,%20I%20want%20to%20discuss%20my%20website%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-button"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Connect Direct on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-6">
          <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
            Core Philosophy & Mission
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            To give every Indian business — big or small, local or national — the digital tools they need to compete, grow, and succeed online. A great website and strong Google presence should not be a luxury reserved for large corporations with massive marketing budgets.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 text-sm text-slate-700">
              <FaCheck className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
              <span>Transparent fixed quotes with no hidden fees.</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-slate-700">
              <FaCheck className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
              <span>Direct WhatsApp communication and rapid responses.</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-slate-700">
              <FaCheck className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
              <span>Built-in Google SEO & sub-3 second loading speed standard.</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900">What Sets Ahmad Web Works Apart</h2>
          <p className="text-slate-600 text-sm">Key pillars that distinguish us from traditional agencies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle space-y-3">
            <FaUserCheck className="w-8 h-8 text-brand-600" />
            <h4 className="font-bold text-slate-900 text-base">Direct Founder Involvement</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every project is handled personally by Mohd Ahmad from start to finish. You get senior expertise in every interaction.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle space-y-3">
            <HiSparkles className="w-8 h-8 text-brand-600" />
            <h4 className="font-bold text-slate-900 text-base">SEO-First Development</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              SEO is treated as a core architectural component, not an optional add-on. Every website is built to rank on Google.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle space-y-3">
            <FaWhatsapp className="w-8 h-8 text-emerald-500" />
            <h4 className="font-bold text-slate-900 text-base">WhatsApp-First Support</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fast, convenient communication on WhatsApp for project updates, questions, and post-launch maintenance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle space-y-3">
            <HiCheckBadge className="w-8 h-8 text-brand-600" />
            <h4 className="font-bold text-slate-900 text-base">Long-Term Partnership</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We focus on building lasting relationships as your long-term digital growth partner for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* TECH STACK & TOOLS */}
      <section className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center">Technologies & Tools We Master</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-2">Website Platforms</h3>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li>• WordPress & Elementor Custom Development</li>
              <li>• Shopify & Shopify Plus eCommerce</li>
              <li>• WooCommerce Online Stores</li>
              <li>• Next.js 15, TypeScript, Tailwind CSS</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-2">SEO & Analytics Tools</h3>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li>• Google Search Console & GA4</li>
              <li>• Rank Math & Yoast SEO</li>
              <li>• Ahrefs & Ubersuggest Keyword Research</li>
              <li>• Google PageSpeed Insights & GTmetrix</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-2">Design & Performance</h3>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li>• Figma & Canvas UI Mockups</li>
              <li>• WebP Image Compression & CDN Setup</li>
              <li>• Schema.org Structured Data</li>
              <li>• SSL Security & Server Speed Optimization</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
