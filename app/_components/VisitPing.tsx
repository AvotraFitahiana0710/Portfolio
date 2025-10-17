'use client';

import { useEffect, useRef } from 'react';

export default function VisitPing() {
  const sentRef = useRef(false);

  useEffect(() => {
    if (sentRef.current) return;
    sentRef.current = true;

    try {
      const key = 'visit-pinged-at';
      const last = sessionStorage.getItem(key);
      const now = Date.now();
      // Évite le spam sur rechargements/reouvertures rapprochées (5 minutes)
      if (last && now - Number(last) < 5 * 60 * 1000) {
        return;
      }
      sessionStorage.setItem(key, String(now));
    } catch {
      // Ignorer si sessionStorage indisponible
    }

    fetch('/api/visit', { method: 'POST' }).catch(() => {});
  }, []);

  return null;
}
