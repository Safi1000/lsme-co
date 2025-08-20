'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Mail, Phone, Star, ChevronRight, Globe, Building, MapPin } from 'lucide-react';
import MobileNav from '@/components/MobileNav';
import { handleEmailClick } from '@/lib/utils';

export default function OurTeamPage() {
  // Set theme on component mount
  useEffect(() => {
    // Force remove any existing theme classes
    document.documentElement.classList.remove('page-blue', 'page-green')
    document.body.classList.remove('page-blue', 'page-green')
    
    // Add cream theme (same as other pages)
    document.documentElement.classList.add('page-cream')
    document.body.classList.add('page-cream')
    
    return () => {
      document.documentElement.classList.remove('page-cream')
      document.body.classList.remove('page-cream')
    }
  }, [])

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Function to detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Mohammad Al-Otaibi",
      position: "Chairman",
      department: "Leadership",
      bio: "Leading LSME with over 15 years of experience in engineering solutions and strategic partnerships across the Kingdom of Saudi Arabia.",
      specialties: ["Strategic Planning", "Business Development", "Railway Engineering"],
      email: "m.otaibi@lsmeco.com"
    },
    {
      id: 2,
      name: "Yousuf Khan",
      position: "Chief Executive Officer",
      department: "R&D",
      bio: "Driving innovation in electrical and electronic systems with a Ph.D. in Electrical Engineering and expertise in locomotive technology.",
      specialties: ["Electrical Systems", "Innovation", "Research"],
      email: "yousuf@lsmeco.com"
    },
    {
      id: 4,
      name: "Nasser Al-Rashidi",
      position: "Director",
      department: "Electrical",
      bio: "Specialist in power systems and electrical design with focus on railway infrastructure and locomotive systems.",
      specialties: ["Power Systems", "Electrical Design", "Railway Systems"],
      email: "nasser@lsmeco.com"
    },
    {
      id: 5,
      name: "Emad Wasif Hamadan",
      position: "General Manager",
      department: "Mechanical",
      bio: "Expert in mechanical system design and optimization with focus on locomotive components and infrastructure mechanical systems.",
      specialties: ["Mechanical Design", "System Optimization", "CAD/CAM"],
      email: "emad@lsmeco.com"
    },
    {
      id: 3,
      name: "Syed Waqar",
      position: "Technical Director",
      department: "Engineering",
      bio: "Overseeing all engineering projects with extensive experience in mechanical and electrical systems integration.",
      specialties: ["Project Management", "Systems Integration", "Quality Assurance"],
      email: "syedwaqar@lsmeco.com"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-white overflow-x-hidden page-cream"
    >
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, boxShadow: isScrolled ? '0 8px 30px rgba(0,0,0,0.06)' : '0 0 0 rgba(0,0,0,0)' }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 border-b border-white/20 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg shadow-xl border-amber-200/30' 
            : 'bg-white/70 backdrop-blur-md shadow-lg'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-20 md:h-28' : 'h-20 md:h-24'
          }`}>
            {/* Desktop Logo */}
            <div className={`hidden md:flex items-center space-x-4 group transition-transform duration-300 ${isScrolled ? 'scale-[0.975]' : 'scale-100'} origin-left`}>
              <Link href="/" className="flex items-center space-x-3 transition-transform duration-300 group-hover:scale-105 cursor-pointer">
                <motion.div 
                  className="relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Image src="/images/logo/lsme-logo.jpg" alt="LSME logo" width={80} height={80} className="h-20 w-20 object-contain animate-pulse" />
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-amber-500/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.2, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
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
                { name: 'About LSME', href: '/about' },
                { name: 'Our Partners', href: '/our-partners' },
                { name: 'Our Team', href: '/our-team' },
                { name: 'Contact', href: '/contact' }
              ].map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 group py-2 ${
                    item.name === 'Our Team' 
                      ? 'text-amber-700' 
                      : 'text-gray-700 hover:text-amber-700'
                  }`}
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-700 to-orange-600 transition-all duration-300 ${
                    item.name === 'Our Team' 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
        {/* Animated bottom runner line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black border-black border-b-2 shadow-[0_0_10px_rgba(0,0,0,0.5)] animate-pulse"></div>
      </motion.header>

      {/* Spacer under fixed header */}
      <div className="h-20 md:h-24" />

      {/* Hero Section */}
      <motion.section 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-12 lg:py-20 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-200/30 to-amber-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 lg:space-y-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
            >
              <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 hover:from-amber-200 hover:to-orange-200 transition-all duration-300 transform hover:scale-105 shadow-md">
                <Users className="w-3 h-3 mr-1" />
                Leadership & Expertise
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="hero-text font-bold text-gray-900 leading-tight max-w-5xl mx-auto"
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl">Meet Our Expert</span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Engineering Team</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
            >
              Our dedicated team of engineering professionals brings decades of combined experience in electrical, electronics, and mechanical engineering to deliver exceptional solutions.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Team Members Section */}
      <motion.section 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-16 sm:py-20 lg:py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="space-y-8 sm:space-y-10 lg:space-y-12">
             {/* First Row - 3 Cards */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8">
               {teamMembers.slice(0, 3).map((member, index) => (
                                   <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                    whileHover={{ y: -8, scale: 1.02 }}
                                          className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 group relative h-[160px] sm:h-[180px] lg:h-[200px] w-full"
                  >
                                          <div className="p-4 sm:p-5 lg:p-6 h-full flex flex-col">
                        <div className="flex flex-col items-center text-center space-y-1 sm:space-y-1 lg:space-y-1">
                          {/* Member Info */}
                          <div className="flex-1 space-y-0.5 sm:space-y-1 lg:space-y-1">
                            <h3 className="text-lg sm:text-base lg:text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300 leading-tight">{member.name}</h3>
                            <p className="text-amber-600 font-semibold text-sm sm:text-sm lg:text-base">{member.position}</p>
                          </div>
                        </div>
                        
                        {/* Contact - Email with reduced spacing */}
                        <div className="flex justify-center mt-2 sm:mt-3 lg:mt-4">
                        <motion.button
                          onClick={() => handleEmailClick(member.email)}
                          className="flex items-center space-x-1.5 sm:space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 shadow-md border border-amber-100 transition-all duration-300 group-hover:bg-amber-50 group-hover:shadow-lg cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 transition-transform duration-300 group-hover:scale-110" />
                          </motion.div>
                          <span className="text-sm sm:text-xs lg:text-sm text-gray-600 font-medium transition-colors duration-300 group-hover:text-amber-700">
                            {member.email}
                          </span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
               ))}
             </div>
             
                           {/* Second Row - 2 Cards Centered */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-8 w-full max-w-4xl">
                  {teamMembers.slice(3, 5).map((member, index) => (
                   <motion.div
                     key={member.id}
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: (index + 3) * 0.1, ease: "easeOut" }}
                     whileHover={{ y: -8, scale: 1.02 }}
                     className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 group relative h-[160px] sm:h-[180px] lg:h-[200px] w-full"
                   >
                     <div className="p-4 sm:p-5 lg:p-6 h-full flex flex-col">
                       <div className="flex flex-col items-center text-center space-y-1 sm:space-y-1 lg:space-y-1">
                         {/* Member Info */}
                         <div className="flex-1 space-y-0.5 sm:space-y-1 lg:space-y-1">
                           <h3 className="text-lg sm:text-base lg:text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300 leading-tight">{member.name}</h3>
                           <p className="text-amber-600 font-semibold text-sm sm:text-sm lg:text-base">{member.position}</p>
                         </div>
                       </div>
                       
                       {/* Contact - Email with reduced spacing */}
                       <div className="flex justify-center mt-2 sm:mt-3 lg:mt-4">
                         <motion.button
                           onClick={() => handleEmailClick(member.email)}
                           className="flex items-center space-x-1.5 sm:space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 shadow-md border border-amber-100 transition-all duration-300 group-hover:bg-amber-50 group-hover:shadow-lg cursor-pointer"
                           whileHover={{ scale: 1.05 }}
                         >
                           <motion.div
                             whileHover={{ scale: 1.1 }}
                             whileTap={{ scale: 0.95 }}
                           >
                             <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 transition-transform duration-300 group-hover:scale-110" />
                           </motion.div>
                           <span className="text-sm sm:text-xs lg:text-sm text-gray-600 font-medium transition-colors duration-300 group-hover:text-amber-700">
                             {member.email}
                           </span>
                         </motion.button>
                       </div>
                     </div>
                   </motion.div>
                 ))}
               </div>
             </div>
           </div>
        </div>
      </motion.section>

      {/* CTA Section - EXACT SAME AS OTHER PAGES */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-amber-700 via-orange-700 to-amber-800 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-700/90 to-orange-700/90"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 sm:space-y-8 lg:space-y-10 animate-fade-in-up">
            <div className="space-y-4 sm:space-y-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 transition-all duration-300">
                <Star className="w-3 h-3 mr-1" />
                Ready to Engineer the Future?
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Partner with Saudi Arabia's
                <br />
                <span className="text-amber-200">Engineering Leader, LSME</span>
              </h2>
              <p className="text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
                Connect with our electrical, electronics, and mechanical divisions to build the future of technology together.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-amber-700 transition-all duration-300 transform hover:scale-105">
                  Schedule Technical Consultation
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12">
              {[
                { icon: Phone, text: "24/7 Engineering Support" },
                { icon: Mail, text: "Expert Technical Consultation" },
                { icon: Globe, text: "International Standards" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center space-x-3 text-white/90 hover:text-white transition-colors duration-300 group cursor-pointer">
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

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
                  <Image src="/images/logo/lsme-logo.jpg" alt="LSME logo" width={40} height={40} className="h-10 w-10 object-contain" />
                </div>
                <div>
                  <span className="text-2xl font-bold">LSME</span>
                  <div className="text-sm text-gray-400">Engineering Services</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Delivering electrical, electronics, and mechanical engineering excellence across Saudi Arabia.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Building 2148-8267, Daba Street, King Faisal District, 13215, Riyadh, Saudi Arabia
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-amber-400 flex-shrink-0" />
                  <p className="text-gray-400 text-sm">+966 13 8060977</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-amber-400 flex-shrink-0" />
                  <button 
                    onClick={() => handleEmailClick("info@lsmeco.com")}
                    className="text-gray-400 text-sm hover:text-amber-400 transition-colors duration-300 cursor-pointer"
                  >
                    info@lsmeco.com
                  </button>
                </div>
              </div>
            </div>

            {[
              {
                title: "Engineering Divisions",
                links: [
                  { text: "Electrical Division", href: "/services/electrical" },
                  { text: "Electronics Division", href: "/services/electronics" },
                  { text: "Mechanical Division", href: "/services/mechanical" }
                ],
                delay: "200ms"
              },
              {
                title: "Company",
                links: [
                  { text: "About LSME", href: "/about" },
                  { text: "Engineering Team", href: "/our-team" },
                  { text: "Our Partners", href: "/our-partners" },
                  { text: "Contact Us", href: "/contact" }
                ],
                delay: "400ms"
              }
            ].map((section, index) => (
              <div key={index} className="space-y-6 animate-fade-in-up" style={{ animationDelay: section.delay }}>
                <h3 className="text-lg font-bold text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {typeof link === 'string' ? (
                        <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                          {link}
                        </Link>
                      ) : (
                        <Link href={link.href} className="text-gray-400 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                          {link.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* ISO Certification Section */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
              <h3 className="text-lg font-bold text-white">Certifications</h3>
              <div className="flex justify-start">
                <Image 
                  src="/images/iso/iso.png" 
                  alt="ISO Certification" 
                  width={240} 
                  height={240} 
                  className="h-48 w-48 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300 -ml-4"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p>&copy; 2024 LSME Engineering Solutions. All rights reserved.</p>
                <p className="text-sm mt-1">Supporting Saudi Arabia's Vision 2030</p>
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="#" className="hover:text-amber-400 transition-colors duration-300">ISO Certifications</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
} 