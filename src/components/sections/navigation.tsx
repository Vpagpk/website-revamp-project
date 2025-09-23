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
          <Link href="/" className="flex items-center space-x-3 group" aria-label="VPAG Dance - Home">
            <div className="relative flex items-center space-x-3">
              <Image
                src="/vpag-logo.png"
                alt="VPAG - Versatile Performing Art Group"
                width={50}
                height={50}
                className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="hidden sm:block">
                <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  VPAG
                </span>
                <p className="text-xs font-semibold text-zinc-400 tracking-widest">VERSATILE PERFORMING ART GROUP</p>
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