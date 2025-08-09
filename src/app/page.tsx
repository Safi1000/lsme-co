'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Train, MapPin, Clock, Shield, Users, Zap, Phone, Mail, MapIcon, Microscope, Cog, Database, Wrench, ChevronRight, Star, Award, Globe, Battery, Cpu, Settings } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import MobileNav from "@/components/MobileNav"
import { motion } from 'framer-motion'

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
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50 transition-all duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Desktop Logo */}
            <div className="hidden md:flex items-center space-x-4 group">
              <div className="flex items-center space-x-3 transition-transform duration-300 group-hover:scale-105">
                <div className="relative">
                  <Train className="h-10 w-10 text-amber-700 transition-colors duration-300 group-hover:text-amber-800" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">LSME</span>
                  <div className="text-xs text-gray-500 font-medium">Railway Engineering</div>
                </div>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <MobileNav theme="cream" />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', href: '/' },
                { name: 'R&D Services', href: '/rd-services' },
                { name: 'Technical Solutions', href: '/technical-solutions' },
                { name: 'Projects', href: '/projects' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((item, index) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="relative text-gray-700 hover:text-amber-700 font-medium transition-all duration-300 group py-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-700 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="hover:bg-amber-50 hover:border-amber-300 transition-all duration-300">
                Get Quote
              </Button>
              <Button className="bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Portal Login
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-24 lg:py-32 overflow-hidden"
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
                  Leading Saudi Railway Engineering Solutions
                </Badge>
                <h1 className="hero-text text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Advanced 
                  <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent"> Railway Engineering</span>
                  <br />for the Kingdom
                </h1>
                <p className="hero-subtitle text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Specialized electrical, electronics, and mechanical engineering solutions driving Saudi Arabia's railway infrastructure excellence and innovation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                  Explore Our Divisions
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="hover:bg-amber-50 hover:border-amber-300 transition-all duration-300 transform hover:scale-105">
                  View Engineering Projects
                </Button>
              </div>

              <div className="stats-grid grid grid-cols-3 gap-8 pt-8">
                {[
                  { number: '15+', label: 'Years of Excellence', delay: '0ms' },
                  { number: '3', label: 'Specialized Divisions', delay: '200ms' },
                  { number: '150+', label: 'Engineering Projects', delay: '400ms' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer" style={{ animationDelay: stat.delay }}>
                    <div className="text-4xl font-bold text-gray-900 transition-all duration-300 group-hover:text-amber-700 group-hover:scale-110">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="relative group overflow-hidden rounded-3xl">
                <Image
                  src="/images/hero/homepage-hero.jpg"
                  alt="LSME Railway Engineering Excellence"
                  width={800}
                  height={500}
                  className="rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="hidden md:block absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-float">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-3 rounded-xl">
                    <Microscope className="h-8 w-8 text-amber-700" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Advanced R&D</div>
                    <div className="text-xs text-gray-600">Cutting-edge Research</div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-3 rounded-xl">
                    <Award className="h-8 w-8 text-yellow-700" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">ISO Certified</div>
                    <div className="text-xs text-gray-600">Quality Assured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Engineering Divisions Section */}
      <motion.section
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
            <h2 className="section-title text-4xl lg:text-5xl font-bold text-gray-900">
              Our Specialized <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Engineering Divisions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Three core engineering divisions delivering comprehensive railway solutions across electrical systems, electronics, and mechanical engineering for Saudi Arabia's transportation infrastructure.
            </p>
          </div>

          <div className="service-grid grid md:grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Zap,
                title: "Electrical Division",
                description: "Comprehensive electrical engineering solutions for railway power systems, signaling, control systems, and electrification infrastructure across the Kingdom.",
                features: [
                  "Railway Electrification Systems",
                  "Power Distribution & Control",
                  "Signal & Communication Systems",
                  "Electrical Safety & Protection",
                  "Smart Grid Integration",
                  "Energy Management Systems"
                ],
                details: "Our electrical division specializes in designing, implementing, and maintaining sophisticated electrical systems that power Saudi Arabia's modern railway infrastructure. From high-voltage electrification to advanced signaling systems, we ensure safe, efficient, and reliable electrical operations.",
                color: "amber",
                delay: "0ms",
                imagePlaceholder: "Electrical Systems & Control Panels",
                image: "/images/divisions/electrical-division.jpg"
              },
              {
                icon: Battery,
                title: "Electronics Division", 
                description: "Design and integration of embedded electronics, control boards, sensors, and communication modules for rolling stock and infrastructure.",
                features: [
                  "Embedded PCB Design",
                  "Power Electronics & Converters",
                  "Sensors & Instrumentation",
                  "Control & Interface Boards",
                  "EMC/EMI Compliance",
                  "Environmental Hardening (IP/NEMA)"
                ],
                details: "Our electronics division delivers robust hardware designs for railway systems: embedded controllers, sensor interfaces, power conversion, and communication hardware engineered for harsh environments and railway standards.",
                color: "orange",
                delay: "200ms",
                imagePlaceholder: "Electronics Hardware & Embedded Systems",
                image: "/images/divisions/electronics-division.jpg"
              },
              {
                icon: Settings,
                title: "Mechanical Division",
                description: "Precision mechanical engineering services for railway vehicles, track systems, maintenance equipment, and structural components ensuring optimal performance and safety.",
                features: [
                  "Rolling Stock Engineering",
                  "Track & Infrastructure Design",
                  "Maintenance Equipment Systems",
                  "Structural Analysis & Design",
                  "Mechanical Testing & Validation",
                  "Performance Optimization"
                ],
                details: "Our mechanical division delivers robust engineering solutions for all mechanical aspects of railway systems. From rolling stock design to track infrastructure and maintenance equipment, we ensure mechanical excellence that meets the demanding requirements of Saudi Arabia's railway network.",
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

                <CardHeader className="pb-4">
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
                  <div className="space-y-4 mb-6">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {division.details}
                    </p>
                    <h4 className="font-semibold text-gray-900">Key Services:</h4>
                    <ul className="space-y-2 flex-1">
                      {division.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          <div className="w-2 h-2 bg-gray-600 rounded-full transition-all duration-300 group-hover:scale-125"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
          <div className="feature-grid grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative animate-fade-in-left">
              <div className="relative group overflow-hidden rounded-3xl">
                <Image
                  src="/images/hero/features-image.jpg"
                  alt="Engineering Team Excellence"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Achievement Badge */}
              <div className="hidden md:block absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">15+</div>
                  <div className="text-xs text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>

            <div className="space-y-10 animate-fade-in-right">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800">
                  <Award className="w-3 h-3 mr-1" />
                  Why Choose LSME
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Leading Saudi Arabia's 
                  <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent"> Railway Engineering</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  As Saudi Arabia's premier railway engineering company, we combine cutting-edge technology with deep local expertise across our three specialized divisions.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: Clock,
                    title: "Proven Engineering Excellence",
                    description: "15+ years of successful project delivery with 99.8% client satisfaction rate across electrical, electronics, and mechanical engineering solutions.",
                    color: "emerald"
                  },
                  {
                    icon: Shield,
                    title: "Advanced Safety & Standards",
                    description: "ISO 9001:2015 certified with comprehensive safety protocols exceeding international railway engineering standards across all divisions.",
                    color: "blue"
                  },
                  {
                    icon: Users,
                    title: "Specialized Expert Teams",
                    description: "150+ certified engineers across our three divisions with specialized expertise in electrical, electronics, and mechanical railway systems.",
                    color: "purple"
                  },
                  {
                    icon: Globe,
                    title: "Vision 2030 Aligned",
                    description: "Supporting Saudi Arabia's Vision 2030 with sustainable, innovative railway engineering solutions for the future of transportation.",
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
                <Button size="lg" className="bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                  Discover Our Engineering Capabilities
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
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
                <span className="text-amber-200">Railway Engineering Leaders</span>
              </h2>
              <p className="text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
                Connect with our specialized engineering divisions. From electrical systems to electronics and mechanical excellence - let's build the future of railway technology together.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                Start Your Engineering Project
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-amber-700 transition-all duration-300 transform hover:scale-105">
                Schedule Technical Consultation
              </Button>
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
                  <Train className="h-10 w-10 text-amber-400 transition-colors duration-300 group-hover:text-amber-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold">LSME</span>
                  <div className="text-sm text-gray-400">Railway Engineering</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Leading Saudi Arabia's railway innovation through specialized electrical, electronics, and mechanical engineering excellence. Building the future of transportation.
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
                links: ["Power Systems Design", "Corrosion Protection", "Rolling Stock Engineering", "System Integration", "Project Management"],
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
                <p>&copy; 2024 LSME Railway Engineering Solutions. All rights reserved.</p>
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
    </motion.div>
  )
}