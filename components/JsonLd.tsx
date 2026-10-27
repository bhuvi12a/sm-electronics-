import React from 'react';

export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TelevisionRepairService',
    name: 'SM Electronics',
    image: 'https://smelectronics-hosur.com/images/why_choose_technician.jpg',
    telephone: '+919486348116',
    email: 'contact@smelectronics-hosur.com',
    url: 'https://smelectronics-hosur.com',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hosur',
      addressRegion: 'Tamil Nadu',
      postalCode: '635109',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.7409',
      longitude: '77.8253',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Hosur' },
      { '@type': 'AdministrativeArea', name: 'SIPCOT Phase 1 & 2' },
      { '@type': 'AdministrativeArea', name: 'Mathigiri' },
      { '@type': 'AdministrativeArea', name: 'Bagalur Road' },
      { '@type': 'AdministrativeArea', name: 'Rayakottai Road' },
      { '@type': 'AdministrativeArea', name: 'Avalapalli' },
      { '@type': 'AdministrativeArea', name: 'Moranapalli' },
      { '@type': 'AdministrativeArea', name: 'Zuzuvadi' },
      { '@type': 'AdministrativeArea', name: 'Thally Road' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'LED TV Repair Services in Hosur',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'LED TV Repair Hosur',
            description: 'Comprehensive electrical diagnostics and panel servicing for modern LED TVs.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'TV Motherboard Repair Hosur',
            description: 'Micro-soldering, processor reflow, and eMMC firmware restoration.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'LED TV Backlight Replacement Hosur',
            description: 'Complete replacement of LED strip arrays with aluminum-core backing.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'TV Display & Screen Diagnosis Hosur',
            description: 'T-Con board signal analysis and panel health assessment.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'TV Power Supply Board Repair Hosur',
            description: 'SMPS circuit restoration, capacitor and transformer fixing.',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  serviceType,
  url,
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    url: `https://smelectronics-hosur.com${url}`,
    provider: {
      '@type': 'TelevisionRepairService',
      name: 'SM Electronics',
      telephone: '+919486348116',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hosur',
        addressRegion: 'Tamil Nadu',
        postalCode: '635109',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Hosur, Tamil Nadu',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
