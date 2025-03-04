'use client';

import { useState } from 'react';
import Link from 'next/link';
import TimelineCard from '@/components/TimelineCard';
import { ChevronLeft, Filter, ChevronDown } from 'lucide-react';

export default function TimelinePage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const timelineEvents = [
    {
      year: "1975",
      title: "Microsoft Founded",
      description: "Bill Gates and Paul Allen found Microsoft to develop and sell BASIC interpreters for the Altair 8800 microcomputer.",
      imageSrc: "https://picsum.photos/id/0/800/400",
      category: "founding"
    },
    {
      year: "1980",
      title: "Partnership with IBM",
      description: "Microsoft secures a deal to provide the operating system for IBM's personal computer, acquiring an existing system and reshaping it into MS-DOS.",
      imageSrc: "https://picsum.photos/id/48/800/400",
      category: "partnership"
    },
    {
      year: "1985",
      title: "Windows 1.0 Released",
      description: "Microsoft introduces Windows 1.0, bringing a graphical user interface to mainstream PCs and making computing more accessible.",
      imageSrc: "https://picsum.photos/id/2/800/400",
      category: "product"
    },
    {
      year: "1989",
      title: "Office Suite Debut",
      description: "Microsoft bundles Word, Excel, and PowerPoint together for the first time as the Office suite, setting the standard for productivity software.",
      imageSrc: "https://picsum.photos/id/180/800/400",
      category: "product"
    },
    {
      year: "1990",
      title: "Windows 3.0 Launch",
      description: "Windows 3.0 is released, becoming the first widely successful version of Windows with significantly improved capabilities.",
      imageSrc: "https://picsum.photos/id/60/800/400",
      category: "product"
    },
    {
      year: "1991",
      title: "Microsoft Research Established",
      description: "Microsoft creates its research division, Microsoft Research, to drive breakthroughs in computer science and software innovation.",
      imageSrc: "https://picsum.photos/id/20/800/400",
      category: "innovation"
    },
    {
      year: "1995",
      title: "Windows 95 Launch",
      description: "Windows 95 is released with the Start menu and taskbar, featuring a massive marketing campaign and becoming a cultural phenomenon.",
      imageSrc: "https://picsum.photos/id/100/800/400",
      category: "product"
    },
    {
      year: "2001",
      title: "Xbox Launch",
      description: "Microsoft enters the gaming console market with the Xbox, competing with Sony's PlayStation and Nintendo's systems.",
      imageSrc: "https://picsum.photos/id/3/800/400",
      category: "product"
    },
    {
      year: "2001",
      title: "Windows XP Released",
      description: "Windows XP is released, becoming one of Microsoft's most popular and long-lasting operating systems.",
      imageSrc: "https://picsum.photos/id/4/800/400",
      category: "product"
    },
    {
      year: "2010",
      title: "Azure Cloud Platform",
      description: "Microsoft Azure is made generally available as Microsoft's cloud computing service, competing with Amazon Web Services.",
      imageSrc: "https://picsum.photos/id/25/800/400",
      category: "product"
    },
    {
      year: "2010",
      title: "Kinect Release",
      description: "Microsoft launches Kinect for Xbox 360, a revolutionary motion-sensing device that became the fastest-selling consumer electronics device.",
      imageSrc: "https://picsum.photos/id/26/800/400",
      category: "innovation"
    },
    {
      year: "2011",
      title: "Skype Acquisition",
      description: "Microsoft acquires Skype for $8.5 billion, entering the online communications space in a major way.",
      imageSrc: "https://picsum.photos/id/96/800/400",
      category: "acquisition"
    },
    {
      year: "2012",
      title: "Surface Launch",
      description: "Microsoft introduces the Surface line of tablet computers, blending hardware and software in a new approach to personal computing.",
      imageSrc: "https://picsum.photos/id/119/800/400",
      category: "product"
    },
    {
      year: "2014",
      title: "Satya Nadella becomes CEO",
      description: "Satya Nadella takes over as CEO, beginning a transformation of Microsoft's culture and strategic direction.",
      imageSrc: "https://picsum.photos/id/1005/800/400",
      category: "leadership"
    },
    {
      year: "2016",
      title: "LinkedIn Acquisition",
      description: "Microsoft acquires LinkedIn for $26.2 billion, the largest acquisition in its history at that time.",
      imageSrc: "https://picsum.photos/id/175/800/400",
      category: "acquisition"
    },
    {
      year: "2018",
      title: "GitHub Acquisition",
      description: "Microsoft acquires GitHub for $7.5 billion, embracing open-source software development and developer communities.",
      imageSrc: "https://picsum.photos/id/28/800/400",
      category: "acquisition"
    },
    {
      year: "2020",
      title: "Carbon Negative Pledge",
      description: "Microsoft pledges to become carbon negative by 2030 and to remove all historical carbon emissions by 2050.",
      imageSrc: "https://picsum.photos/id/102/800/400",
      category: "initiative"
    },
    {
      year: "2023",
      title: "OpenAI Partnership",
      description: "Microsoft deepens its partnership with OpenAI, integrating cutting-edge AI like GPT-4 across its products and services.",
      imageSrc: "https://picsum.photos/id/142/800/400",
      category: "partnership"
    }
  ];
  
  const filterOptions = [
    { id: 'all', label: 'All Events' },
    { id: 'product', label: 'Products' },
    { id: 'acquisition', label: 'Acquisitions' },
    { id: 'innovation', label: 'Innovations' },
    { id: 'partnership', label: 'Partnerships' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'founding', label: 'Founding' },
    { id: 'initiative', label: 'Initiatives' }
  ];
  
  const filteredEvents = activeFilter === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.category === activeFilter);
  
  return (
    <div className="bg-gray-50 dark:bg-zinc-900 min-h-screen py-8 px-4">
      {/* Breadcrumb */}
      <div className="container mx-auto mb-8">
        <Link href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
          <ChevronLeft size={16} className="mr-1" /> Back to Home
        </Link>
      </div>
      
      {/* Page header */}
      <div className="container mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          50 Years of Microsoft: A Timeline
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
          From its humble beginnings in 1975 to becoming a global technology leader,
          explore the key milestones that have defined Microsoft's journey over five decades.
        </p>
      </div>
      
      {/* Filter section */}
      <div className="container mx-auto mb-12">
        <div className="bg-white dark:bg-zinc-950 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-800">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center">
              <Filter size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-lg font-semibold">Filter Timeline</h2>
            </div>
            
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full sm:w-auto bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg px-4 py-2 text-left flex items-center justify-between"
              >
                {filterOptions.find(option => option.id === activeFilter)?.label}
                <ChevronDown size={18} className="ml-2" />
              </button>
              
              {isFilterOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-lg">
                  {filterOptions.map(option => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setActiveFilter(option.id);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 ${
                        activeFilter === option.id ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : ''
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Timeline grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredEvents.map((event, index) => (
            <TimelineCard
              key={`${event.year}-${index}`}
              year={event.year}
              title={event.title}
              description={event.description}
              imageSrc={event.imageSrc}
            />
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No events found for this filter. Try another category.</p>
          </div>
        )}
      </div>
      
      {/* Footer note */}
      <div className="container mx-auto mt-16">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-lg p-4">
          <p className="text-sm text-blue-800 dark:text-blue-300 text-center">
            This timeline highlights select key moments in Microsoft's 50-year history. 
            Many more innovations, products, and milestones have shaped the company's journey.
          </p>
        </div>
      </div>
    </div>
  );
}