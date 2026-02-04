import { Facebook, Instagram, Linkedin, MoveDown, Twitter } from 'lucide-react';
import React from 'react';

const Hero3: React.FC = () => {
  const bgImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d3bbd90-100a-47bc-baf1-41d6af3aae13-appsians-com/assets/images/1633027720quinheader-13.webp";

  return (
    <section 
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for readability if image is too bright, though the theme is dark */}
      <div className="absolute inset-0 bg-[#00000000] z-0" />

      <div className="container relative z-10">
        <div className="max-w-285 mx-auto">
          <div className="max-w-200">
            <h1 
              className="font-display text-[48px] md:text-9xl font-bold text-white leading-[1.2] mb-2"
              style={{ letterSpacing: '-0.02em' }}
            >
              About 
            </h1>
            <h2 className="font-display font-bold text-[48px] md:text-8xl text-outline mb-3"> the company </h2>
            <p 
              className="font-body text-[16px] md:text-[18px] text-white/90 leading-[1.8] max-w-162.5"
            >
              We help brands achieve their goals through innovative and creative web and mobile applications, as well as digital marketing services.
            </p>
          </div>
        </div>
      </div>

      {/* Social Sidebar - Absolute Positioned on the left side of the screen per screenshot */}
      <div className="absolute left-22 bottom-10 hidden lg:block z-20 animate-in fade-in duration-1000 delay-700">
        <ul className="flex gap-6">
          <li className='border border-white rounded-full p-2'>
            <a 
              href="https://www.instagram.com/afa_innovations?igsh=MWVwbW1qOHZkOGJjag==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-70 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </li>
          <li className='border border-white rounded-full p-2'>
            <a 
              href="https://www.facebook.com/share/17o1AxfnVE/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-70 transition-opacity"
            >
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </li>
          <li className='border border-white rounded-full p-2'>
            <a 
              href="https://www.linkedin.com/company/afainnovations" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-70 transition-opacity"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer">
        <a href="#clients-section" className="text-white/40 hover:text-white transition-colors">
          <MoveDown className="w-6 h-6" />
        </a>
      </div>

      <style jsx global>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero3;