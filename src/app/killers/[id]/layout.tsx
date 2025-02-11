"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Layout({ 
  children, 
  params 
}: { 
  children: React.ReactNode, 
  params: { id: string } 
}) {
  const router = useRouter();

  useEffect(() => {
    // You can add any client-side routing logic here if needed
    // For example, redirecting if the killer doesn't exist
  }, [params.id, router]);

  return <>{children}</>;
}
