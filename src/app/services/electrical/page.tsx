'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Zap, Shield, PlugZap, BatteryCharging, Cable, CircuitBoard, ChevronRight, Clock, Globe, Phone, Mail, Star } from 'lucide-react'
import MobileNav from '@/components/MobileNav'

export default function ElectricalPage() {
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
            <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 transition-all duration-300 transform hover:scale-105 hover:shadow-md">Electrical Engineering</Badge>
            <h1 className="hero-text font-bold text-gray-900 leading-tight">
              <span className="text-3xl lg:text-4xl">Powering Reliability</span>
              <br />
              <span className="text-5xl lg:text-6xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">Electrical Services</span>
            </h1>
            <p className="hero-subtitle text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end electrical engineering across LV/MV/HV systems, protection, controls, and commissioning—built for safety, resilience, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Zap, title: 'Power Systems Design', desc: 'Load studies, LV/MV/HV distribution, substation layouts, and selectivity.' },
              { icon: Shield, title: 'Protection & Coordination', desc: 'Relay settings, arc-flash studies, and fault analysis with safety compliance.' },
              { icon: PlugZap, title: 'Electrical Panels', desc: 'MCCs, switchgear, PLC panels, and custom control panels design and build.' },
              { icon: Cable, title: 'Cabling & Earthing', desc: 'Routing, sizing, earthing/grounding systems, and lightning protection.' },
              { icon: BatteryCharging, title: 'Backup & UPS', desc: 'UPS sizing, battery banks, and emergency power strategies.' },
              { icon: CircuitBoard, title: 'Control & Automation', desc: 'PLC/SCADA integration, motor controls, and intelligent monitoring.' },
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

      {/* Showcase Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Recent Work & Installations</h2>
            <p className="text-gray-600 mt-2">Replace these with your project photos</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: '/images/services/electrical-1.jpg', alt: 'Substation Installation' },
              { src: '/images/services/electrical-2.jpg', alt: 'Control Panel Fabrication' },
              { src: '/images/services/electrical-3.jpg', alt: 'Site Commissioning' }
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <Image src={img.src} alt={img.alt} width={800} height={500} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 text-white text-sm font-medium drop-shadow">{img.alt}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-amber-50/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Core Expertise</h3>
              <div className="space-y-3">
                {[
                  'Single-line diagrams, load schedules, and selectivity studies',
                  'Relay setting calculations and protection coordination',
                  'Motor control centers, VFD systems, and soft starters',
                  'PLC/SCADA integration and HMI development',
                  'Grounding, bonding, and lightning protection systems'
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-amber-700" />
                    <p className="text-gray-700">{t}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Deliverables & Documentation</h3>
              <div className="space-y-3">
                {[
                  'Complete as-built drawings and cable schedules',
                  'Protection coordination and arc-flash reports',
                  'Installation method statements and test procedures',
                  'Factory/Site acceptance test (FAT/SAT) records',
                  'Commissioning plans and O&M manuals'
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-amber-700" />
                    <p className="text-gray-700">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Industries We Serve</h3>
            <div className="flex flex-wrap gap-3">
              {['Manufacturing', 'Utilities', 'Transport', 'Oil & Gas', 'Buildings', 'Data Centers'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-800 border border-amber-200 transition-all duration-300 hover:scale-105 hover:shadow-sm">{tag}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Our Delivery Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Assess & Plan', text: 'Site surveys, data collection, and risk assessment.' },
                { step: '02', title: 'Design & Verify', text: 'Calculations, drawings, and peer reviews.' },
                { step: '03', title: 'Build & Integrate', text: 'Panel build, installation, and integration.' },
                { step: '04', title: 'Test & Commission', text: 'FAT/SAT, documentation, and handover.' }
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="p-5 rounded-2xl border border-amber-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="text-amber-700 font-bold">{s.step}</div>
                  <div className="text-gray-900 font-semibold mt-1">{s.title}</div>
                  <p className="text-gray-600 text-sm mt-2">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-700 via-orange-700 to-amber-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge className="bg-white/20 text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-md"><Star className="w-3 h-3 mr-1" />Partner With Experts</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Ready to power your next project?</h2>
          <p className="text-white/90 max-w-3xl mx-auto">From concept to commissioning, we deliver compliant, efficient, and future-proof electrical solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100">Start Your Project<ChevronRight className="ml-2 h-4 w-4" /></Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-amber-700">Schedule Consultation</Button>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Clock, text: '24/7 Support Available' },
              { icon: Zap, text: 'Rapid Response Team' },
              { icon: Globe, text: 'Nationwide Coverage' }
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
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-gray-900 text-white py-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image src="/images/logo/lsme-logo.jpg" alt="LSME logo" width={40} height={40} className="h-10 w-10 object-contain" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="brand-font text-2xl font-normal">LSME</span>
                  <div className="text-sm text-gray-400">Engineering Services</div>
                </div>
              </div>
              <p className="text-gray-400">Electrical engineering solutions for safe, efficient, and resilient operations.</p>
              <div className="flex gap-4">
                <div className="bg-gray-800 p-3 rounded-xl"><Phone className="h-5 w-5 text-amber-400" /></div>
                <div className="bg-gray-800 p-3 rounded-xl"><Mail className="h-5 w-5 text-amber-400" /></div>
              </div>
            </div>
            {[
              { title: 'Divisions', links: ['Electrical', 'Electronics', 'Mechanical', 'R&D'] },
              { title: 'Services', links: ['Design & Analysis', 'Protection & Safety', 'Automation', 'Commissioning'] },
              { title: 'Company', links: ['About', 'Team', 'Quality', 'Contact'] }
            ].map((s, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <ul className="space-y-2">
                  {s.links.map((l) => (
                    <li key={l}><Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">{l}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <p>&copy; 2024 LSME Engineering Solutions. All rights reserved.</p>
            <div className="flex gap-6 mt-3 md:mt-0">
              <Link href="#" className="hover:text-amber-400">Privacy Policy</Link>
              <Link href="#" className="hover:text-amber-400">Terms of Service</Link>
              <Link href="#" className="hover:text-amber-400">ISO Certifications</Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  )
}
