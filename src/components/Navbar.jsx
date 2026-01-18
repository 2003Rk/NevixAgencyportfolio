import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">
      
      <div
        className="
        flex items-center justify-between
        gap-12
        px-8 py-4
        max-w-[1000px] w-full
        bg-[rgba(20,20,20,0.85)]
        backdrop-blur-2xl
        border border-white/15
        rounded-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.4)]
        "
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
