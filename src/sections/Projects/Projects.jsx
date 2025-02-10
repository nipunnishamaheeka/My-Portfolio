import React, { useState } from 'react';

const ProjectCard = ({ src, link, h3, p }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-lg bg-gray-800 dark:bg-white border border-gray-300 dark:border-gray-400
              transition-all duration-300 hover:scale-105 hover:shadow-md shadow-sm w-full max-w-xs"
  >
    <div className="aspect-video overflow-hidden rounded-t-lg">
      <img 
        src={src} 
        alt={h3} 
        className="w-full h-40 object-cover object-center transition-transform duration-500 
                   group-hover:scale-105"
      />
    </div>
    <div className="p-3 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5">
      <h3 className="text-base font-semibold text-gray-800 dark:text-black mb-1">{h3}</h3>
      <p className="text-xs text-gray-600 dark:text-gray-800">{p}</p>
    </div>
    <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/60 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <span className="text-xs text-white font-medium px-3 py-1.5 bg-purple-600/80 rounded-full 
                      backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        View Project →
      </span>
    </div>
  </a>
);

const CategoryButton = ({ id, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300
      ${active 
        ? 'bg-purple-600 text-white shadow-md' 
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
  >
    {label}
  </button>
);

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projects = [
    {
      src: "src/assets/chat-app.jpg",
      link: "https://github.com/nipunnishamaheeka/Realtime-Chat-Application-With-Firebase",
      h3: "ChatX",
      p: "RealTime Chat App",
      category: "app"
    },
    {
      src: "src/assets/searchEngine.png",
      link: "https://github.com/nipunnishamaheeka/Image-Search-Engine",
      h3: "Image Searcher",
      p: "Image Search Engine",
      category: "web"
    },
    {
      src: "src/assets/Management-System-IMS.png",
      link: "https://github.com/nipunnishamaheeka/Library-Management-System",
      h3: "E-Libbra",
      p: "Library Management System",
      category: "designs"
    },
    {
      src: "src/assets/hospital.png",
      link: "https://github.com/nipunnishamaheeka/channelingCenter-LayerdArchitecture",
      h3: "Channeling Center",
      p: "Management System",
      category: "web"
    },
    {
      src: "src/assets/pos.jpg",
      link: "https://github.com/nipunnishamaheeka/Thogakade_POS-System.git",
      h3: "Pos System",
      p: "Shop Management System",
      category: "web"
    },
    {
      src: "src/assets/Interface-music.png",
      link: "https://github.com/nipunnishamaheeka/Music-Player-Web-With-Html.git",
      h3: "Music Player",
      p: "Play Music",
      category: "web"
    },
    {
      src: "src/assets/Search Engine.png",
      link: "https://github.com/nipunnishamaheeka/Image-Search-Engine.git",
      h3: "Image Searcher",
      p: "Browse Your Images",
      category: "web"
    },
    {
      src: "src/assets/pos2.png",
      link: "https://github.com/nipunnishamaheeka/POS-System-Spring.git",
      h3: "Pos System",
      p: "Spring Pos System",
      category: "web"
    },
    {
      src: "src/assets/high-level-explainer_5.jpg",
      link: "https://github.com/nipunnishamaheeka/Crop-monitoring-system-FrontEnd.git",
      h3: "Crop Monitoring System",
      p: "Monitoring System",
      category: "web"
    },
    {
      src: "src/assets/clothing.png",
      link: "https://github.com/nipunnishamaheeka/E-Commerce-WebSite.git",
      h3: "4Ever Clothing",
      p: "E-Commerce Clothing WebSite",
      category: "web"
    },
    {
      src: "src/assets/healthsphere.jpg",
      link: "https://github.com/nipunnishamaheeka/HealthSphere.git",
      h3: "HealthSphere",
      p: "Health Management System",
      category: "web"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'app', label: 'Mobile Apps' },
    { id: 'designs', label: 'UI Designs' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleViewMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projects" className="py-8 px-4 min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-6">
          <h1 className="md:text-6xl font-bold mb-2
                        bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Featured Projects
          </h1>
          <p className="text-base text-gray-600 md:text-xl">Explore my latest works and creative endeavors</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map(({ id, label }) => (
            <CategoryButton
              key={id}
              id={id}
              label={label}
              active={activeCategory === id}
              onClick={() => {
                setActiveCategory(id);
                setVisibleProjects(6);
              }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>

        {filteredProjects.length > visibleProjects && (
          <div className="flex justify-center mt-6">
            <button 
              onClick={handleViewMore}
              className="px-6 py-2 bg-purple-600 text-white rounded-full 
                         hover:bg-purple-700 transition-colors duration-300"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;