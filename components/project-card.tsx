import Image from "next/image";

import csametsahin from "@/public/csametsahin.jpg";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-slate-900 h-32 w-64 border rounded-lg border-gray-700 p-5 shadow hover:bg-gray-700 delay-100 duration-200 m-2 ">
      <a href={project.herf} className="overflow-auto">
        <div className="flex flex-row">
          <Image
            src={project?.image ?? `${csametsahin.src}`}
            className="rounded"
            alt="xx"
            width={24}
            height={24}
          />
          <p className="ml-3">
            <span className="text-gray-500 font-semibold">{project.repo}/</span>
            <span className="text-gray-300 font-semibold whitespace-normal ">
              {project.name}
              <span></span>
            </span>
          </p>
        </div>
        {/* Content */}
        <p className="text-xs text-gray-500 mt-3">{project.description}</p>
      </a>
    </div>
  );
};

export default ProjectCard;
