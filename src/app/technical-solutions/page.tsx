'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Train, MapPin, Clock, Shield, Users, Zap, Phone, Mail, MapIcon, Microscope, Cog, Database, Wrench, ChevronRight, Star, Award, Globe, Calendar, FileText, TrendingUp, MessageSquare, Send, User, Settings, Monitor, Cpu } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import MobileNav from "@/components/MobileNav"
import { motion } from 'framer-motion'

export default function TechnicalSolutionsPage() {
  // Set theme on component mount
  useEffect(() => {
    // Force remove any existing theme classes
    document.documentElement.classList.remove('page-blue', 'page-green', 'page-cream', 'page-lightbrown', 'page-purple')
    document.body.classList.remove('page-blue', 'page-green', 'page-cream', 'page-lightbrown', 'page-purple')
    
    // Add teal theme
    document.documentElement.classList.add('page-teal')
    document.body.classList.add('page-teal')

    return () => {
      document.documentElement.classList.remove('page-teal')
      document.body.classList.remove('page-teal')
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-white overflow-x-hidden page-teal"
    >
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50 transition-all duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            {/* Desktop Logo */}
            <div className="hidden md:flex items-center space-x-4 group">
              <div className="flex items-center space-x-3 transition-transform duration-300 group-hover:scale-105">
                <div className="relative">
                  <Image src="/images/logo/lsme-logo.jpg" alt="LSME logo" width={80} height={80} className="h-20 w-20 object-contain animate-pulse" />
                </div>
                <div>
                  <span className="brand-font text-5xl font-normal text-gray-900 tracking-tight leading-none">LSME</span>
                  <div className="text-xs text-gray-500 font-medium">Engineering Services</div>
                </div>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <MobileNav theme="teal" />
            
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
                  className="relative text-gray-700 hover:text-teal-600 font-medium transition-all duration-300 group py-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="hover:bg-teal-50 hover:border-teal-300 transition-all duration-300">
                Get Quote
              </Button>
              <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
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
        className="relative bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 py-24 lg:py-32 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 hover:from-teal-200 hover:to-cyan-200 transition-all duration-300 transform hover:scale-105 shadow-md">
                  <Settings className="w-3 h-3 mr-1" />
                  Advanced Technical Solutions
                </Badge>
                <h1 className="hero-text text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Comprehensive 
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"> Engineering Solutions</span>
                </h1>
                <p className="hero-subtitle text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Comprehensive technical solutions and engineering services that transform projects from concept to completion with precision, efficiency, and innovation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                  Explore Solutions
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 transform hover:scale-105">
                  Technical Consultation
                </Button>
              </div>

              <div className="stats-grid grid grid-cols-3 gap-8 pt-8">
                {[
                  { number: '300+', label: 'Projects Completed', delay: '0ms' },
                  { number: '99.9%', label: 'System Uptime', delay: '200ms' },
                  { number: '24/7', label: 'Technical Support', delay: '400ms' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer" style={{ animationDelay: stat.delay }}>
                    <div className="text-4xl font-bold text-gray-900 transition-all duration-300 group-hover:text-teal-600 group-hover:scale-110">
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
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop"
                  alt="LSME Technical Solutions - Advanced engineering and technical implementation services"
                  width={800}
                  height={600}
                  className="rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="hidden md:block absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-float">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-teal-100 to-cyan-100 p-3 rounded-xl">
                    <Cog className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Technical Expertise</div>
                    <div className="text-xs text-gray-600">Engineering Solutions</div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-cyan-100 to-teal-100 p-3 rounded-xl">
                    <Monitor className="h-8 w-8 text-cyan-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">System Integration</div>
                    <div className="text-xs text-gray-600">Advanced Technology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Technical Services Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 mb-20 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-800 hover:from-cyan-200 hover:to-teal-200 transition-all duration-300">
              <Globe className="w-3 h-3 mr-1" />
              Technical Services
            </Badge>
            <h2 className="section-title text-4xl lg:text-5xl font-bold text-gray-900">
              Comprehensive <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Engineering Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From system design and integration to implementation and maintenance, our technical solutions deliver robust, scalable, and efficient systems that meet the highest industry standards.
            </p>
          </div>

          <div className="service-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cog,
                title: "System Integration",
                description: "Seamless integration of complex systems with existing infrastructure and advanced technology platforms.",
                features: ["API Integration", "Legacy System Modernization", "Real-time Monitoring", "Data Synchronization"],
                color: "teal",
                delay: "0ms"
              },
              {
                icon: Monitor,
                title: "Control Systems",
                description: "Advanced control systems for traffic management, signal control, and automated operations.",
                features: ["SCADA Systems", "Traffic Control", "Signal Management", "Automation Solutions"],
                color: "cyan",
                delay: "200ms"
              },
              {
                icon: Database,
                title: "Data Management",
                description: "Comprehensive data solutions for operations, including analytics, storage, and processing systems.",
                features: ["Big Data Processing", "Analytics Platforms", "Data Warehousing", "Business Intelligence"],
                color: "teal",
                delay: "400ms"
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description: "Robust cybersecurity solutions protecting critical infrastructure from modern digital threats.",
                features: ["Network Security", "Threat Detection", "Access Control", "Security Auditing"],
                color: "cyan",
                delay: "600ms"
              },
              {
                icon: Cpu,
                title: "Hardware Solutions",
                description: "Custom hardware design and implementation for specialized equipment and control systems.",
                features: ["Embedded Systems", "IoT Devices", "Custom Controllers", "Hardware Testing"],
                color: "teal",
                delay: "800ms"
              },
              {
                icon: Wrench,
                title: "Maintenance Systems",
                description: "Predictive and preventive maintenance solutions ensuring optimal performance and minimal downtime.",
                features: ["Predictive Analytics", "Maintenance Scheduling", "Asset Management", "Performance Monitoring"],
                color: "cyan",
                delay: "1000ms"
              }
            ].map((service, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/50 animate-fade-in-up h-full flex flex-col" style={{ animationDelay: service.delay }}>
                <CardHeader className="pb-4">
                  <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        <div className="w-2 h-2 bg-gray-600 rounded-full transition-all duration-300 group-hover:scale-125"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full mt-6 group-hover:bg-teal-50 group-hover:text-teal-600 transition-all duration-300">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technical Excellence Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-gradient-to-br from-gray-50 to-teal-50/30 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="feature-grid grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative animate-fade-in-left">
              <div className="relative group overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=600&auto=format&fit=crop"
                  alt="LSME Technical Excellence - Engineers implementing advanced technical solutions"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Achievement Badge */}
              <div className="hidden md:block absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">99.9%</div>
                  <div className="text-xs text-gray-600">System Uptime</div>
                </div>
              </div>
            </div>

            <div className="space-y-10 animate-fade-in-right">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800">
                  <Award className="w-3 h-3 mr-1" />
                  Technical Excellence
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Precision Engineering for 
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"> Engineering Systems</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our technical solutions combine decades of engineering expertise with cutting-edge technology to deliver systems that exceed performance expectations and operational requirements.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: Users,
                    title: "Expert Engineering Team",
                    description: "Certified engineers and technical specialists with extensive experience in engineering system design, implementation, and optimization.",
                    color: "teal"
                  },
                  {
                    icon: Cog,
                    title: "Proven Methodologies",
                    description: "Established engineering processes and best practices ensuring consistent, high-quality technical solutions and project delivery.",
                    color: "cyan"
                  },
                  {
                    icon: Globe,
                    title: "Industry Standards",
                    description: "Full compliance with international engineering standards and certifications, ensuring safety, reliability, and interoperability.",
                    color: "teal"
                  },
                  {
                    icon: TrendingUp,
                    title: "Performance Optimization",
                    description: "Continuous monitoring and optimization of system performance to maximize efficiency, reliability, and operational excellence.",
                    color: "cyan"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-6 group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="bg-gray-100 p-4 rounded-2xl flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <feature.icon className="h-6 w-6 text-black" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
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
                <Button size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                  Explore Technical Capabilities
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Recent Projects */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-800">
              <Calendar className="w-3 h-3 mr-1" />
              Recent Implementations
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Latest <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Technical Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our recent technical implementations that showcase our engineering capabilities and innovative solutions for modern systems.
            </p>
          </div>

          <div className="project-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=400&auto=format&fit=crop",
                title: "Automated Traffic Control System",
                description: "Implementation of AI-powered traffic control system for the Riyadh Metro, managing 85 stations with real-time optimization.",
                date: "December 2024",
                status: "Completed",
                delay: "0ms"
              },
              {
                image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=400&auto=format&fit=crop",
                title: "Integrated Security Platform",
                description: "Comprehensive cybersecurity solution protecting critical infrastructure across multiple regional networks.",
                date: "November 2024",
                status: "In Progress",
                delay: "200ms"
              },
              {
                image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=400&auto=format&fit=crop",
                title: "Predictive Maintenance System",
                description: "IoT-based predictive maintenance platform reducing equipment downtime by 40% across high-speed rail networks.",
                date: "October 2024",
                status: "Deployed",
                delay: "400ms"
              }
            ].map((project, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white to-gray-50/50 animate-fade-in-up overflow-hidden h-full flex flex-col" style={{ animationDelay: project.delay }}>
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-teal-100 text-teal-800">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-4 flex-1">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">{project.date}</span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-teal-50 group-hover:text-teal-600 transition-all duration-300 p-2">
                      <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="hover:bg-teal-50 hover:border-teal-300 hover:text-teal-600 transition-all duration-300 transform hover:scale-105">
              View All Technical Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-600/90 to-cyan-600/90"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-10 animate-fade-in-up">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 transition-all duration-300">
                <Star className="w-3 h-3 mr-1" />
                Ready to Implement?
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Transform Your Infrastructure with
                <br />
                <span className="text-teal-200">Advanced Engineering Solutions</span>
              </h2>
              <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
                Partner with LSME's technical experts to implement cutting-edge solutions that enhance performance, reliability, and operational efficiency.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                Start Technical Project
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105">
                Technical Consultation
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              {[
                { icon: Cog, text: "System Integration" },
                { icon: Shield, text: "Security Solutions" },
                { icon: Monitor, text: "Control Systems" }
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
                  <Cog className="h-10 w-10 text-teal-400 transition-colors duration-300 group-hover:text-teal-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold">LSME</span>
                  <div className="text-sm text-gray-400">Engineering Services</div>
                </div>
              </div>
              <p className="text-gray-400">Delivering exceptional technical solutions and engineering excellence across Saudi Arabia and the region.</p>
              <div className="flex space-x-6 pt-4">
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-teal-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Phone className="h-5 w-5 text-teal-400" />
                </div>
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-teal-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Mail className="h-5 w-5 text-teal-400" />
                </div>
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-teal-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Globe className="h-5 w-5 text-teal-400" />
                </div>
              </div>
            </div>

            {[
              {
                title: "Technical Services",
                links: ["System Integration", "Control Systems", "Data Management", "Cybersecurity", "Hardware Solutions"],
                delay: "200ms"
              },
              {
                title: "Engineering Solutions",
                links: ["Project Management", "Technical Consulting", "System Design", "Implementation", "Maintenance Support"],
                delay: "400ms"
              },
              {
                title: "Support",
                links: ["Technical Documentation", "Training Programs", "24/7 Support", "Remote Assistance", "System Updates"],
                delay: "600ms"
              }
            ].map((section, index) => (
              <div key={index} className="space-y-6 animate-fade-in-up" style={{ animationDelay: section.delay }}>
                <h3 className="text-lg font-bold text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
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
                <Link href="#" className="hover:text-teal-400 transition-colors duration-300">Privacy Policy</Link>
                <Link href="#" className="hover:text-teal-400 transition-colors duration-300">Terms of Service</Link>
                <Link href="#" className="hover:text-teal-400 transition-colors duration-300">ISO Certifications</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  )
} 