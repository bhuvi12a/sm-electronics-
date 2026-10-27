'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LocalBusinessJsonLd, FaqJsonLd } from '@/components/JsonLd';
import {
  Wrench,
  Settings,
  Tv,
  Check,
  MapPin,
  Clock,
  Phone,
  Star
} from 'lucide-react';

// 5 Core Services linked to dedicated SEO pages
const SERVICES = [
  {
    id: 'led-tv',
    title: 'LED TV',
    subtitle: 'Repair',
    href: '/services/led-tv-repair',
    image: '/images/hero_living_room.jpg',
  },
  {
    id: 'motherboard',
    title: 'Motherboard',
    subtitle: 'Repair',
    href: '/services/motherboard-repair',
    image: '/images/tv_motherboard.jpg',
  },
  {
    id: 'backlight',
    title: 'Backlight',
    subtitle: 'Replacement',
    href: '/services/backlight-replacement',
    image: '/images/tv_backlight.jpg',
  },
  {
    id: 'display',
    title: 'Display',
    subtitle: 'Problem Fix',
    href: '/services/display-panel-repair',
    image: '/images/tv_display_panel.jpg',
  },
  {
    id: 'power-supply',
    title: 'Power Supply',
    subtitle: 'Repair',
    href: '/services/power-supply-repair',
    image: '/images/tv_power_supply.jpg',
  },
];

// Why Choose Us Checklist items
const WHY_CHOOSE_POINTS = [
  'Experienced Technicians',
  'Quality Service',
  'Affordable Pricing',
  'Doorstep Service',
];

// Repair Process Steps
const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Book Your Service',
    icon: Wrench,
  },
  {
    step: '02',
    title: 'We Diagnose',
    icon: Settings,
  },
  {
    step: '03',
    title: 'Get Your TV Repaired',
    icon: Tv,
  },
];

// Supported Brands
const BRANDS = [
  { name: 'SAMSUNG', color: 'text-[#034EA2]', style: 'font-black tracking-wider' },
  { name: 'LG', hasCircleLogo: true, color: 'text-[#A50034]', style: 'font-black tracking-wide' },
  { name: 'SONY', color: 'text-black', style: 'font-serif font-black tracking-widest' },
  { name: 'TCL', color: 'text-[#E2001A]', style: 'font-black tracking-widest' },
  { name: 'Panasonic', color: 'text-[#004696]', style: 'font-bold tracking-tight' },
  { name: 'Haier', color: 'text-[#005BAC]', style: 'font-bold tracking-wide' },
  { name: 'Mi', isMiIcon: true, color: 'text-white', style: 'font-bold' },
  { name: 'acer', color: 'text-[#83B81A]', style: 'font-bold lowercase tracking-normal' },
];

// Customer Testimonials
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    review: 'Excellent service. My TV is working perfectly!',
    avatar: '/images/customer_ramesh.jpg',
  },
  {
    id: 2,
    name: 'Priya S',
    review: 'Very professional and on time service.',
    avatar: '/images/customer_priya.jpg',
  },
  {
    id: 3,
    name: 'Vignesh',
    review: 'Highly recommend SM Electronics!',
    avatar: '/images/customer_vignesh.jpg',
  },
];

const HOME_FAQS = [
  {
    question: 'Where is SM Electronics located in Hosur?',
    answer: 'SM Electronics is based in Hosur, Tamil Nadu (PIN 635109), servicing residential and commercial clients across SIPCOT Phase 1 & 2, Mathigiri, Bagalur Road, Rayakottai Road, and Avalapalli.',
  },
  {
    question: 'What types of televisions do you repair?',
    answer: 'We specialize exclusively in LED, 4K UHD, and Smart televisions across all brands including Sony, Samsung, LG, TCL, Panasonic, Xiaomi, and Haier.',
  },
  {
    question: 'Do you offer doorstep TV inspection in Hosur?',
    answer: 'Yes, we provide doorstep diagnostic visits across Hosur town for backlight, power board, and installation checks.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#F32635] selection:text-white">
      <LocalBusinessJsonLd />
      <FaqJsonLd faqs={HOME_FAQS} />
      <Header />

      {/* ============================================================ */}
      {/* 2. CINEMATIC HERO SECTION                                    */}
      {/* ============================================================ */}
      <section className="relative bg-[#061426] text-white pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-32 lg:pb-36 overflow-hidden">
        
        {/* Living room TV photographic background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_living_room.jpg"
            alt="Large realistic LED TV displayed in a premium living room with mountain landscape"
            fill
            className="object-cover object-center lg:object-right"
            priority
          />
          {/* Split Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061426] via-[#061426]/90 to-transparent lg:w-[60%]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#061426] via-transparent to-[#061426]/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl space-y-6">
            
            {/* Top Brand Tag */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-slate-300">
              SM ELECTRONICS
            </p>

            {/* Huge Headline: "LED TV Repair Specialists" with "Repair" in vivid red */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
              LED TV<br />
              <span className="text-[#F32635]">Repair</span> Specialists
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-lg font-normal pt-1">
              Fast, Reliable and Professional LED TV Service at Your Doorstep in Hosur.
            </p>

            {/* Informational feature telemetry (NO BUTTONS) */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F32635]"></span>
                Accurate Diagnosis
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F32635]"></span>
                Component-Level Fixing
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F32635]"></span>
                Hosur, Tamil Nadu
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. OUR SERVICES SECTION (Links directly to separate pages)   */}
      {/* ============================================================ */}
      <section id="services" className="py-20 lg:py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading with Red Underline */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061426] tracking-tight">
              Our{' '}
              <span className="relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#F32635] rounded-full"></span>
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium">
              Complete LED TV Service Solutions in Hosur
            </p>
          </div>

          {/* 5 Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SERVICES.map((srv) => (
              <Link
                key={srv.id}
                href={srv.href}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg hover:border-[#F32635]/40 transition-all duration-300 p-4 flex flex-col items-center text-center group"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                  <Image
                    src={srv.image}
                    alt={`${srv.title} ${srv.subtitle} in Hosur`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Title & Subtitle */}
                <div className="pt-1">
                  <h3 className="text-base font-extrabold text-[#061426] leading-tight group-hover:text-[#F32635] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#1e40af] mt-0.5">
                    {srv.subtitle}
                  </p>
                  <span className="text-[11px] font-mono text-slate-400 mt-2 block group-hover:text-[#F32635] transition-colors">
                    View Service Page →
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. WHY CHOOSE SM ELECTRONICS? (WITH REAL TECHNICIAN PHOTO)   */}
      {/* ============================================================ */}
      <section id="about" className="bg-[#061426] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Column: Heading and Checklist */}
            <div className="lg:col-span-6 px-6 py-16 sm:px-12 sm:py-20 lg:py-24 space-y-8 z-10">
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Why Choose SM Electronics?
              </h2>

              {/* Checklist with Solid Red Check Circles */}
              <div className="space-y-4">
                {WHY_CHOOSE_POINTS.map((point) => (
                  <div key={point} className="flex items-center gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#F32635] flex items-center justify-center shrink-0 shadow-sm shadow-red-500/30">
                      <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-slate-100 tracking-wide">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technical description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md pt-2">
                Specialized bench tools and dedicated diagnostic focus exclusively for LED TV motherboards, backlight arrays, and power systems in Hosur, Tamil Nadu.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#F32635] transition-colors inline-flex items-center gap-1.5 border-b border-white/20 pb-0.5"
                >
                  <span>Learn more about our workshop & technician</span>
                  <span>→</span>
                </Link>
              </div>

            </div>

            {/* Right Column: ACTUAL REAL TECHNICIAN PHOTO PROVIDED BY USER */}
            <div className="lg:col-span-6 relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto lg:h-full min-h-[420px] lg:min-h-[520px] bg-[#030a14]">
              <Image
                src="/images/technician_real.jpg"
                alt="SM Electronics experienced television technician repairing open LED TV on workshop bench in Hosur"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061426] via-transparent to-transparent lg:w-32"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#061426] via-transparent to-transparent lg:hidden"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. OUR REPAIR PROCESS SECTION                                */}
      {/* ============================================================ */}
      <section id="process" className="py-20 lg:py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading with Red Underline */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061426] tracking-tight">
              Our{' '}
              <span className="relative inline-block">
                Repair
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#F32635] rounded-full"></span>
              </span>{' '}
              Process
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium">
              Simple Steps for Hassle-Free Service in Hosur
            </p>
          </div>

          {/* 3 Steps with Circular Icons and Connecting Arrows */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 max-w-4xl mx-auto">
            {PROCESS_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <React.Fragment key={step.step}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#061426] flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform duration-300">
                      <StepIcon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                    </div>
                    <h3 className="mt-4 text-base sm:text-lg font-bold text-[#061426]">
                      {step.title}
                    </h3>
                  </div>

                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:flex items-center text-[#1e40af] shrink-0">
                      <span className="text-2xl font-bold">→</span>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. SUPPORTED BRANDS SECTION                                  */}
      {/* ============================================================ */}
      <section id="brands" className="py-14 sm:py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#061426] tracking-tight">
              Supported{' '}
              <span className="relative inline-block">
                Brands
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#F32635] rounded-full"></span>
              </span>
            </h2>
          </div>

          {/* Brand Cards Strip */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-6xl mx-auto">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="rounded-xl border border-slate-200 bg-white px-4 sm:px-5 py-3 shadow-xs hover:shadow-md transition-shadow flex items-center justify-center shrink-0 min-w-[95px] sm:min-w-[110px]"
              >
                {brand.hasCircleLogo && (
                  <span className="w-5 h-5 rounded-full bg-[#A50034] text-white flex items-center justify-center text-[10px] font-black mr-1.5 shrink-0">
                    LG
                  </span>
                )}
                {brand.isMiIcon ? (
                  <span className="w-6 h-6 rounded bg-[#FF6700] text-white flex items-center justify-center text-[11px] font-black tracking-tight shrink-0">
                    mi
                  </span>
                ) : (
                  <span className={`text-sm sm:text-base ${brand.color} ${brand.style} whitespace-nowrap`}>
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. WHAT OUR CUSTOMERS SAY (TESTIMONIALS)                      */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-[#061426] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What Our{' '}
              <span className="relative inline-block">
                Customers
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#F32635] rounded-full"></span>
              </span>{' '}
              Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="rounded-2xl bg-white text-slate-900 p-5 shadow-lg flex items-center gap-4 hover:translate-y-[-2px] transition-transform duration-300"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-slate-100">
                  <Image
                    src={test.avatar}
                    alt={test.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center text-amber-400 gap-0.5 text-xs mb-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    {test.name}
                  </h3>

                  <p className="text-xs text-slate-600 mt-1 leading-snug line-clamp-2">
                    {test.review}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
