"use client";
import { useState, FormEvent } from "react";
import FlashMessage from "@/components/FlashMessage";

export default function NewUser() {
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [admPassword, setAdmPassword] = useState("");
  const [flashMessage, setFlashmessage] = useState({
    show: false,
    message: "",
    title: "",
    color: "blue",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aqui você pode realizar o envio do formulário para o backend
    // e exibir a mensagem de sucesso após o envio ser concluído.
    // Por enquanto, vamos apenas exibir a mensagem ao submeter o form.
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-67px)]">
      <form
        className="form-container bg-white shadow-md rounded px-8 pt-6 pb-8"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 bg-transparent">
          <label
            htmlFor="nick"
            className="block text-gray-700 text-sm font-bold mb-2 bg-transparent"
          >
            Nick
          </label>
          <input
            type="text"
            name="nick"
            id="nick"
            value={nick}
            onChange={(e) => setNick(e.target.value)}
            className="appearance-none border rounded w-full py-2 bg-transparent px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6 bg-transparent">
          <label
            htmlFor="pass"
            className="block text-gray-700 text-sm font-bold mb-2 bg-transparent"
          >
            Password
          </label>
          <input
            type="password"
            name="pass"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 bg-transparent text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6 bg-transparent">
          <label
            htmlFor="adm_pass"
            className="block text-gray-700 text-sm font-bold mb-2 bg-transparent"
          >
            Adm pass
          </label>
          <input
            type="password"
            name="adm_pass"
            id="adm_pass"
            value={admPassword}
            onChange={(e) => setAdmPassword(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 bg-transparent text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center bg-transparent">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create user
          </button>
        </div>
      </form>
      {flashMessage.show && (
        <FlashMessage
          message={flashMessage.message}
          title={flashMessage.title}
          color={flashMessage.color}
        />
      )}
    </div>
  );
}
