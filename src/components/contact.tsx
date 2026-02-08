import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactCards: React.FC = () => {
  const contactData = [
    {
      id: 1,
      icon: <Phone className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: 'Call us today',
      links: [
        { label: 'PH: +923342865069', href: 'tel:+923342865069' },
        { label: 'PH: +923312456771', href: 'tel:+923312456771' },
      ],
    },
    {
      id: 2,
      icon: <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />,
      title: 'Our emails',
      links: [
        { label: 'afainnovationsofficial@gmail.com', href: 'afainnovationsofficial@gmail.com' },
        // { label: 'office@appsians.com', href: 'mailto:office@appsians.com' },
      ],
    },
    // {
    //   id: 3,
    //   icon: <MapPin className="w-8 h-8 text-white" strokeWidth={1.5} />,
    //   title: 'Our address',
    //   links: [
    //     { 
    //       label: '30 N GOULD ST STE R SHERIDAN, WY 82801', 
    //       href: 'https://maps.app.goo.gl/xMFpnwxMqAaUMfbYA' 
    //     },
    //   ],
    // },
  ];

  return (
<section className="bg-linear-to-b from-black to-gray-900 py-12 sm:py-16 md:py-28">
  <div className="container mx-auto max-w-6xl px-4 sm:px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      {contactData.map((item) => (
        <div 
          key={item.id} 
          className="group bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/20 relative overflow-hidden"
        >
          {/* Background linear effect */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Icon with glow effect */}
          <div className="flex items-start mb-6">
            <div className="mr-5 relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-colors duration-300" />
              <div className="relative bg-linear-to-br from-gray-800 to-black border border-gray-700 rounded-xl p-3 group-hover:border-blue-500/30 transition-colors duration-300">
                <div className="text-blue-400 text-xl group-hover:text-blue-300 transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="ms-5 text-white text-lg sm:text-xl md:text-[22px] font-bold leading-tight mb-3 sm:mb-4 group-hover:text-blue-100 transition-colors duration-300">
                {item.title}
              </h3>
              <div className="space-y-3">
                {item.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center text-gray-400 text-sm sm:text-base leading-relaxed hover:text-white transition-all duration-300 group/link hover:translate-x-1 break-all"
                    target={item.id === 3 ? "_blank" : undefined}
                    rel={item.id === 3 ? "noopener noreferrer" : undefined}
                  >
                    {/* Animated arrow indicator */}
                    <span className="mr-2 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">
                      →
                    </span>
                    <span className="wrap-break-word hover:text-blue-300 transition-colors duration-300">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom border accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      ))}
    </div>
    
    {/* Optional decorative elements */}
    <div className="text-center mt-16">
      <p className="text-gray-500 text-sm font-medium tracking-wider uppercase">
        We're here to help
      </p>
      <div className="mt-4 flex justify-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-150" />
        {/* <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-300" /> */}
      </div>
    </div>
  </div>
</section>
  );
};

export default ContactCards;