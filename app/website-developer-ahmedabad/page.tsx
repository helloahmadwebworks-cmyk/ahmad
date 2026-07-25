import React from 'react';
import type { Metadata } from 'next';
import { citiesList, siteConfig } from '@/data/siteData';
import { CityPageTemplate } from '@/components/CityPageTemplate';

const city = citiesList.find((c) => c.slug === 'website-developer-ahmedabad')!;

export const metadata: Metadata = {
  title: city.meta.title,
  description: city.meta.description,
  keywords: city.meta.keywords,
  alternates: { canonical: `${siteConfig.baseUrl}/${city.slug}` }
};

export default function AhmedabadCityPage() {
  return <CityPageTemplate city={city} />;
}
