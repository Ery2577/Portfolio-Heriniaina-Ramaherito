import MyProfil from '../assets/My_profil-removebg-preview.png';

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

                <button className="relative px-8 py-3 bg-neon-green text-[#00ff84] font-bold uppercase text-sm tracking-widest rounded-xl transition-all duration-300 hover:bg-#00ff84 hover:shadow-[0_0_20px_#00ff84] active:scale-95">
                    Learn More
                </button>
            </div>

    
            <div className="flex-1 relative mt-10 md:mt-0 flex justify-center items-center h-[600px] md:h-screen">

                <div className="relative w-full h-full flex justify-center items-center group">

                    
                    <div className="absolute top-[15%] right-[10%] w-64 h-64 md:w-[450px] md:h-[450px] 
                        bg-[#00ff84] rounded-full z-0 
                        shadow-[0_0_50px_rgba(0,255,132,0.4)]
                        animate-[bounce_8s_infinite_ease-in-out]
                        transition-transform duration-700 group-hover:scale-110">
                    </div>

                   
                    <div className="absolute bottom-[10%] right-[5%] w-56 h-56 md:w-100 md:h-100 
                        bg-white rounded-full z-0 opacity-90
                        animate-[pulse_10s_infinite_ease-in-out]
                        transition-transform duration-1000 group-hover:-translate-x-8 group-hover:-translate-y-4">
                    </div>

                    
                    <div className="relative z-10 h-full flex items-end md:items-center">
                        <img
                            src={MyProfil}
                            alt="Profil"
                            className="w-auto h-125 md:h-212.5 lg:h-237.5 object-contain grayscale hover:grayscale-0 transition-all 
                            duration-700 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] scale-105 hover:scale-110 translate-y-10 md:translate-y-0"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;