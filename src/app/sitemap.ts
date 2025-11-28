import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://lukawski.eu';
  
  const alternates = {
    languages: {
      en: `${baseUrl}/en`,
      pl: `${baseUrl}/pl`,
    },
  };

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
      alternates,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
      alternates,
    },
    {
      url: `${baseUrl}/pl`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
      alternates,
    },
  ];
}

