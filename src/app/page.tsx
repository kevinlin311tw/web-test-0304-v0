'use client';

import Image from "next/image";
import Link from "next/link";
import TimelineCard from "@/components/TimelineCard";
import { ArrowRight, Calendar, Award, Cpu, Globe, ChevronDown } from "lucide-react";

export default function Home() {
  const milestones = [
    {
      year: "1975",
      title: "Microsoft Founded",
      description: "Bill Gates and Paul Allen found Microsoft to develop and sell BASIC interpreters for the Altair 8800.",
      imageSrc: "https://picsum.photos/id/0/800/400"
    },
    {
      year: "1985",
      title: "Windows 1.0 Released",
      description: "Microsoft releases Windows 1.0, bringing graphical user interface to mainstream PCs.",
      imageSrc: "https://picsum.photos/id/2/800/400"
    },
    {
      year: "2001",
      title: "Xbox Launch",
      description: "Microsoft enters the gaming console market with the Xbox, competing with Sony and Nintendo.",
      imageSrc: "https://picsum.photos/id/3/800/400"
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-zinc-900">
      {/* Hero section */}
      <section className="relative bg-blue-600 dark:bg-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-blue-500 to-purple-600 z-0"></div>
        <div className="absolute inset-0 z-10 bg-[url('https://picsum.photos/id/1/1200/600')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Celebrating 50 Years of Microsoft
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Five decades of innovation that changed the world
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/timeline" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium flex items-center justify-center"
              >
                Explore Timeline <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                href="/leadership" 
                className="bg-transparent border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium flex items-center justify-center"
              >
                Meet the Leaders
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <button className="bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 rounded-full p-2 -mb-5 shadow-lg">
            <ChevronDown size={24} />
          </button>
        </div>
      </section>

      {/* Key milestones section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Key Milestones
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From its humble beginnings in 1975 to becoming a global technology leader, 
            Microsoft has continuously reshaped the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {milestones.map((milestone) => (
            <TimelineCard
              key={milestone.year}
              year={milestone.year}
              title={milestone.title}
              description={milestone.description}
              imageSrc={milestone.imageSrc}
            />
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/timeline" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            View full timeline <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
      </section>

      {/* Key areas section */}
      <section className="bg-white dark:bg-zinc-950 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              50 Years of Transforming the World
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Microsoft's impact spans multiple domains, from personal computing to cloud technology and artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-lg border border-gray-200 dark:border-zinc-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Leadership Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                From Gates to Nadella, the visionaries who shaped Microsoft's trajectory over five decades.
              </p>
              <Link 
                href="/leadership" 
                className="text-blue-600 dark:text-blue-400 flex items-center text-sm font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-lg border border-gray-200 dark:border-zinc-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Major Achievements
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Groundbreaking products and services that redefined computing and digital experiences.
              </p>
              <Link 
                href="/achievements" 
                className="text-blue-600 dark:text-blue-400 flex items-center text-sm font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-lg border border-gray-200 dark:border-zinc-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Technological Evolution
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                From DOS to AI, the technological innovations that powered Microsoft's success.
              </p>
              <Link 
                href="/technologies" 
                className="text-blue-600 dark:text-blue-400 flex items-center text-sm font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-lg border border-gray-200 dark:border-zinc-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Global Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                How Microsoft has transformed businesses, education, and communities worldwide.
              </p>
              <Link 
                href="/impact" 
                className="text-blue-600 dark:text-blue-400 flex items-center text-sm font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50</div>
            <div className="text-gray-700 dark:text-gray-300">Years of Innovation</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">107K+</div>
            <div className="text-gray-700 dark:text-gray-300">Global Patents</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1.6B+</div>
            <div className="text-gray-700 dark:text-gray-300">Active Windows Devices</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3</div>
            <div className="text-gray-700 dark:text-gray-300">Visionary CEOs</div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Celebration</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Explore the complete timeline, leadership stories, and the innovations that 
            have shaped the technology landscape for half a century.
          </p>
          <Link 
            href="/timeline" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium inline-block"
          >
            Discover Microsoft's Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
