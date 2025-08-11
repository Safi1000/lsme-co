'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, LinkedinIcon, Mail, Phone, Award, Briefcase } from 'lucide-react';
import MobileNav from '@/components/MobileNav';

export default function OurTeamPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Ahmed Al-Mansouri",
      position: "Chief Executive Officer",
      department: "Leadership",
      image: "/images/team/ceo.jpg",
      bio: "Leading LSME with over 15 years of experience in engineering solutions and strategic partnerships across the Kingdom of Saudi Arabia.",
      specialties: ["Strategic Planning", "Business Development", "Railway Engineering"],
      linkedin: "#",
      email: "ahmed@lsme.sa"
    },
    {
      id: 2,
      name: "Dr. Sarah Abdullah",
      position: "Chief Technology Officer",
      department: "R&D",
      image: "/images/team/cto.jpg",
      bio: "Driving innovation in electrical and electronic systems with a Ph.D. in Electrical Engineering and expertise in locomotive technology.",
      specialties: ["Electrical Systems", "Innovation", "Research"],
      linkedin: "#",
      email: "sarah@lsme.sa"
    },
    {
      id: 3,
      name: "Mohammed Al-Zahrani",
      position: "Director of Engineering",
      department: "Engineering",
      image: "/images/team/director.jpg",
      bio: "Overseeing all engineering projects with extensive experience in mechanical and electrical systems integration.",
      specialties: ["Project Management", "Systems Integration", "Quality Assurance"],
      linkedin: "#",
      email: "mohammed@lsme.sa"
    },
    {
      id: 4,
      name: "Fatima Al-Rashid",
      position: "Senior Electrical Engineer",
      department: "Electrical",
      image: "/images/team/electrical.jpg",
      bio: "Specialist in power systems and electrical design with focus on railway infrastructure and locomotive systems.",
      specialties: ["Power Systems", "Electrical Design", "Railway Systems"],
      linkedin: "#",
      email: "fatima@lsme.sa"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50">
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
            <MobileNav theme="blue" />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="relative text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 group py-2"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="relative text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 py-2 flex items-center gap-1">
                  Services
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
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
                        className="block px-4 py-2 text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 transform hover:translate-x-1"
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
                  className="relative text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-700 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Spacer under fixed header */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 transform hover:scale-105 shadow-md mb-4 sm:mb-6">
                <Users className="w-3 h-3 mr-1" />
                Leadership & Expertise
              </Badge>
              <h1 className="hero-text font-bold text-gray-900 leading-tight">
                <span className="text-2xl sm:text-3xl lg:text-4xl">Meet Our Expert</span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="hero-subtitle text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4 sm:mt-6 px-4 sm:px-0">
                Our dedicated team of engineering professionals brings decades of combined experience in electrical, electronics, and mechanical engineering to deliver exceptional solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    {/* Member Photo */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                        <Users className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-1">{member.position}</p>
                      <p className="text-gray-500 text-sm mb-3">{member.department} Department</p>
                      
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                        {member.bio}
                      </p>

                      {/* Specialties */}
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Specialties:</p>
                        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                          {member.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-lg font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Contact */}
                      <div className="flex justify-center sm:justify-start space-x-3">
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors duration-300"
                        >
                          <Mail className="w-4 h-4 text-blue-600" />
                        </a>
                        <a
                          href={member.linkedin}
                          className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors duration-300"
                        >
                          <LinkedinIcon className="w-4 h-4 text-blue-600" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-6 sm:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Join Our Team of Experts
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              We're always looking for talented engineers and professionals to join our growing team and contribute to Saudi Arabia's Vision 2030.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {[
                {
                  icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Excellence",
                  description: "Commitment to engineering excellence and innovation"
                },
                {
                  icon: <Briefcase className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Growth",
                  description: "Professional development and career advancement opportunities"
                },
                {
                  icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Collaboration",
                  description: "Work with industry experts and leading partners"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className="bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/20"
                >
                  <div className="text-blue-200 mb-3 sm:mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{benefit.title}</h3>
                  <p className="text-blue-100 leading-relaxed text-sm sm:text-base">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View Open Positions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 