import { ChevronRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function CTASection() {
  return (
    <section className="bg-gray-900 py-24 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Ready to Build Safer Cities?
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join us in deploying the next generation of smart urban infrastructure designed to connect and protect communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="group flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 font-semibold transition-all w-full sm:w-auto"
            >
              Partner With Us
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#deployment" 
              className="border border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-4 font-semibold transition-all w-full sm:w-auto"
            >
              Explore Deployment
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
