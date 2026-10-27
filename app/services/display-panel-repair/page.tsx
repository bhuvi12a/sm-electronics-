import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ServiceJsonLd, FaqJsonLd } from '@/components/JsonLd';
import { Check, Layers, Activity, Clock, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TV Display & Screen Issue Diagnosis in Hosur | T-Con & Line Fix | SM Electronics',
  description: 'Specialized LED TV display panel diagnostics in Hosur, Tamil Nadu. T-Con board testing, screen line diagnosis, COF ribbon cable checks, and honest repair feasibility assessment.',
  keywords: [
    'TV display repair Hosur',
    'TV screen lines repair Hosur',
    'T-Con board repair Hosur',
    'TV panel service Hosur',
    'Vertical lines on TV screen Hosur',
    'Horizontal lines TV fix Hosur',
    'Sony TV display repair Hosur',
    'Samsung screen repair Hosur'
  ],
  alternates: {
    canonical: 'https://smelectronics-hosur.com/services/display-panel-repair',
  },
  openGraph: {
    title: 'TV Display & Screen Issue Diagnosis in Hosur | SM Electronics',
    description: 'Lines on your TV screen or double image? Precision T-Con board and panel diagnostics in Hosur.',
    url: 'https://smelectronics-hosur.com/services/display-panel-repair',
    type: 'article',
  },
};

const FAQS = [
  {
    question: 'Can horizontal or vertical lines on an LED TV be repaired?',
    answer: 'It depends on whether the fault lies in the T-Con (timing controller) board, the flexible ribbon cables (FFC/COF), or physical cracks in the glass substrate. T-Con and ribbon cable voltage issues are repairable at component level. We provide an honest technical assessment on our Hosur bench.',
  },
  {
    question: 'What is a T-Con board in an LED TV?',
    answer: 'The T-Con (Timing Controller) board translates digital video signals from the mainboard into row and column driver signals for the liquid crystal panel matrix. When T-Con voltages drift, it causes ghosting, solarization, colored lines, or half-screen darkness.',
  },
  {
    question: 'Can physically broken or cracked TV screens be fixed?',
    answer: 'If the internal glass LCD matrix has been cracked by physical impact, the panel itself cannot be re-soldered or glued. In such cases, we advise customers transparently rather than making false repair promises.',
  },
];

export default function DisplayPanelRepairPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <ServiceJsonLd
        name="TV Display & Screen Issue Diagnosis in Hosur"
        description="Precision timing controller (T-Con) voltage balancing, flexible ribbon cable inspection, and screen line diagnosis in Hosur."
        serviceType="TelevisionRepair"
        url="/services/display-panel-repair"
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
              { name: 'Display Issue Diagnosis', url: '/services/display-panel-repair' },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#F32635]">
              T-Con & Display Matrix Inspection
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              TV Display & Screen Problem Diagnosis in Hosur
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Specialized analysis of timing controller boards, flexible ribbon cables, and display signal lines for lines, flickering, and solarized picture.
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
                  src="/images/tv_display_panel.jpg"
                  alt="T-Con board signal analysis and TV display test pattern diagnosis in Hosur"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-[#061426]">
                  Precision T-Con Signal Tracing & Panel Health Evaluation
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Display matrix problems frequently puzzle television owners. While physical panel damage cannot be repaired, many symptoms attributed to a &ldquo;dead panel&rdquo; actually stem from failing power management ICs on the T-Con board, oxidized flexible flat cables (FFC), or unbalanced reference voltages (VGH, VGL, VCOM, VDD).
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  At <strong>SM Electronics</strong> in Hosur, we test every critical test pad on the display sub-assembly using calibrated test pattern generators and multi-meter probes, isolating fixable circuit anomalies from irreparable matrix damage.
                </p>
              </div>

              {/* Display Symptoms Diagnosed */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-xl font-bold text-[#061426]">
                  Display Faults Evaluated on Our Hosur Bench
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Single or multiple vertical colored lines</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Horizontal jumping or rolling lines across image</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Solarized / inverted negative color display</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Double picture / ghosting image ghost shadows</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Half screen normal, other half dark or grey</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#F32635] shrink-0 mt-1" />
                    <span>Flickering image with high-speed horizontal distortion</span>
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
                    <span>Hosur, Tamil Nadu (SIPCOT, Mathigiri, Rayakottai Rd, Bagalur Rd)</span>
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
            Frequently Asked Questions · TV Display Diagnosis
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
