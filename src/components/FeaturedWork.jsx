import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const FeaturedWork = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const sliderRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "MVP Design Sprint for an Ambitious Startup",
      image: "/images/abt1.png",
      tags: ["Product Design", "Website"]
    },
    {
      id: 2,
      title: "Brand Identity Design for a Newly Merged AI Venture",
      image: "/images/abt2.png",
      tags: ["Brand Strategy", "Merch", "Pitch Decks"]
    },
    {
      id: 3,
      title: "Brand Revamp to Empower Global Expansion Plans",
      image: "/images/abt3.png",
      tags: ["Brand Identity"]
    },
    {
      id: 4,
      title: "E-commerce Platform Redesign",
      image: "/images/abt4.png",
      tags: ["UI/UX", "Development"]
    },
    {
      id: 5,
      title: "Mobile App for Healthcare Innovation",
      image: "/images/abt5.png",
      tags: ["App Design", "Strategy"]
    }
  ];

  useGSAP(() => {
    // Section header badge animation
    gsap.from('.work-badge', {
      scrollTrigger: {
        trigger: '#featured-work',
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
      opacity: 0,
      y: 30,
      scale: 0.8,
    });

    // Title animation with SplitText
    const titleSplit = SplitText.create('.work-title', {
      type: 'chars, words'
    });

    gsap.from(titleSplit.chars, {
      scrollTrigger: {
        trigger: '#featured-work',
        start: 'top 75%',
        end: 'top 40%',
        scrub: 1,
      },
      opacity: 0,
      yPercent: 100,
      rotateX: -90,
      stagger: 0.02,
    });

    // Subtitle animation
    gsap.from('.work-subtitle', {
      scrollTrigger: {
        trigger: '#featured-work',
        start: 'top 70%',
        end: 'top 45%',
        scrub: 1,
      },
      opacity: 0,
      y: 30,
    });

    // Individual project cards animation - slide in from sides
    gsap.utils.toArray('.project-card').forEach((card, index) => {
      const isLeft = index === 0;
      const isRight = index === 2;
      const isCenter = index === 1;
      
      gsap.from(card, {
        scrollTrigger: {
          trigger: '.work-slider',
          start: 'top 85%',
          end: 'top 55%',
          scrub: 1,
        },
        opacity: 0,
        x: isLeft ? -100 : isRight ? 100 : 0,
        y: isCenter ? 50 : 0,
        scale: 0.8,
        rotateY: isLeft ? 15 : isRight ? -15 : 0,
      });
    });

    // Navigation buttons animation
    gsap.utils.toArray('.nav-button').forEach((btn, index) => {
      gsap.from(btn, {
        scrollTrigger: {
          trigger: '.work-slider',
          start: 'top 80%',
          end: 'top 60%',
          scrub: 1,
        },
        opacity: 0,
        x: index === 0 ? -50 : 50,
        scale: 0,
      });
    });

    // Dots indicator animation
    gsap.utils.toArray('.dot-indicator').forEach((dot, index) => {
      gsap.from(dot, {
        scrollTrigger: {
          trigger: '.dots-container',
          start: 'top 90%',
          end: 'top 70%',
          scrub: 1,
        },
        opacity: 0,
        scale: 0,
        stagger: 0.05,
        delay: index * 0.05,
      });
    });
  });

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    animateSlide('prev');
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    animateSlide('next');
  };

  const animateSlide = (direction) => {
    const cards = sliderRef.current?.querySelectorAll('.project-card');
    if (!cards) return;

    gsap.fromTo(cards,
      { 
        opacity: 0.5, 
        scale: 0.95,
        x: direction === 'next' ? 50 : -50 
      },
      { 
        opacity: 1, 
        scale: 1,
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1
      }
    );
  };

  const getVisibleProjects = () => {
    const prevIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
    const nextIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
    
    return {
      prev: projects[prevIndex],
      current: projects[activeIndex],
      next: projects[nextIndex]
    };
  };

  const { prev, current, next } = getVisibleProjects();

  return (
    <section id="featured-work" className="min-h-screen bg-black text-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
        
          <h2 className="work-title text-5xl md:text-7xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Featured Work
          </h2>
          <p className="work-subtitle text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover our latest projects and creative solutions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="work-slider relative" ref={sliderRef}>
          {/* Cards Grid */}
          <div className="flex items-center justify-center gap-4 md:gap-8 px-4">
            {/* Previous Card */}
            <div className="project-card hidden md:block w-[300px] lg:w-[350px] flex-shrink-0 opacity-50 scale-90 transition-all duration-500">
              <div className="relative overflow-hidden rounded-2xl bg-zinc-900 aspect-[4/3]">
                <img 
                  src={prev.image} 
                  alt={prev.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <p className="text-gray-400 text-sm mt-4 line-clamp-2">{prev.title}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {prev.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full border border-white/20 text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation Arrow Left */}
            <button 
              onClick={handlePrev}
              className="nav-button absolute left-4 md:left-[15%] lg:left-[20%] z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Center Active Card */}
            <div className="project-card w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] flex-shrink-0 z-10">
              <div className="relative overflow-hidden rounded-2xl bg-zinc-900 aspect-[16/10] shadow-2xl shadow-black/50">
                <img 
                  src={current.image} 
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Center logo/branding overlay (optional) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    {/* You can add a logo here if needed */}
                  </div>
                </div>
              </div>
              
              {/* Active Project Info */}
              <div className="text-center mt-8">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {current.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {current.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-5 py-2 text-sm rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrow Right */}
            <button 
              onClick={handleNext}
              className="nav-button absolute right-4 md:right-[15%] lg:right-[20%] z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Next Card */}
            <div className="project-card hidden md:block w-[300px] lg:w-[350px] flex-shrink-0 opacity-50 scale-90 transition-all duration-500">
              <div className="relative overflow-hidden rounded-2xl bg-zinc-900 aspect-[4/3]">
                <img 
                  src={next.image} 
                  alt={next.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <p className="text-gray-400 text-sm mt-4 line-clamp-2">{next.title}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {next.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full border border-white/20 text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="dots-container flex justify-center gap-2 mt-12">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`dot-indicator w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
