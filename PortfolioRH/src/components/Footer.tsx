export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
       
        <footer id="footer" className="bg-gray-50/50 border-t border-gray-200 py-6 pb-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            RAMAHERITO Heriniaina
                        </h2>
                      
                        <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-green-500 transition-all duration-300 relative group">
                                Web Designer & Data Analyst
                            </p>
                        </div>
                    </div>

                 
                    <nav className="flex gap-8 text-sm font-semibold text-gray-600">
                        {['Home', 'Projects', 'Contact'].map((item) => (
                            <a 
                                key={item}
                                href={`#${item.toLowerCase()}`} 
                                className="hover:text-blue-600 transition-all duration-300 relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Follow-me</span>
                        <div className="flex gap-3">
                           
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/heriniaina-ramaherito-b71025373/" target="_blank" rel="noopener noreferrer" 
                               className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-[#0077B5] hover:border-[#0077B5] hover:bg-white transition-all duration-300 shadow-sm" title="LinkedIn">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/Ery2577" target="_blank" rel="noopener noreferrer" 
                               className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-gray-900 hover:border-gray-900 hover:bg-white transition-all duration-300 shadow-sm" title="GitHub">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>

                            {/* Gmail */}
                            <a href="mailto:heriniainaramaherito@gmail.com" 
                               className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-500 hover:bg-white transition-all duration-300 shadow-sm" title="Gmail">
                                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a href="https://wa.me/261344409944" target="_blank" rel="noopener noreferrer" 
                               className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-[#25D366] hover:border-[#25D366] hover:bg-white transition-all duration-300 shadow-sm" title="WhatsApp">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                
                <div className="my-10 h-px w-full bg-linear-to-r from-transparent via-gray-200 to-transparent" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                    <p>© {currentYear} — Handcrafted by RAMAHERITO Heriniaina</p>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                            React & Tailwind
                        </span>
                        <a href="#" className="hover:text-gray-900 transition-colors underline-offset-4 hover:underline">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}