import React from 'react';
import Link from 'next/link';
import { HiChevronRight, HiHome } from 'react-icons/hi';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const Breadcrumbs: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-slate-500 font-medium">
        <li>
          <Link href="/" className="flex items-center gap-1 hover:text-brand-600 transition-colors">
            <HiHome className="w-4 h-4 text-slate-400" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li>
              <HiChevronRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />
            </li>
            <li>
              {item.href ? (
                <Link href={item.href} className="hover:text-brand-600 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-900 font-semibold">{item.label}</span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};
