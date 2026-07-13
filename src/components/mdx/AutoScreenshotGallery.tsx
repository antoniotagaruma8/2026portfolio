'use client';
import React, { useState } from 'react';
import { ZoomableImage } from './ZoomableImage';

interface AutoScreenshotGalleryProps {
  link?: string;
  fallback1: string;
  fallback2: string;
  title?: string;
}

export function AutoScreenshotGallery({ link, fallback1, fallback2, title = "Platform Preview" }: AutoScreenshotGalleryProps) {
  // Determine if the link is a real deployed URL
  const isDeployed = link && link.startsWith('http') && !link.includes('coming-soon');
  
  // Use image.thum.io API to grab live screenshots if deployed
  // Added a cache-busting timestamp to avoid stale images if possible, but standard is fine
  const src1 = isDeployed ? `https://image.thum.io/get/width/1200/crop/800/${link}` : fallback1;
  // For the second image, we can just use the fallback (since the root URL screenshot will be the same)
  // Or we could append a dummy path or use fallback2
  const src2 = fallback2; 

  const [img1, setImg1] = useState(src1);
  const [img2, setImg2] = useState(src2);

  return (
    <div className="mt-12">
      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 px-2 block">{title}</span>
      <div className="grid grid-cols-2 gap-3 max-w-4xl mx-auto h-[350px]">
        <div className="col-span-1 overflow-hidden rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground/50 relative group">
          <ZoomableImage 
            src={img1} 
            alt="Platform View 1" 
            className="object-cover w-full h-full" 
            onError={() => setImg1(fallback1)} // Fallback if API fails
          />
          {isDeployed && img1 === src1 && (
            <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-md font-medium tracking-wide">
              LIVE GRAB
            </div>
          )}
        </div>
        <div className="col-span-1 overflow-hidden rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground/50 relative">
          <ZoomableImage 
            src={img2} 
            alt="Platform View 2" 
            className="object-cover w-full h-full" 
          />
        </div>
      </div>
    </div>
  );
}
