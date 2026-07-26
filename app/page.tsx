'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  HiCodeBracket,
  HiShoppingBag,
  HiChartBar,
  HiMapPin,
  HiCursorArrowRays,
  HiBolt,
  HiSparkles,
  HiRocketLaunch,
  HiBuildingStorefront,
  HiHeart,
  HiUserGroup,
  HiBriefcase,
  HiCheckBadge,
  HiOutlineShieldCheck
} from 'react-icons/hi2';
import { FaWhatsapp, FaStar, FaUserCheck, FaLock, FaChartLine, FaCheck } from 'react-icons/fa';
import { mainServices, globalFaqs, siteConfig, portfolioProjects } from '@/data/siteData';
import { FaqAccordion } from '@/components/FaqAccordion';
import { PageSpeedCardGraphic, GmbMapGraphic, SeoCodeSnippetGraphic } from '@/components/VisualGraphics';
import { TopicalAuthorityHub } from '@/components/TopicalAuthorityHub';
import { ContactForm } from '@/components/ContactForm';

const iconMap: Record<string, React.ReactNode> = {
  HiOutlineCode: <HiCodeBracket className="w-7 h-7 text-brand-600" />,
  HiOutlineShoppingBag: <HiShoppingBag className="w-7 h-7 text-brand-600" />,
  HiOutlineChartBar: <HiChartBar className="w-7 h-7 text-brand-600" />,
  HiOutlineMapPin: <HiMapPin className="w-7 h-7 text-brand-600" />,
  HiOutlineCursorArrowRays: <HiCursorArrowRays className="w-7 h-7 text-brand-600" />,
  HiOutlineBolt: <HiBolt className="w-7 h-7 text-brand-600" />,
  HiOutlineSparkles: <HiSparkles className="w-7 h-7 text-brand-600" />,
};

export default function HomePage() {
  return (
    <div className="space-y-24 lg:space-y-32 pb-24">
      {/* ULTRA-PREMIUM HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-50 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Side */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 bg-white border border-brand-200/90 px-4 py-2 rounded-full shadow-subtle text-xs sm:text-sm font-bold text-brand-700"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span>SEO-First Lead Generation Studio • Direct Founder Access</span>
              </motion.div>

              {/* H1 Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.12]"
              >
                Your Business Deserves a Website That <span className="text-gradient-blue">Actually Works</span>
              </motion.h1>

              {/* Sub-hero Lead Copy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                <p>
                  Most business websites look decent but do nothing. They sit on the internet, rarely get found on Google, and fail to turn visitors into paying customers. <strong>That stops here.</strong>
                </p>
                <p className="text-sm text-slate-600">
                  I am <strong>Mohd Ahmad</strong> — a freelance website developer and SEO expert building websites that rank on Google Page 1, load under 3 seconds, and turn organic visitors into qualified business leads.
                </p>
              </motion.div>

              {/* Call to Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Mohd%20Ahmad,%20I%20want%20to%20discuss%20my%20website%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-button hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="w-5 h-5 text-xl" />
                  <span>Discuss on WhatsApp (+91 9084326728)</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-button hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Get a Free Quote</span>
                </Link>
              </motion.div>

              {/* Live Proof Pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 text-center lg:text-left"
              >
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900">7-14 Days</div>
                  <div className="text-xs text-slate-500 font-medium">Fast Turnaround</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-brand-600">Sub-3s</div>
                  <div className="text-xs text-slate-500 font-medium">PageSpeed Guaranteed</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-emerald-600">100% SEO</div>
                  <div className="text-xs text-slate-500 font-medium">Rank-Ready Code</div>
                </div>
              </motion.div>
            </div>

            {/* Right Graphic Side (PageSpeed + GMB Widgets) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              <PageSpeedCardGraphic />
              <GmbMapGraphic />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Digital Services Built for Indian Businesses
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            At Ahmad Web Works, every service is engineered to solve a real business problem — attracting traffic, establishing trust, and generating qualified leads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-brand-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 group-hover:bg-brand-600 transition-colors flex items-center justify-center group-hover:text-white transition-all duration-300">
                  {iconMap[service.iconName] || <HiCodeBracket className="w-7 h-7 text-brand-600 group-hover:text-white" />}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.shortDesc}
                </p>

                {service.features && (
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <FaCheck className="text-emerald-500 text-[10px]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/${service.slug}`}
                  className="text-brand-600 font-extrabold text-sm hover:text-brand-700 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                >
                  <span>View Details & Pricing</span>
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE AHMAD WEB WORKS */}
      <section className="bg-slate-50/80 py-24 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-subtle">
              Direct Founder Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Why Businesses Across India Choose Ahmad Web Works
            </h2>
            <p className="text-slate-600 text-base">
              No project managers. No outsourcing. 100% direct accountability from Mohd Ahmad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-xl">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900">You Work Directly With Mohd Ahmad</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                When you contact Ahmad Web Works, you work directly with founder Mohd Ahmad from strategy to design, development, and launch.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-xl">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900">SEO Built In From Day One</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Proper heading hierarchy, meta tags, schema JSON-LD, and speed optimization are coded as standard in every build.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-xl">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900">Fast 7 to 14 Working Days Delivery</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Standard business websites delivered within 7 to 14 working days without cutting quality corners.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-xl">
                04
              </div>
              <h3 className="text-xl font-bold text-slate-900">WhatsApp-First Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enjoy fast, direct WhatsApp updates throughout your project lifecycle and post-launch maintenance.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-xl">
                05
              </div>
              <h3 className="text-xl font-bold text-slate-900">Transparent Fixed Pricing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Know exactly what you are paying for before work starts. Zero surprise bills, no hidden fees.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-xl">
                06
              </div>
              <h3 className="text-xl font-bold text-slate-900">Results Measured in Lead Growth</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We standardise success by one metric: more customer calls, form inquiries, and online orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE SECTION */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-400 bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700">
              5-Step Execution Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              How the Process Works
            </h2>
            <p className="text-slate-400 text-base">
              A smooth 5-step journey from initial consultation to live ranking website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="bg-slate-800/90 rounded-3xl p-6 border border-slate-700/80 space-y-3">
              <span className="text-brand-400 font-extrabold text-xs uppercase tracking-wider">Step 01</span>
              <h4 className="font-bold text-white text-lg">Free Consultation</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                WhatsApp conversation or call to understand your business, targets, and website requirements.
              </p>
            </div>

            <div className="bg-slate-800/90 rounded-3xl p-6 border border-slate-700/80 space-y-3">
              <span className="text-brand-400 font-extrabold text-xs uppercase tracking-wider">Step 02</span>
              <h4 className="font-bold text-white text-lg">Proposal & Quote</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Clear written proposal with scope, fixed pricing, and delivery timeline.
              </p>
            </div>

            <div className="bg-slate-800/90 rounded-3xl p-6 border border-slate-700/80 space-y-3">
              <span className="text-brand-400 font-extrabold text-xs uppercase tracking-wider">Step 03</span>
              <h4 className="font-bold text-white text-lg">Design & Code</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Development begins with regular WhatsApp updates and design preview links.
              </p>
            </div>

            <div className="bg-slate-800/90 rounded-3xl p-6 border border-slate-700/80 space-y-3">
              <span className="text-brand-400 font-extrabold text-xs uppercase tracking-wider">Step 04</span>
              <h4 className="font-bold text-white text-lg">Review & Launch</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Technical launch: domain setup, SSL security, speed optimization, and Search Console indexing.
              </p>
            </div>

            <div className="bg-slate-800/90 rounded-3xl p-6 border border-slate-700/80 space-y-3">
              <span className="text-brand-400 font-extrabold text-xs uppercase tracking-wider">Step 05</span>
              <h4 className="font-bold text-white text-lg">Ongoing Support</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Post-launch WhatsApp accessibility for updates, additions, and SEO expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
              Proven Performance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Featured Client Case Studies
            </h2>
          </div>
          <Link href="/portfolio" className="text-brand-600 font-extrabold hover:text-brand-700 text-sm flex items-center gap-1">
            <span>View All Case Studies</span>
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioProjects.slice(0, 3).map((proj) => (
            <div key={proj.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-card flex flex-col justify-between hover:border-brand-300 transition-all">
              <div className="p-8 space-y-4">
                <span className="inline-block text-xs font-bold text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                  {proj.tag}
                </span>
                <h3 className="text-xl font-bold text-slate-900">{proj.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{proj.description}</p>
                
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                  {proj.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                      <div className="text-sm font-extrabold text-slate-900">{m.value}</div>
                      <div className="text-[11px] text-slate-500 font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {proj.deliverables.map((del, dIdx) => (
                    <span key={dIdx} className="text-[11px] bg-white text-slate-600 font-semibold px-2.5 py-1 rounded-md border border-slate-200">
                      ✓ {del}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOPICAL AUTHORITY HUB */}
      <TopicalAuthorityHub />

      {/* WEB3FORMS CONTACT FORM SECTION */}
      <section id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Ready to Turn Your Website Into a Lead Engine?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Fill out the inquiry form or connect directly on WhatsApp. Mohd Ahmad will personally review your project details and deliver a transparent proposal within 15 minutes.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-700 font-semibold">
              <div className="flex items-center gap-3">
                <FaCheck className="text-emerald-500" />
                <span>100% Fixed Quotes With Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-emerald-500" />
                <span>Sub-3 Second Load Speed & Core Web Vitals Guaranteed</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-emerald-500" />
                <span>Direct WhatsApp Access to Founder Mohd Ahmad</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about working with Mohd Ahmad at Ahmad Web Works.
          </p>
        </div>

        <FaqAccordion items={globalFaqs} />
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-brand-700 via-brand-600 to-blue-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center shadow-card-hover space-y-6 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Ready to Take Your Business Online? Let's Talk.
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              Whether you are starting from scratch or upgrading an underperforming website, Ahmad Web Works is ready to deliver. Join Indian businesses that trust Mohd Ahmad for their digital growth.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Mohd%20Ahmad,%20I%20want%20to%20discuss%20my%20website%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl transition-all"
              >
                <FaWhatsapp className="w-5 h-5 text-xl" />
                <span>WhatsApp Now: +91 9084326728</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-slate-100 text-brand-900 font-bold text-base px-8 py-4 rounded-2xl shadow-lg transition-all"
              >
                <span>Request Project Proposal</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
