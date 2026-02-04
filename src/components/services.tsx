'use client'

import { Crown, Globe, Smartphone, Cpu, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
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
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/1632922118quin-service2-10.webp',
  },
  {
    title: 'App development',
    description: 'Take your business to the next level with a custom mobile app. Our team of experienced app developers will bring your unique idea to life on iOS and Android.',
    icon: <Smartphone className="w-5 h-5 text-white mr-2 inline" />,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/1632921978quin-service-webdesign1-11.webp',
  },
  // {
  //   title: 'Machine Learning',
  //   description: 'Transform your business with the power of machine learning. Our team of experts will help you tap into the potential of predictive analytics and intelligent automation.',
  //   icon: <Cpu className="w-5 h-5 text-white mr-2 inline" />,
  //   image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/1673048347machine-learning_20_1_-12.png',
  // },
  // {
  //   title: 'Networking',
  //   description: 'Ensure your business runs smoothly with our networking and server administration solutions. Our experienced professionals will optimize and secure your systems.',
  //   icon: <Globe className="w-5 h-5 text-white mr-2 inline" />,
  //   image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/1673048485computer_networking_20_1_-13.jpg',
  // },
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    if (isAnimating) return;
    
    setDirection(newDirection);
    setIsAnimating(true);
    
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < services.length) {
      setCurrentIndex(newIndex);
    }
    
    setTimeout(() => setIsAnimating(false), 400);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    const newDirection = index > currentIndex ? 1 : -1;
    setDirection(newDirection);
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => setIsAnimating(false), 400);
  };

  // Auto slide on desktop
  useEffect(() => {
    if (isMobile) return;
    
    const interval = setInterval(() => {
      paginate(1);
      if (currentIndex === services.length - 1) {
        setCurrentIndex(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isMobile]);

  return (
    <section className="services-section py-25 bg-linear-to-r from-[#06080f] via-[#0d1630] to-[#06080f] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mb-12 md:mb-16">
          <h3 className="text-3xl md:text-[36px] font-bold mb-4 text-center">
            How We <span className="text-white">Architect Your Success?</span>
          </h3>
          <div className="description-services max-w-3xl mx-auto px-4">
           <p className="text-base md:text-[18px] leading-[1.6] text-center md:text-justify text-muted-foreground">
  At AFA Innovations, we don’t just build software; we engineer growth engines. Our mission is to bridge the gap between complex business challenges and the <strong>$376 billion AI-driven economy</strong>. By merging elite Web and Mobile Development with custom Applied AI, we turn your strategic vision into a high-performance digital reality.
</p>

          </div>
        </div>

        {/* Desktop 3D Carousel */}
        <div className="hidden md:block relative">
          <div className="relative h-100 perspective-distant">
            {services.map((service, index) => {
              const position = index - currentIndex;
              const isActive = position === 0;
              const isLeft = position < 0;
              const isRight = position > 0;
              
              return (
                <motion.div
                  key={index}
                  className={`absolute top-0 w-87.5 h-full bg-[#0a0a0a] border border-white/20 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${
                    isActive ? 'z-30 left-1/2 transform -translate-x-1/2' :
                    isLeft ? 'z-20 left-[15%] opacity-80' :
                    'z-20 left-[65%] opacity-80'
                  }`}
                  initial={false}
                  animate={{
                    x: isActive ? '0%' : isLeft ? '-45%' : '45%',
                    scale: isActive ? 1 : 0.9,
                    rotateY: isActive ? 0 : isLeft ? 10 : -10,
                    opacity: Math.abs(position) <= 1 ? 1 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
                  </div>
                  <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <h4 className="text-[22px] font-semibold flex items-center gap-2 mb-3">
                      {service.icon} {service.title}
                    </h4>
                    <p className="text-[15px] text-muted-foreground grow">{service.description}</p>
                    <a href="/Contact" className="mt-4 inline-flex items-center gap-2 font-medium text-[15px] hover:text-white transition-all group">
                      Let's Start <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Controls */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <button
              onClick={() => paginate(-1)}
              disabled={currentIndex === 0}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-white w-12' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => paginate(1)}
              disabled={currentIndex === services.length - 1}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div 
            className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/20"
            ref={containerRef}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="p-6"
              >
                <div 
                  className="h-48 bg-cover bg-center rounded-2xl mb-6 relative"
                  style={{ backgroundImage: `url(${services[currentIndex].image})` }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent rounded-2xl"></div>
                </div>
                <h4 className="text-xl font-semibold flex items-center gap-2 mb-3">
                  {services[currentIndex].icon} {services[currentIndex].title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {services[currentIndex].description}
                </p>
                <a 
                  href="/Contact" 
                  className="inline-flex items-center gap-2 font-medium text-sm hover:text-white transition-all group"
                >
                  Let's Start <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button
              onClick={() => paginate(-1)}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-white w-8' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => paginate(1)}
              disabled={currentIndex === services.length - 1}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider Info */}
        {/* <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Drag or use arrows to navigate • {currentIndex + 1} of {services.length}</p>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;