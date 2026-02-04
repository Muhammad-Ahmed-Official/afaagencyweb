'use client'

import Image from 'next/image';

const projects = [
  {
    id: '01',
    title: 'PassportsandVisas.com',
    category: 'Expression Engine',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/1673136058Passportsandvisas-14.png',
    link: 'https://appsians.com/project/passports-and-visas',
  },
  {
    id: '02',
    title: 'Subway CRM System',
    category: 'Mobile App Development',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/1673135327Subway-15.jpg',
    link: 'https://appsians.com/project/subway-crm',
  },
  {
    id: '03',
    title: 'Medtrans Express',
    category: 'Web Development',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/56dcea0a-fa58-4f5a-aee8-5893b3f5c371-appsians-com/assets/images/1673136194MedtransExpress-16.jpg',
    link: '#',
  },
];

export default function PortfolioSection() {
  return (
    <section id='portfolio' className="bg-linear-to-r from-[#06080f] via-[#0d1630] py-25 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h4 className="text-[24px] font-semibold text-white/80 mb-2 uppercase tracking-widest" style={{ fontSize: '24px', fontWeight: 600 }}>
            Selected works
          </h4>
          <h3 className="text-[48px] font-bold text-white leading-tight" style={{ fontSize: '48px', fontWeight: 700 }}>
            Our <span className="text-white">premium</span> projects.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative">
              <div className="project-box-div overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/10 transition-all duration-300">
                <a href={project.link} className="block relative aspect-square">
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  /> */}
                </a>
                
                <div className="p-8 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[40px] font-extrabold text-white/10 leading-none">
                      {project.id}
                    </div>
                    <div className="text-[12px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {project.category}
                    </div>
                  </div>

                  <h4 className="text-[24px] font-bold text-white mb-6 group-hover:text-white transition-colors">
                    <a href={project.link}>{project.title}</a>
                  </h4>

                  <div className="project-button">
                    <a 
                      href={project.link} 
                      className="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-widest text-white group/btn"
                    >
                      <span>View project</span>
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .project-box-div:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          border-color: rgba(255,255,255,0.2);
        }
        .container {
          max-width: 1200px;
        }
      `}</style>
    </section>
  );
}