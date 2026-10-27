import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { LocalBusinessJsonLd } from '@/components/JsonLd';
import { Check, Tv, Shield, Activity, Clock, MapPin, Phone, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About SM Electronics | LED TV Repair Specialist in Hosur',
  description: 'Learn about SM Electronics, Hosur’s dedicated LED TV repair service workshop. Discover our commitment to accurate electronic diagnosis, component-level repairs, and clear communication.',
  keywords: [
    'About SM Electronics Hosur',
    'TV technician Hosur Tamil Nadu',
    'LED TV repair shop Hosur',
    'Television service center Hosur',
    'Experienced TV repairer Hosur'
  ],
  alternates: {
    canonical: 'https://smelectronics-hosur.com/about',
  },
  openGraph: {
    title: 'About SM Electronics | LED TV Repair Specialist in Hosur',
    description: 'Specialized LED TV repair workshop in Hosur, Tamil Nadu. Accurate bench diagnostics and dependable service.',
    url: 'https://smelectronics-hosur.com/about',
    type: 'profile',
  },
};

export default function AboutPage() {
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
              { name: 'About Us', url: '/about' },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#F32635]">
              Dedicated Electronics Workshop
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              About SM Electronics · Hosur
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              A specialized electronics repair workshop in Hosur, Tamil Nadu, committed exclusively to the diagnosis, servicing, and restoration of LED televisions.
            </p>
          </div>
        </div>
      </section>

      {/* Technician & Workshop Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Real Technician Photo on Left */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-200">
                <Image
                  src="/images/technician_real.jpg"
                  alt="Experienced TV technician at SM Electronics repair bench in Hosur"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="p-4 mt-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 flex items-center justify-between">
                <span>SM Electronics Workshop Bench</span>
                <span className="text-[#F32635] font-bold">Hosur, Tamil Nadu</span>
              </div>
            </div>

            {/* Authentic Workshop Philosophy on Right */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F32635]">
                Specialized Craftsmanship
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#061426] tracking-tight leading-tight">
                Specializing Exclusively in LED Television Circuitry
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                In an era where many repair shops handle a dizzying array of home appliances—from washing machines to kitchen grinders—<strong>SM Electronics</strong> was established with a singular, uncompromised focus: <strong>the precision science of LED television display electronics</strong>.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Located in Hosur, Tamil Nadu, our workshop bench is purpose-equipped with electronic test gear: digital storage oscilloscopes, laboratory variable DC power supplies, specialized LED backlight array testers, and precision micro-soldering stations.
              </p>

              {/* Core Tenets */}
              <div className="space-y-4 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-[#061426] mb-1">
                    Systematic Bench Diagnosis
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We trace signals from primary AC power rails to secondary inverter regulators and LVDS timing lines, pinpointing exact semiconductor faults rather than replacing whole modular boards unnecessarily.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-[#061426] mb-1">
                    Clear & Honest Communication
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We explain the root cause of the breakdown in straightforward terms and provide an honest estimate upfront. If a television screen is physically cracked beyond economical repair, we advise you objectively.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-base font-bold text-[#061426] mb-1">
                    Durable Component Restoration
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    From aluminum-core backlight strips to industrial electrolytic capacitors, we fit tested parts designed for long operating life under local voltage and climate conditions.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Workshop Location & Community */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#061426]">
              Serving Hosur Town & Surrounding Neighborhoods
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We proudly provide television inspection and repairs for families, offices, and commercial establishments across Hosur including SIPCOT Phase 1 & 2, Mathigiri, Bagalur Road, Rayakottai Road, Avalapalli, and Moranapalli.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs font-mono font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#F32635]" />
                Hosur, Tamil Nadu 635109
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#F32635]" />
                Mon - Sat: 9:00 AM – 8:00 PM
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#F32635]" />
                +91 94863 48116
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
