import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-linear-to-r from-[#06080f] via-[#0d1630] py-25 overflow-hidden">
      <div className="container mx-auto max-w-300 px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Image Layout */}
          <div className="w-full md:w-1/2 relative">
            <div className="flex gap-4">
              {/* Image 3 (Large, Left) */}
              <div className="w-[45%] mt-12 transform translate-y-8">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group border border-white/10">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/loading-blog-8.gif"
                    alt="Mobile App Development"
                    width={500}
                    height={666}
                    unoptimized
                    className="w-full h-auto object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <span className="text-white font-bold text-lg">Mobile App Development</span>
                    <span className="text-white/70 text-xs">Powerful mobile apps</span>
                  </div>
                </div>
              </div>

              {/* Stacked Images 1 & 2 (Right) */}
              <div className="w-[55%] space-y-4">
                {/* Image 1 */}
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group border border-white/10 -translate-y-5">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/loading-blog-8.gif"
                    alt="AI Solutions"
                    width={500}
                    height={666}
                    unoptimized
                    className="w-full h-auto object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <span className="text-white font-bold text-lg">AI Solutions</span>
                    <span className="text-white/70 text-xs">Cutting-edge technology</span>
                  </div>
                </div>
                
                {/* Image 2 */}
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group border border-white/10 transform translate-x-4">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/loading-blog-8.gif"
                    alt="Web Development"
                    width={500}
                    height={666}
                    unoptimized
                    className="w-full h-auto object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <span className="text-white font-bold text-lg">Web Development</span>
                    <span className="text-white/70 text-xs">Custom web solutions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-10 left-0 bg-transparent flex items-baseline gap-4 pointer-events-none">
              <span className="text-[120px] font-extrabold leading-none text-white opacity-20 select-none">14</span>
              <div className="mb-6">
                <p className="text-white font-bold tracking-widest text-sm leading-tight">YEARS OF</p>
                <p className="text-white font-bold tracking-widest text-sm leading-tight">EXPERIENCE</p>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full md:w-1/2 mt-20 md:mt-0">
            <h4 className="text-[24px] font-semibold text-white mb-4">
              Trust the best – trust Appsians.
            </h4>
            
            <h3 className="text-[48px] font-bold text-white mb-8 leading-[1.2]">
              Transforming ideas into <span className="text-white underline decoration-white/20">Digital Realities.</span>
            </h3>
            
            <p className="text-[18px] text-[#B0B0B0] leading-[1.6] mb-10">
              From start-ups to enterprises, Appsians has helped businesses of all sizes turn their ideas into reality. With a focus on innovation, quality, and customer service, we&apos;re the software development partner you can trust to bring your project to life and help you reach your goals.
            </p>
            
            <ul className="space-y-4 mb-12">
              {[
                "Developed products that generates $5M+ in annual revenue",
                "Expertise in developing custom software solutions for multi-national clients",
                "Successfully served clients in the United States, UK, Germany, Dubai, Saudi Arabia, India, Pakistan, Egypt, Syria, Ukraine, and Portugal",
                "A proven track record of delivering high-quality software solutions for over a decade"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="mt-2.5 w-1.5 h-1.5 bg-white rounded-full shrink-0" />
                  <span className="text-[#B0B0B0] text-[18px]">{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="/contact" 
              className="inline-flex items-center justify-between gap-6 px-10 py-5 border border-white rounded-full bg-transparent text-white font-medium hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <span className="text-lg">Start a Project</span>
              <svg 
                width="12" 
                height="10" 
                viewBox="0 0 12 10" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;