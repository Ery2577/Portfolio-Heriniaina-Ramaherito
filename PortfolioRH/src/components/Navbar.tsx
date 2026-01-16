import { useState, useEffect } from "react";
import MyLogo from "../assets/My logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'project' }, 
    { name: 'Contact', id: 'contact' },
  ];

  
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); 
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: "smooth", 
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/*Navbar top */}
      <nav className={`flex items-center justify-between px-[5%] py-2 fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100 bg-transparent"
      }`}>
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img src={MyLogo} alt="Logo" className="w-16 h-16 rounded-full object-cover shadow-md" />
          <span className="text-white font-bold text-xl tracking-tight">RAMAHERITO Heriniaina</span>
        </div>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className="relative group">
              <a 
                href={`#${link.id}`} 
                onClick={(e) => handleNavLinkClick(e, link.id)} 
                className="text-white text-sm font-semibold uppercase tracking-wider hover:text-neon-green transition-all"
              >
                {link.name}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-green transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right menu after scroll */}
      <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 transition-all duration-700 ${
        isScrolled ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0 pointer-events-none"
      }`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleNavLinkClick(e, link.id)} 
            className="group flex items-center justify-end gap-4"
          >
            <span className="text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 bg-dark-bg/90 px-2 py-1 rounded border border-neon-green pointer-events-none">
              {link.name}
            </span>
            <div className="w-3 h-3 rounded-full bg-neon-green shadow-[0_0_10px_#00ff84] border border-white/20 group-hover:scale-150 transition-transform duration-300"></div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;