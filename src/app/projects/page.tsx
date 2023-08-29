"use client";
import Loading from "@/components/Loading";
import ProjectContainer from "@/components/ProjectContainer";
import axios from "axios";
import { useEffect, useState } from "react";

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

function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>();

  useEffect(() => {
    axios
      .get("/api/projects")
      .then((response) => response.data)
      .then((data) => setProjects(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (projects === undefined)
    return (
      <section className="h-[calc(100vh-67px)] flex justify-center items-center">
        <Loading />
      </section>
    );

  if (projects !== undefined && !projects.length)
    return (
      <section className="h-[calc(100vh-67px)] flex justify-center items-center">
        <p className="text-xl font-extrabold">Nenhum projeto encontrado</p>
      </section>
    );

  return (
    <>
      {projects.map((project, id) => (
        <ProjectContainer key={id} data={project} />
      ))}
    </>
  );
}

export default Projects;
