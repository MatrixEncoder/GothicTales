"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import LegendDetail from '../LegendDetail';
import { Legend } from './page';

export default function LegendClientPage({ legend }: { legend: Legend }) {
  const router = useRouter();

  useEffect(() => {
    if (!legend) {
      router.push('/legends');
    }
  }, [legend, router]);

  if (!legend) {
    return null;
  }

  return (
    <PageTransition>
      <main className="min-h-screen gothic-container py-24">
        <LegendDetail legend={legend} />
      </main>
    </PageTransition>
  );
}
