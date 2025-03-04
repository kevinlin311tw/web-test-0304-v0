'use client';

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import InnovationCard from '@/components/InnovationCard';

export default function InnovationsPage() {
  const innovations = [
    {
      title: "BASIC Interpreter",
      description: "Microsoft's first product was the BASIC interpreter for the Altair 8800 microcomputer, creating the foundation for personal computing software.",
      imageSrc: "https://picsum.photos/id/0/800/400",
      iconColor: "blue",
      year: "1975",
      impact: [
        "Enabled programming on early personal computers",
        "Set Microsoft on the path to become a software company",
        "Made computing more accessible to hobbyists"
      ]
    },
    {
      title: "MS-DOS",
      description: "Microsoft's first operating system became the standard for IBM PCs and compatibles, establishing Microsoft as an OS leader.",
      imageSrc: "https://picsum.photos/id/2/800/400",
      iconColor: "amber",
      year: "1981",
      impact: [
        "Powered the first generation of IBM PCs",
        "Created a standard platform for software development",
        "Established Microsoft's operating system dominance"
      ]
    },
    {
      title: "Windows Operating System",
      description: "The graphical interface that revolutionized personal computing by making computers more accessible and user-friendly.",
      imageSrc: "https://picsum.photos/id/3/800/400",
      iconColor: "blue",
      year: "1985",
      impact: [
        "Made computing visual and intuitive for mainstream users",
        "Created the familiar windows, icons, menus interface paradigm",
        "Evolved to support over 1.6 billion devices globally"
      ]
    },
    {
      title: "Microsoft Office",
      description: "The productivity suite that transformed how people work, combining Word, Excel, PowerPoint and other applications.",
      imageSrc: "https://picsum.photos/id/4/800/400",
      iconColor: "green",
      year: "1989",
      impact: [
        "Set the standard for business productivity software",
        "Changed document creation, data analysis, and presentations",
        "Evolved into cloud-based Microsoft 365 with AI capabilities"
      ]
    },
    {
      title: "Internet Explorer",
      description: "Microsoft's web browser that helped popularize internet use in the 1990s, becoming the world's most used browser for many years.",
      imageSrc: "https://picsum.photos/id/5/800/400",
      iconColor: "blue",
      year: "1995",
      impact: [
        "Made web browsing accessible to millions of users",
        "Integrated web technologies into Windows",
        "Influenced web standards and development"
      ]
    },
    {
      title: "Xbox Gaming Platform",
      description: "Microsoft's entry into the gaming console market that grew into a major entertainment platform with services like Xbox Live.",
      imageSrc: "https://picsum.photos/id/6/800/400",
      iconColor: "green",
      year: "2001",
      impact: [
        "Established Microsoft as a major gaming industry player",
        "Pioneered online console gaming services with Xbox Live",
        "Created a platform for exclusive game titles and communities"
      ]
    },
    {
      title: "Microsoft .NET Framework",
      description: "A revolutionary software framework that enabled developers to build various applications with a consistent approach across platforms.",
      imageSrc: "https://picsum.photos/id/7/800/400",
      iconColor: "purple",
      year: "2002",
      impact: [
        "Created a unified development model for Windows applications",
        "Made programming more accessible with C#",
        "Eventually evolved into open-source, cross-platform .NET Core"
      ]
    },
    {
      title: "Microsoft Azure",
      description: "Microsoft's cloud computing platform that provides a wide range of services for building, deploying, and managing applications.",
      imageSrc: "https://picsum.photos/id/8/800/400",
      iconColor: "blue",
      year: "2010",
      impact: [
        "Transformed Microsoft into a cloud-first company",
        "Enabled organizations to scale computing resources on demand",
        "Created an ecosystem for AI, IoT, and enterprise solutions"
      ]
    },
    {
      title: "Kinect Sensor",
      description: "A revolutionary motion sensing device that allowed users to interact with games and applications using body movements and voice.",
      imageSrc: "https://picsum.photos/id/9/800/400",
      iconColor: "green",
      year: "2010",
      impact: [
        "Became the fastest-selling consumer electronics device",
        "Pioneered natural user interfaces and computer vision",
        "Influenced research in healthcare, robotics, and accessibility"
      ]
    },
    {
      title: "Microsoft Surface",
      description: "Microsoft's line of touchscreen PCs that blend laptop and tablet functionality with innovative form factors and accessories.",
      imageSrc: "https://picsum.photos/id/10/800/400",
      iconColor: "teal",
      year: "2012",
      impact: [
        "Redefined the 2-in-1 device category",
        "Inspired new approaches to hardware design in the PC industry",
        "Demonstrated Microsoft's capabilities as a hardware manufacturer"
      ]
    },
    {
      title: "HoloLens",
      description: "A mixed reality headset that overlays 3D digital content in the real world, creating new possibilities for work, education, and entertainment.",
      imageSrc: "https://picsum.photos/id/11/800/400",
      iconColor: "purple",
      year: "2015",
      impact: [
        "Pioneered practical mixed reality applications",
        "Created new tools for industries like manufacturing and healthcare",
        "Advanced spatial computing and holographic technology"
      ]
    },
    {
      title: "Microsoft AI Platform",
      description: "Microsoft's comprehensive AI solutions that span infrastructure, tools, frameworks, and services for organizations to build intelligent applications.",
      imageSrc: "https://picsum.photos/id/12/800/400",
      iconColor: "blue",
      year: "2016",
      impact: [
        "Democratized access to artificial intelligence technologies",
        "Enabled organizations to build custom AI solutions",
        "Integrated intelligence across Microsoft's product lineup"
      ]
    },
    {
      title: "Microsoft Copilot",
      description: "AI-powered assistants integrated across Microsoft's products that help users write, code, analyze data, and create content.",
      imageSrc: "https://picsum.photos/id/13/800/400",
      iconColor: "green",
      year: "2023",
      impact: [
        "Transformed productivity with generative AI assistance",
        "Made coding more accessible with AI pair programming",
        "Created new paradigm for human-computer interaction"
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
          Technological Innovations
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
          Through continual technological advancements – spanning personal computing software, gaming, 
          cloud services, and AI – Microsoft has repeatedly reshaped the tech landscape over the past 50 years.
        </p>
      </div>
      
      {/* Featured innovation */}
      <div className="container mx-auto mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden shadow-lg">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12 text-white">
              <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4">
                1975-2025
              </div>
              <h2 className="text-3xl font-bold mb-4">50 Years of Innovation</h2>
              <p className="mb-6 text-blue-100">
                Microsoft has amassed over 107,000 patents globally, with its R&D arm (Microsoft Research, established 1991) 
                driving breakthroughs in areas like speech recognition, computer vision, and augmented reality.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">AI & Machine Learning</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Cloud Computing</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Operating Systems</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Productivity</span>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1/800/600')] opacity-20 bg-cover bg-center"></div>
              <div className="h-full bg-gradient-to-r from-blue-800/80 to-transparent p-8 lg:p-12 relative z-10 flex items-center">
                <div className="text-white">
                  <blockquote className="text-xl italic mb-4">
                    "Microsoft's mission is to empower every person and every organization on the planet to achieve more."
                  </blockquote>
                  <div className="font-medium">— Satya Nadella, CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Innovations grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {innovations.map((innovation) => (
            <InnovationCard
              key={innovation.title}
              title={innovation.title}
              description={innovation.description}
              imageSrc={innovation.imageSrc}
              iconColor={innovation.iconColor}
              year={innovation.year}
              impact={innovation.impact}
            />
          ))}
        </div>
      </div>
      
      {/* Innovation approach */}
      <div className="container mx-auto mt-16">
        <div className="bg-white dark:bg-zinc-900 shadow-sm border border-gray-200 dark:border-zinc-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Microsoft's Approach to Innovation
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Microsoft's innovation philosophy has evolved over its 50-year history. From its early days focused on 
            personal computing software to today's cloud-first, AI-focused approach, the company has continuously 
            reinvented itself to stay at the forefront of technology. Microsoft Research, established in 1991, has been 
            instrumental in driving fundamental advances in computing that later appear in products.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Today, Microsoft's innovation strategy embraces open-source collaboration, partnerships with startups and research institutions, 
            and significant investment in emerging technologies like quantum computing, mixed reality, and sustainable technology solutions.
          </p>
        </div>
      </div>
    </div>
  );
}