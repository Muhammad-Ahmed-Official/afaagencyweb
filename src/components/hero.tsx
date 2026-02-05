'use client'

import { Instagram, Twitter, Linkedin, ArrowRight, MoveDown, Facebook } from 'lucide-react';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
{/* <h2 className="text-[60px] md:text-[85px] font-light leading-[1.1] tracking-tight text-white/90">
              𝔼𝕩𝕡𝕖𝕣𝕚𝕖𝕟𝕔𝕖𝕤
            </h2> */}

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-200 overflow-hidden bg-black flex items-center">
      {/* Background Image / Fluid Art */}
      <div className="absolute inset-0 z-0 select-none">
        <img className="object-cover object-right lg:object-center opacity-80" sizes="100vw" src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2d3bbd90-100a-47bc-baf1-41d6af3aae13-appsians-com/assets/images/1633027720quinheader-13.webp" alt="" />
        <div className="absolute inset-0 bg-[#00000000]" />
      </div>

      <div className="container relative z-10 px-6 lg:px-12 mx-auto">
        <div className="max-w-175 space-y-8">
          {/* Headline Section */}
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[60px] md:text-[85px] font-extrabold leading-[1.1] tracking-tight text-white mb-2">
                Crafting Digital
              </h1>

              <TypingText />
            </motion.div>
          </div>

          {/* Descriptive Text */}
          <div className="animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-200">
            <p className="text-[16px] md:text-[18px] text-[#B0B0B0] leading-[1.6] max-w-160">
              At <strong className="text-white font-semibold">AFA Innovations</strong>, we don’t just build software; we <strong className="text-white font-semibold">architect growth engines</strong>. 
As the global AI market surges toward <strong className="text-white font-semibold">$376 billion in 2026</strong>, the gap between market leaders and the rest is defined by <strong className="text-white font-semibold">technical agility</strong>. 
We empower your brand to bridge that gap by merging <strong className="text-white font-semibold">elite Web and Mobile Development</strong> with <strong className="text-white font-semibold">custom Applied AI Solutions</strong>. 
Our approach replaces legacy friction with <strong className="text-white font-semibold">high-velocity digital infrastructure</strong> designed to capture <strong className="text-white font-semibold">maximum market share</strong> in today’s <strong className="text-white font-semibold">intelligence-driven landscape</strong>.

            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <div className="header__action">
              <a  href="/Contact" 
                className="btn btn-style1 group relative flex items-center justify-center gap-2 px-6 py-4 border border-white rounded-[50px] text-white text-[15px] font-medium overflow-hidden transition-all duration-300">
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                
                <span className="relative z-10 transition-colors duration-400 group-hover:text-black">
                  Get in Touch
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
            <div className="header__action">
              <a  href="/About" 
                className="btn btn-style1 group relative flex items-center justify-center gap-2 px-6 py-4 border border-white rounded-[50px] text-white text-[15px] font-medium overflow-hidden transition-all duration-300">
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                
                <span className="relative z-10 transition-colors duration-400 group-hover:text-black">
                  About Us
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Side Social Media Links */}
      <div className="absolute left-22 bottom-10 hidden lg:block z-20 animate-in fade-in duration-1000 delay-700">
        <ul className="flex gap-6">
          <li className='border border-white rounded-full p-2'>
            <a 
              href="https://www.instagram.com/afa_innovations?igsh=MWVwbW1qOHZkOGJjag==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-70 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </li>
          <li className='border border-white rounded-full p-2'>
            <a 
              href="https://www.facebook.com/share/17o1AxfnVE/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-70 transition-opacity"
            >
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </li>
          <li className='border border-white rounded-full p-2'>
            <a 
              href="https://www.linkedin.com/company/afainnovations" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:opacity-70 transition-opacity"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer">
        <a href="#clients-section" className="text-white/40 hover:text-white transition-colors">
          <MoveDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

function useTypingEffect(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 1500
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length + 1)),
        typingSpeed
      );
    } else if (!isDeleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        deletingSpeed
      );
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return text;
}

function TypingText() {
  const typedText = useTypingEffect(
    ["AI Solutions", "SaaS Platforms", "Web Applications", "Mobile Apps"],
    80,
    50,
    1200
  );

  return (
    <motion.h2
      className="text-[50px] md:text-[75px] font-light leading-[1.1] tracking-tight text-white/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {typedText}
      <span className="animate-pulse ml-1">|</span>
    </motion.h2>
  );
}

export default HeroSection;
