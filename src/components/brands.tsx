'use client'

const clients = [
  {
    name: "Locodel",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/1673187904locodel-improve-5.png",
    alt: "Locodel"
  },
  {
    name: "Domino's",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/1673187842dominos-logo-6.png",
    alt: "Domino's"
  },
  {
    name: "FlexScreen Midwest",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/1673188104flex-screen-logo-7.png",
    alt: "FlexScreen Midwest"
  },
  {
    name: "Bitesforu",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/1673188478bitesforyou-1.png",
    alt: "Bitesforu"
  },
  {
    name: "MedTransExpress",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/1673188545medtransexpress-2.png",
    alt: "MedTransExpress"
  },
  {
    name: "PassportsandVisas.com",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/1673188854passportsandvisas-logo-3.png",
    alt: "PassportsandVisas.com"
  },
  {
    name: "Perfect Passport Photos",
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/1673188989perfect-passport-photos-4.png",
    alt: "Perfect Passport Photos"
  }
];

export default function BrandsLogoSlider() {
  return (
    <section 
      id="clients-section" 
      className="relative py-10 bg-linear-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/10 via-purple-900/5 to-cyan-900/10" />
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title - More visible */}
        <div className="text-center mb-5">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Partnering with innovative companies worldwide to deliver exceptional digital solutions
          </p>
        </div>

        {/* Main Slider Container - Increased contrast */}
        <div className="relative group w-full overflow-hidden rounded-3xl bg-linear-to-br from-gray-900/80 to-black/90 border border-white/20 p-8 backdrop-blur-lg shadow-2xl shadow-blue-900/20">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/5 to-cyan-500/10 opacity-50 rounded-3xl" />
          
          {/* Slider Container with Infinite Animation */}
          <div className="flex animate-marquee-infinite items-center gap-x-20 md:gap-x-32 lg:gap-x-32">
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={`${client.name}-${index}`}
                className="shrink-0 flex items-center justify-center group/item transition-all duration-500 ease-in-out"
              >
                {/* Logo container - Larger size and better contrast */}
                <div className="relative w-48 h-20 md:w-52 md:h-24 lg:w-58 lg:h-28 p-6 bg-linear-to-br from-white/5 via-white/10 to-white/5 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-2xl group-hover/item:shadow-white/20 group-hover/item:bg-white/15 backdrop-blur-sm">
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="object-contain w-full h-full transition-all duration-500 filter brightness-0 invert hover:brightness-100 hover:invert-0 cursor-pointer"
                    sizes="(max-width: 780px) 192px, 256px"
                    loading="lazy"
                    title={client.name}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Gradient Fades with stronger contrast */}
          <div className="absolute top-0 bottom-0 left-0 w-64 bg-linear-to-r from-black via-black/90 to-transparent z-20 pointer-events-none">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-linear-to-r from-blue-400/30 to-transparent rounded-full blur-xl" />
          </div>
          <div className="absolute top-0 bottom-0 right-0 w-64 bg-linear-to-l from-black via-black/90 to-transparent z-20 pointer-events-none">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-linear-to-l from-cyan-400/30 to-transparent rounded-full blur-xl" />
          </div>
        </div>

        {/* Client count indicator */}
        {/* <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">Featured Clients:</span>
            </div>
            <span className="text-white font-bold text-lg">{clients.length}+ Leading Brands</span>
          </div>
        </div> */}

        {/* Stats section - Enhanced */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-linear-to-br from-blue-900/20 to-transparent rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">50+</div>
            <div className="text-blue-200 font-semibold text-lg">Global Clients</div>
            <div className="text-gray-300 text-sm mt-2">Across multiple industries</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-purple-900/20 to-transparent rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">100%</div>
            <div className="text-purple-200 font-semibold text-lg">Satisfaction Rate</div>
            <div className="text-gray-300 text-sm mt-2">Consistent excellence</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-cyan-900/20 to-transparent rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">24/7</div>
            <div className="text-cyan-200 font-semibold text-lg">Dedicated Support</div>
            <div className="text-gray-300 text-sm mt-2">Always available</div>
          </div>
        </div> */}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-infinite {
          display: flex;
          width: fit-content;
          animation: marquee 35s linear infinite;
          will-change: transform;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
        
        /* Smooth hover transitions */
        * {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Enhanced logo hover effect */
        .group:hover .group-hover\\/item:scale-110 {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}