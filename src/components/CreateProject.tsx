import {
  Eye,
  EyeSlash,
  GithubLogo,
  Link,
  Plus,
  Trash,
} from "@phosphor-icons/react";
import axios from "axios";
import { ChangeEvent, useState } from "react";

interface NewProject {
  name: string;
  description: string;
  images: string[];
  github: string;
  url?: string;
  technologies: string[];
  visibility: "VISIBLE" | "INVISIBLE";
}

function CreateProject() {
  const [closed, setClosed] = useState(false);
  const [projectData, setProjectData] = useState<NewProject>({
    name: "",
    description: "",
    images: [],
    github: "",
    url: "",
    technologies: [],
    visibility: "VISIBLE",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    setProjectData({
      ...projectData,
      [target.name]: target.value,
    });
  };

  const handleChangeImages = (e: ChangeEvent<HTMLInputElement>) => {
    const id = Number(e.target.id);
    const value = e.target.value;
    const images = [...projectData.images];
    images[id] = value;

    setProjectData({
      ...projectData,
      images,
    });
  };

  const removeImage = (id: number) => {
    setProjectData({
      ...projectData,
      images: projectData.images.filter((_, imageId) => imageId !== id),
    });
  };

  const addImage = () => {
    setProjectData({
      ...projectData,
      images: [...projectData.images, ""],
    });
  };

  const toggleVisibility = () => {
    setProjectData({
      ...projectData,
      visibility:
        projectData.visibility === "VISIBLE" ? "INVISIBLE" : "VISIBLE",
    });
  };

  const handleChangeTech = (e: ChangeEvent<HTMLInputElement>) => {
    const id = Number(e.target.id);
    const value = e.target.value;
    const technologies = [...projectData.technologies];
    technologies[id] = value;

    setProjectData({
      ...projectData,
      technologies,
    });
  };

  const removeTech = (id: number) => {
    setProjectData({
      ...projectData,
      technologies: projectData.technologies.filter(
        (_, techId) => techId !== id
      ),
    });
  };

  const addTech = () => {
    setProjectData({
      ...projectData,
      technologies: [...projectData.technologies, ""],
    });
  };

  const createProject = () => {
    axios.post("/api/projects", projectData)
      .then(() => document.location.reload())
  };

  if (!closed) {
    return (
      <div
        onClick={() => setClosed(true)}
        className="flex items-center justify-center w-full p-4 space-x-2 mb-5 hover:bg-slate-800 mx-5 rounded cursor-pointer"
      >
        <Plus size={26} />
        <p>Adicionar Projeto</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col flex-wrap w-full h-min m-5 space-y-5">
      <input
        type="text"
        name="name"
        value={projectData.name}
        onChange={handleChange}
        placeholder="Nome do projeto"
        className="p-2 border-b-2 border-pink-600 text-center focus:border-pink-800 mb-3 w-1/3 bg-transparent"
      />

      <textarea
        name="description"
        placeholder="Descrição"
        value={projectData.description}
        onChange={handleChange}
        rows={1}
        className="border-2 border-pink-600 rounded resize w-1/3 p-2 bg-transparent"
      />
      <div className="space-y-5 my-5 w-max">
        {projectData.images.map((_, id) => {
          return (
            <div
              key={id}
              className="p-2 border-b-2 border-pink-600 text-center mb-3 flex"
            >
              <input
                type="text"
                name="images"
                key={id}
                id={`${id}`}
                value={projectData.images[id]}
                onChange={handleChangeImages}
                placeholder={`Imagem ${id + 1}`}
                className="bg-transparent"
              />
              <button onClick={() => removeImage(id)}>
                <Trash size={16} weight="light" />
              </button>
            </div>
          );
        })}
        <button onClick={addImage} className="flex items-center space-x-2">
          <Plus size={16} />
          <p>Adicionar imagem</p>
        </button>
      </div>
      <div className="flex items-center space-x-1">
        <GithubLogo size={20} />
        <p>/</p>
        <input
          type="text"
          name="github"
          value={projectData.github}
          onChange={handleChange}
          placeholder="Github"
          className="bg-transparent"
        />
      </div>
      <div className="flex items-center space-x-1">
        <Link size={20} />
        <p>/</p>
        <input
          type="text"
          name="url"
          value={projectData.url}
          onChange={handleChange}
          placeholder="URL"
          className="bg-transparent"
        />
      </div>
      <div className="space-y-5 my-5 w-max">
        {projectData.technologies.map((_, id) => {
          return (
            <div
              key={id}
              className="p-2 border-b-2 border-pink-600 text-center mb-3 flex"
            >
              <input
                type="text"
                name="technologies"
                id={`${id}`}
                value={projectData.technologies[id]}
                onChange={handleChangeTech}
                placeholder={`Tecnologia ${id + 1}`}
                className="bg-transparent"
              />
              <button onClick={() => removeTech(id)}>
                <Trash size={16} weight="light" />
              </button>
            </div>
          );
        })}
        <button onClick={addTech} className="flex items-center space-x-2">
          <Plus size={16} />
          <p>Adicionar tecnologia</p>
        </button>
      </div>
      <button
        onClick={toggleVisibility}
        className={`w-min py-2 px-4 rounded font-semibold tracking-wider transition-all delay-100 ${
          projectData.visibility === "VISIBLE" ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {projectData.visibility === "VISIBLE" ? (
          <span className="flex items-center space-x-2">
            <Eye size={20} />
            <p className="text-sm">Visível</p>
          </span>
        ) : (
          <span className="flex items-center space-x-2">
            <EyeSlash size={20} />
            <p className="text-sm">Invisivel</p>
          </span>
        )}
      </button>
      <div className="flex justify-end">
        <button
          onClick={createProject}
          className="bg-blue-600 py-2 px-5 rounded hover:bg-blue-700 delay-75 transition-colors"
        >
          Criar
        </button>
      </div>
      <hr className="border-neutral-800" />
    </section>
  );
}

export default CreateProject;
