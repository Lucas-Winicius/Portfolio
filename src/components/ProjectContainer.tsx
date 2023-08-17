import Image from "next/image";

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
    <div>
      <div>
        <Image src={data.images[1]} alt={data.name} />
      </div>
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default ProjectContainer;
