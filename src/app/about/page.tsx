'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Train, MapPin, Clock, Shield, Users, Zap, Phone, Mail, MapIcon, Microscope, Cog, Database, Wrench, ChevronRight, Star, Award, Globe } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import MobileNav from "@/components/MobileNav"

export default function AboutPage() {
  useEffect(() => {
    document.documentElement.classList.add('page-blue')
    document.documentElement.classList.remove('page-green')
    
    return () => {
      document.documentElement.classList.remove('page-blue')
    }
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden page-blue">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Desktop Logo */}
            <div className="hidden md:flex items-center space-x-4 group">
              <div className="flex items-center space-x-3 transition-transform duration-300 group-hover:scale-105">
                <div className="relative">
                  <Train className="h-10 w-10 text-blue-600 transition-colors duration-300 group-hover:text-blue-700" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">LSME</span>
                  <div className="text-xs text-gray-500 font-medium">Railway Solutions</div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <MobileNav theme="blue" />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: 'Home', href: '/' },
                { name: 'R&D Services', href: '#' },
                { name: 'Technical Solutions', href: '#' },
                { name: 'Projects', href: '#' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '#' }
              ].map((item, index) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group py-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
                Get Quote
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Portal Login
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 py-24 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-sky-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 transform hover:scale-105 shadow-md">
                  <Star className="w-3 h-3 mr-1" />
                  Leading Saudi Railway R&D Solutions
                </Badge>
                <h1 className="hero-text text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Pioneering 
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Railway Innovation</span>
                  <br />in Saudi Arabia
                </h1>
                <p className="hero-subtitle text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Advanced research, development, and technical services for railway infrastructure. Driving the future of transportation technology across the Kingdom.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                  Explore Our Services
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105">
                  View Research Projects
                </Button>
              </div>

              <div className="stats-grid grid grid-cols-3 gap-8 pt-8">
                {[
                  { number: '15+', label: 'Years of Excellence', delay: '0ms' },
                  { number: '200+', label: 'Technical Projects', delay: '200ms' },
                  { number: '50+', label: 'Research Papers', delay: '400ms' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer" style={{ animationDelay: stat.delay }}>
                    <div className="text-4xl font-bold text-gray-900 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-110">
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
                  alt="LSME Advanced Railway Research Laboratory - Modern train control center with advanced monitoring systems"
                  width={800}
                  height={600}
                  className="rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="hidden md:block absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-float">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-xl">
                    <Microscope className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Advanced R&D</div>
                    <div className="text-sm text-gray-600">Cutting-edge Research</div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-3 rounded-xl">
                    <Award className="h-8 w-8 text-sky-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">ISO Certified</div>
                    <div className="text-sm text-gray-600">Quality Assured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 mb-20 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 hover:from-sky-200 hover:to-blue-200 transition-all duration-300">
              <Globe className="w-3 h-3 mr-1" />
              Technical Excellence
            </Badge>
            <h2 className="section-title text-4xl lg:text-5xl font-bold text-gray-900">
              Our Core <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Technical Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive railway solutions combining advanced research, innovative technology, and decades of engineering expertise to transform Saudi Arabia's transportation infrastructure.
            </p>
          </div>

          <div className="service-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Microscope,
                title: "Railway Research & Development",
                description: "Advanced materials research, signal systems development, and next-generation railway technology innovation.",
                features: ["Materials Engineering", "Signal System R&D", "Safety Technology", "Performance Analytics"],
                color: "blue",
                delay: "0ms"
              },
              {
                icon: Cog,
                title: "Technical Consulting",
                description: "Expert consultation for railway infrastructure projects, system optimization, and technical feasibility studies.",
                features: ["Infrastructure Planning", "System Integration", "Risk Assessment", "Technical Audits"],
                color: "indigo",
                delay: "200ms"
              },
              {
                icon: Database,
                title: "Data Analytics & AI",
                description: "Big data solutions, predictive maintenance systems, and AI-powered railway optimization technologies.",
                features: ["Predictive Maintenance", "Traffic Optimization", "Safety Analytics", "Performance Monitoring"],
                color: "sky",
                delay: "400ms"
              },
              {
                icon: Wrench,
                title: "Engineering Services",
                description: "Complete engineering solutions from design to implementation for railway infrastructure projects.",
                features: ["System Design", "Project Management", "Quality Assurance", "Technical Support"],
                color: "cyan",
                delay: "600ms"
              },
              {
                icon: Shield,
                title: "Safety & Compliance",
                description: "Comprehensive safety assessments, regulatory compliance, and risk management for railway operations.",
                features: ["Safety Audits", "Compliance Testing", "Risk Management", "Certification Support"],
                color: "slate",
                delay: "800ms"
              },
              {
                icon: Zap,
                title: "Innovation Lab",
                description: "Cutting-edge research facility developing next-generation railway technologies and sustainable solutions.",
                features: ["Prototype Development", "Technology Testing", "Innovation Research", "Future Mobility"],
                color: "violet",
                delay: "1000ms"
              }
            ].map((service, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/50 animate-fade-in-up h-full flex flex-col" style={{ animationDelay: service.delay }}>
                <CardHeader className="pb-4">
                  <div className={`bg-gradient-to-br from-${service.color}-100 to-${service.color}-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
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
                        <div className={`w-2 h-2 bg-gradient-to-r from-${service.color}-500 to-${service.color}-600 rounded-full transition-all duration-300 group-hover:scale-125`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full mt-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-sky-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="feature-grid grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative animate-fade-in-left">
              <div className="relative group overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=600&auto=format&fit=crop"
                  alt="LSME Technical Research Center - Engineers working on railway infrastructure design and testing"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Achievement Badge */}
              <div className="hidden md:block absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-xs text-gray-600">Years Excellence</div>
                </div>
              </div>
            </div>

            <div className="space-y-10 animate-fade-in-right">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-blue-100 to-sky-100 text-blue-800">
                  <Award className="w-3 h-3 mr-1" />
                  Why Choose LSME
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Leading Saudi Arabia's 
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Railway Future</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  As Saudi Arabia's premier railway research and development company, we combine cutting-edge technology with deep local expertise to deliver world-class solutions.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: Clock,
                    title: "Proven Track Record",
                    description: "15+ years of successful project delivery with 99.8% client satisfaction rate and industry-leading innovation.",
                    color: "blue"
                  },
                  {
                    icon: Shield,
                    title: "Advanced Safety Standards",
                    description: "ISO 9001:2015 certified with comprehensive safety protocols exceeding international railway standards.",
                    color: "indigo"
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    description: "200+ certified engineers, researchers, and technical specialists with global railway expertise.",
                    color: "sky"
                  },
                  {
                    icon: Globe,
                    title: "Vision 2030 Aligned",
                    description: "Supporting Saudi Arabia's Vision 2030 with sustainable, innovative railway solutions for the future.",
                    color: "cyan"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-6 group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className={`bg-gradient-to-br from-${feature.color}-100 to-${feature.color}-200 p-4 rounded-2xl flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
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
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                  Discover Our Capabilities
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Research Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-violet-100 to-blue-100 text-violet-800">
              <Microscope className="w-3 h-3 mr-1" />
              Latest Research & Projects
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Pioneering <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Railway Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our latest research breakthroughs and technical projects that are shaping the future of railway transportation in Saudi Arabia and beyond.
            </p>
          </div>

          <div className="project-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=400&auto=format&fit=crop",
                title: "AI-Powered Railway Management System",
                description: "Revolutionary AI system for predictive maintenance and real-time optimization of railway operations across the Kingdom.",
                date: "December 2024",
                delay: "0ms"
              },
              {
                image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=400&auto=format&fit=crop",
                title: "Solar-Powered Railway Infrastructure",
                description: "Groundbreaking renewable energy integration for railway stations and maintenance facilities, supporting Vision 2030.",
                date: "November 2024",
                delay: "200ms"
              },
              {
                image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=400&auto=format&fit=crop",
                title: "Next-Gen High-Speed Rail Technology",
                description: "Advanced research into 400+ km/h railway systems with enhanced safety and efficiency for Saudi terrain.",
                date: "October 2024",
                delay: "400ms"
              }
            ].map((project, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white to-gray-50/50 animate-fade-in-up overflow-hidden h-full flex flex-col" style={{ animationDelay: project.delay }}>
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-4 flex-1">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">{project.date}</span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 p-2">
                      <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              View All Research Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/90 to-indigo-600/90"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-10 animate-fade-in-up">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 transition-all duration-300">
                <Star className="w-3 h-3 mr-1" />
                Ready to Innovate?
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Partner with Saudi Arabia's
                <br />
                <span className="text-blue-200">Railway Innovation Leaders</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Join us in revolutionizing railway technology. From research collaboration to technical consulting, let's build the future of transportation together.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                Start Your Project
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              {[
                { icon: Phone, text: "24/7 Technical Support" },
                { icon: Mail, text: "Expert Consultation" },
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Train className="h-10 w-10 text-blue-400 transition-colors duration-300 group-hover:text-blue-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold">LSME</span>
                  <div className="text-sm text-gray-400">Railway Solutions</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Leading Saudi Arabia's railway innovation through advanced research, development, and technical excellence. Building the future of transportation.
              </p>
              <div className="flex space-x-6 pt-4">
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Globe className="h-5 w-5 text-blue-400" />
                </div>
              </div>
            </div>

            {[
              {
                title: "R&D Services",
                links: ["Railway Research", "Technical Innovation", "Materials Engineering", "Safety Systems", "AI & Analytics"],
                delay: "200ms"
              },
              {
                title: "Technical Solutions",
                links: ["Engineering Consulting", "Project Management", "System Integration", "Quality Assurance", "Training Programs"],
                delay: "400ms"
              },
              {
                title: "Company",
                links: ["About LSME", "Research Team", "Careers", "Publications", "Contact Us"],
                delay: "600ms"
              }
            ].map((section, index) => (
              <div key={index} className="space-y-6 animate-fade-in-up" style={{ animationDelay: section.delay }}>
                <h3 className="text-lg font-bold text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
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
                <Link href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</Link>
                <Link href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</Link>
                <Link href="#" className="hover:text-blue-400 transition-colors duration-300">ISO Certifications</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 