import { Metadata } from 'next';

const legendProfiles = {
  'bloody-mary': {
    title: 'Bloody Mary',
    origin: 'Western Folklore',
    type: 'Urban Legend',
    riskLevel: 'High',
    content: 'A chilling urban legend about a spectral entity summoned by saying her name three times in front of a mirror...',
    images: [
      {
        src: '/images/bloody-mary-mirror.jpg',
        alt: 'Bloody Mary Mirror Ritual',
        caption: 'The Infamous Mirror Ritual',
        year: '1990s',
        credit: 'Urban Legends Archive'
      }
    ]
  },
  // Add other legend profiles here
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const legend = legendProfiles[params.id as keyof typeof legendProfiles];
  return {
    title: legend ? `${legend.title} | Gothic Tales` : 'Legend Not Found',
    description: legend ? legend.content.substring(0, 160) : 'Legend details not available'
  };
}

export { legendProfiles };
