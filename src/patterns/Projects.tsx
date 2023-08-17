"use client";
import ProjectContainer from "@/components/ProjectContainer";
import Title from "@/components/Title";
import {
  filterVisibleProjects,
  getLastFourOrLess,
} from "@/lib/preojectsMethods";
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
      .then((data) => {
        const visibleProjects = filterVisibleProjects(data);
        const lastFourProjects: ProjectType[] =
          getLastFourOrLess(visibleProjects);

        console.log(lastFourProjects);
        setProjects(lastFourProjects);
      });
  }, []);

  return (
    <div className="h-screen">
      <Title title="Projetos" className="text-2xl relative top-7 left-7" />
      <div>
        {projects &&
          projects.map((project, id) => (
            <ProjectContainer key={id} data={project} />
          ))}
      </div>
    </div>
  );
}

export default Projects;
