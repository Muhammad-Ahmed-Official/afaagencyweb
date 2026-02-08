'use client'

import { useState, useRef } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Agha Talha',
    role: 'CEO And Founder Of Aizex',
    image: '../ceo1.jpeg',
    text: "We couldn't be happier with the website AFA Innovations created for Aizex! The design is sleek and modern, aligning perfectly with our brand's vision. Their attention to detail and dedication to delivering a user-friendly experience fully exceeded our expectations. This team turned our ideas into a digital masterpiece!",
  },
  {
    id: 2,
    name: 'Muhammad Ali',
    role: 'CEO and Founder Luverraltd',
    image: '../ceo3.jpeg',
    text: 'AFA Innovations is a great startup for designing any type of website. They worked closely with me to make sure all my ideas were considered, offering regular updates and feedback. I highly recommend their team for anyone looking for a reliable Website Design and Development Partner.',
  },
  { 
    id: 3, 
    name: 'Beetoo', 
    role: 'Founder at Quickpipe', 
    image: '../ceo2.jpeg', 
    text: 'AFA Innovation is a trustworthy and honest Startup whose commitment and dedication have no bounds. They will easily help you grow and support you as long you give him back the same'
  },
  { 
    id: 4, 
    name: 'Abdul Ahad Noman', 
    role: 'Software Engineer at Quickpipe', 
    image: '../ceo4.jpeg', 
    text: 'I had the opporotunity to work with AFA Innovations during a fast-paced project where i was reponsible for handling the development side. AFA Innovations foucused on defining the project direction and keeping everything aligned with the overall vision'
  },
];

export default function Reviews() {
  const containerRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="relative bg-white/90 py-8 sm:py-10 overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-linear-to-r from-emerald-50/30 to-transparent clip-path-polygon" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="mb-6 sm:mb-10 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 px-2">
            Our Clients
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            They are just some of those who have trusted our services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scroll Container */}
          <div className="overflow-hidden">
            <div
              ref={containerRef}
              className={`flex gap-6 md:gap-8 items-start ${
                !isPaused ? 'animate-testimonials-marquee' : ''
              }`}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="shrink-0 w-[85vw] md:w-[40vw] lg:w-[35vw] xl:w-[30vw]"
                >
                  {/* Card */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 h-full shadow-lg hover:shadow-xl hover:border-emerald-200 transition-all duration-500">
                    {/* Stars Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-black text-xl">
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 line-clamp-4 h-24 md:h-28">
                      {testimonial.text}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-linear-to-r from-transparent via-gray-300 to-transparent mb-6" />

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="shrink-0 relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-black/30"
                        />
                      </div>

                      {/* Author Details */}
                      <div className="grow">
                        <p className="font-bold text-gray-900 text-base sm:text-lg truncate">
                          {testimonial.name}
                        </p>
                        <p className="text-black/70 font-semibold text-xs sm:text-sm uppercase tracking-wider line-clamp-2">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes testimonials-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-testimonials-marquee {
          animation: testimonials-marquee 8s linear infinite;
          width: max-content;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .clip-path-polygon {
          clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-testimonials-marquee {
            animation-duration: 8s;
          }
        }
      `}</style>
    </section>
  )
}
