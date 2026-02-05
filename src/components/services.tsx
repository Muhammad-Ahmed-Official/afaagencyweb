'use client'

import { Crown, Smartphone, Search } from 'lucide-react';
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const services = [
  {
    title: 'Web Development',
    description: 'Stop building static sites and start deploying Intelligence. AFA Innovations specializes in Venture-Ready Web Development integrated with Autonomous AI Agents!',
    icon: <Crown className="w-5 h-5 text-white mr-2 inline" />,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/1632922319quin-service1-9.webp',
  },
  {
    title: 'AI Solutions',
    description: "Elevate your digital presence with Serverless Web Architecture and AI Integration. With a decade of expertise, AFA Innovations delivers custom designs, predictive analytics, and fine-tuned AI solutions to bring your digital vision to life. Request your quote today.",
    icon: <Search className="w-5 h-5 text-white mr-2 inline" />,
    image: 'img9.jpg',
  },
  {
    title: 'App development',
    description: 'Take your business to the next level with a custom mobile app. Our team of experienced app developers will bring your unique idea to life on iOS and Android.',
    icon: <Smartphone className="w-5 h-5 text-white mr-2 inline" />,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/1632921978quin-service-webdesign1-11.webp',
  },
];

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate services for seamless animation
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <section className="relative py-10 bg-linear-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/10 via-purple-900/5 to-cyan-900/10" />
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-[36px] font-bold mb-4 text-center">
            How We <span className="text-white">Architect Your Success?</span>
          </h3>
          <div className="description-services max-w-3xl mx-auto px-4">
           <p className="text-base md:text-[18px] leading-[1.6] md:mx-auto text-justify text-muted-foreground">
              At AFA Innovations, we don't just build software; we engineer growth engines. Our mission is to bridge the gap between complex business challenges and the <strong>$376 billion AI-driven economy</strong>. By merging elite Web and Mobile Development with custom Applied AI, we turn your strategic vision into a high-performance digital reality.
            </p>
          </div>
        </div>

        {/* Desktop Continuous Carousel */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden py-8">
            <motion.div 
              className="flex gap-8"
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear"
                }
              }}
            >
              {duplicatedServices.map((service, index) => (
                <div 
                  key={`desktop-${index}`}
                  className="shrink-0 w-80 bg-[#0a0a0a] border border-white/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
                  </div>
                  <div className="p-6 flex flex-col">
                    <h4 className="text-xl font-semibold flex items-center gap-2 mb-3">
                      {service.icon} {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground grow line-clamp-3">{service.description}</p>
                    <a href="/Contact" className="mt-4 inline-flex items-center gap-2 font-medium text-sm hover:text-white transition-all group">
                      Let's Start <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Continuous Carousel */}
        <div className="md:hidden relative overflow-hidden py-6">
          {/* Gradient overlays for better UX */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-black/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-black/90 to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-6"
            animate={{ x: [0, -800] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear"
              }
            }}
          >
            {duplicatedServices.map((service, index) => (
              <div 
                key={`mobile-${index}`}
                className="shrink-0 w-72 bg-[#0a0a0a] border border-white/20 rounded-3xl overflow-hidden shadow-xl active:scale-[0.98] transition-all duration-300"
              >
                <div 
                  className="h-40 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-5 flex flex-col">
                  <h4 className="text-lg font-semibold flex items-center gap-2 mb-2">
                    {service.icon} {service.title}
                  </h4>
                  <p className="text-xs text-muted-foreground grow line-clamp-3 mb-3">{service.description}</p>
                  <a href="/Contact" className="inline-flex items-center gap-2 font-medium text-xs hover:text-white transition-all group">
                    Let's Start <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pause on hover */}
        <style jsx global>{`
          @media (min-width: 768px) {
            .flex.gap-8 {
              animation-play-state: running;
            }
            .flex.gap-8:hover {
              animation-play-state: paused;
            }
          }
          
          @media (max-width: 767px) {
            .flex.gap-6 {
              animation-play-state: running;
            }
            .flex.gap-6:active {
              animation-play-state: paused;
            }
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ServicesSection;