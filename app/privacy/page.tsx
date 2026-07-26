import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ahmad Web Works',
  description: 'Privacy Policy for Ahmad Web Works by Mohd Ahmad. Learn how we collect, use, protect, and respect your personal information.',
  alternates: { canonical: `${siteConfig.baseUrl}/privacy` }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <section className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Privacy Policy — Ahmad Web Works
        </h1>
        <p className="text-sm text-slate-500">
          Last Updated: July 2026 • Operates under Ahmad Web Works by Mohd Ahmad
        </p>
      </section>

      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-card space-y-8 text-slate-700 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
          <p>
            When you submit a project inquiry, request a website audit, or contact Mohd Ahmad through our website, we collect personal information that you voluntarily provide, including:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Your full name</li>
            <li>WhatsApp phone number / contact number</li>
            <li>Email address</li>
            <li>City or location</li>
            <li>Website URL and project requirement details</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
          <p>
            We use your information solely for the following legitimate business purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Responding directly to your inquiry regarding web development, SEO, or Shopify services</li>
            <li>Sending custom project proposals, price quotes, and technical audits</li>
            <li>Communicating with you via Phone, WhatsApp, SMS, or Email regarding your project</li>
            <li>Fulfilling ongoing technical support and maintenance commitments</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Zero Spam & Data Protection Commitment</h2>
          <p>
            Ahmad Web Works respects your privacy completely. <strong>We never sell, rent, trade, or share your personal contact details with third-party telemarketers or advertisers.</strong> All lead form submissions are transmitted securely via encrypted channels.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Cookies & Analytics</h2>
          <p>
            Our website uses standard anonymous analytics cookies (Google Analytics 4 and Google Tag Manager) to understand aggregate traffic performance and optimize page load speeds. No personally identifiable information is stored in analytics cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">5. Contacting Us Regarding Your Data</h2>
          <p>
            If you wish to update, modify, or request deletion of your contact details from our inquiry records, please email founder Mohd Ahmad directly at <a href={`mailto:${siteConfig.email}`} className="text-brand-600 font-bold hover:underline">{siteConfig.email}</a> or message on WhatsApp at <a href={`https://wa.me/${siteConfig.whatsappNumber}`} className="text-brand-600 font-bold hover:underline">+91 9084326728</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
