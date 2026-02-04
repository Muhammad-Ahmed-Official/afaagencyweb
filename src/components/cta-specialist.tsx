"use client";

import React, { useState, useEffect } from "react";
import { MoveRight } from "lucide-react";

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
      className="typed-section py-25 bg-black border-t border-white/10"
      style={{ backgroundColor: "#06080f" }}
    >
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
          <div className="shrink-0 text-left md:text-right">
            <a 
              href="/Contact" 
              className="btn btn-style1 group flex items-center justify-center gap-2 px-8 py-3.5 border border-white rounded-[50px] text-white text-[15px] font-medium transition-all duration-300 hover:bg-white hover:text-black"
            >
              <span>Contact</span>
              <MoveRight className="w-[11.4px] h-[9.2px] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
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