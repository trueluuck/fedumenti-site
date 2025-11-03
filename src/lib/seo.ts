import type { Metadata } from 'next';

type BuildMetaInput = {
  title: string;
  description: string;
  pathname?: string;        // ex: '/services'
  ogImage?: string;         // ex: '/assets/og/services.jpg'
};

const site = {
  name: 'Fedumenti Group',
  url: 'https://www.fedumentigroup.com.br',
};

export function buildMetadata({
  title,
  description,
  pathname = '/',
  ogImage = '/assets/og/default.jpg',
}: BuildMetaInput): Metadata {
  const fullUrl = site.url + pathname;

  return {
    title: `${title} | ${site.name}`,
    description,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: fullUrl,
      siteName: site.name,
      locale: 'pt_BR',
      type: 'website',
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${site.name}`,
      description,
      images: [ogImage],
    },
  };
}
