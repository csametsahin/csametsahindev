import Image from "next/image";
import csametsahin from "@/public/csametsahin.jpg";

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
    </main>
  );
}
