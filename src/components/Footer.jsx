import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#featured-work' },
    { name: 'Contact', href: '#get-in-touch' },
  ];

  const services = [
    'UI/UX Design',
    'Web Development',
    'Mobile Apps',
    'Brand Identity',
    'Digital Strategy',
  ];

  const socials = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: 'https://dribbble.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/>
        </svg>
      ),
    },
  ];

  useGSAP(() => {
    // Footer reveal animation
    gsap.from('.footer-content', {
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 90%',
        end: 'top 60%',
        scrub: 1,
      },
      opacity: 0,
      y: 60,
    });

    // Logo animation
    gsap.from('.footer-logo', {
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 85%',
        end: 'top 55%',
        scrub: 1,
      },
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    });

    // Stagger links animation
    gsap.from('.footer-link', {
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 80%',
        end: 'top 50%',
        scrub: 1,
      },
      opacity: 0,
      y: 20,
      stagger: 0.05,
    });

    // Social icons animation
    gsap.from('.social-icon', {
      scrollTrigger: {
        trigger: '.footer-socials',
        start: 'top 90%',
        end: 'top 70%',
        scrub: 1,
      },
      opacity: 0,
      scale: 0,
      stagger: 0.1,
    });
  });

  return (
    <footer className="relative bg-black text-white pt-20 pb-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      {/* Decorative blur */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="footer-content max-w-6xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="footer-logo mb-6">
              <p className="font-modern-negra text-4xl text-white">Nevix</p>
              <p className="text-gray-400 text-sm mt-1">Service Provider</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Crafting digital experiences that captivate, convert, and create lasting impressions.
            </p>
            {/* Social Icons */}
            <div className="footer-socials flex items-center gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer-link text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-yellow group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="footer-link text-gray-400 text-sm cursor-default hover:text-white transition-colors duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-4">
              <a 
                href="mailto:hello@jetha.studio" 
                className="footer-link text-gray-400 hover:text-yellow transition-colors duration-300 text-sm flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow/20 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                hello.@nevix.studio
              </a>
              <a 
                href="tel:+1234567890" 
                className="footer-link text-gray-400 hover:text-yellow transition-colors duration-300 text-sm flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow/20 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                +1 (234) 567-890
              </a>
              <div className="footer-link text-gray-400 text-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Bhubaneswar, Odisha<br />India 751024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Nevix agency. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Large Background Text */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-full">
          <p className="text-[15vw] font-modern-negra text-white/[0.02] text-center whitespace-nowrap leading-none -mb-[5vw]">
            Nevix
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
