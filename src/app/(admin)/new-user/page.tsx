"use client";
import { ChangeEvent, useState } from "react";
import FlashMessage from "@/components/FlashMessage";
import { useRouter } from "next/navigation";
import axios from "axios";

type FlashMessageTypes = {
  message: string;
  color: "red" | "blue" | "yellow" | "green";
};

type FlashHandler = (
  message: string,
  color: "red" | "blue" | "yellow" | "green"
) => void;

export default function NewUser() {
  const router = useRouter();
  const [flashMessages, setFlashMessages] = useState<FlashMessageTypes[]>([]);
  const [newUser, setNewUser] = useState({
    nick: "",
    pass: "",
    ADM_PASS: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setNewUser({
      ...newUser,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = (await axios.post("/api/users", newUser)).data;

      router.push("/login");
    } catch (e: any) {
      const message =
        e.response?.data?.message || "Houve um erro desconhecido :[";
      handleFlashMessages(message, "red");
    }
  };

  const handleFlashMessages: FlashHandler = (message, color) => {
    const NewFlash = {
      message,
      color,
    };

    setFlashMessages([...flashMessages, NewFlash]);

    console.log(flashMessages);
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-67px)]">
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <input
                type="text"
                name="nick"
                id="nick"
                placeholder="Nick"
                className="border-b-2 border-pink-600 px-4 py-2 focus:outline-none focus:border-pink-800 w-full"
                onChange={handleInputChange}
              />
            </div>

            <div>
              <input
                type="password"
                name="pass"
                id="pass"
                placeholder="Password"
                className="border-b-2 border-pink-600 px-4 py-2 focus:outline-none focus:border-pink-800 w-full"
                onChange={handleInputChange}
              />
            </div>

            <div className="md:col-span-2">
              <input
                type="password"
                name="ADM_PASS"
                id="adm_pass"
                placeholder="Admin key"
                className="border-b-2 border-pink-600 px-4 py-2 focus:outline-none focus:border-pink-800 w-full"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 focus:bg-pink-700"
          >
            Criar usuário
          </button>
        </form>
      </div>
      <div>
        {flashMessages.length > 0 &&
          flashMessages.map((params, index) => {
            return <FlashMessage {...params} key={`${index}${Date.now()}`} />;
          })}
      </div>
    </div>
  );
}
