import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ServiceJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { Check, Cpu, Zap, Activity, Clock, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TV Motherboard Repair in Hosur | Smart TV Chip-Level Fix | SM Electronics',
  description: 'Specialized LED & Smart TV motherboard repair in Hosur. Micro-soldering, eMMC firmware flashing, processor reflow, and audio/HDMI controller IC restoration.',
  keywords: [
    'TV motherboard repair Hosur',
    'Smart TV board repair Hosur',
    'TV stuck on logo repair Hosur',
    'eMMC TV flashing Hosur',
    'Chip level TV repair Hosur',
    'Sony motherboard service Hosur',
    'Samsung TV motherboard Hosur'
  ],
  alternates: {
    canonical: 'https://smelectronics-hosur.com/services/motherboard-repair',
  },
  openGraph: {
    title: 'TV Motherboard Repair in Hosur | SM Electronics',
    description: 'Chip-level Smart TV mainboard restoration. Avoid costly board replacements with precision micro-soldering in Hosur.',
    url: 'https://smelectronics-hosur.com/services/motherboard-repair',
    type: 'article',
  },
};

const FAQS = [
  {
    question: 'Why is my TV stuck on the company logo?',
    answer: 'A television stuck on the manufacturer logo usually indicates corrupted eMMC flash memory, failing firmware sectors, or degraded solder joints beneath the main SoC processor. We reprogram the firmware using high-speed programmers and reflow the SoC on our Hosur bench.',
  },
  {
    question: 'Is motherboard repair cheaper than buying a replacement board?',
    answer: 'Yes! Replacing an entire Smart TV mainboard often costs 40% to 60% of the price of a new television. Component-level repair addresses only the failed IC or passive components, typically saving our Hosur clients 50% to 70% of the cost.',
  },
  {
    question: 'How long does chip-level motherboard repair take?',
    answer: 'Standard motherboard diagnostics and firmware reprogramming take 1 to 2 working days due to meticulous micro-soldering and post-repair thermal stress testing.',
  },
];

export default function MotherboardRepairPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <ServiceJsonLd
        name="TV Motherboard Repair in Hosur"
        description="Chip-level diagnostics, micro-soldering, and eMMC firmware recovery for LED and Smart TV mainboards in Hosur."
        serviceType="TelevisionRepair"
        url="/services/motherboard-repair"
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
              { name: 'Motherboard Repair', url: '/services/motherboard-repair' },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#F32635]">
              Micro-Soldering & SoC Diagnostics
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              LED & Smart TV Motherboard Repair in Hosur
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Precision chip-level restoration, eMMC factory firmware programming, and processor reflow for non-booting or freezing televisions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-8">
              
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-slate-900 shadow-xl">
                <Image
                  src="/images/tv_motherboard.jpg"
                  alt="Smart TV motherboard processor and microchip repair in Hosur"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-[#061426]">
                  Chip-Level Mainboard Diagnostics Without Board Replacement
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  The motherboard (mainboard) acts as the brain of your television, managing video scaling, audio processing, Android/Smart OS operations, Wi-Fi connectivity, and HDMI communication. High heat dissipation combined with lead-free solder fatigue often causes micro-fractures under BGA chips or flash memory corruption.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Instead of discarding the board, <strong>SM Electronics</strong> in Hosur employs professional hot-air rework stations, digital oscilloscopes, and dedicated eMMC programmers to perform delicate component-level repairs on original boards.
                </p>
              </div>

              {/* What We Repair on the Mainboard */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-xl font-bold text-[#061426]">
                  Key Mainboard Faults Fixed on Our Hosur Bench
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>TV frozen on Android / brand boot logo</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Infinite restarting loop (boot-loop fault)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Damaged or non-functioning HDMI controller IC</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Missing 3.3V, 1.8V, or 1.1V core processor rails</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Audio amp IC failure or cracked distorted sound</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Wi-Fi module / Bluetooth chip communication failure</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="p-6 rounded-3xl bg-[#061426] text-white border border-white/10 space-y-4">
                <h3 className="text-lg font-bold text-white">
                  Hosur Service Information
                </h3>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#F32635] shrink-0 mt-0.5" />
                    <span>Hosur, Tamil Nadu (Coverage across SIPCOT, Mathigiri, Bagalur Rd)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#F32635] shrink-0" />
                    <span>Mon - Sat: 9:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-white">
                    <Phone className="w-4 h-4 text-[#F32635] shrink-0" />
                    <span>+91 94863 48116</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Related TV Services
                </h4>
                <ul className="space-y-2 text-xs font-semibold text-slate-800">
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
                      → Display Panel & Line Repair
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
                  <li>
                    <Link
                      href="/services/led-tv-repair"
                      className="hover:text-[#F32635] transition-colors block py-1"
                    >
                      → General LED TV Service
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
            Frequently Asked Questions · TV Motherboard Repair
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
