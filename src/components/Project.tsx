export type ProjectType = {
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

function Project({ data }: { data: ProjectType }) {
  return (
    <div>
      <div>{data.name}</div>
      <br />
    </div>
  );
}

export default Project;
