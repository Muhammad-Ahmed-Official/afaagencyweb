"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, MoveRight } from "lucide-react";

const TypedCTA: React.FC = () => {
  const phrases = [
    "Web Development?",
    "Mobile Apps?",
    "AI Solutions?",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullPhrase = phrases[currentPhraseIndex];
      
      if (!isDeleting) {
        // Typing
        setDisplayText(fullPhrase.substring(0, displayText.length + 1));
        setTypingSpeed(150);

        if (displayText === fullPhrase) {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        }
      } else {
        // Deleting
        setDisplayText(fullPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(75);

        if (displayText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex, typingSpeed, phrases]);

  return (
    <section 
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

      <div className="container mx-auto max-w-285 px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex-1">
            <h4 
              className="parent-typed-text text-white text-[24px] sm:text-[28px] md:text-[36px] font-semibold leading-[1.3] m-0"
              style={{ fontFamily: 'var(--font-sans)', letterSpacing: '-0.01em' }}
            >
              <span className="mt_typed-beforetext">Are you looking for </span>
              <span className="mt_typed_text opacity-80">{displayText}</span>
              <span className="typed-cursor inline-block ml-1 animate-pulse font-light">|</span>
            </h4>
          </div>
          <div className="shrink-0 text-left cursor-pointer md:text-right">
            <a 
              href="/Contact" 
              className="btn btn-style1 group relative flex items-center justify-center gap-2 px-8 py-3 border border-white rounded-[50px] text-white text-[15px] font-medium overflow-hidden transition-all duration-300"
            >
              {/* Animated background layer */}
              <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              
              {/* Text and icon */}
              <span className="relative z-10 transition-colors text-white duration-400 group-hover:text-black ">
                Contact
              </span>
              <ArrowRight className="w-4 h-4 transition-transform text-white group-hover:text-black duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .typed-cursor {
          animation: blink 0.7s infinite;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default TypedCTA;