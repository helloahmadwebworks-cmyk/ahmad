import React from 'react';
import type { Metadata } from 'next';
import { citiesList, siteConfig } from '@/data/siteData';
import { CityPageTemplate } from '@/components/CityPageTemplate';

const city = citiesList.find((c) => c.slug === 'website-developer-hyderabad')!;

export const metadata: Metadata = {
  title: city.meta.title,
  description: city.meta.description,
  keywords: city.meta.keywords,
  alternates: { canonical: `${siteConfig.baseUrl}/${city.slug}` }
};

export default function HyderabadCityPage() {
  return <CityPageTemplate city={city} />;
}
