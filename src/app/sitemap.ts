import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  return [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          pl: `${baseUrl}/pl`,
        },
      },
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/pl`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          pl: `${baseUrl}/pl`,
        },
      },
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}

