'use client'

import { useState, useRef } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Muhammad Farooq',
    role: 'CEO And Founder Of Aizex',
    image: 'founder1.jpeg',
    text: "We couldn't be happier with the website AFA Innovations created for Aizex! The design is sleek and modern, aligning perfectly with our brand's vision. Their attention to detail and dedication to delivering a user-friendly experience fully exceeded our expectations. This team turned our ideas into a digital masterpiece!",
  },
  {
    id: 2,
    name: 'Muhammad Jarar',
    role: 'CEO and Founder Luverraltd',
    image: 'founder2.jpeg',
    text: 'AFA Innovations is a great startup for designing any type of website. They worked closely with me to make sure all my ideas were considered, offering regular updates and feedback. I highly recommend their team for anyone looking for a reliable Website Design and Development Partner.',
  },
];

export default function Team() {
  const containerRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="relative bg-white/90 py-10 overflow-hidden max-w-7xl mx-auto">
      {/* Background Shape */}
      <div className="absolute top-0 left-0 w-1/2 h-full " />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
            Our Teams
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
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
                        <p className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-black/70 font-semibold text-sm uppercase tracking-wider">
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
           transform: translateX(-100%);
          }
        }

        .animate-testimonials-marquee {
          animation: testimonials-marquee 40s linear infinite;
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
            animation-duration: 35s;
          }
        }
      `}</style>
    </section>
  )
}
