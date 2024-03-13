import Image from "next/image";

import csametsahin from "@/public/csametsahin.jpg";
import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "bg-slate-900 border rounded-lg border-gray-700 p-5 shadow hover:bg-gray-700 delay-100 duration-200 m-2 ",
        className
      )}
    >
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
