import formatDateToNow from "@/lib/formatDate";
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
  const [dataDefault, setDataDefault] = useState<ProjectType>(data);
  const [projectData, setProjectData] = useState<ProjectType>(data);

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

  const resetData = () => {
    setProjectData(dataDefault);
  };

  const saveData = () => {
    axios
      .put(`/api/projects`, projectData)
      .then(({ data: responseData }: { data: ProjectType }) => {
        setDataDefault(responseData);
        setProjectData(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProject = () => {
    axios.delete("/api/projects", { data: projectData })
      .then(response => {
        document.location.reload()
      })
  };

  return (
    <div className="flex flex-col flex-wrap w-full h-min m-5 space-y-5">
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
        value={projectData.description}
        onChange={handleChange}
        rows={1}
        className="border-2 border-pink-600 rounded resize w-1/3 p-2 bg-transparent"
      />
      <div className="space-y-5 my-5 w-min">
        {projectData.images.map((_, id) => {
          return (
            <div
              key={id}
              className="p-2 border-b-2 border-pink-600 text-center mb-3 flex space-x-3"
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
              <button onClick={() => removeImage(id)} className="cursor-pointer p-1 rounded hover:scale-125 hover:bg-red-600 transition">
                <Trash size={16} />
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
      <div className="space-y-5 my-5 w-min">
        {projectData.technologies.map((_, id) => {
          return (
            <div
              key={id}
              className="p-2 border-b-2 border-pink-600 text-center mb-3 flex space-x-3"
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
              <button onClick={() => removeTech(id)} className="cursor-pointer p-1 rounded hover:scale-125 hover:bg-red-600 transition">
                <Trash size={16} />
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
      <p className="text-sm">Criado {formatDateToNow(projectData.createdAt)}</p>
      <p className="text-sm">
        Última atualização: {formatDateToNow(projectData.updatedAt)}
      </p>
      {dataDefault !== projectData ? (
        <div className="flex flex-row space-x-2">
          <button
            className="bg-gray-500 bg-opacity-70 hover:bg-opacity-40 text-white font-bold py-2 px-4 rounded"
            onClick={resetData}
          >
            Cancelar
          </button>
          <button
            className="bg-green-600 hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded"
            onClick={saveData}
          >
            Salvar
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={deleteProject}
            className="w-min float-right bg-red-600 p-2 rounded flex space-x-1 items-center hover:bg-red-700 focus:bg-red-700"
          >
            <Trash size={20} className="bg-transparent" />
            <p className="bg-transparent">Apagar</p>
          </button>
        </div>
      )}
      <hr className="border-neutral-800" />
    </div>
  );
}

export default Project;
