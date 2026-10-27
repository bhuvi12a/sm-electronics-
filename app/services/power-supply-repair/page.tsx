import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ServiceJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { Check, Zap, Activity, Clock, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TV Power Supply Board Repair in Hosur | SMPS Fix | SM Electronics',
  description: 'Specialized LED TV power supply board (SMPS) repair in Hosur, Tamil Nadu. Fixing dead TVs, blown fuses, high-voltage capacitors, and surge-damaged circuits.',
  keywords: [
    'TV power supply repair Hosur',
    'TV SMPS board repair Hosur',
    'Dead TV repair Hosur',
    'TV not turning on fix Hosur',
    'TV power board service Hosur',
    'Samsung TV power board Hosur',
    'LG TV power supply repair Hosur'
  ],
  alternates: {
    canonical: 'https://smelectronics-hosur.com/services/power-supply-repair',
  },
  openGraph: {
    title: 'TV Power Supply Board Repair in Hosur | SM Electronics',
    description: 'TV completely dead or clicking inside? Component-level SMPS power supply restoration in Hosur.',
    url: 'https://smelectronics-hosur.com/services/power-supply-repair',
    type: 'article',
  },
};

const FAQS = [
  {
    question: 'Why won’t my TV turn on at all, even without a standby light?',
    answer: 'When a television shows zero signs of life (no standby light, no relay click), the fault almost always originates in the primary stage of the SMPS power supply board. Common culprits include blown anti-surge fuses, shorted rectifier bridge diodes, or open-circuit primary switching MOSFETs.',
  },
  {
    question: 'Why is my TV making a repetitive clicking sound inside?',
    answer: 'A repetitive clicking noise indicates that the power supply’s protection circuit is tripping into auto-shutdown mode because of a short circuit on the secondary voltage rails (+12V or +24V). We isolate the shorted secondary diode or capacitor and restore clean DC power.',
  },
  {
    question: 'Can power boards damaged by thunderstorm electrical surges be repaired?',
    answer: 'Yes! Lightning and grid surges usually take out the Metal Oxide Varistor (MOV), primary fuse, and input bridge rectifier. In over 85% of cases, component replacement restores full operation without requiring an entire new power board.',
  },
];

export default function PowerSupplyRepairPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <ServiceJsonLd
        name="TV Power Supply Board Repair in Hosur"
        description="Component-level switched-mode power supply (SMPS) restoration, capacitor replacement, and surge protection diagnostics in Hosur."
        serviceType="TelevisionRepair"
        url="/services/power-supply-repair"
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
              { name: 'Power Supply Repair', url: '/services/power-supply-repair' },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#F32635]">
              High-Voltage SMPS & Voltage Regulation
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              LED TV Power Supply Board Repair in Hosur
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Restoration of switched-mode power supplies, filter capacitors, switching transistors, and surge protection circuitry for dead televisions.
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
                  src="/images/tv_power_supply.jpg"
                  alt="High resolution SMPS power supply board repair with transformer and capacitors in Hosur"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-[#061426]">
                  Component-Level SMPS Fixing for Dead & Surge-Damaged TVs
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  The Switched-Mode Power Supply (SMPS) converts standard 230V AC mains electricity into tightly regulated DC voltages required by the television: typically +5V standby, +12V for audio and mainboard processing, and +24V to +120V for the backlight array. Voltage fluctuations, lightning spikes, and heat degradation frequently strain these high-voltage circuits.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  At <strong>SM Electronics</strong> in Hosur, we test power supply boards under full dummy electrical loads. We replace bulging or high-ESR electrolytic capacitors, shorted Schottky diodes, blown ceramic fuses, and PWM switching controller ICs with industrial-grade parts.
                </p>
              </div>

              {/* Power Supply Faults */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-xl font-bold text-[#061426]">
                  Common Power Faults We Fix on Our Hosur Bench
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>TV completely dead with zero LED indicator lights</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Red standby light blinks in continuous error patterns</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Repetitive clicking relay sound from inside the TV</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>TV shuts off automatically after 5 to 10 minutes</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Blown fuse or burnt smell following electrical surge</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Unstable secondary rail voltages causing random resets</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="p-6 rounded-3xl bg-[#061426] text-white border border-white/10 space-y-4">
                <h3 className="text-lg font-bold text-white">
                  Hosur Workshop Desk
                </h3>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#F32635] shrink-0 mt-0.5" />
                    <span>Hosur, Tamil Nadu (Serving SIPCOT, Mathigiri, Avalapalli, Bagalur Rd)</span>
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
                      href="/services/motherboard-repair"
                      className="hover:text-[#F32635] transition-colors block py-1"
                    >
                      → Motherboard & SoC Repair
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
            Frequently Asked Questions · TV Power Supply Repair
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
