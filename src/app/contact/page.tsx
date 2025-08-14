'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  Users, 
  Globe, 
  Star, 
  ArrowRight,
  ChevronRight,
  Calendar,
  Briefcase,
  CheckCircle,
  Building,
  Headphones,
  Zap
} from 'lucide-react';
import MobileNav from '@/components/MobileNav';

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    serviceType: 'general'
  });

  // Set theme on component mount
  useEffect(() => {
    document.documentElement.classList.remove('page-blue', 'page-green', 'page-lightbrown');
    document.body.classList.remove('page-blue', 'page-green', 'page-lightbrown');
    
    document.documentElement.classList.add('page-cream');
    document.body.classList.add('page-cream');

    return () => {
      document.documentElement.classList.remove('page-cream');
      document.body.classList.remove('page-cream');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Navigation Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'bg-transparent'
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
                  className="relative text-gray-700 hover:text-amber-700 font-medium transition-all duration-300 group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-700 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
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
          .runner-line { position: absolute; top: 0; left: -35%; height: 3.2px; width: 35%; animation: navrunner 2.8s linear infinite; }
          @keyframes navrunner { from { left: -35%; } to { left: 100%; } }
        `}</style>
      </motion.header>

      {/* Spacer under fixed header */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 hover:from-amber-200 hover:to-orange-200 transition-all duration-300 transform hover:scale-105 shadow-md mb-4 sm:mb-6">
                  <MessageSquare className="w-3 h-3 mr-1" />
                Get in Touch
                </Badge>
              <h1 className="hero-text font-bold text-gray-900 leading-tight">
                <span className="text-2xl sm:text-3xl lg:text-4xl">Connect with Our</span>
                <br />
                <span className="contact-hero-title text-3xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Engineering Experts</span>
                </h1>
              <p className="contact-hero-subtitle hero-subtitle text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4 sm:mt-6 px-4 sm:px-0">
                Ready to transform your infrastructure projects? Our team of experts is here to provide consultation, support, and innovative solutions tailored to your needs.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-8 sm:mt-12"
            >
              {[
                { number: '24/7', label: 'Support Available', icon: Headphones },
                { number: '<2h', label: 'Response Time', icon: Clock },
                { number: '15+', label: 'Offices Nationwide', icon: Building },
                { number: '500+', label: 'Projects Delivered', icon: CheckCircle }
                ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer bg-white/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 hover:bg-white/80 transition-all duration-300"
                >
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-700 mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <div className="contact-stat-number text-xl sm:text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-amber-700">
                      {stat.number}
                  </div>
                  <div className="contact-stat-label text-xs sm:text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800">
              <Phone className="w-3 h-3 mr-1" />
              Contact Methods
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Choose Your Preferred <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Communication</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach our team of experts for immediate assistance, project consultations, and partnership opportunities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Phone,
                title: "Phone Support",
                description: "Direct line to our technical experts",
                contact: "+966 11 234 5678",
                subtext: "Available 24/7",
                color: "amber"
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "Detailed inquiries and documentation",
                contact: "contact@lsme.sa",
                subtext: "Response within 2 hours",
                color: "amber"
              },
              {
                icon: MessageSquare,
                title: "Live Chat",
                description: "Instant messaging with our team",
                contact: "Chat Now",
                subtext: "Online support available",
                color: "amber"
              },
              {
                icon: Calendar,
                title: "Schedule Meeting",
                description: "Book consultation with experts",
                contact: "Book Now",
                subtext: "Virtual or in-person",
                color: "amber"
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="contact-method-card group h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50/50">
                  <CardHeader className="text-center pb-2">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110 ${
                      method.color === 'amber' 
                        ? 'bg-amber-100 text-amber-800 group-hover:bg-amber-200' 
                        : 'bg-orange-100 text-orange-800 group-hover:bg-orange-200'
                    }`}>
                      <method.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                    <CardTitle className="contact-method-title text-lg sm:text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                      {method.title}
                  </CardTitle>
                    <CardDescription className="contact-method-description text-sm text-gray-600">
                      {method.description}
                  </CardDescription>
                </CardHeader>
                  <CardContent className="text-center">
                    <div className="font-semibold text-gray-900 mb-1">{method.contact}</div>
                    <div className="text-xs text-gray-500">{method.subtext}</div>
                    <Button variant="ghost" className="w-full mt-3 group-hover:bg-amber-50 group-hover:text-amber-800 transition-all duration-300">
                      Contact Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800">
                  <Send className="w-3 h-3 mr-1" />
                  Send Message
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  Tell Us About Your <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Project</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Fill out the form below and our experts will get back to you within 24 hours with tailored solutions for your infrastructure needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="contact-form-label block text-sm font-medium text-gray-700">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="contact-form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="contact-form-label block text-sm font-medium text-gray-700">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="contact-form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors duration-200"
                      placeholder="+966 XX XXX XXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company/Organization</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors duration-200"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">Service Interest</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors duration-200"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="electrical">Electrical Engineering</option>
                    <option value="electronics">Electronics Systems</option>
                    <option value="mechanical">Mechanical Engineering</option>
                    <option value="rd">R&D Services</option>
                    <option value="supply-chain">Supply Chain</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject *</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors duration-200"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none resize-none transition-colors duration-200"
                    placeholder="Please provide detailed information about your project requirements, timeline, and any specific technical needs..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-800 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Why Choose LSME?</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Zap,
                      title: "Rapid Response",
                      description: "Get expert consultation within 24 hours of your inquiry."
                  },
                  {
                    icon: Users,
                      title: "Expert Team",
                      description: "Access to specialized engineers and technical consultants."
                  },
                  {
                    icon: Globe,
                      title: "Nationwide Coverage",
                      description: "Local support across all major cities in Saudi Arabia."
                    },
                    {
                      icon: CheckCircle,
                      title: "Proven Track Record",
                      description: "Successfully delivered 500+ infrastructure projects."
                  }
                ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="bg-amber-100 p-3 rounded-lg flex-shrink-0 transition-all duration-300 group-hover:bg-amber-200 group-hover:scale-110">
                        <feature.icon className="w-5 h-5 text-amber-800" />
                    </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                        {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Emergency Support</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Need immediate assistance? Our emergency hotline is available 24/7 for critical infrastructure issues.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-amber-800" />
                    <span className="font-semibold text-gray-900">+966 11 EMERGENCY</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-amber-800" />
                    <span className="font-semibold text-gray-900">emergency@lsme.sa</span>
                  </div>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800">
              <MapPin className="w-3 h-3 mr-1" />
              Our Locations
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Nationwide <span className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Presence</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With offices across Saudi Arabia, we provide local expertise and support wherever your projects are located.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                city: "Riyadh",
                title: "Headquarters & R&D Center",
                address: "King Fahd Road, Olaya District",
                phone: "+966 11 234 5678",
                services: ["Full Engineering Services", "R&D Laboratory", "Executive Offices"],
                image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=400&auto=format&fit=crop"
              },
              {
                city: "Jeddah",
                title: "Western Region Office",
                address: "Corniche Road, Al Hamra District",
                phone: "+966 12 345 6789",
                services: ["Regional Support", "Coastal Projects", "Port Infrastructure"],
                image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=400&auto=format&fit=crop"
              },
              {
                city: "Dammam",
                title: "Eastern Province Center",
                address: "King Abdulaziz Port Area",
                phone: "+966 13 456 7890",
                services: ["Industrial Systems", "Petrochemical Support", "Technical Services"],
                image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=400&auto=format&fit=crop"
              }
            ].map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="contact-office-card group h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                      src={office.image}
                      alt={`LSME ${office.city} Office`}
                    width={400}
                      height={250}
                      className="w-full h-48 sm:h-56 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-100 text-amber-800">
                        {office.city}
                    </Badge>
                  </div>
                </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="contact-office-title text-lg sm:text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                    {office.title}
                  </CardTitle>
                    <CardDescription className="contact-office-description text-sm text-gray-600">
                      {office.address}
                  </CardDescription>
                </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <Phone className="w-4 h-4 text-amber-800" />
                      <span>{office.phone}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Services Available:</h4>
                      <ul className="space-y-1">
                        {office.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center space-x-2 text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="ghost" className="w-full group-hover:bg-amber-50 group-hover:text-amber-800 transition-all duration-300">
                      Get Directions
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-amber-700 to-orange-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-6 sm:space-y-8"
          >
              <Badge className="bg-white/20 text-white hover:bg-white/30 transition-all duration-300">
                <Star className="w-3 h-3 mr-1" />
              Ready to Engineer the Future?
              </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold px-4 sm:px-0">
              Ready to Start Your Project?
              </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Join hundreds of satisfied clients who trust LSME for their infrastructure needs. Let's build the future together.
              </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                Start Your Engineering Project
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-amber-700 transition-all duration-300 transform hover:scale-105">
                Schedule Technical Consultation
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {[
                { icon: Clock, text: "24/7 Support Available" },
                { icon: Zap, text: "Rapid Response Team" },
                { icon: Globe, text: "Nationwide Coverage" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center space-x-3 text-white hover:text-gray-200 transition-colors duration-300 group cursor-pointer">
                  <item.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
        className="bg-gray-900 text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="space-y-4 sm:space-y-6 animate-fade-in-up sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Building className="h-8 w-8 sm:h-10 sm:w-10 text-amber-400 transition-colors duration-300 group-hover:text-amber-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold">LSME</span>
                  <div className="text-sm text-gray-400">Engineering Services</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Your trusted partner for innovative engineering solutions across Saudi Arabia. Building the future, one project at a time.
              </p>
              <div className="flex space-x-4 sm:space-x-6 pt-2 sm:pt-4">
                <div className="bg-gray-800 p-2 sm:p-3 rounded-xl hover:bg-amber-800 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
                </div>
                <div className="bg-gray-800 p-2 sm:p-3 rounded-xl hover:bg-amber-800 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
                </div>
                <div className="bg-gray-800 p-2 sm:p-3 rounded-xl hover:bg-amber-800 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
                </div>
              </div>
            </div>

            {[
              {
                title: "Contact Information",
                links: ["24/7 Support Hotline", "Emergency Services", "Project Inquiries", "Partnership Requests", "General Information"],
                delay: "200ms"
              },
              {
                title: "Office Locations",
                links: ["Riyadh Headquarters", "Jeddah Regional Office", "Dammam Technical Center", "Field Service Centers", "Mobile Support Units"],
                delay: "400ms"
              },
              {
                title: "Support Services",
                links: ["Technical Documentation", "Training Programs", "Maintenance Support", "Consultation Services", "Emergency Response"],
                delay: "600ms"
              }
            ].map((section, index) => (
              <div key={index} className="space-y-4 sm:space-y-6 animate-fade-in-up" style={{ animationDelay: section.delay }}>
                <h3 className="text-base sm:text-lg font-bold text-white">{section.title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm sm:text-base">
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
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
                <Link href="#" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</Link>
                <Link href="#" className="hover:text-amber-400 transition-colors duration-300">Terms of Service</Link>
                <Link href="#" className="hover:text-amber-400 transition-colors duration-300">ISO Certifications</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
} 