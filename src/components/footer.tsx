'use client'

import { Facebook, Twitter, Youtube, ArrowRight, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    
    <footer className="relative bg-black/90 text-white overflow-hidden">
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/pattern-2-23.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'luminosity'
        }}
      />

      <div className="container relative z-10 mx-auto px-6 py-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Let's get to work CTA */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-[12px] font-bold tracking-[3.6px] uppercase text-white mb-6 block">
              READY TO DO THIS
            </span>
            <h2 className="text-[60px] md:text-[85px] font-extrabold leading-[1.1] mb-10 text-white">
              Let&apos;s get to <br /> work
            </h2>
            <div className="header__action">
              <a  href="/Contact" 
                className="btn btn-style1 group relative flex items-center justify-center gap-2 px-5 py-3 border border-white rounded-[50px] text-white text-[15px] font-medium overflow-hidden transition-all duration-300">
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                
                <span className="relative z-10 transition-colors duration-400 group-hover:text-black">
                  Get the Offer 
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:text-black group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Columns: Links and Contact */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
            
            {/* Quick Links */}
            <div>
              <h4 className="text-[24px] font-bold mb-8 relative inline-block group cursor-pointer">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white/20 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-linear-to-r from-blue-400 via-white to-blue-400 bg-size-[200%_100%] group-hover:w-full group-hover:animate-[gradientMove_3s_linear_infinite] transition-all duration-500 ease-out"></span>
              </h4>
              <ul className="space-y-4">
               
                <li>
                  <a href="/About" className="text-muted-foreground hover:text-white transition-colors duration-300 text-[16px]">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/Contact" className="text-muted-foreground hover:text-white transition-colors duration-300 text-[16px]">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Say Hello / Contact */}
            <div>
                <h4 className="text-[24px] font-bold mb-8 relative inline-block group cursor-pointer">
                  Say Hello
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white/20 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-linear-to-r from-blue-400 via-white to-blue-400 bg-size-[200%_100%] group-hover:w-full group-hover:animate-[gradientMove_3s_linear_infinite] transition-all duration-500 ease-out"></span>
                </h4>
              <div className="space-y-4 mb-8">
                <a 
                  href="mailto:contact@appsians.com" 
                  className="block text-muted-foreground hover:text-white transition-colors duration-300 text-[16px] break-all"
                >
                  afainnovationsofficial@gmail.com
                </a>
                {/* <a 
                  href="mailto:hr@appsians.com" 
                  className="block text-muted-foreground hover:text-white transition-colors duration-300 text-[16px] break-all"
                >
                  afainnovationsofficial@gmail.com
                </a> */}
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-6">
                <a href="https://www.facebook.com/share/17o1AxfnVE/"  target="_blank"  className="text-muted-foreground hover:text-white transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/afa_innovations?igsh=MWVwbW1qOHZkOGJjag==" target="_blank"  className="text-muted-foreground hover:text-white transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/company/afainnovations" className="text-muted-foreground hover:text-white transition-colors duration-300">
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[14px] text-muted-foreground">
          <p>© {currentYear}. All rights reserved by AFA Innovations.</p>
        </div>
      </div>

      {/* Cookie Banner (Visual Simulation from Screenshot) */}
      {/* <div className="fixed bottom-0 left-0 w-full bg-sidebar/95 backdrop-blur-sm border-t border-white/5 py-3 px-6 z-9999 flex flex-wrap items-center justify-center gap-4 text-center">
        <p className="text-[13px] text-muted-foreground">
          We use cookies to give you the best online experience. By continuing to browse the site you are agreeing to our use of cookies. 
          <a href="/privacy-policy" className="ml-1 underline hover:text-white">Read more</a>
        </p>
        <button className="bg-white text-black text-[13px] font-bold px-6 py-1.5 rounded-full hover:bg-gray-200 transition-colors">
          I agree
        </button>
      </div> */}
      <style jsx>{`
  @keyframes gradientMove {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`}</style>
    </footer>
  );
}