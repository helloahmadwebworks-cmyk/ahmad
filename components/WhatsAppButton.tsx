'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '@/data/siteData';

export const WhatsAppButton: React.FC<{ pageContext?: string }> = ({ pageContext }) => {
  const customMsg = pageContext
    ? `Hi Mohd Ahmad, I want to discuss a project regarding ${pageContext}.`
    : `Hi Mohd Ahmad, I want to discuss my website project.`;

  const waLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(customMsg)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip hint */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold px-3 py-2 rounded-xl shadow-lg border border-slate-200 hover:border-emerald-300 transition-all duration-200"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
        <span>Need a website? Chat with Mohd Ahmad</span>
      </a>

      {/* Floating Action Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Mohd Ahmad"
        className="relative group bg-emerald-500 hover:bg-emerald-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 group-hover:opacity-60 animate-pulse"></span>
        <FaWhatsapp className="w-8 h-8 relative z-10" />
      </a>
    </div>
  );
};
