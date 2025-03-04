'use client';

import LeadershipCard from '@/components/LeadershipCard';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Bill Gates",
      role: "Co-Founder & CEO",
      period: "1975-2000",
      description: "Bill Gates co-founded Microsoft in 1975 with Paul Allen, driven by an early vision of putting \"a computer on every desk and in every home\". As the first CEO, Gates oversaw Microsoft's formative years and its rapid rise in the software industry.",
      imageSrc: "https://picsum.photos/id/1024/600/800",
      achievements: [
        "Led the development of MS-DOS and Windows",
        "Created Microsoft Office suite",
        "Secured pivotal IBM deal for PC operating system",
        "Guided Microsoft to its IPO in 1986",
        "Expanded into enterprise software and internet services"
      ]
    },
    {
      name: "Steve Ballmer",
      role: "CEO",
      period: "2000-2014",
      description: "Steve Ballmer, Microsoft's first business manager hired in 1980, succeeded Gates as CEO in 2000. Ballmer's era was marked by aggressive expansion of Microsoft's product portfolio and a focus on commercial success.",
      imageSrc: "https://picsum.photos/id/1025/600/800",
      achievements: [
        "Launched Xbox gaming platform in 2001",
        "Released Windows XP and later Windows 7",
        "Acquired Skype in 2011",
        "Initiated Azure cloud platform",
        "Tripled Microsoft's annual revenue"
      ]
    },
    {
      name: "Satya Nadella",
      role: "CEO",
      period: "2014-Present",
      description: "Satya Nadella took the helm as CEO in 2014 during a time when Microsoft needed a strategic refresh. He has since led a dramatic transformation of the company's culture and direction.",
      imageSrc: "https://picsum.photos/id/1074/600/800",
      achievements: [
        "Shifted focus to cloud computing and AI",
        "Expanded Microsoft Azure and Microsoft 365",
        "Acquired LinkedIn, GitHub, and Mojang",
        "Fostered cultural transformation with growth mindset",
        "Formed strategic partnership with OpenAI"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-zinc-900 min-h-screen py-8 px-4">
      {/* Breadcrumb */}
      <div className="container mx-auto mb-8">
        <Link href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
          <ChevronLeft size={16} className="mr-1" /> Back to Home
        </Link>
      </div>
      
      {/* Page header */}
      <div className="container mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Microsoft Leadership Through the Years
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
          Over five decades, Microsoft has been led by only three CEOs – Bill Gates, Steve Ballmer, and Satya Nadella – 
          each of whom left a distinct imprint on the company's direction and culture. 
          Their leadership not only steered Microsoft's business strategies but also shaped its vision and values.
        </p>
      </div>

      {/* Leaders section */}
      <div className="container mx-auto">
        <div className="space-y-12">
          {leaders.map((leader) => (
            <LeadershipCard
              key={leader.name}
              name={leader.name}
              role={leader.role}
              period={leader.period}
              description={leader.description}
              imageSrc={leader.imageSrc}
              achievements={leader.achievements}
            />
          ))}
        </div>
      </div>

      {/* Additional Leadership Context */}
      <div className="container mx-auto mt-16">
        <div className="bg-white dark:bg-zinc-900 shadow-sm border border-gray-200 dark:border-zinc-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Leadership Legacy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Each CEO brought unique strengths to Microsoft at different phases of the company's evolution. 
            Gates established Microsoft as a software powerhouse with technical vision and entrepreneurial drive. 
            Ballmer expanded Microsoft's reach into new markets and enterprise solutions, while Nadella 
            has transformed the company for the cloud and AI era with a focus on innovation and inclusivity.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Together, these three leaders guided Microsoft through five decades of technological revolution, 
            market challenges, and continuous reinvention. Their combined leadership has enabled Microsoft to 
            evolve from a small software startup to one of the world's most valuable and innovative technology companies.
          </p>
        </div>
      </div>
    </div>
  );
}