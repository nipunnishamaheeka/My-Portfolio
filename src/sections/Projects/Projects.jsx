import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src="src/assets/chat-app.jpg"
          link="https://github.com/nipunnishamaheeka/Realtime-Chat-Application-With-Firebase"
          h3="ChatX"
          p="RealTime Chat App"
        />

        <ProjectCard
          src="src\assets\searchEngine.png"
          link="https://github.com/nipunnishamaheeka/Image-Search-Engine"
          h3="Image Searcher"
          p="Image Search Engine"
        />
        <ProjectCard
          src="src\assets\Management-System-IMS.png"
          link="https://github.com/nipunnishamaheeka/Library-Management-System"
          h3="E-Libbra"
          p="Library Management System"
        />
        <ProjectCard
          src="src\assets\hospital.png"
          link="https://github.com/nipunnishamaheeka/channelingCenter-LayerdArchitecture"
          h3="Channeling Center"
          p="Management System"
        />
      </div>
    </section>
  );
}

export default Projects;
