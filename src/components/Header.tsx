'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Bell, User, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800 sticky top-0 z-20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side - Search */}
        <div className="relative w-full max-w-md mr-4 hidden md:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="search"
            className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border-0 rounded-full py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            placeholder="Search Microsoft history..."
          />
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-600 dark:text-gray-300"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-600 dark:text-gray-300">
            <Bell size={20} />
          </button>

          <Link href="/profile" className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
              <User size={18} />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;