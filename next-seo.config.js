const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://{site_domain}';

/** @type {import('next-seo').DefaultSeoProps} */
const SEO = {
  titleTemplate: '%s | Fisioterapeuta Vitor Vaz',
  defaultTitle: 'Fisioterapia em São Paulo – Dor Crônica e Joelho | Vitor Vaz',
  description:
    'Fisioterapeuta em São Paulo especializado em dor crônica, reabilitação de joelho e lesão de LCA. Atendimentos presenciais, domiciliares e teleconsulta.',
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Vitor Vaz – Fisioterapia',
    locale: 'pt_BR',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    { name: 'theme-color', content: '#0ea5e9' },
  ],
};

module.exports = { SEO };


