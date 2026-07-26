'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineX, HiOutlineSparkles, HiOutlineCheck } from 'react-icons/hi';
import { FaWhatsapp, FaPaperPlane, FaExclamationCircle } from 'react-icons/fa';
import { siteConfig } from '@/data/siteData';

export const AuditModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentChecked) {
      setErrorMessage('Please consent to the Privacy Policy to request an audit.');
      return;
    }

    setSent(true);

    try {
      const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || siteConfig.web3FormsKey;
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: apiKey,
          subject: `SEO Audit Request: ${name} (${websiteUrl})`,
          from_name: 'Ahmad Web Works Audit Modal',
          name,
          phone,
          website: websiteUrl,
          consent: 'Agreed to Privacy Policy & Direct Communication'
        })
      });
    } catch (err) {
      console.warn('Web3Forms audit submit error:', err);
    }

    const msg = `Hi Mohd Ahmad,\n\nI want a Free Website & SEO Audit.\n\nName: ${name}\nPhone: ${phone}\nWebsite/Business: ${websiteUrl}`;
    const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
      onClose();
      setSent(false);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 relative overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <HiOutlineX className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center text-2xl">
                <HiOutlineSparkles />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">Request a Free Audit & Quote</h3>
                <p className="text-slate-600 text-sm mt-1">
                  Discover why your current website isn't ranking or generating leads. Direct 1-on-1 review by Mohd Ahmad.
                </p>
              </div>

              {sent ? (
                <div className="p-6 bg-emerald-50 text-emerald-800 rounded-2xl text-center space-y-2">
                  <HiOutlineCheck className="w-10 h-10 text-emerald-600 mx-auto" />
                  <div className="font-bold">Opening WhatsApp...</div>
                </div>
              ) : (
                <form onSubmit={handleAuditSubmit} className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 outline-none text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 9084326728"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 outline-none text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Website URL or Business Name *</label>
                    <input
                      type="text"
                      required
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="e.g. mybusiness.com or Clinic Name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 outline-none text-sm font-medium"
                    />
                  </div>

                  {/* MANDATORY CONSENT CHECKBOX */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/90 space-y-1">
                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="modalConsent"
                        required
                        checked={consentChecked}
                        onChange={(e) => setConsentChecked(e.target.checked)}
                        className="mt-0.5 h-4 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500 cursor-pointer accent-brand-600 flex-shrink-0"
                      />
                      <label htmlFor="modalConsent" className="text-[11px] text-slate-600 leading-tight cursor-pointer select-none">
                        I agree to the <Link href="/privacy" target="_blank" className="text-brand-600 hover:underline font-bold">Privacy Policy</Link> and consent to Ahmad Web Works contacting me via phone, WhatsApp, SMS, or email.
                      </label>
                    </div>
                    {errorMessage && (
                      <p className="text-[11px] text-rose-600 font-semibold pt-1 flex items-center gap-1">
                        <FaExclamationCircle className="flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={!consentChecked}
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-extrabold py-4 px-6 rounded-2xl shadow-button hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <FaPaperPlane className="text-sm" />
                    <span>Get a Free Quote & Audit</span>
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    🔒 100% Free • Web3Forms Integrated • Direct response from Mohd Ahmad
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

