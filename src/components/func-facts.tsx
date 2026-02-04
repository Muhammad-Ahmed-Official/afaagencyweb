import { Smile, Coffee, Lightbulb, Briefcase } from 'lucide-react';

const FunFactsSection = () => {
  return (
    <section 
      id="fun-facts" 
      className="fun-facts-section relative bg-linear-to-r from-[#06080f] via-[#0d1630] py-35"
      style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
    >
      <div className="container px-6 max-w-300">
        {/* Section Header */}
        <div className="mb-12.5">
          <h3 className="text-[48px] font-bold leading-[1.2] text-white mb-5 text-center">
            Fun Facts
          </h3>
          <p className="text-[18px] font-normal leading-[1.6] mx-auto text-muted-foreground max-w-210">
            The <strong>Growth-Centric</strong>  Version (Focus on Scalability)
The AFA Track Record "Our history is marked by high-velocity growth and engineered excellence. Having successfully navigated the digital landscape for over a decade, we’ve transformed the way brands operate. These achievements fuel our commitment to pushing the boundaries of Applied AI and Web Architecture, constantly refining our services to help you capture your share of the global digital market."
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7.5 text-center">
          {/* Happy Customers */}
          <div className="radial flex flex-col items-center justify-center p-5 transition-transform duration-300 hover:translate-y-1.25">
            <div className="radial-icon mb-5 text-white">
              <Smile size={45} strokeWidth={1} className="opacity-80" />
            </div>
            <span className="timer text-[60px] font-extrabold leading-[1.1] text-white block mb-2.5">
              15
            </span>
            <h4 className="text-[24px] font-semibold leading-[1.4] text-white">
              Happy Customers
            </h4>
          </div>

          {/* Countries */}
          <div className="radial flex flex-col items-center justify-center p-5 transition-transform duration-300 hover:translate-y-1.25">
            <div className="radial-icon mb-5 text-white">
              <Coffee size={45} strokeWidth={1} className="opacity-80" />
            </div>
            <span className="timer text-[60px] font-extrabold leading-[1.1] text-white block mb-2.5">
              4
            </span>
            <h4 className="text-[24px] font-semibold leading-[1.4] text-white">
              Countries
            </h4>
          </div>

          {/* Innovations */}
          <div className="radial flex flex-col items-center justify-center p-5 transition-transform duration-300 hover:translate-y-1.25">
            <div className="radial-icon mb-5 text-white">
              <Lightbulb size={45} strokeWidth={1} className="opacity-80" />
            </div>
            <span className="timer text-[60px] font-extrabold leading-[1.1] text-white block mb-2.5">
              12
            </span>
            <h4 className="text-[24px] font-semibold leading-[1.4] text-white">
              Innovations
            </h4>
          </div>

          {/* Great Projects */}
          <div className="radial flex flex-col items-center justify-center p-5 transition-transform duration-300 hover:translate-y-1.25">
            <div className="radial-icon mb-5 text-white">
              <Briefcase size={45} strokeWidth={1} className="opacity-80" />
            </div>
            <span className="timer text-[60px] font-extrabold leading-[1.1] text-white block mb-2.5">
              10
            </span>
            <h4 className="text-[24px] font-semibold leading-[1.4] text-white">
              Great Projects
            </h4>
          </div>
        </div>
      </div>

      {/* Adding a subtle border-bottom as per standard section transitions in the screenshots */}
      <div 
        className="absolute bottom-0 left-0 w-full" 
        style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
      />
    </section>
  );
};

export default FunFactsSection;