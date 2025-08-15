'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, ChevronRight, Star, Award, Globe, Target, Heart, Lightbulb, Users, Calendar, Building } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import MobileNav from "@/components/MobileNav"
import { motion } from "framer-motion"

export default function AboutPage() {
  useEffect(() => {
    // Force remove any existing theme classes
    document.documentElement.classList.remove('page-blue', 'page-green')
    document.body.classList.remove('page-blue', 'page-green')
    
    // Add cream theme (same as homepage)
    document.documentElement.classList.add('page-cream')
    document.body.classList.add('page-cream')
    
    return () => {
      document.documentElement.classList.remove('page-cream')
      document.body.classList.remove('page-cream')
    }
  }, [])

  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
                  <div className="text-xs text-gray-500 font-medium">Engineering Solutions</div>
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
                
                {/* Dropdown Menu */}
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
                  className={`relative font-medium transition-all duration-300 group py-2 ${
                    item.name === 'About' 
                      ? 'text-amber-700' 
                      : 'text-gray-700 hover:text-amber-700'
                  }`}
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-700 to-orange-600 transition-all duration-300 ${
                    item.name === 'About' 
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
                <Building className="w-3 h-3 mr-1" />
                About LSME
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="hero-text font-bold text-gray-900 leading-tight max-w-5xl mx-auto"
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl">Shaping Saudi Arabia's</span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Engineering Future</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
            >
              Since 2009, LSME has been at the forefront of engineering innovation in Saudi Arabia, delivering world-class solutions across electrical, electronics, and mechanical engineering.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Company Overview Section */}
      <motion.section 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16"
            >
              <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800">
                <Heart className="w-3 h-3 mr-1" />
                Our Story
              </Badge>
              <h2 className="font-bold text-gray-900 leading-tight">
                <span className="text-2xl sm:text-3xl lg:text-4xl">Building Tomorrow's</span>
                <br />
                <span className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Infrastructure Today</span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="prose prose-lg prose-gray max-w-none"
            >
              <div className="space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-gray-700">
                <p>
                  Founded in 2009, LSME Engineering Solutions began as a vision to transform Saudi Arabia's engineering landscape. What started as a small team of passionate engineers has grown into the Kingdom's leading provider of comprehensive engineering services, supporting Vision 2030's ambitious infrastructure goals.
                </p>
                
                <p>
                  At LSME, we specialize in three core engineering disciplines: <strong>Electrical Engineering</strong>, <strong>Electronics Engineering</strong>, and <strong>Mechanical Engineering</strong>. Our integrated approach allows us to deliver complete solutions that meet the complex demands of modern infrastructure projects.
                </p>
                
                <p>
                  We pride ourselves on our unique capability to develop retrofits through reverse engineering, enabling us to extend the life of existing systems while improving their performance and efficiency. This expertise has made us a trusted partner for government entities, private corporations, and international organizations operating in the Kingdom.
                </p>
                
                <p>
                  Our commitment extends beyond technical excellence. We are dedicated to developing local talent, transferring knowledge, and contributing to Saudi Arabia's journey toward technological independence. Every project we undertake is an opportunity to build capacity, create jobs, and strengthen the Kingdom's engineering ecosystem.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission, Vision & Values */}
      <motion.section 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-amber-50/30 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20"
          >
            <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800">
              <Target className="w-3 h-3 mr-1" />
              Our Foundation
            </Badge>
            <h2 className="font-bold text-gray-900 leading-tight">
              <span className="text-2xl sm:text-3xl lg:text-4xl">What Drives Our</span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Engineering Excellence</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To advance Saudi Arabia's engineering capabilities through innovative solutions, cutting-edge technology, and world-class expertise that drives national progress and economic diversification in alignment with Vision 2030.",
              },
              {
                icon: Lightbulb,
                title: "Our Vision",
                description: "To be the leading engineering solutions provider in the Middle East, recognized globally for innovation, excellence, and sustainable development that shapes the future of infrastructure and technology.",
              },
              {
                icon: Heart,
                title: "Our Values",
                description: "Innovation, integrity, excellence, and sustainability guide every project we undertake, ensuring lasting value for our clients, communities, and the Kingdom's future generations.",
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group text-center">
                  <CardHeader className="space-y-3 sm:space-y-4 p-4 sm:p-6">
                    <motion.div 
                      className="bg-amber-100 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-200"
                      whileHover={{ rotate: 5 }}
                    >
                      <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-amber-700" />
                    </motion.div>
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Leadership & Culture */}
      <motion.section 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-amber-50/30 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16"
            >
              <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800">
                <Users className="w-3 h-3 mr-1" />
                Our People
              </Badge>
              <h2 className="font-bold text-gray-900 leading-tight">
                <span className="text-2xl sm:text-3xl lg:text-4xl">Excellence Through</span>
                <br />
                <span className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Expert Leadership</span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="prose prose-lg prose-gray max-w-none">
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
                  <p>
                    At LSME, our greatest asset is our people. We've assembled a team of highly skilled engineers, project managers, and technical specialists who bring decades of combined experience from both local and international markets.
                  </p>
                  
                  <p>
                    Our leadership team includes engineers who have worked on major infrastructure projects across the Middle East, North America, and Europe. This diverse experience enables us to apply global best practices while understanding the unique requirements of the Saudi market.
                  </p>
                  
                  <p>
                    We foster a culture of continuous learning and innovation, where team members are encouraged to pursue professional development, obtain international certifications, and contribute to the broader engineering community through research and knowledge sharing.
                  </p>
                  
                  <p>
                    As we continue to grow, we remain committed to developing local talent and providing opportunities for Saudi engineers to lead complex projects and advance their careers in a supportive, collaborative environment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section - EXACT SAME AS HOMEPAGE */}
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Partner with Saudi Arabia's
                <br />
                <span className="text-amber-200">Engineering Leaders</span>
              </h2>
              <p className="text-lg sm:text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
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
                  <p className="text-gray-400 text-sm">info@lsmeco.com</p>
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
                  { text: "Projects", href: "/projects" },
                  { text: "Our Partners", href: "/our-partners" },
                  { text: "Contact Us", href: "/contact" }
                ],
                delay: "400ms"
              }
            ].map((section, index) => (
              <div key={index} className={`space-y-6 animate-fade-in-up ${index === 0 ? 'ml-4' : ''}`} style={{ animationDelay: section.delay }}>
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
  )
} 