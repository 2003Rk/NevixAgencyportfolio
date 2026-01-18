import React, { useState } from 'react';
import { Globe, Smartphone, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText);

const ServicesWorkflow = () => {
  useGSAP(() => {
    // Header animations
    gsap.from('.services-badge', {
      scrollTrigger: {
        trigger: '#services',
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
      opacity: 0,
      y: 30,
    });

    // Title animation
    const titleSplit = SplitText.create('.services-title', {
      type: 'chars, words'
    });

    gsap.from(titleSplit.chars, {
      scrollTrigger: {
        trigger: '#services',
        start: 'top 75%',
        end: 'top 40%',
        scrub: 1,
      },
      opacity: 0,
      yPercent: 100,
      rotateX: -90,
      stagger: 0.02,
    });

    gsap.from('.services-subtitle', {
      scrollTrigger: {
        trigger: '#services',
        start: 'top 70%',
        end: 'top 45%',
        scrub: 1,
      },
      opacity: 0,
      y: 30,
    });

    // Timeline line animation
    gsap.from('.timeline-line', {
      scrollTrigger: {
        trigger: '.timeline-line',
        start: 'top 80%',
        end: 'bottom 50%',
        scrub: 1,
      },
      scaleY: 0,
      transformOrigin: 'top center',
    });

    // Service cards animation - slide in from sides
    gsap.utils.toArray('.service-card').forEach((card, index) => {
      const isLeft = index % 2 === 0;
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'top 55%',
          scrub: 1,
        },
        opacity: 0,
        x: isLeft ? -100 : 100,
        scale: 0.9,
      });
    });

    // Service images animation - slide in from opposite side with rotation
    gsap.utils.toArray('.service-image-container').forEach((img, index) => {
      const isLeft = index % 2 === 0;
      gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          start: 'top 85%',
          end: 'top 50%',
          scrub: 1,
        },
        opacity: 0,
        x: isLeft ? 100 : -100,
        rotateY: isLeft ? 30 : -30,
        scale: 0.8,
      });
    });

    // Timeline dots animation
    gsap.utils.toArray('.timeline-dot').forEach((dot, index) => {
      gsap.from(dot, {
        scrollTrigger: {
          trigger: dot,
          start: 'top 80%',
          end: 'top 60%',
          scrub: 1,
        },
        opacity: 0,
        scale: 0,
      });
    });
  });

  const services = [
    {
      id: 1,
      icon: Globe,
      title: "Web Development",
      description: "Next-generation web applications built with React and Three.js. Experience seamless performance and immersive 3D interactions tailored for conversion.",
      features: ["Responsive 3D Interfaces", "Scalable Cloud Architecture", "Optimized Core Web Vitals"],
      image: "/images/web.png",
      imagePosition: "right"
    },
    {
      id: 2,
      icon: Smartphone,
      title: "App Development",
      description: "iOS and Android solutions with premium glassmorphic UI. Our mobile apps are designed for speed and intuitive user journeys that keep users engaged.",
      features: ["Native Performance", "Cross-Platform Unity", "Biometric Integration"],
      image: "/images/phone.png",
      imagePosition: "left",
      imageSize: "max-w-[300px]"
    },
    {
      id: 3,
      icon: Cpu,
      title: "Automation & AI",
      description: "AI-driven workflow optimization. We build autonomous systems that handle complex data processing, leaving your team to focus on high-value creative work.",
      features: ["Custom LLM Workflows", "Real-time Data Sync", "Predictive Analytics"],
      image: "/images/automation.png",
      imagePosition: "right",
      imageSize: "max-w-[300px]"
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-transparent text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="services-title text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Our Services
          </h1>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/50 via-cyan-500/30 to-transparent"></div>

          {/* Services */}
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isImageRight = service.imagePosition === "right";

              return (
                <div key={service.id} className="service-item relative">
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-[#0a1628] border-2 border-cyan-500 flex items-center justify-center text-cyan-400 font-semibold text-sm">
                      0{service.id}
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Card Side */}
                    <div className={`service-card ${isImageRight ? 'md:pr-16' : 'md:pl-16 md:order-2'}`}>
                      <div 
                        className="bg-transparent backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-white/40 transition-all duration-300"
                        style={{
                          transform: 'perspective(1000px) rotateY(2deg) rotateX(2deg)',
                          boxShadow: `
                            0 25px 50px -12px rgba(0, 0, 0, 0.5),
                            inset 0 1px 0 rgba(255, 255, 255, 0.1),
                            0 0 0 1px rgba(255, 255, 255, 0.05)
                          `
                        }}
                      >
                        {/* Icon & Title */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-cyan-400" />
                          </div>
                          <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>

                        {/* CTA Link */}
                        <a href="#" className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors">
                          Explore Service
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className={`service-image-container ${isImageRight ? 'md:pl-16' : 'md:pr-16 md:order-1'}`}>
                      <div className="relative" style={{ perspective: '1000px' }}>
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className={`service-image w-full ${service.imageSize || 'max-w-md'} mx-auto object-contain animate-float`}
                          style={{
                            transform: `rotateY(${isImageRight ? '-10deg' : '10deg'}) rotateX(5deg)`,
                            transformStyle: 'preserve-3d',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWorkflow;