import React from 'react';
import Link from 'next/link';

const Hero2: React.FC = () => {
  return (
    <section 
      className="relative flex items-center min-h-112.5 pt-22.5 pb-25 bg-no-repeat bg-cover bg-center overflow-hidden"
      style={{ 
        backgroundImage: `linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 0 / 0%)), url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0c1a87e7-ae75-44e9-9981-d06a07c67db5-appsians-com/assets/images/home-6.webp')`,
        backgroundColor: '#000000'
      }}
    >
      <div className="container mx-auto px-6 max-w-285 relative z-10 mt-12">
        <div className="flex flex-col justify-center">
          {/* Breadcrumb Title */}
          <h1 
            className="text-white font-bold leading-tight tracking-tight mb-4"
            style={{ 
              fontSize: '48px',
              fontFamily: '"Inter", sans-serif'
            }}
          >
            Contact us
          </h1>

          {/* Breadcrumb Navigation Path */}
          <nav aria-label="Breadcrumb">
            <ul className="flex items-center space-x-2 text-[15px] p-0 m-0 list-none">
              <li className="flex items-center">
                <Link 
                  href="/" 
                  className="text-white hover:text-white/80 transition-colors duration-300 font-normal"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Home
                </Link>
              </li>
              
              <li className="flex items-center justify-center">
                <span className="inline-block w-1.25 h-1.25 rounded-full bg-white mx-2 opacity-50"></span>
              </li>

              <li className="flex items-center">
                <span 
                  className="text-[#9a9a9a] font-normal"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Contact us
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Optional decorative element: Subtle gradient overlay for bottom integration */}
      <div className="absolute bottom-0 left-0 w-full h-37.5 bg-linear-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero2;