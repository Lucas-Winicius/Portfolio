import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import formatDateToNow from "@/lib/formatDate";

type ProjectType = {
  id: string;
  name: string;
  description: string;
  images: string[];
  github: string;
  url?: string;
  technologies: string[];
  visibility: "VISIBLE" | "INVISIBLE";
  createdAt: string;
  updatedAt: string;
};

function ProjectContainer({ data }: { data: ProjectType }) {
  return (
    <section className="flex flex-row items-center space-x-3 w-3/4 h-max">
      <div>
        <Carousel images={data.images} height={350} width={350} className="cursor-pointer" />
      </div>
      <div className="flex flex-col justify-between w-full space-y-3 h-max">
        <div className="space-y-2">
          <h1 className="font-bold text-lg">{data.name}</h1>
          <p className="text-base">{data.description}</p>
          <div className="flex flex-row space-x-4">
            {data.technologies.map((tecName, id) => (
              <div key={id} className="bg-red-600 px-2 py-1 rounded-sm text-xs font-semibold">{tecName}</div>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-between items-end space-x-3">
          <div className="flex space-x-3">
            <Link href={data.github} className="flex items-center space-x-2 bg-pink-600 py-2 px-4 rounded hover:bg-pink-700 transition-colors arrow-animation" >
              <p className="text-xs">GitHub</p>
              <ArrowRight size={16} />
            </Link>
            <Link href={data.url || ""} className={`flex items-center space-x-2 bg-pink-600 py-2 px-4 rounded hover:bg-pink-700 transition-colors arrow-animation ${data.url ? "" : "hidden"}`}>
              <p className="text-xs">Visualizar</p>
              <ArrowRight size={16} />
            </Link>
          </div>
          <div>
            <p className="opacity-40 text-sm">Postado {formatDateToNow(data.createdAt)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectContainer;
