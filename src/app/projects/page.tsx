'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Train, MapPin, Clock, Shield, Users, Zap, Phone, Mail, MapIcon, Microscope, Cog, Database, Wrench, ChevronRight, Star, Award, Globe, Calendar, FileText, TrendingUp } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import MobileNav from "@/components/MobileNav"
import { motion } from 'framer-motion'

export default function ProjectsPage() {
  // Set theme on component mount
  useEffect(() => {
    // Force remove any existing theme classes
    document.documentElement.classList.remove('page-blue', 'page-green')
    document.body.classList.remove('page-blue', 'page-green')
    
    // Add cream theme (old money)
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
                  <div className="text-xs text-gray-500 font-medium">Railway Solutions</div>
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
                  Transformative Railway Projects
                </Badge>
                <h1 className="hero-text text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Showcasing 
                  <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent"> World-Class</span>
                  <br />Railway Projects
                </h1>
                <p className="hero-subtitle text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Explore our portfolio of cutting-edge railway projects, from research breakthroughs to large-scale infrastructure implementations across Saudi Arabia.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                  Browse Our Portfolio
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="hover:bg-amber-50 hover:border-amber-300 transition-all duration-300 transform hover:scale-105">
                  Project Partnerships
                </Button>
              </div>

              <div className="stats-grid grid grid-cols-3 gap-8 pt-8">
                {[
                  { number: '200+', label: 'Completed Projects', delay: '0ms' },
                  { number: '50+', label: 'Research Studies', delay: '200ms' },
                  { number: '15+', label: 'Active Projects', delay: '400ms' }
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
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop"
                  alt="LSME Project Portfolio - Advanced railway infrastructure and research facilities"
                  width={800}
                  height={600}
                  className="rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="hidden md:block absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-float">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-3 rounded-xl">
                    <FileText className="h-8 w-8 text-amber-700" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Project Excellence</div>
                    <div className="text-xs text-gray-600">Proven Track Record</div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-3 rounded-xl">
                    <TrendingUp className="h-8 w-8 text-yellow-700" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Innovation Focus</div>
                    <div className="text-xs text-gray-600">Future-Ready Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Project Categories Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 mb-20 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 hover:from-yellow-200 hover:to-amber-200 transition-all duration-300">
              <Globe className="w-3 h-3 mr-1" />
              Project Categories
            </Badge>
            <h2 className="section-title text-4xl lg:text-5xl font-bold text-gray-900">
              Diverse <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Project Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From groundbreaking research initiatives to large-scale infrastructure projects, explore our comprehensive portfolio of railway solutions that are shaping the future of transportation.
            </p>
          </div>

          <div className="service-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Microscope,
                title: "Research & Development Projects",
                description: "Innovative research studies and breakthrough technologies advancing railway science and engineering.",
                features: ["AI & Machine Learning", "Advanced Materials", "Safety Innovations", "Sustainability Studies"],
                color: "amber",
                delay: "0ms"
              },
              {
                icon: Cog,
                title: "Infrastructure Projects",
                description: "Large-scale railway infrastructure development and modernization projects across the Kingdom.",
                features: ["Track Systems", "Station Development", "Signal Upgrades", "Maintenance Facilities"],
                color: "orange",
                delay: "200ms"
              },
              {
                icon: Database,
                title: "Technology Integration",
                description: "Smart railway systems and digital transformation projects enhancing operational efficiency.",
                features: ["Smart Systems", "IoT Integration", "Data Analytics", "Automation"],
                color: "yellow",
                delay: "400ms"
              },
              {
                icon: Wrench,
                title: "Consulting Projects",
                description: "Strategic consulting and advisory projects for railway operators and government entities.",
                features: ["Strategic Planning", "Technical Advisory", "Feasibility Studies", "Optimization"],
                color: "amber",
                delay: "600ms"
              },
              {
                icon: Shield,
                title: "Safety & Compliance",
                description: "Comprehensive safety enhancement and regulatory compliance projects ensuring operational excellence.",
                features: ["Safety Assessments", "Compliance Audits", "Risk Management", "Training Programs"],
                color: "orange",
                delay: "800ms"
              },
              {
                icon: Zap,
                title: "Innovation Initiatives",
                description: "Future-focused innovation projects exploring next-generation railway technologies and solutions.",
                features: ["Prototype Development", "Pilot Programs", "Technology Validation", "Future Concepts"],
                color: "yellow",
                delay: "1000ms"
              }
            ].map((service, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/50 animate-fade-in-up h-full flex flex-col" style={{ animationDelay: service.delay }}>
                <CardHeader className="pb-4">
                  <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
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
                  <Button variant="ghost" className="w-full mt-6 group-hover:bg-amber-50 group-hover:text-amber-700 transition-all duration-300">
                    View Projects
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
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
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=600&auto=format&fit=crop"
                  alt="LSME Featured Projects - Advanced railway systems and infrastructure development"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Achievement Badge */}
              <div className="hidden md:block absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-700">200+</div>
                  <div className="text-xs text-gray-600">Projects Delivered</div>
                </div>
              </div>
            </div>

            <div className="space-y-10 animate-fade-in-right">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800">
                  <Award className="w-3 h-3 mr-1" />
                  Featured Projects
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Transforming Railway 
                  <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent"> Infrastructure</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our flagship projects demonstrate our commitment to innovation, safety, and sustainable development in railway transportation across Saudi Arabia.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: Clock,
                    title: "High-Speed Rail Network",
                    description: "Development of Saudi Arabia's first high-speed rail corridor, featuring 350+ km/h capabilities with world-class safety standards.",
                    color: "amber"
                  },
                  {
                    icon: Shield,
                    title: "Smart Railway Operations Center",
                    description: "AI-powered control center managing real-time operations, predictive maintenance, and safety monitoring across the network.",
                    color: "orange"
                  },
                  {
                    icon: Users,
                    title: "Sustainable Transport Hub",
                    description: "Multi-modal transportation center integrating renewable energy, smart systems, and passenger-centric design principles.",
                    color: "yellow"
                  },
                  {
                    icon: Globe,
                    title: "Research Excellence Center",
                    description: "State-of-the-art facility advancing railway technology through collaborative research and innovation partnerships.",
                    color: "amber"
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
                  Explore All Projects
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Latest Projects Gallery */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800">
              <Calendar className="w-3 h-3 mr-1" />
              Latest Project Updates
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Recent <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Project Milestones</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay updated with our latest project achievements, breakthrough innovations, and ongoing developments that are advancing railway technology in the region.
            </p>
          </div>

          <div className="project-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=400&auto=format&fit=crop",
                title: "Smart Traffic Management System Launch",
                description: "Revolutionary AI-powered system now managing traffic flow and optimization across 500+ km of railway network.",
                date: "December 2024",
                status: "Completed",
                delay: "0ms"
              },
              {
                image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=400&auto=format&fit=crop",
                title: "Renewable Energy Integration Project",
                description: "Solar panel installation project providing 100% renewable energy to 15 major railway stations across the Kingdom.",
                date: "November 2024",
                status: "In Progress",
                delay: "200ms"
              },
              {
                image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=400&auto=format&fit=crop",
                title: "Advanced Safety Protocol Implementation",
                description: "Next-generation safety systems deployment featuring predictive analytics and automated emergency response.",
                date: "October 2024",
                status: "Planning",
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
                    <Badge className={`${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'In Progress' ? 'bg-amber-100 text-amber-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-4 flex-1">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">{project.date}</span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-amber-50 group-hover:text-amber-700 transition-all duration-300 p-2">
                      <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-all duration-300 transform hover:scale-105">
              View Complete Project Archive
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
        className="py-24 bg-gradient-to-br from-amber-700 via-orange-700 to-yellow-700 relative overflow-hidden"
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
                Start Your Project
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ready to Begin Your
                <br />
                <span className="text-amber-200">Next Railway Project?</span>
              </h2>
              <p className="text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
                Partner with us to bring your railway vision to life. From initial concept to successful delivery, we provide comprehensive project management and technical expertise.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                Discuss Your Project
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-amber-700 transition-all duration-300 transform hover:scale-105">
                Request Proposal
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              {[
                { icon: Phone, text: "Project Consultation" },
                { icon: Mail, text: "Custom Solutions" },
                { icon: Globe, text: "Global Standards" }
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
                  <div className="text-sm text-gray-400">Railway Solutions</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Delivering world-class railway projects through innovation, expertise, and commitment to excellence. Building the future of transportation in Saudi Arabia.
              </p>
              <div className="flex space-x-6 pt-4">
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Phone className="h-5 w-5 text-amber-400" />
                </div>
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Mail className="h-5 w-5 text-amber-400" />
                </div>
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Globe className="h-5 w-5 text-amber-400" />
                </div>
              </div>
            </div>

            {[
              {
                title: "Project Types",
                links: ["Infrastructure Development", "Research Projects", "Technology Integration", "Safety Systems", "Consulting Services"],
                delay: "200ms"
              },
              {
                title: "Services",
                links: ["Project Management", "Technical Consulting", "Engineering Design", "Quality Assurance", "Training & Support"],
                delay: "400ms"
              },
              {
                title: "Company",
                links: ["About LSME", "Our Team", "Careers", "Portfolio", "Contact Us"],
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
                <p>&copy; 2024 LSME Railway Solutions. All rights reserved.</p>
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