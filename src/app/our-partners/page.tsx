'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Award, Globe, ArrowRight, CheckCircle, Train, Phone, Mail } from 'lucide-react';

export default function OurPartnersPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const partners = [
    {
      id: 1,
      name: "ELCON ELECTRICAL CONTROLS",
      logoPlaceholder: "/images/partners/logo1.png", // Logo path
      introduction: "An engineering and design company established in 1952 to work in locomotive industry for the following service. LSME is an authorized representative of ELCON, providing its products and services to the region.",
      keyFeatures: [
        "Traction Motor Management and Control Modules",
        "EM2000 and Other Retrofit",
        "High Voltage & AC Cabinets"
      ],
      establishedYear: "1952"
    },
    {
      id: 2,
      name: "Deutsche Bahn (DB)", 
      logoPlaceholder: "/images/partners/logo2.png", // Logo path
      introduction: "Deutsche Bahn (DB) is Germany's national railway company and one of the world's leading providers of mobility and logistics services. It operates an extensive rail network across Europe, offering both passenger and freight transport solutions. LSME has signed a Memorandum of Understanding (MoU) with Deutsche Bahn (DB) to strengthen collaboration and explore joint opportunities in the railway sector.",
      keyFeatures: [
        "Traction technology and Battery technology",
        "Diagnosis and Power supply",
        "Brake, vehicle dynamics, tilting systems",
        "Corrosion and fire protection"
      ],
      establishedYear: "1994"
    },
    {
      id: 3,
      name: "Semmco",
      logoPlaceholder: "/images/partners/logo3.png", // Logo path
      introduction: "Semmco is a UK‑based global designer and manufacturer of high‑quality access platforms and ground support equipment for aviation, rail, helicopter, and vehicle maintenance. Founded in 1993, Semmco operates globally—including in the UK, USA, and Middle East. LSME is an authorized representative of SEMMCO, offering its innovative engineering solutions and equipment to clients in the region.",
      keyFeatures: [
        "Rail maintenance access platforms",
        "Mobile and fixed gantry systems",
        "Side Access Platforms",
        "Roof Access Platforms"
      ],
      establishedYear: "1993"
    }
  ];

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

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 hover:from-amber-200 hover:to-orange-200 transition-all duration-300 transform hover:scale-105 shadow-md mb-6">
                <Users className="w-3 h-3 mr-1" />
                Strategic Partnerships
              </Badge>
              <h1 className="hero-text font-bold text-gray-900 leading-tight">
                <span className="text-3xl lg:text-4xl">Our Trusted</span>
                <br />
                <span className="text-5xl lg:text-6xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Partners</span>
              </h1>
              <p className="hero-subtitle text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6">
                Building excellence through strategic partnerships. We collaborate with industry-leading companies to deliver comprehensive solutions and drive innovation across engineering disciplines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                className={`bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  {/* Logo Section */}
                  <div className={`p-8 lg:p-12 flex items-center justify-center ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}>
                    <div className="text-center space-y-6">
                      {/* Partner Logo */}
                      <Image
                        src={partner.logoPlaceholder}
                        alt={`${partner.name} logo`}
                        width={256}
                        height={256}
                        className="w-48 h-48 lg:w-64 lg:h-64 mx-auto object-contain"
                      />
                      
                      {/* Company Info */}
                      <div className="space-y-2">
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><strong>Established:</strong> {partner.establishedYear}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-6">
                      {/* Partner Name */}
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                          {partner.name}
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-amber-700 to-orange-600 rounded-full"></div>
                      </div>

                      {/* Introduction */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                          <Star className="w-5 h-5 mr-2 text-amber-700" />
                          About Our Partner
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                          {partner.introduction}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                          <Award className="w-5 h-5 mr-2 text-amber-700" />
                          Key Capabilities
                        </h3>
                        <div className="grid gap-3">
                          {partner.keyFeatures.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                                {feature}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <Button size="lg" className="bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                          Learn More About Partnership
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-amber-700 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why We Choose Strategic Partnerships
            </h2>
            <p className="text-lg lg:text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
              Our partnerships enable us to deliver comprehensive solutions, leverage cutting-edge technologies, and provide unmatched value to our clients across the Kingdom of Saudi Arabia.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global Expertise",
                  description: "Access to international best practices and advanced technologies"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Quality Excellence",
                  description: "Combined expertise ensures the highest standards of delivery"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Collaborative Innovation",
                  description: "Joint research and development for breakthrough solutions"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-amber-200 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-amber-100 leading-relaxed">{benefit.description}</p>
                </motion.div>
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
        className="bg-gray-900 text-white py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Train className="h-10 w-10 text-amber-400 transition-colors duration-300 group-hover:text-amber-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold">LSME</span>
                  <div className="text-sm text-gray-400">Engineering Services</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Delivering electrical, electronics, and mechanical engineering excellence across Saudi Arabia.
              </p>
              <div className="flex space-x-6 pt-4">
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-amber-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Phone className="h-5 w-5 text-amber-400" />
                </div>
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-amber-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Mail className="h-5 w-5 text-amber-400" />
                </div>
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-amber-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Globe className="h-5 w-5 text-amber-400" />
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
              <div key={index} className="space-y-6 animate-fade-in-up" style={{ animationDelay: section.delay }}>
                <h3 className="text-lg font-bold text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p>&copy; 2024 LSME Engineering Solutions. All rights reserved.</p>
                <p className="text-sm mt-1">Supporting Saudi Arabia's Vision 2030</p>
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
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
