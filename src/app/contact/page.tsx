'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Train, MapPin, Clock, Shield, Users, Zap, Phone, Mail, MapIcon, Microscope, Cog, Database, Wrench, ChevronRight, Star, Award, Globe, Calendar, FileText, TrendingUp, MessageSquare, Send, User } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import MobileNav from "@/components/MobileNav"
import { motion } from 'framer-motion'

export default function ContactPage() {
  // Set theme on component mount
  useEffect(() => {
    // Force remove any existing theme classes
    document.documentElement.classList.remove('page-blue', 'page-green', 'page-cream')
    document.body.classList.remove('page-blue', 'page-green', 'page-cream')
    
    // Add light brown theme
    document.documentElement.classList.add('page-lightbrown')
    document.body.classList.add('page-lightbrown')

    return () => {
      document.documentElement.classList.remove('page-lightbrown')
      document.body.classList.remove('page-lightbrown')
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-white overflow-x-hidden page-lightbrown"
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
                  <Cog className="h-10 w-10 text-yellow-800 transition-colors duration-300 group-hover:text-yellow-900" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold text-gray-900 tracking-tight">LSME</span>
                  <div className="text-xs text-gray-500 font-medium">Engineering Solutions</div>
                </div>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <MobileNav theme="lightbrown" />
            
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
                  className="relative text-gray-700 hover:text-yellow-800 font-medium transition-all duration-300 group py-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-800 to-amber-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="hover:bg-yellow-50 hover:border-yellow-300 transition-all duration-300">
                Get Quote
              </Button>
              <Button className="bg-gradient-to-r from-yellow-800 to-amber-800 hover:from-yellow-900 hover:to-amber-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
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
        className="relative bg-gradient-to-br from-yellow-50 via-stone-50 to-amber-50 py-24 lg:py-32 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-200/30 to-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 hover:from-yellow-200 hover:to-amber-200 transition-all duration-300 transform hover:scale-105 shadow-md">
                  <MessageSquare className="w-3 h-3 mr-1" />
                  Connect With Our Experts
                </Badge>
                <h1 className="hero-text text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Get in Touch 
                  <span className="bg-gradient-to-r from-yellow-800 to-amber-800 bg-clip-text text-transparent"> With LSME</span>
                  <br />Engineering Solutions
                </h1>
                <p className="hero-subtitle text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Ready to transform your infrastructure? Contact our team of experts for consultation, project inquiries, and partnership opportunities across Saudi Arabia.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-yellow-800 to-amber-800 hover:from-yellow-900 hover:to-amber-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                  Schedule Consultation
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="hover:bg-yellow-50 hover:border-yellow-300 transition-all duration-300 transform hover:scale-105">
                  Request Proposal
                </Button>
              </div>

              <div className="stats-grid grid grid-cols-3 gap-8 pt-8">
                {[
                  { number: '24/7', label: 'Expert Support', delay: '0ms' },
                  { number: '<24h', label: 'Response Time', delay: '200ms' },
                  { number: '15+', label: 'Offices Nationwide', delay: '400ms' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer" style={{ animationDelay: stat.delay }}>
                    <div className="text-4xl font-bold text-gray-900 transition-all duration-300 group-hover:text-yellow-800 group-hover:scale-110">
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
                  alt="LSME Contact Center - Professional customer service and technical support team"
                  width={800}
                  height={600}
                  className="rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="hidden md:block absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-float">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-3 rounded-xl">
                    <Phone className="h-8 w-8 text-yellow-800" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">24/7 Support</div>
                    <div className="text-xs text-gray-600">Always Available</div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-3 rounded-xl">
                    <Mail className="h-8 w-8 text-amber-800" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Quick Response</div>
                    <div className="text-xs text-gray-600">Expert Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Methods Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 mb-20 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 hover:from-amber-200 hover:to-yellow-200 transition-all duration-300">
              <Globe className="w-3 h-3 mr-1" />
              Contact Methods
            </Badge>
            <h2 className="section-title text-4xl lg:text-5xl font-bold text-gray-900">
              Multiple Ways to <span className="bg-gradient-to-r from-yellow-800 to-amber-800 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose the communication method that works best for you. Our dedicated team is ready to assist with technical inquiries, project consultations, and partnership opportunities.
            </p>
          </div>

          <div className="service-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Phone Support",
                description: "Speak directly with our technical experts for immediate assistance and consultation.",
                features: ["24/7 Availability", "Technical Hotline", "Emergency Support", "Multilingual Service"],
                color: "yellow",
                delay: "0ms"
              },
              {
                icon: Mail,
                title: "Email Communications",
                description: "Send detailed inquiries and receive comprehensive responses from our specialist teams.",
                features: ["Technical Inquiries", "Project Proposals", "Partnership Requests", "Documentation"],
                color: "amber",
                delay: "200ms"
              },
              {
                icon: MapPin,
                title: "Regional Offices",
                description: "Visit our offices across Saudi Arabia for face-to-face meetings and consultations.",
                features: ["Riyadh Headquarters", "Regional Branches", "Site Visits", "In-Person Meetings"],
                color: "yellow",
                delay: "400ms"
              },
              {
                icon: MessageSquare,
                title: "Online Support Portal",
                description: "Access our digital platform for project tracking, documentation, and real-time updates.",
                features: ["Project Dashboard", "Document Sharing", "Progress Tracking", "Live Chat"],
                color: "amber",
                delay: "600ms"
              },
              {
                icon: Calendar,
                title: "Scheduled Consultations",
                description: "Book dedicated time slots with our experts for detailed project discussions.",
                features: ["Expert Consultations", "Technical Reviews", "Project Planning", "Strategy Sessions"],
                color: "yellow",
                delay: "800ms"
              },
              {
                icon: Users,
                title: "Partnership Hub",
                description: "Connect with our business development team for strategic partnerships and collaborations.",
                features: ["Strategic Alliances", "Joint Ventures", "Research Partnerships", "Technology Transfer"],
                color: "amber",
                delay: "1000ms"
              }
            ].map((service, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/50 animate-fade-in-up h-full flex flex-col" style={{ animationDelay: service.delay }}>
                <CardHeader className="pb-4">
                  <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-yellow-800 transition-colors duration-300">
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
                  <Button variant="ghost" className="w-full mt-6 group-hover:bg-yellow-50 group-hover:text-yellow-800 transition-all duration-300">
                    Get in Touch
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-gradient-to-br from-gray-50 to-yellow-50/30 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-yellow-200/20 to-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-yellow-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="feature-grid grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative animate-fade-in-left">
              <div className="relative group overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=600&auto=format&fit=crop"
                  alt="LSME Contact Form - Modern office environment with professional consultation setup"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Achievement Badge */}
              <div className="hidden md:block absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-800">24/7</div>
                  <div className="text-xs text-gray-600">Support Available</div>
                </div>
              </div>
            </div>

            <div className="space-y-10 animate-fade-in-right">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800">
                  <Send className="w-3 h-3 mr-1" />
                  Send Us a Message
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Start Your Project 
                  <span className="bg-gradient-to-r from-yellow-800 to-amber-800 bg-clip-text text-transparent"> Today</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Fill out our contact form and our experts will reach out within 24 hours to discuss your infrastructure needs and project requirements.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: User,
                    title: "Project Consultation",
                    description: "Get expert advice on infrastructure projects, technical feasibility, and implementation strategies.",
                    color: "yellow"
                  },
                  {
                    icon: Shield,
                    title: "Technical Support",
                    description: "Access our technical helpdesk for system troubleshooting, maintenance guidance, and operational support.",
                    color: "amber"
                  },
                  {
                    icon: Users,
                    title: "Partnership Opportunities",
                    description: "Explore collaboration opportunities, joint ventures, and strategic partnerships in technology and engineering.",
                    color: "yellow"
                  },
                  {
                    icon: Globe,
                    title: "Research Collaboration",
                    description: "Connect with our R&D team for research partnerships, innovation projects, and technology development.",
                    color: "amber"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-6 group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="bg-gray-100 p-4 rounded-2xl flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <feature.icon className="h-6 w-6 text-black" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-yellow-800 transition-colors duration-300">
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
                <Button size="lg" className="bg-gradient-to-r from-yellow-800 to-amber-800 hover:from-yellow-900 hover:to-amber-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                  Contact Our Team
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Office Locations Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20 animate-fade-in-up">
            <Badge className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800">
              <MapPin className="w-3 h-3 mr-1" />
              Our Locations
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Nationwide <span className="bg-gradient-to-r from-yellow-800 to-amber-800 bg-clip-text text-transparent">Presence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With offices and service centers across Saudi Arabia, LSME provides local support and expertise wherever your projects take you.
            </p>
          </div>

          <div className="project-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=400&auto=format&fit=crop",
                title: "Riyadh Headquarters",
                description: "Our main office and R&D center, housing our executive team, technical specialists, and innovation labs.",
                address: "King Fahd Road, Riyadh",
                services: "Full Services",
                delay: "0ms"
              },
              {
                image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=400&auto=format&fit=crop",
                title: "Jeddah Regional Office",
                description: "Western region operations center serving the Makkah Province with specialized coastal infrastructure expertise.",
                address: "Corniche Road, Jeddah",
                services: "Regional Support",
                delay: "200ms"
              },
              {
                image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=400&auto=format&fit=crop",
                title: "Dammam Technical Center",
                description: "Eastern Province facility specializing in industrial systems and petrochemical transport solutions.",
                address: "King Abdulaziz Port, Dammam",
                services: "Technical Support",
                delay: "400ms"
              }
            ].map((office, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white to-gray-50/50 animate-fade-in-up overflow-hidden h-full flex flex-col" style={{ animationDelay: office.delay }}>
                <div className="relative overflow-hidden">
                  <Image
                    src={office.image || "/placeholder.svg"}
                    alt={office.title}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-100 text-yellow-800">
                      {office.services}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-4 flex-1">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-yellow-800 transition-colors duration-300 line-clamp-2">
                    {office.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                    {office.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">{office.address}</span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-yellow-50 group-hover:text-yellow-800 transition-all duration-300 p-2">
                      <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="hover:bg-yellow-50 hover:border-yellow-300 hover:text-yellow-800 transition-all duration-300 transform hover:scale-105">
              View All Locations
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
        className="py-24 bg-gradient-to-br from-yellow-800 via-amber-800 to-yellow-900 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-800/90 to-amber-800/90"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-10 animate-fade-in-up">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 transition-all duration-300">
                <Star className="w-3 h-3 mr-1" />
                Ready to Connect?
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Let's Build the Future of
                <br />
                <span className="text-yellow-200">Infrastructure</span>
              </h2>
              <p className="text-xl text-yellow-100 max-w-4xl mx-auto leading-relaxed">
                Join us in revolutionizing Saudi Arabia's infrastructure. Contact our experts today and discover how LSME can transform your vision into reality.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-yellow-800 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                Start Your Project
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-yellow-800 transition-all duration-300 transform hover:scale-105">
                Schedule Call
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              {[
                { icon: Phone, text: "24/7 Expert Support" },
                { icon: Mail, text: "Quick Response Team" },
                { icon: Globe, text: "Nationwide Coverage" }
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
                  <Cog className="h-10 w-10 text-yellow-400 transition-colors duration-300 group-hover:text-yellow-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold">LSME</span>
                  <div className="text-sm text-gray-400">Engineering Solutions</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Connecting Saudi Arabia through innovative engineering solutions. Your trusted partner for technical excellence and sustainable infrastructure.
              </p>
              <div className="flex space-x-6 pt-4">
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-yellow-800 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Phone className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-yellow-800 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Mail className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="bg-gray-800 p-3 rounded-xl hover:bg-yellow-800 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Globe className="h-5 w-5 text-yellow-400" />
                </div>
              </div>
            </div>

            {[
              {
                title: "Contact Information",
                links: ["24/7 Support Hotline", "Technical Emergency", "Project Inquiries", "Partnership Requests", "General Information"],
                delay: "200ms"
              },
              {
                title: "Office Locations",
                links: ["Riyadh Headquarters", "Jeddah Regional Office", "Dammam Technical Center", "Field Service Centers", "Remote Support"],
                delay: "400ms"
              },
              {
                title: "Support Services",
                links: ["Technical Documentation", "Training Programs", "Maintenance Support", "Consultation Services", "Emergency Response"],
                delay: "600ms"
              }
            ].map((section, index) => (
              <div key={index} className="space-y-6 animate-fade-in-up" style={{ animationDelay: section.delay }}>
                <h3 className="text-lg font-bold text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 transform inline-block">
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
                <Link href="#" className="hover:text-yellow-400 transition-colors duration-300">Privacy Policy</Link>
                <Link href="#" className="hover:text-yellow-400 transition-colors duration-300">Terms of Service</Link>
                <Link href="#" className="hover:text-yellow-400 transition-colors duration-300">ISO Certifications</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  )
} 