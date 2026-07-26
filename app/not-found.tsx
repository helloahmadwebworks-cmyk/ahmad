import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
      <div className="w-20 h-20 bg-brand-50 text-brand-600 rounded-3xl flex items-center justify-center text-3xl font-extrabold shadow-subtle border border-brand-200">
        404
      </div>
      
      <div className="space-y-2 max-w-md">
        <h1 className="text-3xl font-bold text-slate-900">Page Not Found</h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          The page you are looking for might have been moved, renamed, or doesn't exist. Let's get you back on track.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
        <Link
          href="/"
          className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-xl shadow-button hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm"
        >
          Return to Homepage
        </Link>
        <Link
          href="/contact"
          className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-xl transition-all text-sm"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}
