"use client";

import HistoricalImage from '@/components/HistoricalImage';

// Define the Legend type
interface Legend {
  title: string;
  origin: string;
  type: string;
  riskLevel: string;
  content: string;
  images: Array<{ src: string; alt: string; caption: string; year: string; credit: string; }>; 
}

const getRiskLevelColor = (level: string) => {
  switch (level.toLowerCase()) {
    case 'extreme':
      return 'bg-red-950/50 text-red-400 border-red-900/50';
    case 'high':
      return 'bg-orange-950/50 text-orange-400 border-orange-900/50';
    case 'medium':
      return 'bg-yellow-950/50 text-yellow-400 border-yellow-900/50';
    default:
      return 'bg-blue-950/50 text-blue-400 border-blue-900/50';
  }
};

const LegendDetail = ({ legend }: { legend: Legend }) => {
  return (
    <article className="max-w-4xl mx-auto">
      <h1 className="gothic-heading text-center mb-4">{legend.title}</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 text-gothic-400 mb-8">
        <span>{legend.origin}</span>
        <span>•</span>
        <span>{legend.type}</span>
        <span>•</span>
        <span className={`px-3 py-1 rounded-full border ${getRiskLevelColor(legend.riskLevel)}`}>Risk Level: {legend.riskLevel}</span>
      </div>
      <div className="prose prose-invert prose-red max-w-none">
        {legend.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-gothic-300 mb-4">{paragraph.trim()}</p>
        ))}
      </div>
      <h2 className="text-2xl font-gothic text-red-500 mb-6">Historical Images</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {legend.images.map((image, index) => (
          <HistoricalImage key={index} {...image} />
        ))}
      </div>
    </article>
  );
};

export default LegendDetail;
