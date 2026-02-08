'use client'

const clients = [
  {
    name: "Luverra.ltd",
    src: "brand1.png",
    alt: "Luverra.ltd"
  },
  {
    name: "QUTFYT.ai",
    src: "brand2.png",
    alt: "QUTFYT.ai"
  },
  {
    name: "Stride.ai",
    src: "brand3.png",
    alt: "Stride.ai"
  },
  {
    name: "Qadr.ai",
    src: "brand4.png",
    alt: "Qadr.ai"
  },
  {
    name: "AMANI",
    src: "brand5.png",
    alt: "AMANI"
  },
  {
    name: "QuickPipe.ai",
    src: "brand6.png",
    alt: "QuickPipe.ai"
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
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title - More visible */}
        <div className="text-center mb-4 sm:mb-5">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 tracking-tight px-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-xl max-w-3xl mx-auto leading-relaxed px-2">
            Partnering with innovative companies worldwide to deliver exceptional digital solutions
          </p>
        </div>

        {/* Main Slider Container - Increased contrast */}
        <div className="relative group w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-linear-to-br from-gray-900/80 to-black/90 border border-white/20 p-4 sm:p-6 md:p-8 backdrop-blur-lg shadow-2xl shadow-blue-900/20">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/5 to-cyan-500/10 opacity-50 rounded-3xl" />
          
          {/* Slider Container with Infinite Animation */}
          <div className="flex animate-marquee-infinite items-center gap-x-12 sm:gap-x-16 md:gap-x-20 lg:gap-x-32">
            {clients?.map((client, index) => (
              <div 
                key={`${client.name}-${index}`}
                className="shrink-0 flex items-center justify-center group/item transition-all duration-500 ease-in-out"
              >
                {/* Logo container - Larger size and better contrast */}
                <div className="relative w-28 h-12 sm:w-36 sm:h-14 md:w-48 md:h-20 lg:w-52 lg:h-24 xl:w-58 xl:h-28 p-3 sm:p-4 md:p-6 bg-linear-to-br from-white/5 via-white/10 to-white/5 rounded-xl sm:rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-2xl group-hover/item:shadow-white/20 group-hover/item:bg-white/15 backdrop-blur-sm">
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="object-contain w-full h-full transition-all duration-500 filter brightness-0 invert hover:brightness-100 hover:invert-0 cursor-pointer"
                    sizes="(max-width: 700px) 256px, 256px"
                    loading="lazy"
                    title={client.name}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Gradient Fades with stronger contrast */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 md:w-64 bg-linear-to-r from-black via-black/90 to-transparent z-20 pointer-events-none">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-linear-to-r from-blue-400/30 to-transparent rounded-full blur-xl" />
          </div>
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 md:w-64 bg-linear-to-l from-black via-black/90 to-transparent z-20 pointer-events-none">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-linear-to-l from-cyan-400/30 to-transparent rounded-full blur-xl" />
          </div>
        </div>
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