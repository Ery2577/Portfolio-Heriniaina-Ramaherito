import MoneyTrackImage from '../assets/MoneyTrack.png';
import PortFolioImage from '../assets/PortFolio.png';
import DataBase from '../assets/DataBase.png';

const projects = [
  {
    title: "MoneyTrack",
    category: "Web design",
    description: "Web application that helps you track expenses on a regular basis. You can also manage your savings via this web application.",
    image: MoneyTrackImage,
    tags: ["React", "Tailwind CSS", "TypeScript", "Vite", "Figma"]
  },
  {
    title: "My Portfolio",
    category: "Web Design",
    description: "This is my portfolio, which is a recent project I did. You can see all the things that concern me in it.",
    image: PortFolioImage,
    tags: ["Figma", "Tailwind CSS", "React", "TypeScript", "Vite"]
  },
  {
    title: "Database Management",
    category: "Data Analyst",
    description: "Academic project during my 1st and 2nd year undergraduate studies.",
    image: DataBase,
    tags: ["PostgreSQL"]
  },
  
  // Plus de projet ...
];

export default function Project() {
  return (
    <section id="project" className="min-h-screen w-full bg-dark-bg px-[8%] py-20">
      <div className="text-center mb-16">
        <h2 className="text-neon-green text-4xl md:text-5xl font-extrabold mb-4">
          MY <span className="text-white">PROJECTS</span>
        </h2>
        <div className="h-1 w-20 bg-neon-green mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-neon-green transition-all duration-500"
          >
            {/* Image du projet */}
            <div className="relative h-60 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Détails du projet */}
            <div className="p-6">
              <span className="text-neon-green text-xs font-bold uppercase tracking-widest">
                {project.category}
              </span>
              <h3 className="text-white text-xl font-bold mt-2 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] bg-gray-800 text-gray-300 px-2 py-1 rounded-md border border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}