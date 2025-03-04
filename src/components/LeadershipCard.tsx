'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface LeadershipCardProps {
  name: string;
  role: string;
  period: string;
  description: string;
  imageSrc: string;
  achievements: string[];
}

const LeadershipCard = ({
  name,
  role,
  period,
  description,
  imageSrc,
  achievements
}: LeadershipCardProps) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-zinc-800">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/3 h-64 md:h-auto">
          <Image
            src={imageSrc}
            alt={`${name}, ${role}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{name}</h3>
          <div className="text-blue-600 dark:text-blue-400 font-medium mb-1">{role}</div>
          <div className="text-gray-500 dark:text-gray-400 text-sm mb-4">{period}</div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {description}
          </p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
          
          <a 
            href="#" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            Full biography <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeadershipCard;