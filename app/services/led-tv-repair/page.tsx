import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ServiceJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { Check, Shield, Wrench, Activity, Clock, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'LED TV Repair in Hosur | Comprehensive TV Service | SM Electronics',
  description: 'Expert LED TV repair in Hosur, Tamil Nadu. Complete system diagnostics, standby fault fixes, component restoration, and testing for Samsung, Sony, LG, TCL & Mi TVs.',
  keywords: [
    'LED TV repair Hosur',
    'Smart TV repair Hosur',
    'TV technician Hosur',
    'TV service center Hosur Tamil Nadu',
    'Sony LED TV repair Hosur',
    'Samsung TV repair Hosur',
    'Doorstep TV service Hosur'
  ],
  alternates: {
    canonical: 'https://smelectronics-hosur.com/services/led-tv-repair',
  },
  openGraph: {
    title: 'LED TV Repair in Hosur | SM Electronics',
    description: 'Accurate bench diagnostics & component-level LED TV repair in Hosur. Genuine spares & testing.',
    url: 'https://smelectronics-hosur.com/services/led-tv-repair',
    type: 'article',
  },
};

const FAQS = [
  {
    question: 'How do I know if my LED TV is repairable?',
    answer: 'Most power, motherboard, sound, and backlight issues are 100% repairable. Even when a TV appears completely dead, our technicians in Hosur test individual circuit lines to replace only the failed components.',
  },
  {
    question: 'Do you offer doorstep inspection across Hosur?',
    answer: 'Yes, we provide doorstep diagnosis across all areas of Hosur, including SIPCOT, Mathigiri, Bagalur Road, Avalapalli, and Rayakottai Road.',
  },
  {
    question: 'What brands of LED TVs do you repair?',
    answer: 'We service all major brands: Sony Bravia, Samsung, LG, TCL, Panasonic, Xiaomi (Mi), Haier, OnePlus, Vu, and Philips.',
  },
];

export default function LedTvRepairPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <ServiceJsonLd
        name="LED TV Repair in Hosur"
        description="Comprehensive electrical diagnostics and component-level repair for LED television displays in Hosur, Tamil Nadu."
        serviceType="TelevisionRepair"
        url="/services/led-tv-repair"
      />
      <FaqJsonLd faqs={FAQS} />
      <Header />

      {/* Hero Section */}
      <section className="bg-[#061426] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              { name: 'LED TV Repair', url: '/services/led-tv-repair' },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#F32635]">
              Dedicated Television Servicing
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              Professional LED TV Repair in Hosur
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Accurate electronic fault isolation, component-level board restoration, and multi-hour quality testing in Hosur, Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Technical Details */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-8">
              
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-slate-900 shadow-xl">
                <Image
                  src="/images/hero_living_room.jpg"
                  alt="Modern LED TV repair and service in Hosur"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-[#061426]">
                  Complete Television Electronic Diagnostics in Hosur
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Modern LED and Smart TVs are sophisticated electronic assemblies consisting of switched-mode power supplies (SMPS), high-density SoC mainboards, constant-current LED backlight drivers, and timing controller (T-Con) display processors. When a TV malfunctions, replacing whole modular assemblies can be prohibitively expensive.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  At <strong>SM Electronics</strong> in Hosur, our focus is always on <strong>component-level diagnostics</strong>. We measure exact voltage rails, check diode forward drops, and evaluate PWM signals to replace the exact discrete semiconductor that failed, saving you substantial costs while delivering durable repairs.
                </p>
              </div>

              {/* Common Symptoms Diagnosed */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-xl font-bold text-[#061426]">
                  Common LED TV Symptoms We Resolve
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>TV not turning on / red standby light blinking</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Sound working clearly but display is completely dark</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>TV stuck on manufacturer logo / infinite reboot</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Horizontal or vertical lines across the screen</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Uneven dark patches or flickering screen</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>HDMI ports not detecting set-top box or console</span>
                  </div>
                </div>
              </div>

              {/* Service Protocol */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#061426]">
                  Our Repair & Testing Protocol
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Before returning any repaired television to a customer in Hosur, it undergoes a mandatory electrical load and burn-in test running for several continuous hours. This verifies that temperature rise on heatsinks, capacitor ripple, and optical LED backlights remain within safe engineering tolerances.
                </p>
              </div>

            </div>

            {/* Right Sidebar Column (Informational, NO BUTTONS) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Workshop Quick Info Box */}
              <div className="p-6 rounded-3xl bg-[#061426] text-white border border-white/10 space-y-4">
                <h3 className="text-lg font-bold text-white">
                  Hosur Service Desk
                </h3>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#F32635] shrink-0 mt-0.5" />
                    <span>Hosur, Tamil Nadu (SIPCOT, Mathigiri, Bagalur Rd & nearby)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#F32635] shrink-0" />
                    <span>Monday to Saturday: 9:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-white">
                    <Phone className="w-4 h-4 text-[#F32635] shrink-0" />
                    <span>+91 94863 48116</span>
                  </div>
                </div>
              </div>

              {/* Other Services Navigation Links (SEO Link Equity) */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Other Specialized Services
                </h4>
                <ul className="space-y-2 text-xs font-semibold text-slate-800">
                  <li>
                    <Link
                      href="/services/motherboard-repair"
                      className="hover:text-[#F32635] transition-colors block py-1"
                    >
                      → Motherboard & SoC Repair
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/backlight-replacement"
                      className="hover:text-[#F32635] transition-colors block py-1"
                    >
                      → Backlight Array Replacement
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/display-panel-repair"
                      className="hover:text-[#F32635] transition-colors block py-1"
                    >
                      → Display Screen & Line Fix
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/power-supply-repair"
                      className="hover:text-[#F32635] transition-colors block py-1"
                    >
                      → Power Supply SMPS Repair
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-[#061426] text-center mb-8">
            Frequently Asked Questions · LED TV Repair
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs"
              >
                <h3 className="text-base font-bold text-[#061426] mb-1.5">
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
