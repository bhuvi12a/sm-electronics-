import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { LocalBusinessJsonLd } from '@/components/JsonLd';
import { MapPin, Phone, Mail, Clock, Tv, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact SM Electronics | LED TV Service Center in Hosur, Tamil Nadu',
  description: 'Contact SM Electronics in Hosur for LED TV diagnosis and repair. Workshop location, telephone numbers, business hours, and coverage across SIPCOT, Mathigiri & Bagalur Road.',
  keywords: [
    'Contact SM Electronics Hosur',
    'TV service center phone number Hosur',
    'LED TV technician contact Hosur',
    'TV repair shop address Hosur',
    'Doorstep TV service Hosur phone number'
  ],
  alternates: {
    canonical: 'https://smelectronics-hosur.com/contact',
  },
  openGraph: {
    title: 'Contact SM Electronics | LED TV Service in Hosur',
    description: 'Direct telephone & workshop directory for LED TV repairs in Hosur, Tamil Nadu.',
    url: 'https://smelectronics-hosur.com/contact',
    type: 'website',
  },
};

const HOSUR_AREAS = [
  'Thirupathi Nagar',
  'SIPCOT Phase 1 & 2',
  'Mathigiri Town',
  'Bagalur Road Corridor',
  'Rayakottai Road',
  'Thally Road',
  'Avalapalli Area',
  'Zuzuvadi Industrial Border',
  'Moranapalli',
  'Old Bus Stand Area',
  'Kamraj Nagar',
  'Railway Station Environs',
  'Muneshwar Nagar',
  'Shanthi Nagar',
  'All Residential Layouts in Hosur',
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <LocalBusinessJsonLd />
      <Header />

      {/* Hero Section */}
      <section className="bg-[#061426] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'Contact', url: '/contact' },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#F32635]">
              Direct Technical Inquiries
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              Contact & Workshop Directory · Hosur
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Direct telephone contacts, workshop address details, and service area coverage across Hosur, Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F32635]">
                  Get In Touch
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#061426]">
                  Workshop Contact Information
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Call our technician directly for questions regarding television fault symptoms, repair estimates, and scheduling.
                </p>
              </div>

              {/* Contact Information Directory */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#F32635] shadow-xs shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase text-slate-500 font-semibold">
                      Direct Telephone Contacts
                    </span>
                    <p className="text-xl font-black text-[#061426] font-mono mt-1">
                      +91 94863 48116
                    </p>
                    <p className="text-base font-bold text-slate-700 font-mono mt-0.5">
                      +91 80728 67094
                    </p>
                    <span className="text-xs text-slate-500 font-mono block mt-1">
                      Primary workshop desk & technician contact
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 border-t border-slate-200 pt-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#F32635] shadow-xs shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase text-slate-500 font-semibold">
                      Workshop Location
                    </span>
                    <p className="text-base font-bold text-[#061426] mt-1">
                      SM Electronics
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      [Workshop Address Placeholder: Main Service Bench, Near Bus Stand / Landmark, Hosur, Tamil Nadu 635109, India]
                    </p>
                    <span className="text-xs text-slate-400 font-mono block mt-1">
                      *Editable address placeholder for official business verification
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 border-t border-slate-200 pt-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#F32635] shadow-xs shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase text-slate-500 font-semibold">
                      Electronic Mail
                    </span>
                    <p className="text-sm font-bold text-[#061426] font-mono mt-1">
                      [contact@smelectronics-hosur.com / Verified Email Placeholder]
                    </p>
                    <span className="text-xs text-slate-400 font-mono block mt-0.5">
                      Technical documentation & service correspondence
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 border-t border-slate-200 pt-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#F32635] shadow-xs shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase text-slate-500 font-semibold">
                      Business & Workshop Hours
                    </span>
                    <p className="text-sm font-bold text-[#061426] mt-1">
                      Monday to Saturday: 9:00 AM – 8:00 PM
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Sunday: By Prior Appointment / Urgent Diagnostics
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Local Service Area Coverage (Crucial for Local SEO) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F32635]">
                  Coverage Area
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#061426]">
                  Service Area: Hosur, Tamil Nadu
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Both customer workshop drop-off and technician doorstep inspection are supported across all key localities of Hosur.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-[#061426]">
                  <MapPin className="w-4 h-4 text-[#F32635]" />
                  <span>Key Neighborhoods We Cover in Hosur:</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono text-slate-700">
                  {HOSUR_AREAS.map((area) => (
                    <div
                      key={area}
                      className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs"
                    >
                      {area}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Doorstep & Workshop Protocols:</strong> For minor backlight or power supply checks, technician inspection at your residence in Hosur is arranged by phone. Complex chip-level micro-soldering and multi-hour burn-in testing are conducted on our anti-static workshop bench.
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
