"use client";
import axios from "axios";
import { ChangeEvent, useState } from "react";

interface Message {
  email: string;
  title: string;
  content: string;
}

function SendMessage() {
  const [message, setMessage] = useState<Message>({
    email: "",
    title: "",
    content: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    setMessage({
      ...message,
      [target.name]: target.value,
    });
  };

  const sendMessage = () => {
    axios.post("/api/messages", message).then(() =>
      setMessage({
        email: "",
        title: "",
        content: "",
      })
    );
  };

  return (
    <div className="flex flex-col space-y-3">
      <input
        type="email"
        name="email"
        className="text-zinc-950 px-4 py-1 rounded"
        placeholder="Insira seu email"
        value={message.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        className="text-zinc-950 px-4 py-1 rounded"
        placeholder="Titulo"
        value={message.title}
        onChange={handleChange}
        />
      <textarea
        name="content"
        className="text-zinc-950 px-4 py-1 rounded"
        placeholder="Conteudo"
        value={message.content}
        onChange={handleChange}
      />
      <button
        className="bg-indigo-500 py-2 rounded hover:bg-indigo-600 focus:bg-indigo-600"
        onClick={sendMessage}
      >
        Enviar
      </button>
    </div>
  );
}

export default SendMessage;
