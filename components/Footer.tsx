import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { SMLogo } from './Header';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#020710] text-white border-t border-white/10 overflow-hidden">
      
      {/* Dynamic vivid red curved swoosh accent from the reference design */}
      <div className="absolute -bottom-10 right-0 w-[420px] h-[120px] bg-gradient-to-l from-[#F32635] via-[#F32635]/80 to-transparent rounded-tl-[100px] pointer-events-none opacity-90 hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        
        {/* Main Footer Grid with SEO Internal Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <SMLogo />
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Hosur&apos;s specialized LED TV repair center. Dedicated diagnosis and component-level repair for LED television motherboards, backlight arrays, display panels, and power supply boards.
            </p>
            <div className="text-xs font-mono text-slate-400">
              <span className="text-[#F32635] font-bold">●</span> Location: Hosur, Tamil Nadu 635109
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-200 font-mono">
              Navigation
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-white transition-colors">
                  Repair Process
                </Link>
              </li>
              <li>
                <Link href="/#brands" className="hover:text-white transition-colors">
                  Supported Brands
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Dedicated Individual Service Pages (Crucial for SEO Equity) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-200 font-mono">
              Specialized Services
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link
                  href="/services/led-tv-repair"
                  className="hover:text-[#F32635] transition-colors"
                >
                  LED TV Repair Hosur
                </Link>
              </li>
              <li>
                <Link
                  href="/services/motherboard-repair"
                  className="hover:text-[#F32635] transition-colors"
                >
                  Motherboard & SoC Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/services/backlight-replacement"
                  className="hover:text-[#F32635] transition-colors"
                >
                  Backlight Strip Replacement
                </Link>
              </li>
              <li>
                <Link
                  href="/services/display-panel-repair"
                  className="hover:text-[#F32635] transition-colors"
                >
                  Display Screen Problem Fix
                </Link>
              </li>
              <li>
                <Link
                  href="/services/power-supply-repair"
                  className="hover:text-[#F32635] transition-colors"
                >
                  Power Supply Board Repair
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Info (Informational, NO BUTTONS) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-200 font-mono">
              Workshop Contact
            </p>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F32635] shrink-0 mt-0.5" />
                <span>Hosur Town, Tamil Nadu 635109 (Serving SIPCOT, Mathigiri, Bagalur Rd)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F32635] shrink-0" />
                <span>Mon - Sat : 9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex items-center gap-2.5 font-mono">
                <Phone className="w-4 h-4 text-[#F32635] shrink-0" />
                <span className="font-bold text-white">+91 94863 48116</span>
              </div>
              <div className="flex items-center gap-2.5 font-mono">
                <Mail className="w-4 h-4 text-[#F32635] shrink-0" />
                <span className="text-slate-400">contact@smelectronics-hosur.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Local SEO Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} SM Electronics. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-400">
            Professional LED TV Repair Specialist · Hosur, Tamil Nadu
          </p>
        </div>

      </div>
    </footer>
  );
}
