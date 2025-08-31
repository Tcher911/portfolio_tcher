"use client";

import { useEffect } from 'react';

export const FontOptimizer: React.FC = () => {
  useEffect(() => {
    // Font loading optimization for mobile
    if (typeof window !== 'undefined' && 'fonts' in document) {
      // Force font loading
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
        console.log('Fonts loaded successfully');
      });
      
      // Mobile font optimization
      if (window.innerWidth <= 768) {
        console.log('Mobile device detected, optimizing fonts...');
        
        // Ensure fonts are loaded on mobile
        const fontUrls = [
          '/fonts/LINESeedSansTH_W_Rg.woff',
          '/fonts/LINESeedSansTH_W_Bd.woff',
          '/fonts/LINESeedSansTH_W_Th.woff',
          '/fonts/LINESeedSansTH_W_He.woff',
          '/fonts/LINESeedSansTH_W_XBd.woff'
        ];
        
        // Preload fonts for mobile
        for (const url of fontUrls) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = url;
          link.as = 'font';
          link.type = 'font/woff';
          link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        }
        
        // Force font loading with timeout
        const loadFonts = async () => {
          try {
            await document.fonts.ready;
            console.log('Mobile fonts loaded successfully');
          } catch (error) {
            console.warn('Font loading failed, using fallbacks:', error);
          }
        };
        
        // Set timeout for font loading
        setTimeout(loadFonts, 1000);
      }
      
      // Add font loading event listeners
      document.fonts.addEventListener('loading', () => {
        console.log('Fonts are loading...');
      });
      
      document.fonts.addEventListener('loadingdone', () => {
        console.log('Font loading completed');
        document.documentElement.classList.add('fonts-loaded');
      });
      
      document.fonts.addEventListener('loadingerror', (event) => {
        console.warn('Font loading error:', event);
      });
    }
  }, []);

  return null; // This component doesn't render anything
};
