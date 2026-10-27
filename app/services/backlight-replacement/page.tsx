import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ServiceJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { Check, Sun, Activity, Clock, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'LED TV Backlight Replacement in Hosur | Screen Dark Sound OK | SM Electronics',
  description: 'Specialized LED TV backlight replacement in Hosur, Tamil Nadu. Complete aluminum-core strip array replacement with uniform optical lenses for bright, vivid picture restoration.',
  keywords: [
    'TV backlight replacement Hosur',
    'LED TV backlight repair Hosur',
    'TV black screen sound ok Hosur',
    'TV backlight strip price Hosur',
    'Sony Bravia backlight repair Hosur',
    'Samsung LED TV backlight Hosur',
    'LG TV backlight repair Hosur'
  ],
  alternates: {
    canonical: 'https://smelectronics-hosur.com/services/backlight-replacement',
  },
  openGraph: {
    title: 'LED TV Backlight Replacement in Hosur | SM Electronics',
    description: 'Black screen but audio working? Genuine aluminum-core LED strip array replacement in Hosur with warranty testing.',
    url: 'https://smelectronics-hosur.com/services/backlight-replacement',
    type: 'article',
  },
};

const FAQS = [
  {
    question: 'Why does my TV have sound but the picture is completely black?',
    answer: 'This classic symptom indicates backlight failure. While the liquid crystal panel and audio system work normally, the internal LED strips behind the screen have burned out or the constant-current driver has tripped. If you shine a flashlight closely at the screen, you will often see faint moving silhouettes.',
  },
  {
    question: 'Do you replace individual LED beads or the entire strip array?',
    answer: 'We strictly replace the full set of LED strip arrays with brand-new, aluminum-core strips. Replacing only individual burned-out beads causes premature failures as the remaining aged beads quickly burn out due to uneven electrical impedance.',
  },
  {
    question: 'How long does a TV backlight replacement take in Hosur?',
    answer: 'A complete backlight replacement usually takes 2 to 3 hours, followed by multi-hour testing to confirm even illumination and proper heat dissipation.',
  },
];

export default function BacklightReplacementPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <ServiceJsonLd
        name="LED TV Backlight Replacement in Hosur"
        description="Full aluminum-core LED strip array replacement and optical prism calibration for dark or dim television displays in Hosur."
        serviceType="TelevisionRepair"
        url="/services/backlight-replacement"
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
              { name: 'Backlight Replacement', url: '/services/backlight-replacement' },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#F32635]">
              Optical Array & Lumens Restoration
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              LED TV Backlight Replacement in Hosur
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Brand-new aluminum-core LED strip arrays and optical lenses for televisions with dark screens, dim picture, or flickering displays.
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
                  src="/images/tv_backlight.jpg"
                  alt="Brand new aluminum core LED TV backlight strips with optical lenses in Hosur"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-[#061426]">
                  Full-Set Backlight Array Replacement with Aluminum Core Backing
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Backlight failure is the single most common fault in modern LED, 4K, and Smart televisions. The backlight assembly consists of multiple series-connected strips containing high-lumen LED semiconductor diodes capped with convex optical prism lenses. Over thousands of hours of operation, thermal fatigue causes diodes to open-circuit or short out.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Unlike quick-patch shops that replace only the one burned-out bead, <strong>SM Electronics</strong> in Hosur always replaces the <strong>complete set of factory-matched strips</strong>. We use heavy-duty aluminum-backed strips for superior thermal dissipation and recalibrate the constant-current LED driver IC to prevent premature burnout.
                </p>
              </div>

              {/* Backlight Failure Symptoms */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-xl font-bold text-[#061426]">
                  Signs Your TV Requires Backlight Replacement
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Audio normal, but screen is completely black</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Flashlight test reveals faint moving image on panel</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Screen flashes on for 1 second then goes dark</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Noticeable dark horizontal bars or dimmer corners</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Picture brightness strobing or rapid flickering</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Bluish or purple tint spreading across the screen</span>
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
                  Explore Other Services
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
                      → All LED TV Services
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
            Frequently Asked Questions · TV Backlight Service
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
