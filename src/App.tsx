/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  ChevronRight, AlertTriangle, Headphones, Shield, 
  Presentation, Cloud, Mic, Building2, TrainFront, 
  Plane, Trees, Store, MapPin
} from 'lucide-react';
import { FadeIn } from './components/FadeIn';

// Import Components
import { ProductImageModal } from './components/ProductImageModal';
import { VideoSection } from './components/VideoSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { FloatingContactButton } from './components/FloatingContactButton';

// Import Generated Images
import heroImg from './assets/images/prahari_hero_city_night_1781514384878.jpg';
import sosImg from './assets/images/prahari_detail_sos_1781514400991.jpg';
import cameraImg from './assets/images/prahari_detail_camera_1781514421057.jpg';
import vaasuImg from './assets/images/vaasu_picture.png';
import frontViewImg from './assets/images/prahari_front.jpg.png';
import backViewImg from './assets/images/prahari_back.jpg.png';
import leftViewImg from './assets/images/prahari_left.jpg.png';
import rightViewImg from './assets/images/prahari_right.jpg.png';

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
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-white text-[10px] font-bold tracking-wider uppercase opacity-90">Currently in Product Development & Pilot Preparation</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 max-w-4xl">
              Modern Public Safety Infrastructure <br className="hidden md:block"/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">for Indian Cities.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h2 className="text-xl md:text-2xl text-blue-300 font-medium mb-6 max-w-2xl">
              Smart Public Infrastructure for Urban India
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Building safer, smarter, and more connected public spaces through technology-driven public safety infrastructure.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-4 font-semibold transition-all">
                Partner With Prahari
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#deployment" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-full text-white px-8 py-4 font-semibold transition-all">
                Explore Pilot Deployment
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2: PRODUCT */}
      <section id="product" className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-16 max-w-3xl">
              <h2 className="font-heading text-4xl font-bold tracking-tight mb-4">Prahari Infrastructure Platform</h2>
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
                  { icon: AlertTriangle, title: "Emergency SOS Access", desc: "A highly visible emergency button connecting instantly to dispatch." },
                  { icon: Headphones, title: "Live Operator Connectivity", desc: "Two-way audio communication with emergency services via built-in microphone." },
                  { icon: Shield, title: "Smart Surveillance", desc: "Integrated surveillance camera enhancing situational awareness around the unit." },
                  { icon: Presentation, title: "Digital Display Infrastructure", desc: "High-resolution digital displays for civic announcements and public messaging." },
                  { icon: Cloud, title: "Centralized Monitoring", desc: "Continuous uptime monitoring and remote digital content management." },
                  { icon: Mic, title: "Public Communication", desc: "Built-in public address system for emergency broadcasting and community alerts." },
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
      <section id="deployment" className="bg-white py-32 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-4xl font-bold tracking-tight mb-4">Target Deployment Environments</h2>
              <p className="text-xl text-gray-600 leading-relaxed">Preparing for pilot and scalable deployments across high-footfall urban environments where public safety and visibility intersect.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building2, label: "Smart Cities" },
              { icon: TrainFront, label: "Metro Stations" },
              { icon: Plane, label: "Airports" },
              { icon: Trees, label: "University Campuses" },
              { icon: Store, label: "Commercial Districts" },
              { icon: MapPin, label: "Public Markets" },
            ].map((env, i) => (
              <FadeIn key={i} delay={0.1 + (i * 0.1)}>
                <div className="bg-gray-50 border border-gray-100 hover:bg-black hover:border-black hover:text-white transition-colors duration-300 rounded-2xl p-8 flex flex-col items-center text-center group cursor-default">
                  <env.icon className="w-10 h-10 text-gray-400 group-hover:text-white/80 transition-colors mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-lg">{env.label}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY IT MATTERS */}
      <section id="advantages" className="bg-gray-50 py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-16 max-w-4xl">
              <h2 className="font-heading text-4xl font-bold tracking-tight mb-6">Why Public Safety Infrastructure Matters</h2>
              <p className="text-xl text-gray-600 leading-relaxed">India's rapidly growing urban population requires smarter and more accessible public infrastructure. Emergency response accessibility, public communication systems, and connected urban networks are becoming increasingly important as cities modernize and expand.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                <h3 className="font-bold text-xl mb-3">Growing Urban Populations</h3>
                <p className="text-gray-600 leading-relaxed">Indian cities are expanding rapidly, increasing the need for accessible public safety infrastructure.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                <h3 className="font-bold text-xl mb-3">Emergency Accessibility</h3>
                <p className="text-gray-600 leading-relaxed">Visible and immediate access to assistance can improve emergency response and public confidence.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                <h3 className="font-bold text-xl mb-3">Smart City Modernization</h3>
                <p className="text-gray-600 leading-relaxed">Modern urban infrastructure increasingly depends on connected systems that improve safety, communication, and operational efficiency.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 5: IMPACT & SCALABLE MODEL */}
      <section className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-heading text-4xl font-bold tracking-tight mb-16">Impact & Scalable Business Model</h2>
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
                <h3 className="text-blue-600 tracking-wider uppercase text-sm font-semibold mb-6">Founder & CEO</h3>
                <p className="text-gray-600 font-light text-lg 2xl:text-xl leading-relaxed italic">
                  "I started Prahari after recognizing two persistent challenges across Indian cities: limited access to immediate help during public emergencies and the lack of affordable outdoor visibility for local businesses. Prahari combines both into a single infrastructure model, where advertising revenue helps support public safety services. The goal is to build practical, scalable infrastructure that makes public spaces safer, smarter, and more connected."
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

      {/* SECTION 10: FOOTER */}
      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-baseline mb-2">
              <span className="font-heading text-2xl font-bold tracking-tighter">PRAHARI</span>
              <span className="text-gray-400 text-xs tracking-widest uppercase ml-3">Grid Systems</span>
            </div>
            <p className="text-sm text-gray-500">Modern Public Safety Infrastructure for Indian Cities</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end text-sm text-gray-500 space-y-1">
            <span>Contact: <a href="mailto:vasudeepkohli@gmail.com" className="text-white hover:text-gray-300 transition-colors">vasudeepkohli@gmail.com</a></span>
            <span className="text-white">+91 77809 87246</span>
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

