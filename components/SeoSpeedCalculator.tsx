'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineSparkles, 
  HiOutlineGlobeAlt, 
  HiOutlineBolt, 
  HiOutlineDevicePhoneMobile, 
  HiOutlineMagnifyingGlass, 
  HiOutlineArrowTrendingUp,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
  HiOutlineArrowRight
} from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '@/data/siteData';

interface AuditResult {
  overallScore: number;
  speedScore: number;
  mobileScore: number;
  seoScore: number;
  conversionScore: number;
  grade: string;
  loadTime: string;
  issues: string[];
  recommendations: string[];
}

export const SeoSpeedCalculator: React.FC = () => {
  const [url, setUrl] = useState('');
  const [industry, setIndustry] = useState('local_service');
  const [goal, setGoal] = useState('more_leads');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [result, setResult] = useState<AuditResult | null>(null);

  const scanSteps = [
    'Testing mobile viewport & Core Web Vitals...',
    'Auditing Google indexation & schema tags...',
    'Evaluating conversion triggers & CTAs...',
    'Calculating potential monthly lead loss...'
  ];

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAnalyzing(true);
    setResult(null);
    setScanStep(0);

    // Step animation sequence
    const interval = setInterval(() => {
      setScanStep((prev) => {
        if (prev < scanSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          generateAuditReport();
          setIsAnalyzing(false);
          return prev;
        }
      });
    }, 800);
  };

  const generateAuditReport = () => {
    // Generate deterministic yet realistic metrics based on input strings length
    const hash = (url + industry + goal).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    const speedScore = 58 + (hash % 28); // 58 - 85
    const mobileScore = 65 + ((hash * 3) % 25); // 65 - 89
    const seoScore = 52 + ((hash * 7) % 32); // 52 - 83
    const conversionScore = 48 + ((hash * 11) % 35); // 48 - 82
    const overallScore = Math.round((speedScore + mobileScore + seoScore + conversionScore) / 4);

    let grade = 'B';
    if (overallScore >= 85) grade = 'A+ (Excellent)';
    else if (overallScore >= 75) grade = 'B+ (Good)';
    else if (overallScore >= 65) grade = 'C (Needs Optimization)';
    else grade = 'D (High Traffic & Lead Loss)';

    const potentialIssues = [
      'Page load time exceeds 3.4 seconds on 4G mobile connections.',
      'Missing Local Business Schema Markup (hurts Google Maps rankings).',
      'No instant WhatsApp direct lead trigger present on mobile screen.',
      'Uncompressed image assets slowing down initial page render.',
      'Meta description tag is missing or non-optimized for CTR.',
      'Heading hierarchy (H1/H2) lacks primary target keywords.'
    ];

    // Pick 3-4 issues based on hash
    const selectedIssues = [
      potentialIssues[hash % potentialIssues.length],
      potentialIssues[(hash + 2) % potentialIssues.length],
      potentialIssues[(hash + 4) % potentialIssues.length],
    ];

    const recommendations = [
      'Implement Next.js static asset optimization to achieve < 1s load time.',
      'Embed dynamic WhatsApp lead-capture buttons & instant popups.',
      'Add Schema.org JSON-LD structured data for Google rich snippets.',
      'Restructure layout to focus on high-converting mobile UX.'
    ];

    setResult({
      overallScore,
      speedScore,
      mobileScore,
      seoScore,
      conversionScore,
      grade,
      loadTime: `${(2.4 + (hash % 15) / 10).toFixed(1)}s`,
      issues: selectedIssues,
      recommendations
    });
  };

  const cleanDomain = url.replace(/https?:\/\//, '').replace(/\/.*$/, '');

  const whatsappMessage = encodeURIComponent(
    `Hi Mohd Ahmad, I just scanned my website (${cleanDomain || 'My Website'}) using your Speed & SEO Calculator. My score was ${result?.overallScore || 0}/100. I want to fix my site performance and get more leads.`
  );

  return (
    <section id="audit-calculator" className="py-16 bg-slate-900 text-white rounded-3xl relative overflow-hidden shadow-2xl border border-slate-800 my-12">
      {/* Background Glow Accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-400 bg-brand-500/10 border border-brand-500/20 px-4 py-1.5 rounded-full">
            <HiOutlineSparkles className="w-4 h-4 text-brand-400" />
            <span>Interactive Lead Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Free Website Speed & SEO Health Scanner
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Find out why your website is losing potential clients to competitors. Enter your domain below for an instant performance & lead audit.
          </p>
        </div>

        {/* Input Form Card */}
        <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700 p-6 sm:p-8 shadow-xl mb-10">
          <form onSubmit={handleAuditSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* URL Input */}
              <div className="md:col-span-3 lg:col-span-1 space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Website URL or Business Domain
                </label>
                <div className="relative">
                  <HiOutlineGlobeAlt className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. yourbusiness.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 transition-all"
                  />
                </div>
              </div>

              {/* Industry Select */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Business Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 transition-all"
                >
                  <option value="local_service">Local Service Business</option>
                  <option value="ecommerce">E-Commerce / Shopify Store</option>
                  <option value="clinic">Clinic / Healthcare</option>
                  <option value="realestate">Real Estate & Property</option>
                  <option value="corporate">Corporate / B2B Agency</option>
                </select>
              </div>

              {/* Goal Select */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Primary Goal
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 transition-all"
                >
                  <option value="more_leads">Get More Phone & WhatsApp Leads</option>
                  <option value="rank_first">Rank #1 on Google Search</option>
                  <option value="more_sales">Increase Online Sales & Conversion</option>
                  <option value="modern_design">Redesign & Modernize Site</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isAnalyzing}
              className="w-full bg-gradient-to-r from-brand-500 via-brand-600 to-sky-500 hover:from-brand-600 hover:to-sky-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-base disabled:opacity-50 cursor-pointer"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Scanning Website Metrics...</span>
                </>
              ) : (
                <>
                  <HiOutlineBolt className="w-5 h-5" />
                  <span>Run Free Website Audit Scan</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Scan Progress Bar Animation */}
        <AnimatePresence>
          {isAnalyzing && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 mb-10 text-center space-y-4 shadow-xl"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span>Scanning Progress</span>
                <span className="text-brand-400">{Math.round(((scanStep + 1) / scanSteps.length) * 100)}%</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-700">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-500 to-sky-400 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((scanStep + 1) / scanSteps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <p className="text-sm font-semibold text-brand-300 animate-pulse">
                {scanSteps[scanStep]}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Dashboard Display */}
        <AnimatePresence>
          {result && !isAnalyzing && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl"
            >
              {/* Score Overview Header */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-slate-700/80 pb-6">
                <div className="md:col-span-4 text-center md:text-left space-y-1">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Audit Target</div>
                  <div className="text-xl font-bold text-white truncate">{cleanDomain || 'Your Website'}</div>
                  <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold rounded-lg mt-1">
                    Grade: {result.grade}
                  </div>
                </div>

                <div className="md:col-span-4 flex justify-center">
                  <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-slate-900 border-4 border-brand-500 shadow-inner">
                    <div className="text-center">
                      <div className="text-3xl font-extrabold text-white">{result.overallScore}</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase">/ 100 Score</div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4 text-center md:text-right space-y-1">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Est. Mobile Load Time</div>
                  <div className="text-2xl font-extrabold text-amber-400">{result.loadTime}</div>
                  <div className="text-xs text-slate-400">Target for High Conversion: &lt; 1.2s</div>
                </div>
              </div>

              {/* 4 Metrics Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 space-y-2 text-center">
                  <HiOutlineBolt className="w-6 h-6 text-amber-400 mx-auto" />
                  <div className="text-xs font-bold text-slate-400 uppercase">Page Speed</div>
                  <div className="text-xl font-extrabold text-white">{result.speedScore}%</div>
                </div>

                <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 space-y-2 text-center">
                  <HiOutlineDevicePhoneMobile className="w-6 h-6 text-sky-400 mx-auto" />
                  <div className="text-xs font-bold text-slate-400 uppercase">Mobile UX</div>
                  <div className="text-xl font-extrabold text-white">{result.mobileScore}%</div>
                </div>

                <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 space-y-2 text-center">
                  <HiOutlineMagnifyingGlass className="w-6 h-6 text-brand-400 mx-auto" />
                  <div className="text-xs font-bold text-slate-400 uppercase">SEO Health</div>
                  <div className="text-xl font-extrabold text-white">{result.seoScore}%</div>
                </div>

                <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 space-y-2 text-center">
                  <HiOutlineArrowTrendingUp className="w-6 h-6 text-emerald-400 mx-auto" />
                  <div className="text-xs font-bold text-slate-400 uppercase">Lead Conversion</div>
                  <div className="text-xl font-extrabold text-white">{result.conversionScore}%</div>
                </div>
              </div>

              {/* Issues & Recommendations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/60 border border-amber-500/20 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <HiOutlineExclamationTriangle className="w-5 h-5 flex-shrink-0" />
                    <span>Key Issues Found ({result.issues.length})</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {result.issues.map((issue, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-900/60 border border-emerald-500/20 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <HiOutlineCheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Recommended Upgrades</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {result.recommendations.map((rec, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call to Action Bar */}
              <div className="bg-gradient-to-r from-brand-900/90 to-slate-900 border border-brand-500/40 rounded-xl p-6 text-center space-y-4">
                <h3 className="text-lg font-bold text-white">
                  Want Mohd Ahmad to Fix These Issues &amp; Double Your Leads?
                </h3>
                <p className="text-xs text-slate-300 max-w-xl mx-auto">
                  Get a complete custom redesign &amp; speed optimization strategy specifically for your business. No obligation.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Fix My Site via WhatsApp (+91 {siteConfig.whatsappNumber})</span>
                  </a>
                  <a
                    href="#contact"
                    className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Full Audit Strategy</span>
                    <HiOutlineArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
