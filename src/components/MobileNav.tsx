'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Train, X, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MobileNavProps {
  theme: 'green' | 'blue'
}

export default function MobileNav({ theme }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [animationStage, setAnimationStage] = useState(0)

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
    }
  }

  const colors = themeColors[theme]

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'R&D Services', href: '#services' },
    { name: 'Technical Solutions', href: '#solutions' },
    { name: 'Innovation Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  // Handle opening animation sequence
  useEffect(() => {
    if (isOpen) {
      // Store original overflow value
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      
      // Reset animation stage
      setAnimationStage(0)
      
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
            <Train 
              className={`h-7 w-7 transition-colors duration-300 group-hover:text-gray-600 ${
                theme === 'green' ? 'text-emerald-600' : 'text-blue-600'
              }`} 
            />
            <div 
              className={`absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full animate-pulse ${
                theme === 'green'
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-500'
                  : 'bg-gradient-to-r from-blue-400 to-indigo-500'
              }`}
            ></div>
          </div>
          <div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">LSME</span>
            <div className="text-xs text-gray-500 font-medium">Railway Solutions</div>
          </div>
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-12 h-12 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 z-[100] border-2 shadow-lg ${
            theme === 'green'
              ? 'bg-emerald-100 border-emerald-300 focus:ring-emerald-500 hover:bg-emerald-200'
              : 'bg-blue-100 border-blue-300 focus:ring-blue-500 hover:bg-blue-200'
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`transition-all duration-300 ${isOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`}>
              {!isOpen ? (
                <Menu 
                  className={`h-6 w-6 transition-colors duration-300 ${
                    theme === 'green' ? 'text-emerald-700' : 'text-blue-700'
                  }`} 
                />
              ) : (
                <X 
                  className={`h-6 w-6 transition-colors duration-300 ${
                    theme === 'green' ? 'text-emerald-700' : 'text-blue-700'
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
              : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
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
                  : 'bg-gradient-to-br from-blue-200 to-indigo-200'
              }`}
            ></div>
            <div 
              className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse transform transition-all duration-1000 delay-300 ${
                animationStage >= 1 ? 'scale-100' : 'scale-0'
              } ${
                theme === 'green'
                  ? 'bg-gradient-to-br from-teal-200 to-emerald-200'
                  : 'bg-gradient-to-br from-indigo-200 to-blue-200'
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
                  : 'bg-white/90 hover:bg-blue-50 border-2 border-blue-200 hover:border-blue-300'
              }`}
              aria-label="Close navigation menu"
            >
              <div className="relative">
                <X 
                  className={`h-5 w-5 transition-all duration-300 ${
                    theme === 'green' ? 'text-emerald-700 group-hover:text-emerald-800' : 'text-blue-700 group-hover:text-blue-800'
                  }`} 
                />
                <div 
                  className={`absolute -inset-2 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    theme === 'green' ? 'border-emerald-300' : 'border-blue-300'
                  }`}
                ></div>
              </div>
            </button>
          </div>

          {/* Main Content Container */}
          <div className="flex flex-col items-center justify-center h-full min-h-screen px-6 pt-20 pb-10 relative z-10">
            
            {/* Logo Section - Stage 3 */}
            <div 
              className={`mb-10 text-center transition-all duration-800 ${
                animationStage >= 3 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
            >
              <div className="flex items-center justify-center space-x-3 mb-5">
                <div className="relative">
                  <Train 
                    className={`h-12 w-12 transition-all duration-500 ${
                      theme === 'green' ? 'text-emerald-600' : 'text-blue-600'
                    } ${animationStage >= 3 ? 'animate-bounce-slow' : ''}`} 
                  />
                  <div 
                    className={`absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full animate-pulse ${
                      theme === 'green'
                        ? 'bg-gradient-to-r from-emerald-400 to-teal-500'
                        : 'bg-gradient-to-r from-blue-400 to-indigo-500'
                    }`}
                  ></div>
                </div>
              </div>
              <h1
                id="mobile-menu-title"
                className="text-3xl font-bold text-gray-900 mb-2 tracking-tight"
              >
                LSME
              </h1>
              <p className="text-base text-gray-600 font-medium mb-3">
                Leading Saudi Railway R&D Solutions
              </p>
              <div 
                className={`w-20 h-0.5 mx-auto rounded-full transition-all duration-600 ${
                  animationStage >= 3 ? 'scale-x-100' : 'scale-x-0'
                } ${
                  theme === 'green'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                }`}
              ></div>
            </div>

            {/* Navigation Links - Stage 4 */}
            <nav className="mb-10">
              <ul className="space-y-3 text-center">
                {navigationItems.map((item, index) => (
                  <li
                    key={item.name}
                    className={`transition-all duration-600 ${
                      animationStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      transitionDelay: animationStage >= 4 ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-lg font-semibold text-gray-800 transition-all duration-300 transform hover:scale-105 py-2 px-6 rounded-xl relative group ${
                        theme === 'green' 
                          ? 'hover:text-emerald-600 hover:bg-emerald-50/80' 
                          : 'hover:text-blue-600 hover:bg-blue-50/80'
                      }`}
                    >
                      {item.name}
                      <span 
                        className={`absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-3/4 ${
                          theme === 'green'
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                            : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                        }`}
                      ></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Action Buttons - Stage 5 */}
            <div 
              className={`space-y-2.5 w-full max-w-xs transition-all duration-700 ${
                animationStage >= 5 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <Button
                variant="outline"
                size="lg"
                className={`w-full border-2 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm py-3 ${
                  theme === 'green'
                    ? 'border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 focus:ring-emerald-500'
                    : 'border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 focus:ring-blue-500'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Button>
              <Button
                size="lg"
                className={`w-full text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm py-3 ${
                  theme === 'green'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Portal Login
              </Button>
            </div>

            {/* Footer Text - Stage 6 */}
            <div 
              className={`mt-6 text-center transition-all duration-600 ${
                animationStage >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-xs text-gray-500 mb-1.5">
                Supporting Saudi Arabia's Vision 2030
              </p>
              <div className="flex items-center justify-center space-x-1.5 text-xs text-gray-400">
                <span>Advanced Railway Solutions</span>
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
