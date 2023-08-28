import { Plus, Trash } from "@phosphor-icons/react";
import axios from "axios";
import { ChangeEvent, useState } from "react";

interface PostTypes {
  title: string;
  content: string;
  tags: string[];
}

function CreatePost() {
  const [closed, setClosed] = useState(false);
  const [post, setPost] = useState<PostTypes>({
    title: "",
    content: "",
    tags: [],
  });

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

  const createPost = () => {
    axios.post("/api/posts", post).then(() => {
      document.location.reload();
    });
  };

  const handleChangeTags = (e: ChangeEvent<HTMLInputElement>) => {
    const id = Number(e.target.id);
    const value = e.target.value;
    const tags = [...post.tags];
    tags[id] = value;

    setPost({
      ...post,
      tags,
    });
  };

  if (!closed) {
    return (
      <section
        onClick={() => setClosed(true)}
        className="flex items-center justify-center w-full p-4 space-x-2 mb-5 hover:bg-slate-800 mx-5 rounded cursor-pointer"
      >
        <Plus size={26} />
        <p>Adicionar Postagem</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col flex-wrap w-full h-min m-5 space-y-5">
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
              id={`${id}`}
              onChange={handleChangeTags}
            />
            <button
              className="cursor-pointer p-1 rounded hover:scale-125 hover:bg-red-600 transition"
              onClick={() => removeTag(id)}
            >
              <Trash size={16} />
            </button>
          </div>
        ))}
        <button className="flex items-center space-x-2 w-max" onClick={addTag}>
          <Plus size={16} />
          <p>Adicionar Tag</p>
        </button>
      </div>
      <div className="flex justify-end">
        <button
          onClick={createPost}
          className="bg-blue-600 py-2 px-5 rounded hover:bg-blue-700 delay-75 transition-colors"
        >
          Criar
        </button>
      </div>
      <hr className="border-neutral-800" />
    </section>
  );
}

export default CreatePost;
