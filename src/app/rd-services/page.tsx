'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Train, MapPin, Clock, Shield, Users, Zap, Phone, Mail, MapIcon, Microscope, Cog, Database, Wrench, ChevronRight, Star, Award, Globe, Calendar, FileText, TrendingUp, MessageSquare, Send, User, Brain, Lightbulb, Beaker } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import MobileNav from "@/components/MobileNav"
import { motion } from 'framer-motion'

export default function RDServicesPage() {
  // Set theme on component mount
  useEffect(() => {
    // Force remove any existing theme classes
    document.documentElement.classList.remove('page-blue', 'page-green', 'page-cream', 'page-lightbrown', 'page-teal')
    document.body.classList.remove('page-blue', 'page-green', 'page-cream', 'page-lightbrown', 'page-teal')
    
    // Add purple theme
    document.documentElement.classList.add('page-purple')
    document.body.classList.add('page-purple')

    return () => {
      document.documentElement.classList.remove('page-purple')
      document.body.classList.remove('page-purple')
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-white overflow-x-hidden page-purple"
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
                  <Train className="h-10 w-10 text-purple-600 transition-colors duration-300 group-hover:text-purple-700" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">LSME</span>
                  <div className="text-xs text-gray-500 font-medium">Railway Solutions</div>
                </div>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <MobileNav theme="purple" />
            
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
                  className="relative text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 group py-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="hover:bg-purple-50 hover:border-purple-300 transition-all duration-300">
                Get Quote
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
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
        className="relative bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 py-24 lg:py-32 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-violet-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-violet-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800 hover:from-purple-200 hover:to-violet-200 transition-all duration-300 transform hover:scale-105 shadow-md">
                  <Brain className="w-3 h-3 mr-1" />
                  Advanced Research & Development
                </Badge>
                <h1 className="hero-text text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Pioneering Railway 
                  <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent"> Research</span>
                  <br />& Innovation
                </h1>
                <p className="hero-subtitle text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Driving the future of railway technology through cutting-edge research, breakthrough innovations, and advanced engineering solutions that transform transportation across Saudi Arabia.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                  Explore Our Research
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 transform hover:scale-105">
                  Research Partnerships
                </Button>
              </div>

              <div className="stats-grid grid grid-cols-3 gap-8 pt-8">
                {[
                  { number: '50+', label: 'Research Projects', delay: '0ms' },
                  { number: '200+', label: 'Publications', delay: '200ms' },
                  { number: '15+', label: 'Patent Applications', delay: '400ms' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer" style={{ animationDelay: stat.delay }}>
                    <div className="text-4xl font-bold text-gray-900 transition-all duration-300 group-hover:text-purple-600 group-hover:scale-110">
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
                  alt="LSME R&D Laboratory - Advanced research facilities and innovation center"
                  width={800}
                  height={600}
                  className="rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="hidden md:block absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-float">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-3 rounded-xl">
                    <Microscope className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Advanced Research</div>
                    <div className="text-xs text-gray-600">Innovation Lab</div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-violet-100 to-purple-100 p-3 rounded-xl">
                    <Lightbulb className="h-8 w-8 text-violet-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Innovation Focus</div>
                    <div className="text-xs text-gray-600">Breakthrough Technology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Research Areas Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 mb-20 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 hover:from-violet-200 hover:to-purple-200 transition-all duration-300">
              <Globe className="w-3 h-3 mr-1" />
              Research Areas
            </Badge>
            <h2 className="section-title text-4xl lg:text-5xl font-bold text-gray-900">
              Cutting-Edge <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Research Domains</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our research spans multiple disciplines, from artificial intelligence and materials science to sustainable transportation and safety systems, driving innovation in railway technology.
            </p>
          </div>

          <div className="service-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Artificial Intelligence",
                description: "Advanced AI systems for predictive maintenance, autonomous operations, and intelligent traffic management.",
                features: ["Machine Learning", "Neural Networks", "Computer Vision", "Natural Language Processing"],
                color: "purple",
                delay: "0ms"
              },
              {
                icon: Beaker,
                title: "Materials Science",
                description: "Revolutionary materials research for enhanced durability, performance, and sustainability in railway systems.",
                features: ["Smart Materials", "Composite Engineering", "Nano Technology", "Corrosion Resistance"],
                color: "violet",
                delay: "200ms"
              },
              {
                icon: Zap,
                title: "Energy Systems",
                description: "Sustainable energy solutions including renewable integration and advanced propulsion technologies.",
                features: ["Solar Integration", "Energy Storage", "Electric Systems", "Hybrid Solutions"],
                color: "purple",
                delay: "400ms"
              },
              {
                icon: Shield,
                title: "Safety Technology",
                description: "Next-generation safety systems with real-time monitoring and automated emergency response capabilities.",
                features: ["Collision Avoidance", "Emergency Systems", "Risk Assessment", "Safety Analytics"],
                color: "violet",
                delay: "600ms"
              },
              {
                icon: Database,
                title: "Big Data Analytics",
                description: "Advanced data processing and analytics for operational optimization and predictive insights.",
                features: ["Data Mining", "Predictive Analytics", "IoT Integration", "Performance Optimization"],
                color: "purple",
                delay: "800ms"
              },
              {
                icon: Lightbulb,
                title: "Innovation Lab",
                description: "Experimental research facility for testing breakthrough concepts and prototype development.",
                features: ["Prototype Testing", "Concept Validation", "Technology Incubation", "Future Concepts"],
                color: "violet",
                delay: "1000ms"
              }
            ].map((service, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/50 animate-fade-in-up h-full flex flex-col" style={{ animationDelay: service.delay }}>
                <CardHeader className="pb-4">
                  <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
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
                  <Button variant="ghost" className="w-full mt-6 group-hover:bg-purple-50 group-hover:text-purple-600 transition-all duration-300">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Research Excellence Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-violet-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-violet-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="feature-grid grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative animate-fade-in-left">
              <div className="relative group overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=600&auto=format&fit=crop"
                  alt="LSME Research Excellence - Scientists and engineers working on breakthrough technologies"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Achievement Badge */}
              <div className="hidden md:block absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-xs text-gray-600">Active Research</div>
                </div>
              </div>
            </div>

            <div className="space-y-10 animate-fade-in-right">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800">
                  <Award className="w-3 h-3 mr-1" />
                  Research Excellence
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Leading Railway 
                  <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent"> Innovation</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our world-class research team combines academic excellence with practical expertise to deliver breakthrough technologies that redefine the future of railway transportation.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: Users,
                    title: "Expert Research Team",
                    description: "PhD researchers, engineers, and scientists with decades of combined experience in railway technology and innovation.",
                    color: "purple"
                  },
                  {
                    icon: Globe,
                    title: "International Collaboration",
                    description: "Partnerships with leading universities and research institutions worldwide for knowledge exchange and joint research.",
                    color: "violet"
                  },
                  {
                    icon: Cog,
                    title: "State-of-the-Art Facilities",
                    description: "Advanced laboratories, testing facilities, and simulation environments for comprehensive research and development.",
                    color: "purple"
                  },
                  {
                    icon: TrendingUp,
                    title: "Measurable Impact",
                    description: "Research outcomes that directly translate into practical solutions and improvements in railway operations and safety.",
                    color: "violet"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-6 group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="bg-gray-100 p-4 rounded-2xl flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <feature.icon className="h-6 w-6 text-black" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
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
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                  Explore Research Portfolio
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Latest Research Projects */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800">
              <Calendar className="w-3 h-3 mr-1" />
              Latest Research
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Breakthrough <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Research Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our latest research initiatives that are pushing the boundaries of railway technology and setting new standards for the industry.
            </p>
          </div>

          <div className="project-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=400&auto=format&fit=crop",
                title: "Quantum Railway Computing",
                description: "Revolutionary quantum computing applications for ultra-fast railway network optimization and traffic management systems.",
                date: "December 2024",
                status: "Active Research",
                delay: "0ms"
              },
              {
                image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=400&auto=format&fit=crop",
                title: "Neural Network Maintenance",
                description: "AI-powered predictive maintenance system using deep learning to anticipate component failures before they occur.",
                date: "November 2024",
                status: "In Development",
                delay: "200ms"
              },
              {
                image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=400&auto=format&fit=crop",
                title: "Sustainable Materials Research",
                description: "Development of eco-friendly composite materials that reduce environmental impact while enhancing performance.",
                date: "October 2024",
                status: "Research Phase",
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
                    <Badge className="bg-purple-100 text-purple-800">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-4 flex-1">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">{project.date}</span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-purple-50 group-hover:text-purple-600 transition-all duration-300 p-2">
                      <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="hover:bg-purple-50 hover:border-purple-300 hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              View All Research Projects
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
        className="py-24 bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/90 to-violet-600/90"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-10 animate-fade-in-up">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 transition-all duration-300">
                <Star className="w-3 h-3 mr-1" />
                Join Our Research
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Collaborate on the Future of
                <br />
                <span className="text-purple-200">Railway Technology</span>
              </h2>
              <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
                Partner with LSME's research team to develop breakthrough technologies, publish cutting-edge research, and shape the future of railway transportation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                Start Research Partnership
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
                View Research Portfolio
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              {[
                { icon: Brain, text: "Advanced Research Labs" },
                { icon: Users, text: "Expert Research Team" },
                { icon: Globe, text: "Global Collaborations" }
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
                  <Train className="h-10 w-10 text-purple-400 transition-colors duration-300 group-hover:text-purple-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold">LSME</span>
                  <div className="text-sm text-gray-400">Railway Solutions</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Advancing railway technology through world-class research and development. Leading innovation in transportation systems across Saudi Arabia and beyond.
              </p>
              <div className="flex space-x-6 pt-4">
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-purple-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Phone className="h-5 w-5 text-purple-400" />
                </div>
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-purple-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-purple-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Globe className="h-5 w-5 text-purple-400" />
                </div>
              </div>
            </div>

            {[
              {
                title: "Research Areas",
                links: ["Artificial Intelligence", "Materials Science", "Energy Systems", "Safety Technology", "Data Analytics"],
                delay: "200ms"
              },
              {
                title: "Research Services",
                links: ["Contract Research", "Collaborative Projects", "Technology Transfer", "Patent Development", "Research Consulting"],
                delay: "400ms"
              },
              {
                title: "Resources",
                links: ["Research Publications", "Technical Reports", "Innovation Lab", "Research Team", "Partnership Program"],
                delay: "600ms"
              }
            ].map((section, index) => (
              <div key={index} className="space-y-6 animate-fade-in-up" style={{ animationDelay: section.delay }}>
                <h3 className="text-lg font-bold text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
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
                <Link href="#" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</Link>
                <Link href="#" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</Link>
                <Link href="#" className="hover:text-purple-400 transition-colors duration-300">ISO Certifications</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  )
} 