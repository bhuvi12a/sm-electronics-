import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SM Electronics | Expert LED TV Repair Specialists | Hosur, Tamil Nadu',
  description: 'Specialized LED TV repair and precision diagnostic service in Hosur, Tamil Nadu. Component-level motherboard repair, backlight replacement, display diagnosis, and power supply restoration.',
  keywords: [
    'LED TV repair Hosur',
    'TV repair specialist Hosur',
    'LED TV service Hosur Tamil Nadu',
    'TV motherboard repair Hosur',
    'TV backlight replacement Hosur',
    'TV display screen diagnosis Hosur',
    'SM Electronics Hosur'
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#061426] text-slate-100 antialiased font-sans selection:bg-[#F32635] selection:text-white">
        {children}
      </body>
    </html>
  );
}
