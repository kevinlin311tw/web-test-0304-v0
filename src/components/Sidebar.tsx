'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Menu, 
  History, 
  Users, 
  Lightbulb, 
  Award, 
  Code, 
  Globe, 
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const navItems = [
    { title: 'Timeline', icon: History, href: '/timeline' },
    { title: 'Leadership', icon: Users, href: '/leadership' },
    { title: 'Innovations', icon: Lightbulb, href: '/innovations' },
    { title: 'Achievements', icon: Award, href: '/achievements' },
    { title: 'Technologies', icon: Code, href: '/technologies' },
    { title: 'Global Impact', icon: Globe, href: '/impact' },
  ];

  return (
    <aside className={`${collapsed ? 'md:w-16' : 'md:w-64'} bg-white dark:bg-zinc-950 border-r border-gray-200 dark:border-zinc-800 transition-all duration-300 fixed md:sticky top-0 h-screen z-30 ${collapsed ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}`}>
      <div className="flex flex-col h-full">
        {/* Logo section */}
        <div className="p-4 border-b border-gray-200 dark:border-zinc-800 flex items-center justify-between">
          {!collapsed && (
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-sm"></div>
              </div>
              <span className="font-bold text-xl">Microsoft 50</span>
            </Link>
          )}
          {collapsed && (
            <Link href="/" className="mx-auto">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-sm"></div>
              </div>
            </Link>
          )}
          <button 
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 md:block hidden"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link 
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <item.icon size={20} className="text-gray-500 dark:text-gray-400" />
                  {!collapsed && (
                    <span className="ml-3 text-gray-700 dark:text-gray-200">{item.title}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <div className="fixed bottom-4 right-4 md:hidden z-40">
          <button 
            onClick={toggleSidebar}
            className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-200 dark:border-zinc-800 p-4">
          {!collapsed && (
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Celebrating 50 years of innovation
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;