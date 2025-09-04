export default {
  title: 'Vitor Vaz - Fisioterapeuta Especialista em Fisioterapia Esportiva e Traumato Ortopédica',
  description: 'Vitor Vaz é fisioterapeuta especialista em fisioterapia esportiva e traumato ortopédica. Atendimento personalizado para atletas e pacientes com lesões musculoesqueléticas. Agende sua consulta.',
  canonical: 'https://vitorvaz.com',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vitorvaz.com',
    siteName: 'Vitor Vaz - Fisioterapeuta Especialista',
    title: 'Vitor Vaz - Fisioterapeuta Especialista em Fisioterapia Esportiva e Traumato Ortopédica',
    description: 'Vitor Vaz é fisioterapeuta especialista em fisioterapia esportiva e traumato ortopédica. Atendimento personalizado para atletas e pacientes com lesões musculoesqueléticas.',
    images: [
      {
        url: 'https://vitorvaz.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vitor Vaz - Fisioterapeuta Especialista',
      },
    ],
  },
  twitter: {
    handle: '@vitorvazfisio',
    site: '@vitorvazfisio',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'fisioterapia esportiva, fisioterapia traumato ortopédica, Vitor Vaz, fisioterapeuta, lesões esportivas, reabilitação, atletas, prevenção de lesões, dor crônica, pós-operatório ortopédico, terapia manual, exercícios terapêuticos, São Paulo, SP',
    },
    {
      name: 'author',
      content: 'Vitor Vaz',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'language',
      content: 'pt-BR',
    },
    {
      name: 'geo.region',
      content: 'BR-SP',
    },
    {
      name: 'geo.placename',
      content: 'São Paulo',
    },
    {
      name: 'geo.position',
      content: '-23.5505;-46.6333',
    },
    {
      name: 'ICBM',
      content: '-23.5505, -46.6333',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Vitor Vaz - Fisioterapeuta Especialista',
    description: 'Fisioterapeuta especialista em fisioterapia esportiva e traumato ortopédica',
    url: 'https://vitorvaz.com',
    telephone: '+55-11-99999-9999',
    email: 'contato@vitorvaz.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.5505,
      longitude: -46.6333,
    },
    openingHours: [
      'Mo-Th 08:00-18:00',
      'Fr 08:00-17:00',
      'Sa 08:00-12:00',
    ],
    medicalSpecialty: [
      'Fisioterapia Esportiva',
      'Fisioterapia Traumato Ortopédica',
      'Reabilitação Funcional',
      'Prevenção de Lesões',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Fisioterapia',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Fisioterapia Esportiva',
            description: 'Prevenção, tratamento e reabilitação de lesões relacionadas à prática esportiva',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalProcedure',
            name: 'Fisioterapia Traumato Ortopédica',
            description: 'Tratamento de lesões musculoesqueléticas e condições ortopédicas',
          },
        },
      ],
    },
    sameAs: [
      'https://www.instagram.com/vitorvazfisio',
      'https://www.facebook.com/vitorvazfisio',
      'https://www.linkedin.com/in/vitorvazfisio',
    ],
  },
};