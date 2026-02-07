import { navLinks } from "../../constants";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling past hero section (roughly 80% of viewport height)
      const showAfter = window.innerHeight * 0.8;
      setVisible(window.scrollY > showAfter);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[1000px] flex justify-center transition-all duration-500 ${
        visible 
          ? "translate-y-0 opacity-100" 
          : "-translate-y-[150%] opacity-0 pointer-events-none"
      }`}
    >
      
      <div
        className="flex items-center justify-between gap-6 md:gap-12 px-6 md:px-8 py-3 md:py-4 w-full bg-[rgba(20,20,20,0.85)] backdrop-blur-2xl border border-white/15 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >
        
        {/* Logo */}
        <a href="#home" className="text-2xl font-semibold text-white">
          NEVIX.
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-10 text-gray-300 text-[15px]">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="hover:text-white transition duration-300"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Button */}
        <a
          href="#contact"
          className="
          bg-white text-black
          px-6 py-2.5
          rounded-full
          font-medium
          hover:bg-gray-200
          transition duration-300
          "
        >
          Get In Touch
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
