'use client'

import { useState, useEffect } from 'react'
import { Smile, Coffee, Lightbulb, Briefcase } from 'lucide-react';

const FunFactsSection = () => {
  return (
    <section 
      id="fun-facts" 
      className="fun-facts-section relative bg-white/90 overflow-hidden py-10">
            {/* <div className="absolute inset-0 bg-linear-to-br from-blue-900/10 via-purple-900/5 to-cyan-900/10" />
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div> */}

      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

      <div className="container px-6 max-w-300">
        {/* Section Header */}
        <div className="mb-4">
          <h3 className="text-[48px] font-bold leading-[1.2] text-black mb-2 text-center">
            Fun Facts
          </h3>
          <p className="text-[18px] font-normal leading-[1.6] mx-auto text-black/90 max-w-210">
            The <strong>Growth-Centric</strong>  Version (Focus on Scalability)
The AFA Track Record "Our history is marked by high-velocity growth and engineered excellence. Having successfully navigated the digital landscape for over a decade, we’ve transformed the way brands operate. These achievements fuel our commitment to pushing the boundaries of Applied AI and Web Architecture, constantly refining our services to help you capture your share of the global digital market."
          </p>
        </div>

        {/* Counter Grid */}
        { Stats() }
       
      </div>

      {/* Adding a subtle border-bottom as per standard section transitions in the screenshots */}
      <div 
        className="absolute bottom-0 left-0 w-full" 
        style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
      />
    </section>
  );
};



function Stats() {
  const [happyCustomers, setHappyCustomers] = useState(0)
  const [countries, setCountries] = useState(0)
  const [innovations, setInnovations] = useState(0)
  const [greatProjects, setGreatProjects] = useState(0)

  useEffect(() => {
    // Happy Customers counter
    const interval1 = setInterval(() => {
      setHappyCustomers(prev => {
        if (prev >= 15) {
          clearInterval(interval1)
          return 15
        }
        return prev + 1
      })
    }, 100)

    // Countries counter
    const interval2 = setInterval(() => {
      setCountries(prev => {
        if (prev >= 4) {
          clearInterval(interval2)
          return 4
        }
        return prev + 1
      })
    }, 250)

    // Innovations counter
    const interval3 = setInterval(() => {
      setInnovations(prev => {
        if (prev >= 12) {
          clearInterval(interval3)
          return 12
        }
        return prev + 1
      })
    }, 150)

    // Great Projects counter
    const interval4 = setInterval(() => {
      setGreatProjects(prev => {
        if (prev >= 10) {
          clearInterval(interval4)
          return 10
        }
        return prev + 1
      })
    }, 180)

    return () => {
      clearInterval(interval1)
      clearInterval(interval2)
      clearInterval(interval3)
      clearInterval(interval4)
    }
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center">
      {/* Happy Customers */}
      <div className="radial flex flex-col items-center justify-center p-5 transition-transform duration-300 hover:-translate-y-1.25 hover:shadow-xl hover:shadow-blue-500/20">
        <div className="radial-icon mb-3 text-black">
          <Smile size={45} strokeWidth={1} className="opacity-80" />
        </div>
        <span className="timer text-[60px] font-extrabold leading-[1.1] text-black block mb-2">
          {happyCustomers}
          {/* <span className="text-blue-400 ml-1">+</span> */}
        </span>
        <h4 className="text-[24px] font-semibold leading-[1.4] text-black">
          Happy Customers
        </h4>
      </div>

      {/* Countries */}
      <div className="radial flex flex-col items-center justify-center p-5 transition-transform duration-300 hover:-translate-y-1.25 hover:shadow-xl hover:shadow-blue-500/20">
        <div className="radial-icon mb-3 text-black">
          <Coffee size={45} strokeWidth={1} className="opacity-80" />
        </div>
        <span className="timer text-[60px] font-extrabold leading-[1.1] text-black block mb-2">
          {countries}
          {/* <span className="text-blue-400 ml-1">+</span> */}
        </span>
        <h4 className="text-[24px] font-semibold leading-[1.4] text-black">
          Countries
        </h4>
      </div>

      {/* Innovations */}
      <div className="radial flex flex-col items-center justify-center p-5 transition-transform duration-300 hover:-translate-y-1.25 hover:shadow-xl hover:shadow-blue-500/20">
        <div className="radial-icon mb-3 text-black">
          <Lightbulb size={45} strokeWidth={1} className="opacity-80" />
        </div>
        <span className="timer text-[60px] font-extrabold leading-[1.1] text-black block mb-2">
          {innovations}
          {/* <span className="text-blue-400 ml-1">+</span> */}
        </span>
        <h4 className="text-[24px] font-semibold leading-[1.4] text-black">
          Innovations
        </h4>
      </div>

      {/* Great Projects */}
      <div className="radial flex flex-col items-center justify-center p-5 transition-transform duration-300 hover:-translate-y-1.25 hover:shadow-xl hover:shadow-blue-500/20">
        <div className="radial-icon mb-3 text-black">
          <Briefcase size={45} strokeWidth={1} className="opacity-80" />
        </div>
        <span className="timer text-[60px] font-extrabold leading-[1.1] text-black block mb-2">
          {greatProjects}
          {/* <span className="text-blue-400 ml-1">+</span> */}
        </span>
        <h4 className="text-[24px] font-semibold leading-[1.4] text-black">
          Great Projects
        </h4>
      </div>
    </div>
  )
}

export default FunFactsSection;