'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Menu, ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface MobileNavProps {
  theme: 'green' | 'blue' | 'cream' | 'lightbrown' | 'purple' | 'teal'
}

interface NavigationItem {
  name: string
  href: string
  isDropdown?: boolean
  submenu?: { name: string; href: string }[]
}

export default function MobileNav({ theme }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [animationStage, setAnimationStage] = useState(0)
  const [activeMenu, setActiveMenu] = useState<'root' | 'services'>('root')

  const themeColors = {
    green: {
      primary: 'emerald-600',
      secondary: 'teal-600',
      hover: 'emerald-700',
      bg: 'emerald-50',
      border: 'emerald-300',
      text: 'emerald-600',
      bgGradient: 'from-emerald-50 via-white to-teal-50'
    },
    blue: {
      primary: 'blue-600',
      secondary: 'indigo-600', 
      hover: 'blue-700',
      bg: 'blue-50',
      border: 'blue-300',
      text: 'blue-600',
      bgGradient: 'from-blue-50 via-white to-indigo-50'
    },
    cream: {
      primary: 'amber-700',
      secondary: 'orange-700',
      hover: 'amber-800',
      bg: 'amber-50',
      border: 'amber-300',
      text: 'amber-700',
      bgGradient: 'from-amber-50 via-white to-orange-50'
    },
    lightbrown: {
      primary: 'yellow-800',
      secondary: 'amber-800',
      hover: 'yellow-900',
      bg: 'yellow-50',
      border: 'yellow-300',
      text: 'yellow-800',
      bgGradient: 'from-yellow-50 via-stone-50 to-amber-50'
    },
    purple: {
      primary: 'purple-600',
      secondary: 'violet-600',
      hover: 'purple-700',
      bg: 'purple-50',
      border: 'purple-300',
      text: 'purple-600',
      bgGradient: 'from-purple-50 via-white to-violet-50'
    },
    teal: {
      primary: 'teal-600',
      secondary: 'cyan-600',
      hover: 'teal-700',
      bg: 'teal-50',
      border: 'teal-300',
      text: 'teal-600',
      bgGradient: 'from-teal-50 via-white to-cyan-50'
    }
  }

  const colors = themeColors[theme]

  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '#',
      isDropdown: true,
      submenu: [
        { name: 'Electrical', href: '/services/electrical' },
        { name: 'Electronics', href: '/services/electronics' },
        { name: 'Mechanical', href: '/services/mechanical' },
        { name: 'R&D Services', href: '/rd-services' },
        { name: 'Supply Chain', href: '/services/supply-chain' }
      ]
    },
    { name: 'About LSME', href: '/about' },
    { name: 'Our Partners', href: '/our-partners' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'Contact', href: '/contact' }
  ]

  const servicesItem = navigationItems.find(item => item.isDropdown)
  
  // Handle opening animation sequence
  useEffect(() => {
    if (isOpen) {
      // Store original overflow value
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      
      // Reset animation stage
      setAnimationStage(0)
      // Always start from root when opening
      setActiveMenu('root')
      
      // Start animation sequence
      const timers = [
        setTimeout(() => setAnimationStage(1), 300),  // Background decorations
        setTimeout(() => setAnimationStage(2), 500),  // Close button
        setTimeout(() => setAnimationStage(3), 700),  // Logo section
        setTimeout(() => setAnimationStage(4), 1000), // Navigation items
        setTimeout(() => setAnimationStage(5), 1800), // Action buttons
        setTimeout(() => setAnimationStage(6), 2200), // Footer text
      ]
      
      return () => {
        document.body.style.overflow = originalOverflow
        document.documentElement.style.overflow = 'unset'
        timers.forEach(timer => clearTimeout(timer))
      }
    } else {
      setAnimationStage(0)
    }
  }, [isOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile Header - Only Logo and Hamburger */}
      <div className="md:hidden flex items-center justify-between w-full">
        {/* Mobile Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <Image src="/images/logo/lsme-logo.jpg" alt="LSME logo" width={64} height={64} className="h-16 w-16 object-contain animate-pulse" />
          </div>
          <div>
            <span className="brand-font text-xl font-normal text-gray-900 tracking-tight leading-none">LSME</span>
            <div className="text-xs text-gray-500 font-medium">Engineering Services</div>
          </div>
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-12 h-12 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 z-[100] border-2 shadow-lg ${
            theme === 'green'
              ? 'bg-emerald-100 border-emerald-300 focus:ring-emerald-500 hover:bg-emerald-200'
              : theme === 'blue'
              ? 'bg-blue-100 border-blue-300 focus:ring-blue-500 hover:bg-blue-200'
              : theme === 'cream'
              ? 'bg-amber-100 border-amber-300 focus:ring-amber-500 hover:bg-amber-200'
              : theme === 'lightbrown'
              ? 'bg-yellow-100 border-yellow-300 focus:ring-yellow-500 hover:bg-yellow-200'
              : theme === 'purple'
              ? 'bg-purple-100 border-purple-300 focus:ring-purple-500 hover:bg-purple-200'
              : 'bg-teal-100 border-teal-300 focus:ring-teal-500 hover:bg-teal-200'
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`transition-all duration-300 ${isOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`}>
              {!isOpen ? (
                <Menu 
                  className={`h-6 w-6 transition-colors duration-300 ${
                    theme === 'green' ? 'text-emerald-700' : 
                    theme === 'blue' ? 'text-blue-700' : 
                    theme === 'cream' ? 'text-amber-800' : 
                    theme === 'lightbrown' ? 'text-yellow-900' :
                    theme === 'purple' ? 'text-purple-700' : 'text-teal-700'
                  }`} 
                />
              ) : (
                <X 
                  className={`h-6 w-6 transition-colors duration-300 ${
                    theme === 'green' ? 'text-emerald-700' : 
                    theme === 'blue' ? 'text-blue-700' : 
                    theme === 'cream' ? 'text-amber-800' : 
                    theme === 'lightbrown' ? 'text-yellow-900' :
                    theme === 'purple' ? 'text-purple-700' : 'text-teal-700'
                  }`} 
                />
              )}
            </div>
          </div>
        </button>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[9999] md:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Full Background - Starts Completely Blank */}
        <div 
          className={`absolute inset-0 w-full h-full min-h-screen transition-all duration-500 ${
            isOpen ? 'scale-100' : 'scale-95'
          } ${
            theme === 'green'
              ? 'bg-gradient-to-br from-emerald-50 via-white to-emerald-100'
              : theme === 'blue'
              ? 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
              : theme === 'cream'
              ? 'bg-gradient-to-br from-amber-50 via-white to-amber-100'
              : theme === 'lightbrown'
              ? 'bg-gradient-to-br from-yellow-50 via-stone-50 to-yellow-100'
              : theme === 'purple'
              ? 'bg-gradient-to-br from-purple-50 via-white to-purple-100'
              : 'bg-gradient-to-br from-teal-50 via-white to-teal-100'
          }`}
        >
          {/* Decorative Background Elements - Stage 1 */}
          <div className={`absolute inset-0 overflow-hidden transition-opacity duration-800 ${
            animationStage >= 1 ? 'opacity-100' : 'opacity-0'
          }`}>
            <div 
              className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse transform transition-all duration-1000 ${
                animationStage >= 1 ? 'scale-100' : 'scale-0'
              } ${
                theme === 'green'
                  ? 'bg-gradient-to-br from-emerald-200 to-teal-200'
                  : theme === 'blue'
                  ? 'bg-gradient-to-br from-blue-200 to-indigo-200'
                  : theme === 'cream'
                  ? 'bg-gradient-to-br from-amber-200 to-orange-200'
                  : theme === 'lightbrown'
                  ? 'bg-gradient-to-br from-yellow-200 to-amber-200'
                  : theme === 'purple'
                  ? 'bg-gradient-to-br from-purple-200 to-violet-200'
                  : 'bg-gradient-to-br from-teal-200 to-cyan-200'
              }`}
            ></div>
            <div 
              className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse transform transition-all duration-1000 delay-300 ${
                animationStage >= 1 ? 'scale-100' : 'scale-0'
              } ${
                theme === 'green'
                  ? 'bg-gradient-to-br from-teal-200 to-emerald-200'
                  : theme === 'blue'
                  ? 'bg-gradient-to-br from-indigo-200 to-blue-200'
                  : theme === 'cream'
                  ? 'bg-gradient-to-br from-orange-200 to-amber-200'
                  : theme === 'lightbrown'
                  ? 'bg-gradient-to-br from-amber-200 to-yellow-200'
                  : theme === 'purple'
                  ? 'bg-gradient-to-br from-violet-200 to-purple-200'
                  : 'bg-gradient-to-br from-cyan-200 to-teal-200'
              }`}
            ></div>
          </div>

          {/* Close Button - Stage 2 */}
          <div className={`absolute top-0 right-0 pt-6 pr-6 z-20 transition-all duration-600 ${
            animationStage >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <button
              onClick={() => setIsOpen(false)}
              className={`relative group p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg backdrop-blur-sm ${
                theme === 'green'
                  ? 'bg-white/90 hover:bg-emerald-50 border-2 border-emerald-200 hover:border-emerald-300'
                  : theme === 'blue'
                  ? 'bg-white/90 hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300'
                  : theme === 'cream'
                  ? 'bg-white/90 hover:bg-amber-50 border-2 border-amber-200 hover:border-amber-300'
                  : theme === 'lightbrown'
                  ? 'bg-white/90 hover:bg-yellow-50 border-2 border-yellow-200 hover:border-yellow-300'
                  : theme === 'purple'
                  ? 'bg-white/90 hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-300'
                  : 'bg-white/90 hover:bg-teal-50 border-2 border-teal-200 hover:border-teal-300'
              }`}
              aria-label="Close navigation menu"
            >
              <div className="relative">
                <X 
                  className={`h-5 w-5 transition-all duration-300 ${
                    theme === 'green' ? 'text-emerald-700 group-hover:text-emerald-800' : 
                    theme === 'blue' ? 'text-blue-700 group-hover:text-blue-800' :
                    theme === 'cream' ? 'text-amber-800 group-hover:text-amber-900' :
                    theme === 'lightbrown' ? 'text-yellow-900 group-hover:text-yellow-950' :
                    theme === 'purple' ? 'text-purple-700 group-hover:text-purple-800' :
                    'text-teal-700 group-hover:text-teal-800'
                  }`} 
                />
                <div 
                  className={`absolute -inset-2 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    theme === 'green' ? 'border-emerald-300' : 
                    theme === 'blue' ? 'border-blue-300' : 
                    theme === 'cream' ? 'border-amber-300' : 
                    theme === 'lightbrown' ? 'border-yellow-300' :
                    theme === 'purple' ? 'border-purple-300' : 'border-teal-300'
                  }`}
                ></div>
              </div>
            </button>
          </div>

          {/* Main Content Container */}
          <div className="flex flex-col items-center justify-center h-full px-6 py-6 relative z-10">
            
            {/* Logo Section - Stage 3 */}
            <div 
              className={`mb-6 text-center transition-all duration-800 ${
                animationStage >= 3 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
            >
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="relative">
                  <Image src="/images/logo/lsme-logo.jpg" alt="LSME logo" width={64} height={64} className={`h-16 w-16 object-contain ${animationStage >= 3 ? 'animate-bounce-slow' : ''}`} />
                </div>
              </div>
              <h1
                id="mobile-menu-title"
                className="brand-font text-3xl font-normal text-gray-900 mb-1 tracking-tight leading-none"
              >
                LSME
              </h1>
              <p className="text-xs text-gray-600 font-medium mb-2">
                Leading Saudi Engineering Solutions
              </p>
              <div 
                className={`w-12 h-0.5 mx-auto rounded-full transition-all duration-600 ${
                  animationStage >= 3 ? 'scale-x-100' : 'scale-x-0'
                } ${
                  theme === 'green'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                    : theme === 'blue'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    : theme === 'cream'
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600'
                    : theme === 'lightbrown'
                    ? 'bg-gradient-to-r from-yellow-700 to-amber-700'
                    : theme === 'purple'
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600'
                    : 'bg-gradient-to-r from-teal-600 to-cyan-600'
                }`}
              ></div>
            </div>

            {/* Navigation Links - Stage 4 */}
            <nav className="mb-6 w-full">
              <div className="relative w-full overflow-hidden min-h-[260px]">
                {/* Root view */}
                <div className={`absolute inset-0 transition-all duration-500 ease-out ${activeMenu === 'root' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                  <ul className="space-y-1 text-center">
                    {navigationItems.map((item, index) => (
                      <li
                        key={item.name}
                        className={`transition-all duration-600 ${
                          animationStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{
                          transitionDelay: animationStage >= 4 ? `${index * 80}ms` : '0ms'
                        }}
                      >
                        {item.isDropdown ? (
                          <button
                            onClick={() => setActiveMenu('services')}
                            className={`w-full text-base font-semibold text-gray-800 transition-all duration-300 transform hover:scale-105 py-2 px-10 rounded-xl relative group ${
                              theme === 'green' 
                                ? 'hover:text-emerald-600 hover:bg-emerald-50/80' 
                                : theme === 'blue'
                                ? 'hover:text-blue-600 hover:bg-blue-50/80'
                                : theme === 'cream'
                                ? 'hover:text-amber-700 hover:bg-amber-50/80'
                                : theme === 'lightbrown'
                                ? 'hover:text-yellow-800 hover:bg-yellow-50/80'
                                : theme === 'purple'
                                ? 'hover:text-purple-600 hover:bg-purple-50/80'
                                : 'hover:text-teal-600 hover:bg-teal-50/80'
                            }`}
                          >
                            <span className="flex items-center justify-center w-full">
                              <span className="inline-block w-4 ml-2" />
                              <span className="mx-2 text-center">{item.name}</span>
                              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox=" 0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                            <span 
                              className={`absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-3/4 ${
                                theme === 'green'
                                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                                  : theme === 'blue'
                                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                                  : theme === 'cream'
                                  ? 'bg-gradient-to-r from-amber-600 to-orange-600'
                                  : theme === 'lightbrown'
                                  ? 'bg-gradient-to-r from-yellow-700 to-amber-700'
                                  : theme === 'purple'
                                  ? 'bg-gradient-to-r from-purple-600 to-violet-600'
                                  : 'bg-gradient-to-r from-teal-600 to-cyan-600'
                              }`}
                            ></span>
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block text-base font-semibold text-gray-800 transition-all duration-300 transform hover:scale-105 py-2 px-5 rounded-xl relative group ${
                              theme === 'green' 
                                ? 'hover:text-emerald-600 hover:bg-emerald-50/80' 
                                : theme === 'blue'
                                ? 'hover:text-blue-600 hover:bg-blue-50/80'
                                : theme === 'cream'
                                ? 'hover:text-amber-700 hover:bg-amber-50/80'
                                : theme === 'lightbrown'
                                ? 'hover:text-yellow-800 hover:bg-yellow-50/80'
                                : theme === 'purple'
                                ? 'hover:text-purple-600 hover:bg-purple-50/80'
                                : 'hover:text-teal-600 hover:bg-teal-50/80'
                            }`}
                          >
                            {item.name}
                            <span 
                              className={`absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-3/4 ${
                                theme === 'green'
                                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                                  : theme === 'blue'
                                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                                  : theme === 'cream'
                                  ? 'bg-gradient-to-r from-amber-600 to-orange-600'
                                  : theme === 'lightbrown'
                                  ? 'bg-gradient-to-r from-yellow-700 to-amber-700'
                                  : theme === 'purple'
                                  ? 'bg-gradient-to-r from-purple-600 to-violet-600'
                                  : 'bg-gradient-to-r from-teal-600 to-cyan-600'
                              }`}
                            ></span>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services view */}
                <div className={`absolute inset-0 transition-all duration-500 ease-out ${activeMenu === 'services' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                  <div className="text-center">
                    <button
                      onClick={() => setActiveMenu('root')}
                      className={`mb-4 inline-flex items-center justify-center text-sm font-medium rounded-lg px-3 py-2 border transition-all duration-300 ${
                        theme === 'green'
                          ? 'text-emerald-700 border-emerald-200 hover:bg-emerald-50'
                          : theme === 'blue'
                          ? 'text-blue-700 border-blue-200 hover:bg-blue-50'
                          : theme === 'cream'
                          ? 'text-amber-800 border-amber-200 hover:bg-amber-50'
                          : theme === 'lightbrown'
                          ? 'text-yellow-900 border-yellow-200 hover:bg-yellow-50'
                          : theme === 'purple'
                          ? 'text-purple-700 border-purple-200 hover:bg-purple-50'
                          : 'text-teal-700 border-teal-200 hover:bg-teal-50'
                      }`}
                      aria-label="Back"
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Back
                    </button>
                    <ul className="space-y-1">
                      {servicesItem?.submenu?.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className={`block text-base font-semibold text-gray-800 transition-all duration-300 transform hover:scale-105 py-2 px-5 rounded-xl relative group ${
                              theme === 'green' 
                                ? 'hover:text-emerald-600 hover:bg-emerald-50/80' 
                                : theme === 'blue'
                                ? 'hover:text-blue-600 hover:bg-blue-50/80'
                                : theme === 'cream'
                                ? 'hover:text-amber-700 hover:bg-amber-50/80'
                                : theme === 'lightbrown'
                                ? 'hover:text-yellow-800 hover:bg-yellow-50/80'
                                : theme === 'purple'
                                ? 'hover:text-purple-600 hover:bg-purple-50/80'
                                : 'hover:text-teal-600 hover:bg-teal-50/80'
                            }`}
                          >
                            {sub.name}
                            <span 
                              className={`absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-3/4 ${
                                theme === 'green'
                                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                                  : theme === 'blue'
                                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                                  : theme === 'cream'
                                  ? 'bg-gradient-to-r from-amber-600 to-orange-600'
                                  : theme === 'lightbrown'
                                  ? 'bg-gradient-to-r from-yellow-700 to-amber-700'
                                  : theme === 'purple'
                                  ? 'bg-gradient-to-r from-purple-600 to-violet-600'
                                  : 'bg-gradient-to-r from-teal-600 to-cyan-600'
                              }`}
                            ></span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            
            {/* Footer Text - Stage 6 */}
            <div 
              className={`mt-4 text-center transition-all duration-600 ${
                animationStage >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-xs text-gray-500 mb-1">
                Supporting Saudi Arabia's Vision 2030
              </p>
              <div className="flex items-center justify-center space-x-1 text-xs text-gray-400">
                <span>Advanced Engineering Solutions</span>
                <span>•</span>
                <span>Technical Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
