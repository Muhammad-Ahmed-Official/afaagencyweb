'use client'

const projects = [
  {
    id: '01',
    title: 'QuickPipe.ai',
    category: 'SaaS AI sales platform',
    image: 'img3.jpeg',
    link: 'Quickpipe.ai',
  },
  {
    id: '02',
    title: 'Trainetic.ai',
    category: 'AI FITNESS TRAINEER',
    image: 'img4.jpeg',
    link: 'https://stridefitness.framer.website',
  },
  {
    id: '03',
    title: 'Amanah.ai',
    category: 'AI Donnation PLatform',
    image: 'img2.jpeg',
    link: '#',
  },
  {
    id: '04',
    title: 'QUTFYT.ai',
    category: 'AI Startup',
    image: 'img1.jpeg',
    link: '#',
  },
  {
    id: '05',
    title: 'Qadr.ai',
    category: 'AI Startup',
    image: 'img5.jpeg',
    link: '#',
  },
  {
    id: '05',
    title: 'Luverra.ltd',
    category: 'Web Development',
    image: 'img6.jpeg',
    link: 'Luverraltd.com',
  },
  {
    id: '06',
    title: 'Aizex',
    category: 'Game Development',
    image: 'img10.jpeg',
    link: 'https://ahadazizjaffer2.github.io/AIZEX/',
  },
];

export default function PortfolioSection() {
  return (
    <section id='portfolio' className="relative py-10 bg-linear-to-br from-black via-gray-900 to-black overflow-hidden"
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
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-4 text-center">
          <h4 className="text-sm md:text-base font-semibold text-white/70 mb-1 uppercase tracking-widest">
            Selected works
          </h4>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Our projects.
          </h3>
        </div>

        <div className="relative group w-full overflow-hidden rounded-3xl p-7">
      

          <div className="flex animate-portfolio-marquee items-stretch gap-6 md:gap-8">
            {[...projects, ...projects].map((project, index) => (
              <div 
                key={`${project.id}-${index}`}
                className="group/card shrink-0 w-72 md:w-80 lg:w-96"
              >
                <div className="project-box-div overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/10 transition-all duration-300 flex flex-col h-full hover:border-white/25">
                  {/* Image Container */}
                  <a 
                    href={project.link} 
                    className="block relative w-full aspect-video overflow-hidden shrink-0"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      loading="lazy"
                    />
                  </a>
                  
                  {/* Content Container */}
                  <div className="flex flex-col grow p-5 md:p-6 space-y-3">
                    {/* ID and Category Row */}
                    <div className="flex items-center justify-between gap-2 -mt-1">
                      <div className="text-6xl md:text-7xl font-black leading-none select-none tracking-tight relative group/number">
                        <span className="text-transparent" style={{ 
                          WebkitTextStroke: '1px rgba(96, 165, 250, 0.3)',
                        }}>
                          {project.id}
                        </span>
                        <div className="absolute inset-0 text-6xl md:text-7xl font-black leading-none tracking-tight bg-white bg-clip-text text-transparent opacity-0 group-hover/number:opacity-100 transition-opacity duration-300">
                          {project.id}
                        </div>
                      </div>
                      <div className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-white/60 text-right shrink-0">
                        {project.category}
                      </div>
                    </div>
                    {/* Title */}
                    <h4 className="text-lg md:text-xl font-bold text-white leading-snug transition-colors duration-300">
                      <a href={project.link} className="hover:text-white/90 line-clamp-2">
                        {project.title}
                      </a>
                    </h4>

                    {/* Spacer to push button to bottom */}
                    <div className="grow" />

                    {/* CTA Button */}
                    <div className="project-button border-t border-white/15 pt-3">
                      <a 
                        href={project.link} 
                        className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-white/90 transition-all duration-300 group/btn hover:text-white hover:gap-3"
                      >
                       {project.title === "Amanah.ai" || project.title === "QUTFYT.ai"? <span className="text-[10px] md:text-xs">Coming soon</span> : <span className="text-[10px] md:text-xs">Let's click</span>}
                        <svg 
                          width="18" 
                          height="18" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="transition-transform duration-300 group-hover/btn:translate-x-2 shrink-0"
                        >
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes portfolio-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-portfolio-marquee {
          display: flex;
          width: fit-content;
          animation: portfolio-marquee 45s linear infinite;
          will-change: transform;
        }

        .animate-portfolio-marquee:hover {
          animation-play-state: paused;
        }

        .project-box-div {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .project-box-div:hover {
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .container {
          max-width: 1200px;
        }

        /* Enhanced number visibility */
        .project-number {
          color: rgba(255, 255, 255, 0.35) !important;
          font-weight: 900 !important;
          letter-spacing: -0.03em !important;
          line-height: 1 !important;
        }

        /* Better text contrast */
        .text-white\/60 {
          color: rgba(255, 255, 255, 0.75) !important;
        }

        /* Smooth animations */
        * {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-portfolio-marquee {
            animation: portfolio-marquee 40s linear infinite;
          }

          .project-number {
            font-size: 1.75rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .project-number {
            font-size: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .project-number {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </section>
  );
}