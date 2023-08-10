import Loading from "@/components/Loading";
import Project from "@/components/Project";
import axios from "axios";
import { useEffect, useState } from "react";

interface Projects {
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
}

function ViewProjects() {
  const [projects, setProjects] = useState<Projects[]>();

  useEffect(() => {
    axios
      .get("/api/projects")
      .then((response) => response.data)
      .then((data) => {
        setProjects(data);
      });
  }, []);

  if (!projects) return <Loading />;

  return (
    <>
      {projects.map((data, id) => {
        return <Project data={data} key={id} />;
      })}
    </>
  );
}

export default ViewProjects;
