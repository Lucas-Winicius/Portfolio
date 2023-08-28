"use client";
import FlashMessage from "@/components/FlashMessage";
import axios from "axios";
import Cookie from "js-cookie";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

type FlashMessageTypes = {
  message: string;
  color: "red" | "blue" | "yellow" | "green";
};

type FlashHandler = (
  message: string,
  color: "red" | "blue" | "yellow" | "green"
) => void;

export default function Login() {
  const [flashMessages, setFlashMessages] = useState<FlashMessageTypes[]>([]);

  const [login, setLogin] = useState({
    nick: "",
    pass: "",
  });

  const handleFlashMessages: FlashHandler = (message, color) => {
    const NewFlash = {
      message,
      color,
    };

    setFlashMessages([...flashMessages, NewFlash]);

    console.log(flashMessages);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setLogin({
      ...login,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = (await axios.post("/api/users/login", login)).data;

      const cookieConfig = {
        expires: 7,
        path: "/",
      };

      Cookie.set(`UserToken`, response.auth, cookieConfig);

      window.location.reload();
    } catch (e: any) {
      const message =
        e.response.data.message || "Houve um erro desconhecido :[";
      handleFlashMessages(message, "red");
    }
  };
  return (
    <main>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <input
                type="text"
                name="nick"
                id="nick"
                placeholder="Nick"
                className="border-b-2 border-pink-600 px-4 py-2 focus:outline-none focus:border-pink-800 w-full bg-transparent"
                onChange={handleInputChange}
              />
            </div>

            <div>
              <input
                type="password"
                name="pass"
                id="password"
                placeholder="Password"
                className="border-b-2 border-pink-600 px-4 py-2 focus:outline-none focus:border-pink-800 w-full bg-transparent"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 focus:bg-pink-700"
          >
            Login
          </button>
        </form>
        <p className="text-center text-base text-gray-600 pt-2">
          Caso não possua uma conta.{" "}
          <Link className="text-sky-500" href="/register">
            Crie uma aqui
          </Link>
        </p>
      </div>
      <div>
        {flashMessages.length > 0 &&
          flashMessages.map((params, index) => {
            return <FlashMessage {...params} key={`${index}${Date.now()}`} />;
          })}
      </div>
    </main>
  );
}
