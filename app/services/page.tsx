import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { LocalBusinessJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { Check, Tv, ArrowRight, Shield, Activity, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'LED TV Repair Services in Hosur | SM Electronics',
  description: 'Specialized LED TV repair services in Hosur, Tamil Nadu. Component-level motherboard fixing, backlight strip replacement, display diagnosis, and power supply restoration.',
  keywords: [
    'LED TV repair services Hosur',
    'TV service center Hosur Tamil Nadu',
    'Smart TV repair Hosur',
    'TV backlight repair Hosur',
    'Motherboard repair Hosur',
    'LED TV panel service Hosur'
  ],
  alternates: {
    canonical: 'https://smelectronics-hosur.com/services',
  },
  openGraph: {
    title: 'LED TV Repair Services in Hosur | SM Electronics',
    description: 'Expert LED TV repair solutions across Hosur. Board-level diagnostics, original spares, and dependable bench testing.',
    url: 'https://smelectronics-hosur.com/services',
    type: 'website',
  },
};

const SERVICES_LIST = [
  {
    slug: 'led-tv-repair',
    title: 'LED TV Repair',
    subtitle: 'Comprehensive System Restoration',
    image: '/images/hero_living_room.jpg',
    description: 'Full-system electrical diagnostics, firmware integrity checks, and circuit-level restoration for all leading LED and Smart television brands in Hosur.',
    features: [
      'Comprehensive system voltage analysis',
      'Standby circuit troubleshooting',
      'Doorstep inspection & workshop bench servicing',
      'Pre-delivery electrical burn-in testing',
    ],
  },
  {
    slug: 'motherboard-repair',
    title: 'Motherboard Repair',
    subtitle: 'Micro-Soldering & Chip-Level Fix',
    image: '/images/tv_motherboard.jpg',
    description: 'Advanced chip-level diagnostics, BGA processor reflow, and eMMC firmware flashing for televisions stuck on logo or failing to boot.',
    features: [
      'BGA processor re-soldering & heat sink renewal',
      'eMMC storage IC flashing & boot-loop recovery',
      'HDMI port controller & video IC replacement',
      'Economical alternative to buying costly new mainboards',
    ],
  },
  {
    slug: 'backlight-replacement',
    title: 'Backlight Replacement',
    subtitle: 'Aluminum-Core Optical Arrays',
    image: '/images/tv_backlight.jpg',
    description: 'Restore complete, uniform screen brightness with brand-new aluminum-core LED strip arrays and optical prism lenses for dark or dim screens.',
    features: [
      'Complete strip array replacement (no partial patching)',
      'High-conductivity aluminum backing for heat dissipation',
      'Uniform convex optical lenses preventing hot spots',
      'LED driver current regulation calibration',
    ],
  },
  {
    slug: 'display-panel-repair',
    title: 'Display & Screen Problem Fix',
    subtitle: 'T-Con & Panel Line Diagnosis',
    image: '/images/tv_display_panel.jpg',
    description: 'Precision timing controller (T-Con) voltage balancing, flexible ribbon cable inspection, and honest assessments on screen lines and ghosting.',
    features: [
      'T-Con board signal analysis with test pattern generator',
      'COF flexible flat cable checking for contact corrosion',
      'VGH, VGL, VDD, and VCOM test point balancing',
      'Objective feasibility assessment on panel repairability',
    ],
  },
  {
    slug: 'power-supply-repair',
    title: 'Power Supply Repair',
    subtitle: 'SMPS Board Component Fix',
    image: '/images/tv_power_supply.jpg',
    description: 'Component-level repair for dead televisions, blinking red standby lights, and power boards damaged by voltage surges.',
    features: [
      'Electrolytic filter capacitor & fuse replacement',
      'Switching transistor & PWM IC diagnosis',
      'High-voltage isolation transformer testing',
      'Short-circuit and surge protection verification',
    ],
  },
];

const FAQS = [
  {
    question: 'Do you service all LED TV brands in Hosur?',
    answer: 'Yes, SM Electronics specializes in all major LED TV brands including Sony, Samsung, LG, TCL, Panasonic, Xiaomi (Mi), Haier, and OnePlus.',
  },
  {
    question: 'How long does a TV backlight replacement take?',
    answer: 'Backlight array replacement typically takes 2 to 4 hours. The TV then undergoes a burn-in test to verify uniform brightness and temperature stability.',
  },
  {
    question: 'Do you offer doorstep inspection in Hosur?',
    answer: 'Yes, doorstep diagnostic inspection is available across Hosur including SIPCOT, Mathigiri, Bagalur Road, Rayakottai Road, and Avalapalli.',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <LocalBusinessJsonLd />
      <FaqJsonLd faqs={FAQS} />
      <Header />

      {/* Hero Header */}
      <section className="bg-[#061426] text-white py-14 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F32635]">
              Technical Service Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              Specialized LED TV Repair Services in Hosur
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              SM Electronics delivers precision bench diagnostics and component-level repairs exclusively for LED television circuitry. Explore our dedicated service categories below.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_LIST.map((service, index) => (
            <article
              key={service.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:border-[#F32635]/40 transition-colors shadow-xs ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 shadow-md ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Column */}
              <div
                className={`lg:col-span-7 space-y-4 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F32635]">
                  {service.subtitle}
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-[#061426] tracking-tight">
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-[#F32635] transition-colors"
                  >
                    {service.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Simple Text Link (NO BUTTONS) */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm font-bold text-[#F32635] hover:text-[#061426] transition-colors flex items-center gap-1.5"
                  >
                    <span>Read full technical details & symptoms</span>
                    <span>→</span>
                  </Link>
                  <span className="text-xs font-mono text-slate-400">Hosur Bench</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ Section for Rich Snippets */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#061426]">
              Frequently Asked Questions · TV Service in Hosur
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Clear answers regarding diagnosis, repairs, and service procedures.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs"
              >
                <h3 className="text-base font-bold text-[#061426] mb-2">
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
