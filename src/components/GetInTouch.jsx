import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const GetInTouch = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rahul",
      lastName: "Kumar",
      role: "Co-Founder, App Developer",
      image: "/images/profile1.png",
      socials: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      }
    },
    {
      id: 2,
      name: "Kunar Kumar",
      lastName: "Sahu",
      role: "Co-Founder, UI/UX Designer",
      image: "/images/profile2.png",
      socials: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      }
    },
    {
      id: 3,
      name: "Malay Kumar",
      lastName: "Behera",
      role: "Co-Founder, Full Stack Developer",
      image: "/images/profile3.png",
      socials: {
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      }
    }
  ];

  useGSAP(() => {
    // Title animation with SplitText
    const titleSplit = SplitText.create('.touch-title', {
      type: 'words'
    });

    gsap.from(titleSplit.words, {
      scrollTrigger: {
        trigger: '#get-in-touch',
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
      opacity: 0,
      yPercent: 100,
      stagger: 0.05,
    });

    // Subtitle animation
    gsap.from('.touch-subtitle', {
      scrollTrigger: {
        trigger: '#get-in-touch',
        start: 'top 75%',
        end: 'top 50%',
        scrub: 1,
      },
      opacity: 0,
      y: 30,
    });

    // Cards animation - slide in from different directions
    gsap.utils.toArray('.team-card').forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: '.team-cards-container',
          start: 'top 85%',
          end: 'top 55%',
          scrub: 1,
        },
        opacity: 0,
        x: index === 0 ? -100 : index === 2 ? 100 : 0,
        y: index === 1 ? 50 : 0,
        rotateY: index === 0 ? 15 : index === 2 ? -15 : 0,
        scale: 0.8,
      });
    });

    // CTA Section animations
    const ctaTitleSplit = SplitText.create('.cta-title', {
      type: 'words'
    });

    gsap.from(ctaTitleSplit.words, {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 85%',
        end: 'top 55%',
        scrub: 1,
      },
      opacity: 0,
      yPercent: 80,
      rotateX: -45,
      stagger: 0.03,
    });

    gsap.from('.cta-subtext', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
      opacity: 0,
      y: 40,
    });

    gsap.from('.cta-buttons', {
      scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 75%',
        end: 'top 45%',
        scrub: 1,
      },
      opacity: 0,
      y: 50,
      scale: 0.9,
    });
  });

  return (
    <section id="get-in-touch" className="min-h-screen bg-black text-white py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="touch-title text-5xl md:text-7xl lg:text-8xl text-white mb-4">
            <span className="font-serif italic font-light">Get</span>{' '}
            <span style={{ fontFamily: 'Oswald, sans-serif' }} className="font-normal">in touch with us</span>
          </h2>
          <p className="touch-subtitle text-gray-400 text-lg md:text-xl mt-6">
            We're always up for a good coffee chat
          </p>
        </div>

        {/* Team Cards */}
        <div className="team-cards-container flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-20">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`team-card relative ${index === 0 ? 'md:-rotate-3' : index === 2 ? 'md:rotate-3' : ''}`}
            >
              <div className="bg-zinc-900/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 w-[280px] md:w-[300px] border border-white/5 shadow-2xl shadow-black/50">
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-28 h-28 md:w-32 md:h-32">
                    {/* Red circle background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500 to-red-600"></div>
                    {/* Profile image container */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center scale-110"
                        style={{ objectPosition: 'center 20%' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Name */}
                <div className="text-center mb-3">
                  <h3 className="text-3xl md:text-4xl font-serif italic text-white leading-tight">
                    {member.name}
                  </h3>
                  <h3 className="text-3xl md:text-4xl font-serif italic text-white leading-tight">
                    {member.lastName}
                  </h3>
                </div>

                {/* Role */}
                <p className="text-center text-gray-400 text-xs md:text-sm mb-6">
                  {member.role}
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/10">
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  
                  <div className="w-px h-6 bg-white/20"></div>
                  
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-sm">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Section */}
        <div className="cta-section mt-32 md:mt-40 pb-10">
          <div className="relative text-center max-w-3xl mx-auto">
            {/* Decorative gradient blur */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-red-500/20 via-orange-500/10 to-yellow-500/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="cta-title text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                <span className="font-serif italic font-light">Let's build</span>{' '}
                <span style={{ fontFamily: 'Oswald, sans-serif' }} className="font-normal">something that performs.</span>
              </h2>
              
              <p className="cta-subtext text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-10">
                Tell us about your idea and we'll help you bring it to life.
              </p>

              {/* CTA Buttons */}
              <div className="cta-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-yellow hover:scale-105 hover:shadow-lg hover:shadow-yellow/20"
                >
                  Start a Project
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a
                  href="#call"
                  className="inline-flex items-center gap-2 text-gray-300 px-8 py-4 rounded-full font-medium text-base border border-white/20 transition-all duration-300 hover:border-white/50 hover:text-white hover:bg-white/5"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Book a Free Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
