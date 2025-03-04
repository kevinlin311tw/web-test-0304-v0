'use client';

import Image from 'next/image';
import { ArrowRight, Lightbulb } from 'lucide-react';

interface InnovationCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  iconColor?: string;
  year?: string;
  impact: string[];
  link?: string;
}

const InnovationCard = ({
  title,
  description,
  imageSrc,
  iconColor = 'blue',
  year,
  impact,
  link = '#',
}: InnovationCardProps) => {
  const colorMap = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
    teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
  };
  
  const iconColorClass = colorMap[iconColor as keyof typeof colorMap] || colorMap.blue;
  
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-zinc-800 hover:shadow-md transition-shadow">
      {imageSrc ? (
        <div className="relative w-full h-48">
          <Image 
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
          {year && (
            <div className="absolute top-4 right-4 bg-black/70 text-white text-sm font-medium px-3 py-1 rounded-full">
              {year}
            </div>
          )}
        </div>
      ) : (
        <div className={`w-full h-48 flex items-center justify-center ${iconColor === 'blue' ? 'bg-blue-50 dark:bg-blue-900/10' : iconColor === 'green' ? 'bg-green-50 dark:bg-green-900/10' : iconColor === 'purple' ? 'bg-purple-50 dark:bg-purple-900/10' : iconColor === 'amber' ? 'bg-amber-50 dark:bg-amber-900/10' : 'bg-teal-50 dark:bg-teal-900/10'}`}>
          <div className={`w-20 h-20 rounded-full ${iconColorClass} flex items-center justify-center`}>
            <Lightbulb size={36} />
          </div>
          {year && (
            <div className="absolute top-4 right-4 bg-black/70 text-white text-sm font-medium px-3 py-1 rounded-full">
              {year}
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Impact:</h4>
          <ul className="space-y-1">
            {impact.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className={`inline-block w-2 h-2 ${iconColorClass.split(' ')[0]} rounded-full mt-1.5 mr-2`}></span>
                <span className="text-sm text-gray-600 dark:text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <a
          href={link}
          className={`inline-flex items-center text-sm font-medium ${iconColor === 'blue' ? 'text-blue-600 dark:text-blue-400' : iconColor === 'green' ? 'text-green-600 dark:text-green-400' : iconColor === 'purple' ? 'text-purple-600 dark:text-purple-400' : iconColor === 'amber' ? 'text-amber-600 dark:text-amber-400' : 'text-teal-600 dark:text-teal-400'} hover:underline`}
        >
          Learn more <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default InnovationCard;