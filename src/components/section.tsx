import React from 'react';

const Section: React.FC = () => {
  return (
    <section className="about-us light-section bg-white text-[#1a1a1a] py-16 md:py-28">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left Column: Image with stats - Slightly wider */}
          <div className="w-full lg:w-[48%]">
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl shadow-gray-200/50 group">
              <div className="relative aspect-4/5 overflow-hidden">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d3bbd90-100a-47bc-baf1-41d6af3aae13-appsians-com/assets/images/1633027720quinheader-13.webp" 
                  alt="About Appsians - Top Rated Software Company"
                  className="w-full h-full object-cover transform transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                />
                {/* Overlay linear */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>
            
            {/* Enhanced stats section */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="bg-linear-to-br from-blue-50 to-white p-5 rounded-2xl border border-blue-100 shadow-sm">
                <div className="text-3xl font-bold text-black mb-1">3+</div>
                <div className="text-sm text-gray-700 font-medium">Years Experience</div>
                <div className="mt-2 text-xs text-gray-500">Since 2012</div>
              </div>
              <div className="bg-linear-to-br from-blue-50 to-white p-5 rounded-2xl border border-blue-100 shadow-sm">
                <div className="text-3xl font-bold text-black mb-1">10+</div>
                <div className="text-sm text-gray-700 font-medium">Projects Delivered</div>
                <div className="mt-2 text-xs text-gray-500">97% Success Rate</div>
              </div>
            </div>
            
            {/* Service tags under image */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">Our Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['Web Apps', 'Mobile Apps', 'Cloud', 'AI/ML', 'UI/UX', 'DevOps'].map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Content - More balanced width */}
          <div className="w-full lg:w-[52%]">
            <div className="lg:pl-6">
              {/* Enhanced badge with icon */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-linear-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-semibold mb-8 border border-blue-200 shadow-sm">
                <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">
                  <svg className="w-3.5 h-3.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-bold">Top Rated Plus Software Company</span>
              </div>

              {/* Main Heading with better hierarchy */}
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                We Transform <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-700">Digital</span> 
                <br className="hidden md:block" /> Experiences That
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-700 mt-2">
                  Make Brands Stand Out.
                </span>
              </h2>

              {/* Description with icon */}
              <div className="relative pl-4 mb-10">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-black rounded-full"></div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  From start-ups to enterprises, AFA Innovations has helped businesses of all sizes turn their ideas into reality. 
                  With a focus on innovation, quality, and customer service, we're the software development partner 
                  you can trust to bring your project to life and help you reach your goals.
                </p>
              </div>

              {/* Achievements List with cards */}
              <div className="">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Our Key Achievements
                  </span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    // {
                    //   title: "$5M+ Revenue",
                    //   desc: "Products we developed generate over $5M in annual revenue"
                    // },
                    {
                      title: "Global Reach",
                      desc: "Served clients in USA, UK, Pakistan, Sweden"
                    },
                    {
                      title: "Enterprise Expertise",
                      desc: "Custom solutions for multi-national corporations"
                    },
                    // {
                    //   title: "Proven Track Record",
                    //   desc: "12+ years delivering high-quality software solutions"
                    // }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="group p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        {/* <div className="shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        </div> */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to Transform Your Business?</h4>
                    <p className="text-gray-600 mb-0 md:mb-0">
                      Let's discuss how we can help you achieve your goals.
                    </p>
                  </div>
                  
                  <a
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-linear-to-r from-gray-900 to-black text-white rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/25 hover:-translate-y-0.5 active:scale-[0.98] min-w-40"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 mr-3">Get Started</span>
                    <svg 
                      width="14" 
                      height="12" 
                      viewBox="0 0 11.4 9.2" 
                      className="relative z-10 fill-current transform transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110"
                    >
                      <path d="M6.6,0.2L11,4.6L6.6,9l-1.1-1.1l2.6-2.6H0V3.7h8.1L5.5,1.3L6.6,0.2z" />
                    </svg>
                  </a>
                </div>
                
                <div className="mt-6 pt-6 border-t border-blue-200/50">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-blue-200 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-gray-500">Call us</div>
                        <div className="font-medium text-gray-900">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-blue-200 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-gray-500">Email us</div>
                        <div className="font-medium text-gray-900">hello@appsians.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Enhanced bottom services */}
        {/* <div className="mt-20 pt-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Services</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive digital solutions tailored to your business needs</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Web Development', icon: '🌐' },
              { name: 'Mobile Apps', icon: '📱' },
              { name: 'Cloud Solutions', icon: '☁️' },
              { name: 'UI/UX Design', icon: '🎨' },
              { name: 'Digital Transformation', icon: '🚀' }
            ].map((service, index) => (
              <div 
                key={index}
                className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.name}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Section;