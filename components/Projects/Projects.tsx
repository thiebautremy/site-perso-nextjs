import Container from "../Container/Container";
import Project from "./Project";
import styles from "./Projects.module.scss";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <Container margin="isMedium">
        <h1>Mes réalisations</h1>
      </Container>
      <Container margin="isHuge">
        {projectsData.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </Container>
    </div>
  );
};

export default Projects;
