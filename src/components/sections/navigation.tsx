"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close mobile menu on route change
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full glass-effect border-b border-zinc-800/50">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center group" aria-label="VPAG Dance - Home">
            <div className="relative flex items-center space-x-4 py-2">
              {/* Logo with enhanced styling */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 rounded-xl p-2 border border-zinc-700/50 group-hover:border-amber-400/30 transition-all duration-300">
                  <Image
                    src="/vpag-logo.png"
                    alt="VPAG - Versatile Performing Art Group"
                    width={48}
                    height={48}
                    className="w-12 h-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-lg"
                    priority
                  />
                </div>
              </div>
              
              {/* Enhanced text branding */}
              <div className="hidden sm:block">
                <div className="relative">
                  <h1 className="text-2xl font-black tracking-tight leading-none">
                    <span className="bg-gradient-to-r from-white via-zinc-100 to-amber-100 bg-clip-text text-transparent drop-shadow-sm">
                      VPAG
                    </span>
                  </h1>
                  <p className="text-[10px] font-bold text-zinc-400 tracking-[0.2em] uppercase leading-tight mt-0.5 opacity-90">
                    Versatile Performing Art Group
                  </p>
                  {/* Subtle underline accent */}
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-60 group-hover:w-full group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>
              
              {/* Mobile version with improved styling */}
              <div className="sm:hidden">
                <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
                  VPAG
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden items-center space-x-1 md:flex" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-zinc-800/50',
                  pathname === item.href 
                    ? 'text-amber-400 bg-zinc-800/30' 
                    : 'text-zinc-300 hover:text-white'
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-amber-400"></div>
                )}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-zinc-700">
              <Link
                href="/contact"
                aria-label="Book a cultural dance performance"
                className="btn btn-primary"
              >
                Book Performance
              </Link>
            </div>
          </nav>

          <button
            className="relative p-2 md:hidden hover:bg-zinc-800/50 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <div className="flex h-5 w-6 flex-col justify-between">
              <span className={cn('block h-0.5 w-full rounded-sm bg-zinc-300 transition-all duration-300', isOpen && 'translate-y-[9px] rotate-45')}></span>
              <span className={cn('block h-0.5 w-full rounded-sm bg-zinc-300 transition-all duration-300', isOpen && 'opacity-0')}></span>
              <span className={cn('block h-0.5 w-full rounded-sm bg-zinc-300 transition-all duration-300', isOpen && '-translate-y-[9px] -rotate-45')}></span>
            </div>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out md:hidden',
            isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          )}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col space-y-2 border-t border-zinc-800/50 pt-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200',
                  pathname === item.href
                    ? 'bg-zinc-800/50 text-amber-400 border border-zinc-700/50'
                    : 'text-zinc-300 hover:bg-zinc-800/30 hover:text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                aria-label="Book a cultural dance performance"
                className="btn btn-primary w-full justify-center"
              >
                Book Performance
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}