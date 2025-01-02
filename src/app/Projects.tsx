import { ProjectCard } from "@/components/react";
import { getProjects } from "@/lib/query";
import { FC } from "react";

const Projects: FC = async () => {

  const projects = await getProjects();

  return (
    <div className="flex flex-col justify-center gap-4 h-auto">
      <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0 bg-gradient-to-r from-wewak-600 to-wewak-400 inline-block text-transparent bg-clip-text">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-4 w-full">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              name={project.title}
              stacks={project.stacks}
              description={project.description}
              links={project.links}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
