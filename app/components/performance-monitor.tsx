"use client";
import { useEffect } from 'react';

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              console.log('FCP:', entry.startTime);
            }
            break;
          case 'largest-contentful-paint':
            console.log('LCP:', entry.startTime);
            break;
          case 'first-input':
            const firstInputEntry = entry as FirstInputEntry;
            console.log('FID:', firstInputEntry.processingStart - firstInputEntry.startTime);
            break;
          case 'layout-shift':
            const layoutShiftEntry = entry as LayoutShiftEntry;
            console.log('CLS:', layoutShiftEntry.value);
            break;
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch {
      // Fallback for older browsers
      console.log('Performance Observer not supported');
    }

    // Monitor Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      console.log('TTFB:', navigationEntry.responseStart - navigationEntry.requestStart);
    }

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          if (resourceEntry.duration > 1000) {
            console.warn('Slow resource:', resourceEntry.name, resourceEntry.duration + 'ms');
          }
        }
      }
    });

    try {
      resourceObserver.observe({ entryTypes: ['resource'] });
    } catch {
      console.log('Resource Performance Observer not supported');
    }

    // Monitor long tasks
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'longtask') {
          console.warn('Long task detected:', entry.duration + 'ms');
        }
      }
    });

    try {
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch {
      console.log('Long Task Performance Observer not supported');
    }

    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
      longTaskObserver.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}
