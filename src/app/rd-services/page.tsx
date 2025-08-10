'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Train, MapPin, Clock, Shield, Users, Zap, Phone, Mail, MapIcon, Microscope, Cog, Database, Wrench, ChevronRight, Star, Award, Globe, Calendar, FileText, TrendingUp, MessageSquare, Send, User, Brain, Lightbulb, Beaker, Cpu, Wifi, Smartphone, Settings2, TestTube, Hammer, Clipboard } from 'lucide-react'
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
        className={`fixed top-0 inset-x-0 z-50 border-b bg-white transition-all duration-300`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex ${isScrolled ? 'h-28' : 'h-24'} items-center justify-between transition-all duration-300`}>
            {/* Desktop Logo */}
            <div className={`hidden md:flex items-center space-x-4 group transition-transform duration-300 ${isScrolled ? 'scale-[0.975]' : 'scale-100'} origin-left`}>
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
              <Button variant="outline" className="hover:bg-amber-50 hover:border-amber-300 transition-all duration-300 border-amber-200 text-amber-700">
                Get Quote
              </Button>
              <Button className="bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-white">
                Portal Login
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Spacer under fixed header */}
      <div style={{ height: isScrolled ? 112 : 96 }} />

      {/* Page Header Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 py-24 lg:py-32 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="space-y-6">
            <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 hover:from-amber-200 hover:to-orange-200 transition-all duration-300 transform hover:scale-105 shadow-md">
              <Brain className="w-3 h-3 mr-1" />
              Comprehensive R&D Services
            </Badge>
            {/* Hero title with better mobile responsiveness */}
            <h1 className="hero-text text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Advanced <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Research & Development</span>
              <br />Services
            </h1>
            <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive engineering and innovation services driving breakthrough solutions from concept to implementation across electrical, electronics, and mechanical disciplines.
            </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* R&D Services Grid */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
           <div className="space-y-20">
            {[
              {
                icon: Lightbulb,
                title: "Product Design and Prototyping",
                description: "End-to-end product development from conceptual design to functional prototypes for systems and components.",
                features: [
                  "Conceptual Design & Engineering",
                  "3D Modeling & CAD Development",
                  "Rapid Prototyping & Testing",
                  "Design Validation & Optimization",
                  "Material Selection & Analysis",
                  "Cost-Effective Design Solutions"
                ],
                details: "Our product design and prototyping services transform innovative ideas into tangible engineering solutions. We utilize advanced CAD software, 3D printing, and rapid prototyping technologies to create functional prototypes that meet stringent industry standards. Our multidisciplinary team ensures optimal design for manufacturability, safety, and performance.",
                imagePlaceholder: "3D Design & Prototyping Lab",
                delay: "0ms",
                image: "/images/rd-services/product-design.jpg"
              },
              {
                icon: Cpu,
                title: "Embedded Systems Development",
                description: "Custom embedded systems and firmware development for control, monitoring, and automation applications.",
                features: [
                  "Microcontroller Programming",
                  "Real-Time Operating Systems",
                  "Hardware-Software Integration",
                  "Signal Processing Systems",
                  "Safety-Critical Software",
                  "Firmware Development & Testing"
                ],
                details: "We develop sophisticated embedded systems that form the backbone of modern infrastructure. Our expertise spans microcontroller programming, real-time systems, and safety-critical software development. We ensure reliable, efficient, and secure embedded solutions that meet industry safety standards and certification requirements.",
                imagePlaceholder: "Embedded Systems Lab",
                delay: "100ms",
                image: "/images/rd-services/embedded-systems.jpg"
              },
              {
                icon: Settings2,
                title: "Industrial Automation and Controls",
                description: "Advanced automation solutions and control systems for operations, maintenance, and infrastructure management.",
                features: [
                  "PLC Programming & Configuration",
                  "SCADA System Development",
                  "Industrial Network Design",
                  "Process Automation Solutions",
                  "Human Machine Interface (HMI)",
                  "Control System Integration"
                ],
                details: "Our industrial automation services leverage cutting-edge technologies to optimize operations. We design and implement comprehensive control systems that enhance efficiency, safety, and reliability. From PLC programming to SCADA systems, we deliver automation solutions that streamline operations and reduce manual intervention.",
                imagePlaceholder: "Automation Control Center",
                delay: "200ms",
                image: "/images/rd-services/automation.jpg"
              },
              {
                icon: Cog,
                title: "Mechanical Design and Simulation",
                description: "Comprehensive mechanical engineering services including design, analysis, and simulation for components and systems.",
                features: [
                  "Finite Element Analysis (FEA)",
                  "Computational Fluid Dynamics",
                  "Stress & Vibration Analysis",
                  "Thermal Simulation Studies",
                  "Mechanical Component Design",
                  "Performance Optimization"
                ],
                details: "We provide advanced mechanical design and simulation services to ensure optimal performance and safety of complex systems. Using state-of-the-art simulation software, we conduct thorough analysis of stress, vibration, thermal behavior, and fluid dynamics to optimize designs before physical implementation.",
                imagePlaceholder: "Mechanical Simulation Lab",
                delay: "300ms",
                image: "/images/rd-services/mechanical-simulation.jpg"
              },
              {
                icon: Zap,
                title: "Electrical System Design",
                description: "Complete electrical engineering solutions for power systems, control circuits, and electrical infrastructure.",
                features: [
                  "Power System Design & Analysis",
                  "Electrical Circuit Development",
                  "Motor Control Systems",
                  "Protection System Design",
                  "Energy Management Solutions",
                  "Electrical Safety Assessment"
                ],
                details: "Our electrical system design services cover all aspects of electrical infrastructure. From high-voltage power systems to low-voltage control circuits, we ensure reliable, efficient, and safe electrical solutions. Our designs comply with international standards and incorporate advanced protection and monitoring systems.",
                imagePlaceholder: "Electrical Design Lab",
                delay: "400ms",
                image: "/images/rd-services/eletrical-design.jpg"
              },
              {
                icon: Wifi,
                title: "Communication and IoT Integration",
                description: "Advanced communication systems and IoT solutions for smart infrastructure and connected operations.",
                features: [
                  "Wireless Communication Networks",
                  "IoT Sensor Integration",
                  "Data Acquisition Systems",
                  "Network Security Solutions",
                  "Cloud Connectivity Platforms",
                  "Real-Time Monitoring Systems"
                ],
                details: "We develop comprehensive communication and IoT solutions that enable smart operations. Our systems provide real-time data collection, secure wireless communication, and intelligent monitoring capabilities. We integrate various sensors and devices to create connected ecosystems that enhance operational efficiency.",
                imagePlaceholder: "IoT & Communication Lab",
                delay: "500ms",
                image: "/images/rd-services/iot-communication.jpg"
              },
              {
                icon: TestTube,
                title: "Material and Process Innovation",
                description: "Advanced materials research and innovative manufacturing processes for enhanced component performance and durability.",
                features: [
                  "Advanced Materials Research",
                  "Composite Material Development",
                  "Surface Treatment Technologies",
                  "Corrosion Resistance Solutions",
                  "Manufacturing Process Optimization",
                  "Material Testing & Validation"
                ],
                details: "Our materials and process innovation services focus on developing advanced materials and manufacturing techniques that enhance system performance. We research new composites, surface treatments, and processing methods that improve durability, reduce weight, and extend component lifespan while maintaining safety standards.",
                imagePlaceholder: "Materials Research Lab",
                delay: "600ms",
                image: "/images/rd-services/materials-research..jpg"
              },
              {
                icon: Clipboard,
                title: "Testing and Validation",
                description: "Comprehensive testing and validation services ensuring systems meet safety, performance, and regulatory requirements.",
                features: [
                  "Performance Testing Protocols",
                  "Safety Compliance Testing",
                  "Environmental Testing",
                  "Reliability & Durability Testing",
                  "Regulatory Compliance Validation",
                  "Quality Assurance Programs"
                ],
                details: "We provide rigorous testing and validation services to ensure systems meet the highest standards of safety, performance, and reliability. Our comprehensive testing protocols cover environmental conditions, safety requirements, and regulatory compliance, providing confidence in system performance across all operating conditions.",
                imagePlaceholder: "Testing & Validation Facility",
                delay: "700ms",
                image: "/images/rd-services/testing-validation.jpg"
              },
              {
                icon: Hammer,
                title: "Custom Equipment Development",
                description: "Specialized equipment design and development for unique applications and custom engineering requirements.",
                features: [
                  "Custom Machinery Design",
                  "Specialized Tool Development",
                  "Unique Application Solutions",
                  "Equipment Modification Services",
                  "Prototype Equipment Building",
                  "Custom Manufacturing Support"
                ],
                details: "We specialize in developing custom equipment and machinery for unique applications. Our team designs and builds specialized tools, machinery, and equipment tailored to specific operational requirements. From one-off solutions to small-scale production, we deliver custom engineering excellence.",
                imagePlaceholder: "Custom Equipment Workshop",
                delay: "800ms",
                image: "/images/rd-services/custom-equipment.jpg"
              },
              {
                icon: Award,
                title: "Innovation Consulting and IP Support",
                description: "Strategic innovation consulting and intellectual property support services for technology development and commercialization.",
                features: [
                  "Technology Innovation Strategy",
                  "Patent Research & Filing",
                  "IP Portfolio Management",
                  "Technology Transfer Support",
                  "Innovation Process Optimization",
                  "Commercialization Consulting"
                ],
                details: "Our innovation consulting services help organizations maximize their R&D investment and protect their intellectual property. We provide strategic guidance on technology development, patent filing, IP management, and commercialization strategies. Our expertise ensures that innovations are properly protected and successfully brought to market.",
                imagePlaceholder: "Innovation Consulting Center",
                delay: "900ms",
                image: "/images/rd-services/innovation-consulting.jpg"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: parseInt(service.delay) / 1000 + 0.8, duration: 0.8, ease: "easeOut" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}
              >
                {/* Content Section */}
                <div className={`space-y-6 lg:space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''} animate-fade-in-up`}>
                  <div className="space-y-4 lg:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                      <div className="bg-amber-100 p-3 lg:p-4 rounded-2xl w-fit">
                        <service.icon className="h-8 w-8 lg:h-10 lg:w-10 text-amber-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight break-words">
                          {service.title}
                        </h3>
                        <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 mt-2">
                          Service #{index + 1}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                      {service.details}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg lg:text-xl font-bold text-gray-900">Key Capabilities:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3 text-gray-700">
                          <div className="w-2 h-2 bg-amber-700 rounded-full flex-shrink-0 mt-2"></div>
                          <span className="text-sm lg:text-base break-words">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:gap-4">
                    <Button className="bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm sm:text-base w-full sm:w-auto">
                      <span className="truncate">Learn More</span>
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
                    </Button>
                    <Button variant="outline" className="hover:bg-amber-50 hover:border-amber-300 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
                      Request Consultation
                    </Button>
                  </div>
                </div>

                {/* Image Section */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''} animate-fade-in-right`}>
                  <div className="relative group overflow-hidden rounded-3xl">
                    <Image
                      src={service.image}
                      alt={service.imagePlaceholder}
                      width={800}
                      height={400}
                      className="w-full h-[400px] object-cover rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>
            ))}
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
                Ready to Innovate?
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Transform Your Projects with
                <br />
                <span className="text-amber-200">Advanced R&D Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
                Partner with LSME's R&D team to bring innovative solutions to life. From concept to implementation, we provide comprehensive engineering services that drive technological advancement.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center w-full max-w-md mx-auto">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group w-full sm:w-auto text-sm sm:text-base">
                <span className="truncate">Start Your R&D Project</span>
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-amber-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base">
                Schedule Consultation
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              {[
                { icon: Brain, text: "10 Specialized R&D Services" },
                { icon: Users, text: "Expert Engineering Team" },
                { icon: Award, text: "Innovation Excellence" }
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
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="brand-font text-2xl font-normal">LSME</span>
                  <div className="text-sm text-gray-400">Engineering Services</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Leading innovation through comprehensive R&D services and advanced engineering solutions across disciplines.
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
                title: "R&D Services",
                links: ["Product Design", "Embedded Systems", "Industrial Automation", "Mechanical Design", "Electrical Systems"],
                delay: "200ms"
              },
              {
                title: "Advanced Services",
                links: ["IoT Integration", "Material Innovation", "Testing & Validation", "Custom Equipment", "IP Support"],
                delay: "400ms"
              },
              {
                title: "Resources",
                links: ["Technical Documentation", "R&D Portfolio", "Innovation Lab", "Engineering Team", "Contact Support"],
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
              <div className="text-gray-400">
                <p>&copy; 2024 LSME Engineering Solutions. All rights reserved.</p>
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