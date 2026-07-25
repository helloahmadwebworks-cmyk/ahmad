import React from 'react';
import { siteConfig } from '@/data/siteData';

export const SchemaScript: React.FC<{ type?: string; customSchema?: object }> = ({ customSchema }) => {
  const baseSchema = customSchema || {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": siteConfig.name,
    "image": `${siteConfig.baseUrl}/og-image.png`,
    "@id": siteConfig.baseUrl,
    "url": siteConfig.baseUrl,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Aligarh",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.8974,
      "longitude": 78.0880
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "sameAs": [
      `https://wa.me/${siteConfig.whatsappNumber}`,
      `mailto:${siteConfig.email}`
    ],
    "founder": {
      "@type": "Person",
      "name": siteConfig.founder,
      "jobTitle": "Freelance Web Developer & SEO Expert",
      "email": siteConfig.email
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
};
