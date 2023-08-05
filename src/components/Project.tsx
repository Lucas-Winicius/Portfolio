import formatDateToNow from "@/lib/formatDate";
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
  const [projectData, setProjectData] = useState<ProjectType>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    setProjectData(data);
  };

  const saveData = () => {
    axios
      .put(`/api/projects`, projectData)
      .then((res) => {
        console.log("Sucesso")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={projectData.name}
        onChange={handleChange}
        placeholder="Nome do projeto"
      />
      <input
        type="text"
        name="description"
        value={projectData.description}
        onChange={handleChange}
      />
      <div>
        {projectData.images.map((_, id) => {
          return (
            <div key={id}>
              <input
                type="text"
                name="images"
                key={id}
                id={`${id}`}
                value={projectData.images[id]}
                onChange={handleChangeImages}
                placeholder={`Imagem ${id + 1}`}
              />
              <button onClick={() => removeImage(id)}>Remover Imagem</button>
            </div>
          );
        })}
        <button onClick={addImage}>Adicionar imagem</button>
      </div>
      <input
        type="text"
        name="github"
        value={projectData.github}
        onChange={handleChange}
        placeholder="Github"
      />
      <input
        type="text"
        name="url"
        value={projectData.url}
        onChange={handleChange}
        placeholder="URL"
      />
      <div>
        {projectData.technologies.map((_, id) => {
          return (
            <div key={id}>
              <input
                type="text"
                name="technologies"
                id={`${id}`}
                value={projectData.technologies[id]}
                onChange={handleChangeTech}
                placeholder={`Tecnologia ${id + 1}`}
              />
              <button onClick={() => removeTech(id)}>Remover tecnologia</button>
            </div>
          );
        })}
        <button onClick={addTech}>Adicionar tecnologia</button>
      </div>
      <button onClick={toggleVisibility}>
        {projectData.visibility === "VISIBLE" ? "Visivel" : "Privado"}
      </button>
      <p>Criado {formatDateToNow(projectData.createdAt)}</p>
      <p>Última atualização: {formatDateToNow(projectData.updatedAt)}</p>
      {data !== projectData && (
        <div>
          <button
            className="bg-gray-500 bg-opacity-70 hover:bg-opacity-40 text-white font-bold py-2 px-4 rounded"
            onClick={resetData}
          >
            Cancelar
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={saveData}
          >
            Salvar
          </button>
        </div>
      )}
    </div>
  );
}

export default Project;
