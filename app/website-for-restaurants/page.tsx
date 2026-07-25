import React from 'react';
import type { Metadata } from 'next';
import { industriesList, siteConfig } from '@/data/siteData';
import { IndustryPageTemplate } from '@/components/IndustryPageTemplate';

const industry = industriesList.find((i) => i.slug === 'website-for-restaurants')!;

export const metadata: Metadata = {
  title: industry.meta.title,
  description: industry.meta.description,
  keywords: industry.meta.keywords,
  alternates: { canonical: `${siteConfig.baseUrl}/${industry.slug}` }
};

export default function RestaurantsIndustryPage() {
  return <IndustryPageTemplate industry={industry} />;
}
