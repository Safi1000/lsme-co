'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Shield, Users, Phone, Mail, Microscope, Cog, ChevronRight, Star, Award, Globe, Calendar, FileText, TrendingUp, Eye, ExternalLink, Folder, Settings, Zap } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import MobileNav from "@/components/MobileNav"
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ProjectsPage() {
  const { scrollYProgress } = useScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -30])
  
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

  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const featuredProjects = [
    {
      id: 1,
      title: "Riyadh Metro Signal Systems Integration",
      category: "Infrastructure",
      description: "Complete signal systems integration for the Riyadh Metro, including advanced control systems, safety protocols, and real-time monitoring capabilities.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
      status: "Completed",
      year: "2023",
      client: "Royal Commission for Riyadh City",
      technologies: ["CBTC", "PLC Systems", "SCADA", "IoT Sensors"],
      duration: "24 months",
      featured: true
    },
    {
      id: 2,
      title: "AI-Powered Predictive Maintenance System",
      category: "Research & Development",
      description: "Revolutionary machine learning system for predicting equipment failures and optimizing maintenance schedules across railway networks.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=800&auto=format&fit=crop",
      status: "In Progress",
      year: "2024",
      client: "Saudi Railway Company",
      technologies: ["Machine Learning", "Python", "TensorFlow", "IoT"],
      duration: "18 months",
      featured: true
    },
    {
      id: 3,
      title: "High-Speed Rail Safety Certification",
      category: "Safety & Compliance",
      description: "Comprehensive safety assessment and certification process for high-speed rail operations, ensuring compliance with international standards.",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800&auto=format&fit=crop",
      status: "Completed",
      year: "2023",
      client: "Haramain High Speed Railway",
      technologies: ["RAMS Analysis", "SIL4 Systems", "ETCS", "Risk Assessment"],
      duration: "12 months",
      featured: true
    }
  ]

  const allProjects = [
    ...featuredProjects,
    {
      id: 4,
      title: "Smart Station Management Platform",
      category: "Smart Systems",
      description: "Integrated platform for managing passenger flow, energy consumption, and facility operations across multiple railway stations.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
      status: "Completed",
      year: "2024",
      client: "Metro Operations Center",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
      duration: "8 months"
    },
    {
      id: 5,
      title: "Railway Bridge Structural Analysis",
      category: "Infrastructure",
      description: "Advanced structural analysis and reinforcement design for critical railway bridges using finite element modeling.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600&auto=format&fit=crop",
      status: "Completed",
      year: "2023",
      client: "Ministry of Transport",
      technologies: ["ANSYS", "AutoCAD", "Structural Analysis", "3D Modeling"],
      duration: "6 months"
    },
    {
      id: 6,
      title: "Renewable Energy Integration Study",
      category: "Research & Development",
      description: "Feasibility study for integrating solar and wind energy systems into railway infrastructure and operations.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop",
      status: "Planning",
      year: "2024",
      client: "Green Energy Initiative",
      technologies: ["Solar Systems", "Energy Storage", "Grid Integration", "Analytics"],
      duration: "14 months"
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
                    item.name === 'Projects' 
                      ? 'text-amber-700' 
                      : 'text-gray-700 hover:text-amber-700'
                  }`}
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-700 to-orange-600 transition-all duration-300 ${
                    item.name === 'Projects' 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
        {/* Animated bottom runner line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3.2px] bg-black/10 overflow-hidden">
          <span
            className="runner-line"
            style={{
              background: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.95) 12%, rgba(0,0,0,0.95) 88%, transparent 100%)',
              clipPath: 'polygon(0% 50%, 2% 0%, 98% 0%, 100% 50%, 98% 100%, 2% 100%)'
            }}
          />
        </div>
        <style jsx>{`
          .runner-line {
            position: absolute;
            top: 0;
            left: -35%;
            height: 3.2px;
            width: 35%;
            animation: navrunner 2.8s linear infinite;
          }
          @keyframes navrunner {
            from { left: -35%; }
            to { left: 100%; }
          }
        `}</style>
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
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          style={{ y: yRange }}
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-200/30 to-amber-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 lg:space-y-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
            >
              <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 hover:from-amber-200 hover:to-orange-200 transition-all duration-300 transform hover:scale-105 shadow-md">
                <Folder className="w-3 h-3 mr-1" />
                LSME Project Portfolio
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="hero-text font-bold text-gray-900 leading-tight max-w-5xl mx-auto"
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl">Engineering</span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Excellence in Action</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
            >
              Explore our comprehensive portfolio of successful engineering projects that showcase our technical expertise, innovation, and commitment to delivering world-class solutions across Saudi Arabia.
            </motion.p>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-6 lg:pt-8 max-w-4xl mx-auto"
            >
              {[
                { number: '47', label: 'Completed Projects' },
                { number: '15+', label: 'Years Experience' },
                { number: '12', label: 'Active Projects' },
                { number: '100%', label: 'Success Rate' }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 transition-all duration-300 group-hover:text-amber-700">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
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
            <Badge className="bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800">
              <Star className="w-3 h-3 mr-1" />
              Featured Projects
            </Badge>
            <h2 className="font-bold text-gray-900 leading-tight">
              <span className="text-2xl sm:text-3xl lg:text-4xl">Flagship</span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Engineering Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Highlighting our most impactful and innovative projects that demonstrate our engineering capabilities and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden">
                  <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-amber-800 font-medium text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={`text-xs ${
                        project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {project.status}
                      </Badge>
                    </div>
                    <motion.div 
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 text-xs">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </motion.div>
                  </div>
                  
                  <CardHeader className="space-y-2 sm:space-y-3 p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                    <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                      <div>
                        <span className="text-gray-500">Client:</span>
                        <p className="font-medium text-gray-900 text-xs sm:text-sm">{project.client}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <p className="font-medium text-gray-900 text-xs sm:text-sm">{project.duration}</p>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-gray-500 text-xs sm:text-sm">Technologies:</span>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mt-2">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-amber-100 text-amber-800 rounded-md text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* All Projects Grid */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-16 sm:py-20 lg:py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16"
          >
            <h2 className="font-bold text-gray-900 leading-tight">
              <span className="text-2xl sm:text-3xl lg:text-4xl">All</span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              {allProjects.length} project{allProjects.length !== 1 ? 's' : ''} 
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                  <div className="relative overflow-hidden h-40 sm:h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/90 text-amber-800 text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className={`text-xs ${
                        project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2 sm:pb-3 p-4 sm:p-6">
                    <CardTitle className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-2 sm:space-y-3 p-4 sm:p-6 pt-0">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-500">Year: <span className="text-gray-900 font-medium">{project.year}</span></span>
                      <span className="text-gray-500">Duration: <span className="text-gray-900 font-medium">{project.duration}</span></span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        {project.technologies.slice(0, 2).map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button variant="ghost" size="sm" className="text-amber-700 hover:text-amber-800 hover:bg-amber-50 p-2">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {allProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Folder className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filter selection.</p>
            </motion.div>
          )}
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
              <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                Start Your Engineering Project
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-amber-700 transition-all duration-300 transform hover:scale-105">
                Schedule Technical Consultation
              </Button>
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
      <footer className="bg-gray-900 text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Cog className="h-8 w-8 sm:h-10 sm:w-10 text-amber-400 transition-colors duration-300 group-hover:text-amber-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold">LSME</span>
                  <div className="text-xs sm:text-sm text-gray-400">Engineering Services</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Delivering world-class engineering projects through innovation, expertise, and commitment to excellence.</p>
              <div className="flex space-x-4 sm:space-x-6 pt-4">
                {[Phone, Mail, Globe].map((Icon, index) => (
                  <div key={index} className="bg-gray-800 p-2 sm:p-3 rounded-xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                title: "Projects",
                links: ["Infrastructure Projects", "R&D Initiatives", "Smart Systems", "Safety Solutions", "Project Archive"],
              },
              {
                title: "Services",
                links: ["Project Management", "Technical Consulting", "Engineering Design", "Quality Assurance", "Training & Support"],
              },
              {
                title: "Company",
                links: ["About LSME", "Our Team", "Careers", "Case Studies", "Contact Us"],
              }
            ].map((section, index) => (
              <div key={index} className="space-y-4 sm:space-y-6">
                <h3 className="text-base sm:text-lg font-bold text-white">{section.title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
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
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                <Link href="#" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</Link>
                <Link href="#" className="hover:text-amber-400 transition-colors duration-300">Terms of Service</Link>
                <Link href="#" className="hover:text-amber-400 transition-colors duration-300">Case Studies</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  )
} 