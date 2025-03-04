'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  imageSrc?: string;
  altText?: string;
  link?: string;
}

const TimelineCard = ({
  year,
  title,
  description,
  imageSrc,
  altText = 'Event image',
  link = '#',
}: TimelineCardProps) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-zinc-800 hover:shadow-md transition-shadow">
      {imageSrc && (
        <div className="relative w-full h-48">
          <Image 
            src={imageSrc}
            alt={altText}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-5">
        <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
          {year}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <a
          href={link}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          Learn more <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default TimelineCard;