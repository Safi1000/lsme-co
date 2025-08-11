'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Clock, Zap, Globe, Train, Phone, Mail, Star } from 'lucide-react';
import MobileNav from '@/components/MobileNav';

export default function ElectronicsPage() {
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
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-20 md:h-28' : 'h-20 md:h-24'
          }`}>
            {/* Desktop Logo */}
            <div className={`hidden md:flex items-center space-x-4 group transition-transform duration-300 ${isScrolled ? 'scale-[0.975]' : 'scale-100'} origin-left`}>
              <Link href="/" className="flex items-center space-x-3 transition-transform duration-300 group-hover:scale-105 cursor-pointer">
                <div className="relative">
                  <Image src="/images/logo/lsme-logo.jpg" alt="LSME logo" width={80} height={80} className="h-20 w-20 object-contain animate-pulse" />
                </div>
                <div>
                  <span className="brand-font text-5xl font-normal text-gray-900 tracking-tight leading-none">LSME</span>
                  <div className="text-xs text-gray-500 font-medium">Engineering Services</div>
                </div>
              </Link>
            </div>

            {/* Mobile Navigation */}
            <MobileNav theme="cream" />

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

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-amber-700 to-orange-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-6 sm:space-y-8"
          >
            <Badge className="bg-white/20 text-white hover:bg-white/30 transition-all duration-300">
              <Star className="w-3 h-3 mr-1" />
              Ready to Engineer the Future?
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold px-4 sm:px-0">
              Ready to Start Your Project?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Partner with Saudi Arabia's leading engineering experts to build the future of technology together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                Start Your Engineering Project
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-amber-700 transition-all duration-300 transform hover:scale-105">
                Schedule Technical Consultation
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {[
                { icon: Clock, text: "24/7 Support Available" },
                { icon: Zap, text: "Rapid Response Team" },
                { icon: Globe, text: "Nationwide Coverage" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center space-x-3 text-white hover:text-gray-200 transition-colors duration-300 group cursor-pointer">
                  <item.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
        className="bg-gray-900 text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="space-y-4 sm:space-y-6 animate-fade-in-up sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Train className="h-8 w-8 sm:h-10 sm:w-10 text-amber-400 transition-colors duration-300 group-hover:text-amber-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold">LSME</span>
                  <div className="text-sm text-gray-400">Engineering Services</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Delivering electrical, electronics, and mechanical engineering excellence across Saudi Arabia.
              </p>
              <div className="flex space-x-4 sm:space-x-6 pt-2 sm:pt-4">
                <div className="bg-gray-800 p-2 sm:p-3 rounded-xl hover:bg-amber-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
                </div>
                <div className="bg-gray-800 p-2 sm:p-3 rounded-xl hover:bg-amber-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
                </div>
                <div className="bg-gray-800 p-2 sm:p-3 rounded-xl hover:bg-amber-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
                </div>
              </div>
            </div>

            {[
              {
                title: "Engineering Divisions",
                links: ["Electrical Division", "Electronics Division", "Mechanical Division", "Integrated Solutions", "Technical Support"],
                delay: "200ms"
              },
              {
                title: "Services",
                links: ["Power Systems Design", "Corrosion Protection", "Systems Engineering", "Asset Engineering", "System Integration", "Project Management"],
                delay: "400ms"
              },
              {
                title: "Company",
                links: ["About LSME", "Engineering Team", "Careers", "Quality Standards", "Contact Us"],
                delay: "600ms"
              }
            ].map((section, index) => (
              <div key={index} className="space-y-4 sm:space-y-6 animate-fade-in-up" style={{ animationDelay: section.delay }}>
                <h3 className="text-base sm:text-lg font-bold text-white">{section.title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm sm:text-base">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p className="text-sm sm:text-base">&copy; 2024 LSME Engineering Solutions. All rights reserved.</p>
                <p className="text-xs sm:text-sm mt-1">Supporting Saudi Arabia's Vision 2030</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
                <Link href="#" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</Link>
                <Link href="#" className="hover:text-amber-400 transition-colors duration-300">Terms of Service</Link>
                <Link href="#" className="hover:text-amber-400 transition-colors duration-300">ISO Certifications</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
