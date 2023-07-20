"use client";
import "@/styles/Landing.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-51px)] relative">
      <div className="text-center w-min mt-[-80px]">
        <p className="text-xl tracking-wider">Olá, Me chamo Lucas Winicius</p>
        <h1
          className={
            montserrat.className +
            " text-6xl font-semibold bg-gradient-to-r from-red-600 to-purple-400 text-transparent bg-clip-text"
          }
        >
          Desenvolvedor Fullstack
        </h1>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center mb-5">
        <div className="flex flex-col items-center">
          <p className="mb-7 text-white text-opacity-60">Vamos começar</p>
          <div className="animate-bounce-slow">
            <Image src="/Arrow.svg" alt="Seta" width={35} height={19} />
          </div>
        </div>
      </div>
    </div>
  );
}
