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
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <input
              type="text"
              name="nick"
              id="nick"
              placeholder="Nick"
              className="border-b-2 border-pink-600 px-4 py-2 focus:outline-none focus:border-pink-800 w-full"
            />
          </div>

          <div>
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Password"
              className="border-b-2 border-pink-600 px-4 py-2 focus:outline-none focus:border-pink-800 w-full"
            />
          </div>

          <div className="md:col-span-2">
            <input
              type="password"
              name="ADM_PASS"
              id="adm_pass"
              placeholder="Admin key"
              className="border-b-2 border-pink-600 px-4 py-2 focus:outline-none focus:border-pink-800 w-full"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg"
        >
          Criar usuário
        </button>
      </div>
    </div>
  );
}
