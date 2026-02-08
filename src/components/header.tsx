'use client'

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Logo from "../../public/logo2.png"
import Image from 'next/image';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-999 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 py-2' : 'bg-transparent pb-11 pt-2'
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="block">
              <Image
                src={Logo}
                alt="AFA Innovation"
                // width={105}
                // height={100}
                className="h-auto w-24 object-contain"
              />
            </a>
          </div>

          {/* Actions Section - responsive: stack or hide text on small screens */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="header__action hidden sm:block">
              <a  href="#portfolio" 
                className="btn btn-style1 group relative flex items-center justify-center gap-2 px-3 py-2.5 sm:px-5 sm:py-3 border border-white rounded-[50px] text-white text-[13px] sm:text-[15px] font-medium overflow-hidden transition-all duration-300">
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 transition-colors duration-400 group-hover:text-black whitespace-nowrap">
                  Our Portfolio 
                </span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:text-black duration-300 group-hover:translate-x-1 shrink-0" />
              </a>
            </div>
            <div className="header__action">
              <a
                href={`https://wa.me/+923342865069?text=${encodeURIComponent(
                  "Hello, I want to start a project!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="btn cursor-pointer btn-style1 group relative flex items-center justify-center gap-2 px-3 py-2.5 sm:px-5 sm:py-3 border border-white rounded-[50px] text-white text-[13px] sm:text-[15px] font-medium overflow-hidden transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative z-10 transition-colors duration-400 group-hover:text-black whitespace-nowrap">
                    Start a Project
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:text-black duration-300 group-hover:translate-x-1 shrink-0" />
                </button>
              </a>
            </div>
          </div>

          {/* Mobile Actions / Hamburger Menu */}
          {/* <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar}
              className="flex flex-col gap-1.5 focus:outline-none z-1001"
              aria-label="Toggle Menu"
            >
              <div className={`w-8 h-0.5 bg-white transition-all duration-300 ${isSidebarOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-8 h-0.5 bg-white transition-all duration-300 ${isSidebarOpen ? 'opacity-0' : ''}`} />
              <div className={`w-8 h-0.5 bg-white transition-all duration-300 ${isSidebarOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div> */}
        </div>
      </header>

      {/* Sidebar Navigation */}
      {/* <div 
        className={`fixed inset-0 z-1000 bg-black transition-transform duration-500 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col lg:flex-row">
            <div className="hidden lg:flex w-1/3 bg-sidebar items-center justify-center border-r border-white/5">
              <div className="relative p-12 text-center text-white/5 font-bold text-6xl uppercase tracking-tighter select-none">
                Appsians
              </div>
            </div>

          <div className="flex-1 overflow-y-auto pt-32 pb-12 px-8 lg:px-24 flex flex-col justify-between">
            <nav className="flex flex-col gap-8">
              <ul className="space-y-6">
                <li>
                  <a href="/" className="text-4xl lg:text-5xl font-bold text-white hover:text-white/70 transition-colors">Home</a>
                </li>
                <li>
                  <a href="/about-us" className="text-4xl lg:text-5xl font-bold text-white hover:text-white/70 transition-colors">About us</a>
                </li>
                <li>
                  <a href="/portfolio" className="text-4xl lg:text-5xl font-bold text-white hover:text-white/70 transition-colors">Portfolio</a>
                </li>
              </ul>

              <div className="mt-12">
                <p className="text-muted-foreground text-lg mb-4">Have a project for us?</p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-3 bg-white text-black rounded-full font-semibold text-lg hover:bg-neutral-200 transition-all"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </nav>

            <div className="mt-20 border-t border-white/10 pt-12 space-y-8">
              <div className="flex items-center gap-6">
                <a href="https://www.instagram.com/mianasadali/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/60 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://twitter.com/mianasadali" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/60 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://www.linkedin.com/company/appsians/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/60 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>

              <div className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin size={16} />
                <span>Wyoming, US</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Sidebar Overlay */}
      {/* {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-998"
          onClick={toggleSidebar}
        />
      )} */}
    </>
  );
}