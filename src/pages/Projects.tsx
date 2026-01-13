import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <main className="py-15">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-center text-4xl font-semibold mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
