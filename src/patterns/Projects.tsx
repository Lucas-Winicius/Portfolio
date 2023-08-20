"use client";
import Loading from "@/components/Loading";
import ProjectContainer from "@/components/ProjectContainer";
import Title from "@/components/Title";
import {
  filterVisibleProjects,
  getLastTwoOrLess,
} from "@/lib/preojectsMethods";
import { ArrowRight } from "@phosphor-icons/react";
import axios from "axios";
import Link from "next/link";
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
      .then((data) => {
        const visibleProjects = filterVisibleProjects(data);
        const lastFourProjects: ProjectType[] =
          getLastTwoOrLess(visibleProjects);

        setProjects(lastFourProjects);
      });
  }, []);

  return (
    <div className="h-screen">
      <Title title="Projetos" className="text-2xl relative top-14 left-7" />
      <div className="flex flex-col space-y-5 justify-center items-center h-full">
        {projects === undefined && <Loading />}

        {projects !== undefined && !projects.length && (
          <p className="text-xl font-extrabold">Nenhum projeto encontrado</p>
        )}

        {!!projects?.length &&
          projects?.map((project, id) => (
            <ProjectContainer key={id} data={project} />
          ))}

        {!!projects?.length && (
          <Link
            href="/projects"
            className={`flex items-center space-x-2 py-2 px-4 rounded hover:bg-pink-600 transition-colors`}
          >
            <p>Ver mais</p>
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Projects;
