import type { Project } from "../types/Project";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span key={tech} className="text-sm bg-gray-200 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={project.githubUrl} className="text-blue-600 hover:underline">
          GitHub
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} className="text-blue-600 hover:underline">
            Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
