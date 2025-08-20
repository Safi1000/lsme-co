'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Train, MapPin, Clock, Shield, Users, Zap, Phone, Mail, MapIcon, Microscope, Cog, Database, Wrench, ChevronRight, Star, Award, Globe, Battery, Cpu, Settings } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import MobileNav from "@/components/MobileNav"
import { motion } from 'framer-motion'
import { handleEmailClick } from '@/lib/utils'

export default function HomePage() {
  // Set theme on component mount
  useEffect(() => {
    // Force remove any existing theme classes
    document.documentElement.classList.remove('page-blue')
    document.body.classList.remove('page-blue')
    
    // Add cream theme
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
               
               {/* Services Dropdown - In second position */}
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
                { name: 'About LSME', href: '/about' },
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 hover:from-amber-200 hover:to-orange-200 transition-all duration-300 transform hover:scale-105 shadow-md">
                  <Star className="w-3 h-3 mr-1" />
                  Leading Engineering Solutions
                </Badge>
                <h1 className="hero-text font-bold text-gray-900 leading-tight">
                  <span className="text-3xl lg:text-4xl">Welcome to</span>
                  <br />
                  <span className="text-5xl lg:text-6xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">LSMECO</span>
                </h1>
                <p className="hero-subtitle text-base lg:text-lg text-gray-600 leading-relaxed">
                At LSMECO, we deliver innovative electrical, mechanical, and electronics engineering solutions with a focus on retrofits through reverse engineering. Together with our international partners, we are ready to provide world-class services for Saudi Arabia through our trusted network.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('engineering-divisions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  Explore Our Divisions
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

              </div>


            </div>

            <div className="relative animate-fade-in-right">
              {/* Achievement Badges Above Hero Image */}
              <div className="flex justify-between items-start mb-6 gap-4">
                <div className="hidden md:block bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-2 rounded-xl">
                      <Microscope className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-base">Advanced R&D</div>
                      <div className="text-xs text-gray-600">Cutting-edge Research</div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-2 rounded-xl">
                      <Award className="h-6 w-6 text-yellow-700" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-base">ISO Certified</div>
                      <div className="text-xs text-gray-600">Quality Assured</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-3xl">
                <Image
                  src="/images/hero/homepage-hero.jpg"
                  alt="LSME Engineering Excellence"
                  width={800}
                  height={500}
                  className="rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Vision Text Below Hero Image - Within Image Column */}
              <div className="text-center mt-8">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  <span className="text-[1.4em]">Collective Endeavour, Brighter Future:</span>
                  <br />
                  <span className="font-semibold text-amber-700 text-[1.5em]">LSMECO drives KSA's Vision 2030 forward!</span>
                </p>
              </div>

              {/* Removed Railway Systems floating badge as requested */}
            </div>
          </div>
        </div>
      </motion.section>



      {/* Engineering Divisions Section */}
      <motion.section
        id="engineering-divisions"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 mb-20 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 hover:from-amber-200 hover:to-orange-200 transition-all duration-300">
              <Settings className="w-3 h-3 mr-1" />
              Engineering Excellence
            </Badge>
            <h2 className="section-title font-bold text-gray-900 leading-tight">
              <span className="text-3xl lg:text-4xl">Our Specialized</span>
              <br />
              <span className="text-5xl lg:text-6xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Engineering Divisions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Three core engineering divisions delivering comprehensive solutions across electrical systems, electronics, and mechanical engineering for infrastructure and industry.
            </p>
          </div>

          <div className="service-grid grid md:grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Zap,
                title: "Electrical Division",
                description: "Power systems, protection, signaling, control, and electrification for facilities and critical infrastructure.",
                features: [
                  "Power Distribution & Protection",
                  "Control & Automation",
                  "Signal & Communication Systems",
                  "Electrical Safety",
                  "Smart Grid Integration",
                  "Energy Management"
                ],
                details: "Design, implementation, and maintenance of sophisticated electrical systems for modern facilities and infrastructure. From high-voltage distribution to advanced control and protection, we ensure safe, efficient, and reliable operations.",
                color: "amber",
                delay: "0ms",
                imagePlaceholder: "Electrical Systems & Control Panels",
                image: "/images/divisions/electrical-division.jpg"
              },
              {
                icon: Battery,
                title: "Electronics Division", 
                description: "Embedded electronics, control boards, sensors, and communication modules for connected, intelligent systems.",
                features: [
                  "Embedded PCB Design",
                  "Power Electronics & Converters",
                  "Sensors & Instrumentation",
                  "Control & Interface Boards",
                  "EMC/EMI Compliance",
                  "Environmental Hardening (IP/NEMA)"
                ],
                details: "Robust electronics hardware: embedded controllers, sensor interfaces, power conversion, and communication hardware engineered for harsh environments and demanding standards.",
                color: "orange",
                delay: "200ms",
                imagePlaceholder: "Electronics Hardware & Embedded Systems",
                image: "/images/divisions/electronics-division.jpg"
              },
              {
                icon: Settings,
                title: "Mechanical Division",
                description: "Precision mechanical engineering for equipment, structures, motion systems, and maintenance tooling.",
                features: [
                  "Equipment & Mechanism Design",
                  "Structural & Infrastructure Design",
                  "Maintenance Tooling & Systems",
                  "Structural Analysis & Design",
                  "Mechanical Testing & Validation",
                  "Performance Optimization"
                ],
                details: "Mechanical design and analysis for equipment and infrastructure. From motion systems to structural components and tooling, we ensure durability, safety, and performance.",
                color: "yellow",
                delay: "400ms",
                imagePlaceholder: "Mechanical Components & Testing",
                image: "/images/divisions/mechanical-division.jpg"
              }
            ].map((division, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/50 animate-fade-in-up h-full flex flex-col" style={{ animationDelay: division.delay }}>
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <Image
                    src={division.image}
                    alt={division.imagePlaceholder}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <CardHeader className="pb-4 min-h-60">
                  <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <division.icon className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                    {division.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {division.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <p className="text-sm text-gray-700 leading-relaxed min-h-36">
                      {division.details}
                    </p>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-4">Key Services:</h4>
                  <ul className="space-y-3 mb-6 sm:mb-8">
                    {division.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        <div className="w-2 h-2 bg-amber-700 rounded-full transition-all duration-300 group-hover:scale-125"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full mt-auto group-hover:bg-amber-50 group-hover:text-amber-700 transition-all duration-300">
                    Learn More About {division.title.split(' ')[0]}
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section - Why Choose LSME */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-gradient-to-br from-gray-50 to-amber-50/30 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-yellow-200/20 to-amber-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
           {/* Centered Section Title */}
           <div className="text-center space-y-6 mb-20 animate-fade-in-up">
             <Badge className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800">
               <Award className="w-3 h-3 mr-1" />
               Why Choose LSME
             </Badge>
             <h2 className="font-bold text-gray-900 leading-tight">
               <span className="text-3xl lg:text-4xl">Leading Saudi Arabia's</span>
               <br />
               <span className="text-5xl lg:text-6xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Engineering Services</span>
             </h2>
             <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
               As Saudi Arabia's premier engineering company, we combine cutting-edge technology with deep local expertise across our three specialized divisions.
             </p>
           </div>

           <div className="feature-grid grid lg:grid-cols-2 gap-20 items-center">
             <div className="relative animate-fade-in-left">
               <div className="relative group overflow-hidden rounded-3xl">
                 <Image
                   src="/images/hero/feature-image.jpg"
                   alt="Engineering Team Excellence"
                   width={600}
                   height={500}
                   className="rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105 w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               </div>
               

             </div>

             <div className="space-y-10 animate-fade-in-right">

                             <div className="space-y-8">
                 {[
                   {
                     icon: Shield,
                     title: "Advanced Safety & Standards",
                     description: "ISO 9001:2015 certified with comprehensive safety protocols exceeding international engineering standards across all divisions.",
                     color: "blue"
                   },
                   {
                     icon: Users,
                     title: "Specialized Expert Teams",
                     description: "We have a team of qualified and certified engineers across our three divisions with specialized expertise in electrical, electronics, and mechanical systems.",
                     color: "purple"
                   },
                   {
                     icon: Globe,
                     title: "Vision 2030 Aligned",
                     description: "Supporting Saudi Arabia's Vision 2030 with sustainable, innovative engineering solutions for the future.",
                     color: "teal"
                   }
                 ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-6 group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="bg-gray-100 p-4 rounded-2xl flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <feature.icon className="h-6 w-6 text-black" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/rd-services">
                  <Button size="lg" className="bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                    Discover Our Engineering Capabilities
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-gradient-to-br from-amber-700 via-orange-700 to-amber-800 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-700/90 to-orange-700/90"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-10 animate-fade-in-up">
            <div className="space-y-6">
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

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              {[
                { icon: Phone, text: "24/7 Engineering Support" },
                { icon: Mail, text: "Expert Technical Consultation" },
                { icon: Globe, text: "International Standards" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center space-x-3 text-white/90 hover:text-white transition-colors duration-300 group cursor-pointer">
                  <item.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium">{item.text}</span>
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
  )
}