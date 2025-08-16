'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Cpu, CircuitBoard, Settings2, Wifi, Smartphone, ChevronRight, Clock, Globe, Phone, Mail, Star, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MobileNav from '@/components/MobileNav'
import { handleEmailClick } from '@/lib/utils'

export default function ElectronicsPage() {
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
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-white overflow-x-hidden"
    >
      {/* Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1, boxShadow: isScrolled ? '0 8px 30px rgba(0,0,0,0.06)' : '0 0 0 rgba(0,0,0,0)' }}
        transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 border-b border-white/20 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-xl border-amber-200/30' : 'bg-white/70 backdrop-blur-md shadow-lg'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-20 md:h-28' : 'h-20 md:h-24'
          }`}>
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

            <MobileNav theme="cream" />

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="relative text-gray-700 hover:text-amber-700 font-medium transition-all duration-300 group py-2">Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-700 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
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
                    ].map((service) => (
                      <Link key={service.name} href={service.href} className="block px-4 py-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-all duration-200 transform hover:translate-x-1">
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
              ].map((item) => (
                <Link key={item.name} href={item.href} className="relative text-gray-700 hover:text-amber-700 font-medium transition-all duration-300 group py-2">
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

      {/* Spacer */}
      <div className="h-20 md:h-24" />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6">
            <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 transition-all duration-300 transform hover:scale-105 hover:shadow-md">Electronics Engineering</Badge>
            <h1 className="hero-text font-bold text-gray-900 leading-tight">
              <span className="text-5xl lg:text-6xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Electronics Services</span>
            </h1>
            <p className="hero-subtitle text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Embedded designing with RTOS and modern interfaces, including replacement of obsolete electronic boards and systems for long-term reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: CircuitBoard, title: 'Embedded Hardware Design', desc: 'Robust PCB design for controllers and interfaces, optimized for manufacturability.' },
              { icon: Cpu, title: 'RTOS & Firmware', desc: 'Real-time firmware with deterministic scheduling, drivers, and peripherals.' },
              { icon: Settings2, title: 'Obsolescence Replacement', desc: 'Form-fit-function redesign of legacy boards and systems to modern standards.' },
              { icon: Wifi, title: 'Connectivity & Buses', desc: 'Industrial protocols and connectivity for dependable system integration.' },
              { icon: Smartphone, title: 'Modern Interfaces', desc: 'Upgraded HMIs, displays, and I/O to enhance usability and longevity.' },
              { icon: Settings2, title: 'Validation & Bring-up', desc: 'Board bring-up, verification, and release-ready documentation.' }
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group p-6 rounded-2xl border border-amber-100 bg-amber-50/40 hover:bg-amber-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <f.icon className="w-6 h-6 text-amber-700 transition-colors duration-300 group-hover:text-amber-800" />
                  <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery (8 images) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Boards & Interfaces</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: '/images/electronics/pcb.jpg', alt: 'Embedded Controller PCB' },
              { src: '/images/electronics/rtos.jpg', alt: 'RTOS Debug Session' },
              { src: '/images/electronics/replacement.jpg', alt: 'Obsolescence Replacement (FFF)' },
              { src: '/images/electronics/industrial-connector.jpg', alt: 'Industrial Connectors & Buses' },
              { src: '/images/electronics/test-bench.jpg', alt: 'Validation & Bring-up Test Bench' },
              { src: '/images/electronics/bench-testing.jpg', alt: 'Oscilloscope & Bench Testing' },
              { src: '/images/electronics/EMI-chamber.jpg', alt: 'EMC Pre-Compliance (Chamber/Probe)' },
              { src: '/images/electronics/production-jig.jpg', alt: 'Production Test Jig' }
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <Image src={img.src} alt={img.alt} width={800} height={500} className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-black/60 text-white text-xs font-semibold tracking-wide backdrop-blur-sm ring-1 ring-white/10 shadow-sm">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-700 via-orange-700 to-amber-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge className="bg-white/20 text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-md"><Star className="w-3 h-3 mr-1" />Ready to Engineer the Future?</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Partner with Saudi Arabia's
            <br />
            <span className="text-amber-200">Electronics Engineering Leaders</span>
          </h2>
          <p className="text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
            Connect with our electronics division to build cutting-edge embedded systems, IoT solutions, and advanced electronic technologies for the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-amber-700">Schedule Electronics Consultation</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {[
              { icon: Phone, text: '24/7 Electronics Support' },
              { icon: Mail, text: 'Expert Electronics Consultation' },
              { icon: Globe, text: 'Advanced Technology Standards' }
            ].map((i, idx) => (
              <div key={idx} className="flex items-center justify-center gap-2 text-white/90">
                <i.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{i.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                  { text: "Projects", href: "/projects" },
                  { text: "Our Partners", href: "/our-partners" },
                  { text: "Contact Us", href: "/contact" }
                ],
                delay: "400ms"
              }
            ].map((section, index) => (
              <div key={index} className={`space-y-6 animate-fade-in-up ${index === 0 ? 'ml-4' : ''}`} style={{ animationDelay: section.delay }}>
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
