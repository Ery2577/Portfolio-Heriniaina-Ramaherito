const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[8%] py-6 bg-transparent absolute w-full top-0 left-0 z-50">
      
      {/* Logo Section  */}
      <div className="flex items-center gap-4 cursor-default">
        <img 
            src="/src/assets/My logo.png" 
            alt="Logo" 
            className="w-20 h-20 rounded-full object-cover shadow-md" 
        />
        <span className="text-white font-bold text-xl tracking-tight">
            RAMAHERITO Heriniaina
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-10">
        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
          <li key={item} className="relative group">
            <a 
              href={`#${item.toLowerCase()}`} 
              className="text-white text-sm font-semibold uppercase tracking-wider transition-all duration-300 group-hover:text-neon-green"
            >
              {item}
            </a>
            
            {/* Animation */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-green transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#00ff84]"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;