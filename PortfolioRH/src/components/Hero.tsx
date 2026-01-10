const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen w-full bg-dark-bg flex flex-col md:flex-row items-center px-[8%] pt-20 overflow-hidden">

            <div className="flex-1 z-10 text-left">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                    I'm <span className="text-[#00ff84]">Web Designer </span> <span className="text-white">and Data Analyst</span>
                </h3>
                <h1 className="text-neon-green text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                    RAMAHERITO <br /> Heriniaina
                </h1>
                <p className="text-gray-400 text-sm md:text-base max-w-md mb-8 leading-relaxed">
                    Passionate about IT, I chose to become a web designer and data analyst. I love design and I've exploited it in my field. Analysis is also a strategy for improvement.
                    I've combined my passions into one job.
                </p>


                <button className="relative px-8 py-3 bg-neon-green text-white font-bold uppercase text-sm tracking-widest rounded-sm transition-all duration-300 hover:bg-#00ff84 hover:shadow-[0_0_20px_#00ff84] active:scale-95">
                    Learn More
                </button>
            </div>


            <div className="flex-1 relative mt-20 md:mt-0 flex justify-center items-center">
                {/* Conteneur de l'image avec les cercles */}
                <div className="relative group">

                    
                    <div className="absolute -top-12 -left-12 w-64 h-64 md:w-80 md:h-80 bg-neon-green rounded-full z-0 
                        opacity-90 blur-[2px] shadow-[0_0_40px_rgba(0,255,132,0.4)] transition-transform duration-700 group-hover:scale-110">
                    </div>

                  
                    <div className="absolute -bottom-8 -right-8 w-56 h-56 md:w-72 md:h-72 bg-white rounded-full z-0 
                        opacity-80 transition-transform duration-700 group-hover:-translate-x-4">
                    </div>

                   
                    <div className="relative z-10 overflow-hidden rounded-2xl">
                        <img
                            src="/src/assets/My profil.jpeg"
                            alt="Profil"
                            className="w-72 h-[450px] md:w-[400px] md:h-[550px] object-cover grayscale hover:grayscale-0 
                           transition-all duration-500 shadow-2xl scale-100 hover:scale-105"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;