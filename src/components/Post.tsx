import formatDateToNow from "@/lib/formatDate";
import { Plus, Trash } from "@phosphor-icons/react";
import axios from "axios";
import { ChangeEvent, MouseEventHandler, useState } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

function Post({ data }: { data: Post }) {
  const [defaultData, setDefaultData] = useState(data);
  const [post, setPost] = useState(data);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    setPost({
      ...post,
      [target.name]: target.value,
    });
  };

  const removeTag = (id: number) => {
    const newTags = post.tags.filter((_, tagId) => tagId !== id);

    setPost((prev) => ({
      ...prev,
      tags: newTags,
    }));
  };

  const addTag = () => {
    const newTags = [...post.tags, ""];

    setPost((prev) => ({
      ...prev,
      tags: newTags,
    }));
  };

  const resetData = () => {
    setPost(defaultData);
  };

  const saveData = () => {
    axios
      .put("/api/posts", post)
      .then((r) => r.data)
      .then((data) => {
        setDefaultData(data);
        setPost(data);
      });
  };

  const deleteData = () => {
    axios.delete("/api/posts", { data: post }).then(() => {
      document.location.reload();
    });
  };

  return (
    <div className="flex flex-col flex-wrap w-full h-min m-5 space-y-5">
      <input
        type="text"
        name="title"
        className="p-2 border-b-2 border-pink-600 text-center focus:border-pink-800 mb-3 w-1/3 bg-transparent"
        value={post.title}
        onChange={handleChange}
        placeholder="Titulo"
      />
      <textarea
        name="content"
        rows={1}
        className="border-2 border-pink-600 rounded resize w-1/3 p-2 bg-transparent"
        value={post.content}
        onChange={handleChange}
        placeholder="Conteudo"
      />
      <div className="space-y-5 my-5 w-min">
        {post.tags.map((_, id) => (
          <div
            key={id}
            className="p-2 border-b-2 border-pink-600 text-center mb-3 flex"
          >
            <input
              type="text"
              value={post.tags[id]}
              className="bg-transparent"
              placeholder={`Tag ${id + 1}`}
            />
            <button
              className="cursor-pointer p-1 rounded hover:scale-125 hover:bg-red-600 transition"
              onClick={() => removeTag(id)}
            >
              <Trash size={16} />
            </button>
          </div>
        ))}
        <button className="flex items-center space-x-2" onClick={addTag}>
          <Plus size={16} />
          <p>Adicionar imagem</p>
        </button>
      </div>
      <p className="text-sm">Criado {formatDateToNow(post.createdAt)}</p>
      <p className="text-sm">
        Última atualização: {formatDateToNow(post.updatedAt)}
      </p>
      {defaultData !== post ? (
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
            className="w-min float-right bg-red-600 p-2 rounded flex space-x-1 items-center hover:bg-red-700 focus:bg-red-700"
            onClick={deleteData}
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

export default Post;
