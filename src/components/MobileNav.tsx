'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Train } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MobileNavProps {
  theme: 'green' | 'blue'
}

export default function MobileNav({ theme }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const themeColors = {
    green: {
      primary: 'emerald-600',
      secondary: 'teal-600',
      hover: 'emerald-700',
      bg: 'emerald-50',
      border: 'emerald-300'
    },
    blue: {
      primary: 'blue-600',
      secondary: 'indigo-600', 
      hover: 'blue-700',
      bg: 'blue-50',
      border: 'blue-300'
    }
  }

  const colors = themeColors[theme]

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'R&D Services', href: '#' },
    { name: 'Technical Solutions', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '#' }
  ]

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isOpen && !target.closest('.mobile-nav-container')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div className="md:hidden mobile-nav-container">
      {/* Mobile Header */}
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <Train className={`h-8 w-8 text-${colors.primary} transition-colors duration-300 group-hover:text-${colors.hover}`} />
            <div className={`absolute -top-1 -right-1 w-2.5 h-2.5 bg-gradient-to-r from-${colors.primary} to-${colors.secondary} rounded-full animate-pulse`}></div>
          </div>
          <div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">LSME</span>
            <div className="text-xs text-gray-500 font-medium">Railway Solutions</div>
          </div>
        </Link>

        {/* Animated Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-10 h-10 rounded-lg border-2 border-${colors.border} bg-${colors.bg} transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-${colors.primary} focus:ring-opacity-50`}
          aria-label="Toggle navigation menu"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-4 flex flex-col justify-between">
              {/* Top line */}
              <span 
                className={`block h-0.5 w-full bg-${colors.primary} transform transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              {/* Middle line */}
              <span 
                className={`block h-0.5 w-full bg-${colors.primary} transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              {/* Bottom line */}
              <span 
                className={`block h-0.5 w-full bg-${colors.primary} transform transition-all duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 transform transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        style={{ top: '80px' }} // Start below the header
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={`relative ml-auto h-full w-80 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8">
              <ul className="space-y-6">
                {navigationItems.map((item, index) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-lg font-medium text-gray-700 hover:text-${colors.primary} transition-all duration-300 transform hover:translate-x-2 hover:scale-105 py-2 relative group`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-${colors.primary} to-${colors.secondary} transition-all duration-300 group-hover:w-full`}></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Action Buttons */}
            <div className="px-6 py-6 border-t border-gray-200 space-y-4">
              <Button 
                variant="outline" 
                className={`w-full hover:bg-${colors.bg} hover:border-${colors.border} transition-all duration-300`}
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Button>
              <Button 
                className={`w-full bg-gradient-to-r from-${colors.primary} to-${colors.secondary} hover:from-${colors.hover} hover:to-${colors.hover} transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                onClick={() => setIsOpen(false)}
              >
                Portal Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 