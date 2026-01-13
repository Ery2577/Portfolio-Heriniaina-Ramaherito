import AboutMe from "../assets/My_profil-removebg-preview.png";

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full bg-dark-bg flex flex-col md:flex-row items-center px-[8%] py-20 gap-16">


      <div className="flex-1 relative flex justify-center items-center">

        <div className="relative group flex justify-center items-end -translate-y-8 md:-translate-y-16">

          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[110%] md:w-[135%] h-20 
                    border-10 border-neon-green rounded-[100%] z-0
                    shadow-[0_0_35px_#00ff84,inset_0_0_35px_#00ff84] 
                    animate-[pulse_4s_infinite_ease-in-out]">
          </div>

          <div className="relative z-10 transition-all duration-500 group-hover:-translate-y-4">
            <img
              src={AboutMe}
              alt="About Me"
              className="w-auto h-125 md:h-187.5 lg:h-212.5 
                   object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
            </img>
          </div>
        </div>
      </div>


      <div className="flex-1 text-left">
        <h2 className="text-neon-green text-4xl md:text-5xl font-extrabold  mb-4 leading-tight">
          RAMAHERITO <span className="text-white">Heriniaina</span>
        </h2>

        <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed">
          <p>
            My name is Heriniaina and I'm twenty years old. I'm of Malagasy origin and young, interested in technology and computing. 
            I'm in my second year of a degree course at HEI Madagascar. I have typing and computer skills. I'm passionate about photography, 
            and my motto is “Behind an image is a story”.
          </p>
        </div>

        <button className="relative px-8 py-3 bg-neon-green text-white font-bold uppercase text-sm tracking-widest rounded-xl transition-all duration-300 hover:bg-#00ff84 hover:shadow-[0_0_20px_white] active:scale-95">
          Learn More
        </button>
      </div>

    </section>
  );
};

export default About;