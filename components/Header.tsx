'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX, HiOutlineChevronDown, HiOutlineSparkles } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig, mainServices, citiesList, industriesList } from '@/data/siteData';
import { AuditModal } from '@/components/AuditModal';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-subtle border-b border-slate-200/80 py-3'
            : 'bg-white/75 backdrop-blur-sm border-b border-slate-100/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Text Logo */}
            <Link href="/" className="flex items-center group focus:outline-none">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 transition-transform duration-200 group-hover:scale-[1.02]">
                Ahmad <span className="bg-gradient-to-r from-brand-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">Web Works</span>
                <span className="text-brand-600 font-black ml-0.5">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 font-semibold text-sm text-slate-700">
              <Link
                href="/"
                className={`px-3.5 py-2 rounded-xl transition-colors ${
                  pathname === '/' ? 'text-brand-600 bg-brand-50' : 'hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-3.5 py-2 rounded-xl transition-colors ${
                  pathname === '/about' ? 'text-brand-600 bg-brand-50' : 'hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => toggleDropdown('services')}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-xl transition-colors ${
                    pathname.includes('/services') || mainServices.some((s) => pathname.includes(s.slug))
                      ? 'text-brand-600 bg-brand-50'
                      : 'hover:text-brand-600 hover:bg-slate-50'
                  }`}
                >
                  Services <HiOutlineChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180 text-brand-600' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-1 w-80 bg-white rounded-2xl shadow-card-hover border border-slate-200 p-3 z-50"
                    >
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1 mb-1">
                        SEO Lead Generation Services
                      </div>
                      {mainServices.map((service) => (
                        <Link
                          key={service.id}
                          href={`/${service.slug}`}
                          className="block px-3 py-2.5 rounded-xl hover:bg-brand-50 transition-colors group"
                        >
                          <div className="text-slate-900 font-bold text-sm group-hover:text-brand-600">
                            {service.title}
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-normal">
                            {service.shortDesc}
                          </p>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Cities Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('locations')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => toggleDropdown('locations')}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-xl transition-colors ${
                    pathname.includes('website-developer-') ? 'text-brand-600 bg-brand-50' : 'hover:text-brand-600 hover:bg-slate-50'
                  }`}
                >
                  Cities <HiOutlineChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'locations' ? 'rotate-180 text-brand-600' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'locations' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-1 w-64 bg-white rounded-2xl shadow-card-hover border border-slate-200 p-3 z-50"
                    >
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1 mb-1">
                        City Web Developer Guides
                      </div>
                      {citiesList.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/${city.slug}`}
                          className="block px-3 py-2 rounded-xl text-slate-700 font-medium text-xs hover:bg-brand-50 hover:text-brand-600 transition-colors"
                        >
                          Dev in {city.cityName}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('industries')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => toggleDropdown('industries')}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-xl transition-colors ${
                    pathname.includes('website-for-') ? 'text-brand-600 bg-brand-50' : 'hover:text-brand-600 hover:bg-slate-50'
                  }`}
                >
                  Industries <HiOutlineChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'industries' ? 'rotate-180 text-brand-600' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'industries' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-1 w-64 bg-white rounded-2xl shadow-card-hover border border-slate-200 p-3 z-50"
                    >
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1 mb-1">
                        Industry Vertical Portals
                      </div>
                      {industriesList.map((ind) => (
                        <Link
                          key={ind.slug}
                          href={`/${ind.slug}`}
                          className="block px-3 py-2 rounded-xl text-slate-700 font-medium text-xs hover:bg-brand-50 hover:text-brand-600 transition-colors"
                        >
                          {ind.industryName}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/portfolio"
                className={`px-3.5 py-2 rounded-xl transition-colors ${
                  pathname === '/portfolio' ? 'text-brand-600 bg-brand-50' : 'hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                Portfolio
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-2 rounded-xl transition-colors ${
                  pathname === '/contact' ? 'text-brand-600 bg-brand-50' : 'hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setAuditModalOpen(true)}
                className="inline-flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-button hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <HiOutlineSparkles className="w-4 h-4 text-white" />
                <span>Free SEO Audit</span>
              </button>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Mohd%20Ahmad,%20I%20want%20to%20discuss%20my%20website%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-button hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setAuditModalOpen(true)}
                className="px-3 py-2 rounded-xl bg-brand-600 text-white text-xs font-bold sm:hidden shadow-button"
              >
                Free Audit
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-1 text-slate-800 font-medium">
                <Link href="/" className="px-4 py-2.5 rounded-xl hover:bg-slate-50 font-bold">Home</Link>
                <Link href="/about" className="px-4 py-2.5 rounded-xl hover:bg-slate-50 font-bold">About Mohd Ahmad</Link>

                <div className="py-2 border-t border-slate-100">
                  <div className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Digital Services</div>
                  {mainServices.map((service) => (
                    <Link
                      key={service.id}
                      href={`/${service.slug}`}
                      className="block px-4 py-2 text-xs text-slate-700 hover:text-brand-600 rounded-lg"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>

                <div className="py-2 border-t border-slate-100">
                  <div className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Cities We Serve</div>
                  <div className="grid grid-cols-2 gap-1 px-2">
                    {citiesList.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/${city.slug}`}
                        className="px-3 py-1.5 text-xs text-slate-700 hover:text-brand-600 rounded-md"
                      >
                        Dev in {city.cityName}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="py-2 border-t border-slate-100">
                  <div className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Industries</div>
                  {industriesList.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/${ind.slug}`}
                      className="block px-4 py-2 text-xs text-slate-700 hover:text-brand-600 rounded-lg"
                    >
                      {ind.industryName}
                    </Link>
                  ))}
                </div>

                <Link href="/portfolio" className="px-4 py-2.5 rounded-xl hover:bg-slate-50 font-bold border-t border-slate-100">Portfolio</Link>
                <Link href="/contact" className="px-4 py-2.5 rounded-xl hover:bg-slate-50 font-bold">Contact</Link>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <button
                    onClick={() => { setMobileMenuOpen(false); setAuditModalOpen(true); }}
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-3 rounded-xl shadow-button hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <HiOutlineSparkles className="text-white" />
                    <span>Request Free SEO Audit</span>
                  </button>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi%20Mohd%20Ahmad,%20I%20want%20to%20discuss%20my%20website%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-500 text-white font-bold text-xs py-3 rounded-xl shadow-button"
                  >
                    <FaWhatsapp className="text-base" />
                    <span>WhatsApp Direct (+91 9084326728)</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Free Audit Modal */}
      <AuditModal isOpen={auditModalOpen} onClose={() => setAuditModalOpen(false)} />
    </>
  );
};
