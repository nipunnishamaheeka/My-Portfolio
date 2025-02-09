import React from 'react';
import { useTheme } from "../../common/ThemeContext";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";

const SkillCard = ({ title, skills, icon }) => (
  <div className="bg-white  border  dark:border-gray-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-black">{title}</h3>
    <div className="grid grid-cols-2 gap-3">
      {skills.map((skill, index) => (
        <div 
          key={index}
          className=" text-black flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-200/50
                     hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 
                     transition-all duration-300"
        >
          <img src={icon} alt="checkmark" className="w-4 h-4" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-800">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Mobile Development",
      skills: ["Flutter", "React Native", "iOS", "Android", "Kotlin", "Swift", "Firebase", "REST APIs"]
    },
    {
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "GitLab", "Webpack", "Vite", "Jest", "npm", "yarn"]
    },
    {
      title: "Design & Database",
      skills: ["Photoshop", "Illustrator", "Premiere Pro", "MySQL", "MongoDB", "Firebase", "Figma", "XD"]
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 
                       bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Technical Skills
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              icon={checkMarkIcon}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-48 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -z-10" />
      </div>

      {/* Optional: Add floating dots pattern */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-600 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 5}s infinite`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Add this to your global CSS
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
`;

export default Skills;