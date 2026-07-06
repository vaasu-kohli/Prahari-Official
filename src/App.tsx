/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  ChevronRight, AlertTriangle, Headphones, Shield, 
  Presentation, Cloud, Mic, Building2, TrainFront, 
  Plane, Trees, Store, MapPin, FileText, Mail, Phone
} from 'lucide-react';
import { FadeIn } from './components/FadeIn';

// Import Components
import { ProductImageModal } from './components/ProductImageModal';
import { VideoSection } from './components/VideoSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { FloatingContactButton } from './components/FloatingContactButton';

// Import Generated Images
import heroImg from './assets/images/prahari_hero_new.png';
import sosImg from './assets/images/prahari_new_sos.png';
import cameraImg from './assets/images/prahari_new_camera.png';
import vaasuImg from './assets/images/vaasu_picture.png';
import frontViewImg from './assets/images/prahari_front.jpg.png';
import backViewImg from './assets/images/prahari_back.jpg.png';
import leftViewImg from './assets/images/prahari_left.jpg.png';
import rightViewImg from './assets/images/prahari_right.jpg.png';

// Import Deployment Images
import envSmartCity from './assets/images/env_smartcity.png';
import envMarket from './assets/images/env_market.png';
import envCommercial from './assets/images/env_commercial.png';
import envPark from './assets/images/env_park.png';
import envBus from './assets/images/env_bus.png';
import envRailway from './assets/images/env_metro.png';

export default function App() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const productImages = [
    { src: frontViewImg, label: "Front View" },
    { src: backViewImg, label: "Back View" },
    { src: leftViewImg, label: "Left View" },
    { src: rightViewImg, label: "Right View" },
  ];

  return (
    <div className="min-h-screen items-start bg-white font-sans text-gray-900 selection:bg-blue-200">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="PRAHARI Grid Systems Logo" className="h-[44px] w-auto group-hover:opacity-80 transition-opacity" />
            <div className="flex flex-col">
              <span className="text-white font-heading font-bold tracking-[0.15em] leading-tight text-lg">PRAHARI</span>
              <span className="text-gray-400 tracking-[0.3em] font-medium uppercase text-[0.6rem] leading-tight">Grid Systems</span>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Product</a>
            <a href="#deployment" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Deployment</a>
            <a href="#advantages" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Advantages</a>
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>
          
          <a href="#contact" className="bg-white text-black rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-gray-200 transition-colors">
            Partner With Us
          </a>
        </div>
      </header>

      {/* SECTION 1: HERO */}
      <section className="relative bg-black h-screen min-h-[800px] pt-20 flex items-center overflow-hidden">
        <img 
          src={heroImg} 
          alt="Prahari pillar in Indian smart city at night" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8 mt-12">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-white text-[10px] font-bold tracking-wider uppercase opacity-90">Dual-Purpose Smart Infrastructure</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 max-w-4xl">
              Smart Public Infrastructure <br className="hidden md:block"/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">for Urban India.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
              A scalable smart infrastructure platform combining <span className="text-white font-medium">Digital Advertising</span> with <span className="text-white font-medium">Emergency SOS Access</span>, <span className="text-white font-medium">Public Communication</span>, <span className="text-white font-medium">Smart Surveillance</span>, and <span className="text-white font-medium">Remote Monitoring</span>.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-4 font-semibold transition-all">
                Partner With Prahari
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#deployment" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-full text-white px-8 py-4 font-semibold transition-all">
                Explore Deployments
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2: PRODUCT */}
      <section id="product" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-12 max-w-3xl">
              <h2 className="font-heading text-4xl font-bold tracking-tight mb-4">Platform Overview</h2>
              <p className="text-xl text-gray-600 leading-relaxed">A unified infrastructure platform designed to improve emergency accessibility, public communication, and smart city readiness across urban environments.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {productImages.map((item, idx) => (
                  <FadeIn key={idx} delay={0.1 + (idx * 0.05)}>
                    <button 
                      onClick={() => setSelectedImageIndex(idx)}
                      className="w-full bg-white rounded-[24px] p-4 border border-gray-100 shadow-sm flex flex-col items-center group cursor-zoom-in"
                    >
                      <div className="w-full aspect-square md:aspect-[3/4] relative overflow-hidden rounded-xl mb-3 bg-gray-50 flex items-center justify-center">
                        <img 
                          src={item.src} 
                          alt={item.label} 
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-600">{item.label}</span>
                    </button>
                  </FadeIn>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: AlertTriangle, title: "Emergency SOS Access", desc: "A highly visible emergency button connecting instantly to dispatch operators." },
                  { icon: Headphones, title: "Live Operator Connectivity", desc: "Two-way audio communication with emergency services via built-in microphone." },
                  { icon: Shield, title: "HD Surveillance Camera", desc: "Integrated high-definition surveillance enhancing situational awareness." },
                  { icon: Mic, title: "Public Communication System", desc: "Built-in public address system for emergency broadcasting and alerts." },
                  { icon: Presentation, title: "Digital Advertising Display", desc: "High-resolution digital displays for civic announcements and commercial visibility." },
                  { icon: Cloud, title: "Remote Monitoring Dashboard", desc: "Continuous uptime monitoring and remote digital content management." },
                ].map((feature, i) => (
                  <FadeIn key={i} delay={0.2 + (i * 0.05)}>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all h-full flex flex-col group">
                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-6 h-6" strokeWidth={2} />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Sub-section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.4}>
              <div className="relative h-80 rounded-3xl overflow-hidden group">
                <img src={sosImg} alt="Emergency SOS Button" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-white font-semibold text-xl mb-1">Emergency SOS Button</h3>
                  <p className="text-gray-300 text-sm">Direct link to live dispatch operators.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="relative h-80 rounded-3xl overflow-hidden group">
                <img src={cameraImg} alt="Security Camera Setup" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-white font-semibold text-xl mb-1">Security Camera Setup</h3>
                  <p className="text-gray-300 text-sm">Enhanced public space monitoring.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 3: DEPLOYMENT SETTINGS */}
      <section id="deployment" className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-heading text-4xl font-bold tracking-tight mb-4">Primary Deployment Environments</h2>
              <p className="text-xl text-gray-600 leading-relaxed">Preparing for pilot and scalable deployments across high-footfall urban environments where public safety and visibility intersect.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: envRailway, label: "Smart City Corridors", desc: "Municipal roads and smart city development zones requiring connected public infrastructure." },
              { img: envMarket, label: "Municipal Markets", desc: "High-footfall public markets where local businesses need affordable visibility and communities need accessible safety infrastructure." },
              { img: envBus, label: "Commercial Districts", desc: "Retail streets, shopping zones, clinics, restaurants, and business clusters requiring public communication and advertising infrastructure." },
              { img: envPark, label: "Public Parks", desc: "Community gathering spaces benefiting from emergency access, public announcements, and visitor information systems." },
              { img: envSmartCity, label: "Bus Terminals", desc: "Transit hubs with high daily footfall where public communication and emergency accessibility are essential." },
              { img: envRailway, label: "Metro Station Entrances", desc: "Busy public access points that require visibility, communication, and rapid emergency assistance." },
            ].map((env, i) => (
              <FadeIn key={i} delay={0.1 + (i * 0.1)}>
                <div className="relative h-80 rounded-2xl overflow-hidden group border border-gray-200 shadow-sm flex flex-col justify-end">
                  <img src={env.img} alt={env.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity" />
                  <div className="relative z-10 p-6">
                    <h3 className="text-white font-semibold text-xl mb-2">{env.label}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{env.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY PRAHARI */}
      <section id="advantages" className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-12 max-w-4xl">
              <h2 className="font-heading text-4xl font-bold tracking-tight mb-6">Why PRAHARI?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">A unified approach to urban infrastructure, blending commercial viability with critical public safety capabilities.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                <h3 className="font-bold text-xl mb-3">Revenue + Safety</h3>
                <p className="text-gray-600 leading-relaxed">Advertising revenue helps support public safety infrastructure.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                <h3 className="font-bold text-xl mb-3">One Installation, Multiple Benefits</h3>
                <p className="text-gray-600 leading-relaxed">A single deployment provides advertising, communication, surveillance, and emergency access.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                <h3 className="font-bold text-xl mb-3">Smart City Ready</h3>
                <p className="text-gray-600 leading-relaxed">Designed for campuses, transit hubs, municipalities, and commercial districts.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 5: IMPACT & SCALABLE MODEL */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-heading text-4xl font-bold tracking-tight mb-12">Impact & Scalable Business Model</h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01.", title: "Public Safety", body: "Improves emergency accessibility by bringing communication infrastructure directly to public spaces." },
              { num: "02.", title: "Smart City Readiness", body: "Built to support future municipal integration and modern urban infrastructure initiatives." },
              { num: "03.", title: "Sustainable Infrastructure Model", body: "Advertising revenue helps support deployment, maintenance, and long-term operational sustainability." },
              { num: "04.", title: "Local Economic Growth", body: "Provides affordable hyperlocal digital visibility for local businesses and community organizations." },
            ].map((impact, i) => (
              <FadeIn key={i} delay={0.1 + (i * 0.1)}>
                <div className="border-t border-white/20 pt-6">
                  <span className="text-blue-400 font-mono text-sm block mb-4">{impact.num}</span>
                  <h3 className="font-bold text-xl mb-3">{impact.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{impact.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FOUNDER */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-10">
              <img 
                src={vaasuImg} 
                alt="Vaasu Deep Kohli - Founder & CEO" 
                className="w-48 h-48 object-cover rounded-2xl shadow-md border border-gray-100 shrink-0" 
              />
              <div>
                <h2 className="text-3xl font-heading font-bold mb-1">Vaasu Deep Kohli</h2>
                <h3 className="text-blue-600 tracking-wider uppercase text-sm font-semibold mb-6">Founder & CEO <span className="text-gray-300 mx-2">|</span> PRAHARI Grid Systems</h3>
                <p className="text-gray-700 font-medium text-xl leading-relaxed">
                  "Building practical, scalable urban infrastructure that connects commercial visibility with critical public safety capabilities."
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 7: VIDEO SECTION */}
      <VideoSection />

      {/* SECTION 8: CTA SECTION */}
      <CTASection />

      {/* SECTION 9: CONTACT / FORM */}
      <ContactSection />

      {/* SECTION 9.5: BROCHURE DOWNLOAD */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold tracking-tight mb-4">Download Company Brochure</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Learn more about PRAHARI’s infrastructure platform, deployment environments, and capabilities.</p>
            <a 
              href="/PRAHARI_Brochure_Final.pdf" 
              download
              className="inline-flex items-center gap-2 bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 font-semibold transition-colors"
            >
              <FileText className="w-5 h-5" />
              Download Brochure (PDF)
            </a>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 10: FOOTER */}
      <footer className="bg-black text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 mb-12">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-baseline mb-4">
                <span className="font-heading text-2xl font-bold tracking-tighter">PRAHARI</span>
                <span className="text-gray-400 text-xs tracking-widest uppercase ml-3">Grid Systems</span>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                Smart Public Infrastructure for Urban India.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end text-gray-400 space-y-3">
              <a href="mailto:vasudeepkohli@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> vasudeepkohli@gmail.com
              </a>
              <a href="tel:+917780987246" className="hover:text-white transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 77809 87246
              </a>
              <a href="https://prahari-official.vercel.app/" className="hover:text-white transition-colors flex items-center gap-2">
                <Cloud className="w-4 h-4" /> https://prahari-official.vercel.app/
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} PRAHARI Grid Systems. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FloatingContactButton />

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <ProductImageModal 
          images={productImages} 
          initialIndex={selectedImageIndex} 
          onClose={() => setSelectedImageIndex(null)} 
        />
      )}

    </div>
  );
}

