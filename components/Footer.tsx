import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { siteConfig, mainServices, citiesList, industriesList } from '@/data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center group">
              <img
                src="/logo.png"
                alt="Ahmad Web Works Logo"
                className="h-12 w-auto object-contain bg-white rounded-xl p-1.5 shadow-md transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Ahmad Web Works by <strong className="text-slate-200">Mohd Ahmad</strong> is a premier freelance web development, SEO, and digital marketing studio in India. We craft fast-loading, mobile-friendly websites, Shopify stores, and ad campaigns designed to convert visitors into loyal clients.
            </p>
            
            <div className="pt-2 space-y-2.5 text-sm text-slate-300">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>WhatsApp: {siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 hover:text-brand-400 transition-colors"
              >
                <FaEnvelope className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <span>Email: {siteConfig.email}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <FaMapMarkerAlt className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <span>Aligarh, UP, India • Serving Clients Nationwide</span>
              </div>
            </div>
          </div>

          {/* Column 2: Digital Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Digital Services</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {mainServices.map((service) => (
                <li key={service.id}>
                  <Link href={`/${service.slug}`} className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Indian Cities Served */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Cities We Serve</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {citiesList.map((city) => (
                <li key={city.slug}>
                  <Link href={`/${city.slug}`} className="hover:text-white transition-colors">
                    Web Dev in {city.cityName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide">Industry Solutions</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {industriesList.map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/${ind.slug}`} className="hover:text-white transition-colors">
                    {ind.industryName}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800">
                <Link href="/about" className="hover:text-white font-medium text-slate-300">
                  About Mohd Ahmad
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white font-medium text-slate-300">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white font-medium text-slate-300">
                  Contact & Consultations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ahmad Web Works. All rights reserved. Founded by Mohd Ahmad.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors font-medium text-slate-400">
              Privacy Policy
            </Link>
            <span>Direct WhatsApp: +91 9084326728</span>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-slate-300 transition-colors">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
