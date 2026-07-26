import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SeoSpeedCalculator } from '@/components/SeoSpeedCalculator';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Free Website Speed & SEO Health Scanner | Ahmad Web Works',
  description: 'Instantly scan your website performance, Core Web Vitals, mobile UX, and SEO health score. Find out why your site is losing leads and get actionable fixes from Mohd Ahmad.',
  keywords: [
    'website speed calculator',
    'free seo audit tool',
    'core web vitals tester',
    'website performance scanner',
    'website lead calculator'
  ]
};

const toolFaqs = [
  {
    question: 'How accurate is this website speed & SEO audit scanner?',
    answer: 'This tool measures key parameters including estimated 4G mobile load speed, meta tag indexability, local business schema structure, and conversion call-to-action triggers based on web development best practices.'
  },
  {
    question: 'Why is my website loading slowly on mobile devices?',
    answer: 'The most common culprits are unoptimized images, excessive JavaScript bundles, lack of browser caching, and slow server response times. Mohd Ahmad specializes in optimizing sites for < 1.2 second load speeds.'
  },
  {
    question: 'What happens after I get my audit score?',
    answer: 'You can directly contact Mohd Ahmad on WhatsApp (+91 9084326728) with your score to receive a 1-on-1 free action plan to fix your site bottlenecks and double your website inquiries.'
  }
];

export default function WebsiteSpeedSeoCalculatorPage() {
  return (
    <div className="space-y-12 pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: 'Free Tools', href: '/tools' },
            { label: 'Website Speed & SEO Scanner' }
          ]}
        />

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            Free Interactive Web Tool
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Free Instant Website Speed &amp; SEO Health Scanner
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Audit your website in 30 seconds. Identify performance bottlenecks, missing local SEO schemas, and conversion leaks before your competitors steal your leads.
          </p>
        </div>

        {/* Embedded Interactive Calculator Tool */}
        <SeoSpeedCalculator />

        {/* FAQs Section */}
        <div className="pt-12 border-t border-slate-200">
          <FaqAccordion
            faqs={toolFaqs}
            title="Website Audit & Performance FAQs"
            subtitle="Common questions about optimizing your website speed and Google search rankings."
          />
        </div>
      </div>
    </div>
  );
}
