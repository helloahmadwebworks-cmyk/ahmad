import React from 'react';
import type { Metadata } from 'next';
import { mainServices, siteConfig } from '@/data/siteData';
import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate';

const service = mainServices.find((s) => s.slug === 'website-development')!;

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
  keywords: service.meta.keywords,
  alternates: {
    canonical: `${siteConfig.baseUrl}/${service.slug}`,
  }
};

export default function WebsiteDevelopmentPage() {
  return <ServiceDetailTemplate service={service} />;
}
