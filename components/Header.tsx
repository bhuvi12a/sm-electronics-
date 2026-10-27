'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tv, Menu, X } from 'lucide-react';

export function SMLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col group ${className}`}>
      <div className="flex items-center">
        <span className="text-3xl sm:text-4xl font-black italic tracking-tighter text-[#F32635] leading-none select-none">
          S<span className="text-[#F32635]">M</span>
        </span>
      </div>
      <span className="text-[10px] sm:text-[11px] font-black tracking-[0.24em] text-white uppercase leading-none mt-1 select-none">
        ELECTRONICS
      </span>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isServices = pathname?.startsWith('/services');
  const isAbout = pathname === '/about';
  const isContact = pathname === '/contact';

  return (
    <header className="sticky top-0 z-50 bg-[#061426] border-b border-white/10 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">
        
        {/* Logo on Left */}
        <Link href="/" className="flex items-center">
          <SMLogo />
        </Link>

        {/* Center Navigation Links (NO BUTTONS) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-semibold text-slate-200">
          <Link
            href="/"
            className={`transition-colors pb-1 ${
              isHome
                ? 'text-white border-b-2 border-[#F32635]'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`transition-colors pb-1 ${
              isServices
                ? 'text-white border-b-2 border-[#F32635]'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`transition-colors pb-1 ${
              isAbout
                ? 'text-white border-b-2 border-[#F32635]'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            About Us
          </Link>
          <Link
            href="/#process"
            className="text-slate-300 hover:text-white transition-colors pb-1"
          >
            Process
          </Link>
          <Link
            href="/#brands"
            className="text-slate-300 hover:text-white transition-colors pb-1"
          >
            Brands
          </Link>
          <Link
            href="/contact"
            className={`transition-colors pb-1 ${
              isContact
                ? 'text-white border-b-2 border-[#F32635]'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right Informational Label (Pure Informational, NO BUTTONS) */}
        <div className="hidden lg:flex items-center gap-2.5 text-xs font-semibold text-slate-200">
          <div className="w-6 h-6 rounded border border-white/30 flex items-center justify-center text-white">
            <Tv className="w-3.5 h-3.5" />
          </div>
          <span>LED TV Repair Specialists</span>
        </div>

        {/* Mobile Menu Toggle (Pure icon toggle, NO CTA BUTTON) */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile dropdown menu (pure text links, NO BUTTONS) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#061426] border-t border-white/10 px-6 py-4 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm font-semibold py-1 ${
              isHome ? 'text-[#F32635]' : 'text-slate-200 hover:text-[#F32635]'
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm font-semibold py-1 ${
              isServices ? 'text-[#F32635]' : 'text-slate-200 hover:text-[#F32635]'
            }`}
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm font-semibold py-1 ${
              isAbout ? 'text-[#F32635]' : 'text-slate-200 hover:text-[#F32635]'
            }`}
          >
            About Us
          </Link>
          <Link
            href="/#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-200 hover:text-[#F32635] py-1"
          >
            Repair Process
          </Link>
          <Link
            href="/#brands"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-200 hover:text-[#F32635] py-1"
          >
            Supported Brands
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-sm font-semibold py-1 ${
              isContact ? 'text-[#F32635]' : 'text-slate-200 hover:text-[#F32635]'
            }`}
          >
            Contact & Service Area
          </Link>
          <div className="pt-2 border-t border-white/10 text-xs text-slate-400">
            <span>Hosur, Tamil Nadu • +91 94863 48116</span>
          </div>
        </div>
      )}
    </header>
  );
}
