import { Play } from 'lucide-react';
import { FadeIn } from './FadeIn';
import heroImg from '../assets/images/prahari_hero_city_night_1781514384878.jpg';

export function VideoSection() {
  return (
    <section className="bg-black py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-white mb-4">See PRAHARI in Action</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Discover how our infrastructure transforms public spaces by providing immediate safety access and modern communication capabilities.
            </p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <a 
            href="https://drive.google.com/file/d/1SyDS7Enqf6nKxvvN6q8swUjH3pk5YXpb/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative rounded-3xl overflow-hidden group border border-white/10"
          >
            <div className="aspect-video w-full relative">
              <img 
                src={heroImg} 
                alt="PRAHARI in Action Video Thumbnail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Play className="w-8 h-8 text-white group-hover:text-black ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
