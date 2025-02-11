'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface HistoricalImageProps {
  src: string;
  alt: string;
  caption?: string;
  year?: string;
  credit?: string;
}

export default function HistoricalImage({ src, alt, caption, year, credit }: HistoricalImageProps) {
  const [imageError, setImageError] = useState(false);
  const isExternalUrl = src.startsWith('http://') || src.startsWith('https://');

  return (
    <motion.figure
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="my-8 bg-gothic-900/50 p-4 rounded-lg border border-red-900/20"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gothic-950">
        {!imageError ? (
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gothic-600 text-sm text-center p-4">
            <div>
              <div className="mb-2">🖼️</div>
              <div>{alt}</div>
            </div>
          </div>
        )}
      </div>
      <figcaption className="mt-4 text-sm">
        {caption && <p className="text-gothic-300">{caption}</p>}
        <div className="flex items-center gap-2 mt-2 text-gothic-400 text-xs">
          {year && <span>{year}</span>}
          {year && credit && <span>•</span>}
          {credit && <span>{credit}</span>}
        </div>
      </figcaption>
    </motion.figure>
  );
}
