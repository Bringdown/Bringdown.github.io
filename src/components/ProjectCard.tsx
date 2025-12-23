import type { Project } from "../types/Project";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>{project.tech.join(" • ")}</p>
      <a href={project.githubUrl}>GitHub</a>
      {project.liveUrl && <a href={project.liveUrl}>Live</a>}
    </div>
  );
};

export default ProjectCard;
