'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MechanicalPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
      {/* Navigation Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 transition-transform duration-300 group-hover:scale-105 cursor-pointer">
              <div className="relative">
                <Image src="/images/logo/lsme-logo.jpg" alt="LSME logo" width={80} height={80} className="h-20 w-20 object-contain animate-pulse" />
              </div>
              <div>
                <span className="brand-font text-5xl font-normal text-gray-900 tracking-tight leading-none">LSME</span>
                <div className="text-xs text-gray-500 font-medium">Engineering Services</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className="relative text-gray-700 hover:text-amber-700 font-medium transition-all duration-300 group py-2"
                style={{ animationDelay: '0ms' }}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-700 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="relative text-gray-700 hover:text-amber-700 font-medium transition-all duration-300 py-2 flex items-center gap-1">
                  Services
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-700 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="py-2">
                    {[
                      { name: 'Electrical', href: '/services/electrical' },
                      { name: 'Electronics', href: '/services/electronics' },
                      { name: 'Mechanical', href: '/services/mechanical' },
                      { name: 'R&D', href: '/rd-services' },
                      { name: 'Supply Chain', href: '/services/supply-chain' }
                    ].map((service, index) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-all duration-200 transform hover:translate-x-1"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              {[
                { name: 'Projects', href: '/projects' },
                { name: 'About', href: '/about' },
                { name: 'Our Partners', href: '/our-partners' },
                { name: 'Our Team', href: '/our-team' },
                { name: 'Contact', href: '/contact' }
              ].map((item, index) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="relative text-gray-700 hover:text-amber-700 font-medium transition-all duration-300 group py-2"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-700 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>


          </div>
        </div>
      </motion.header>

      {/* Spacer under fixed header */}
      <div className="h-20" />

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center relative z-10 space-y-12"
        >
          {/* In Progress Text - Above Image */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent leading-tight animate-pulse"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(217, 119, 6, 0.4))',
            }}
          >
            In Progress...
          </motion.h1>

          {/* In Progress Images - Side by Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center gap-8 flex-wrap"
          >
            <Image
              src="/images/misc/in-progress.jpeg"
              alt="In Progress 1"
              width={400}
              height={400}
              className="w-56 h-56 lg:w-80 lg:h-80 object-contain animate-pulse rounded-2xl shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(217, 119, 6, 0.4))',
              }}
            />
            <Image
              src="/images/misc/in-progress-2.jpeg"
              alt="In Progress 2"
              width={400}
              height={400}
              className="w-56 h-56 lg:w-80 lg:h-80 object-contain animate-pulse rounded-2xl shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(217, 119, 6, 0.4))',
                animationDelay: '0.5s'
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
