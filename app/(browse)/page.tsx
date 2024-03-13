import Image from "next/image";
import csametsahin from "@/public/csametsahin.jpg";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/constants";

export default function Home() {
  return (
    <main className="flex mx-2 lg:ml-20 lg:mr-40 flex-col overflow-hidden py-2 space-y-2">
      <div className="flex overflow-hidden space-x-2">
        <Image
          className="rounded-full hidden lg:flex"
          width={150}
          height={150}
          src={csametsahin}
          alt="CSŞ"
        />

        <p>
          Hi 👋 I&apos;m <strong>Samet</strong>. Currently working as Software
          Engineer at{" "}
          <a href="https://www.arcelikglobal.com/en/" className="font-semibold">
            Arçelik Global
          </a>{" "}
          I am working as Full Stack Developer, using .NET and React
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-center text-slate-800 font-semibold">
          See My Projects Below
        </h3>
      </div>
      <div className="flex flex-wrap flex-col lg:flex-row items-center justify-center">
        {projects.map((item) => (
          <ProjectCard
            key={item.herf}
            project={item}
            className="lg:w-64 h-32 w-72"
          />
        ))}
      </div>
    </main>
  );
}
