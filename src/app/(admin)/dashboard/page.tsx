"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowSquareOut } from "@phosphor-icons/react";
import EmptyDashboard from "@/components/EmptyDashboard";

interface User {
  id: string;
  nick: string;
  hex: string;
  createdAt: string;
  updatedAt: string;
  iat: number;
  exp: number;
}

export default function Dashboard() {
  const [user, setUser] = useState<User>({
    id: "",
    nick: "",
    hex: "",
    createdAt: "",
    updatedAt: "",
    iat: 0,
    exp: 0,
  });

  useEffect(() => {
    axios
      .post("/api/users/info")
      .then((r) => r.data)
      .then((d) => {
        setUser(d.user.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-screen">
      <div className="h-[calc(100vh-67px)] flex flex-col p-4 justify-between border-r-2 border-zinc-800 w-52">
        <ul className="flex space-y-2 flex-col">
          <li className="py-1 hover:bg-zinc-700 px-2 rounded-sm cursor-pointer">
            Projetos
          </li>
          <li className="py-1 hover:bg-zinc-700 px-2 rounded-sm cursor-pointer">
            Postagens
          </li>
          <li className="py-1 hover:bg-zinc-700 px-2 rounded-sm cursor-pointer">
            Tecnologias
          </li>
          <li className="py-1 px-2 rounded-sm cursor-pointer flex items-center space-x-2">
            <Link href="/register">Criar Usuario</Link>
            <ArrowSquareOut size={20} />
          </li>
        </ul>
        <div>
          <h1 className="text-center">{user.nick}</h1>
        </div>
      </div>
      {true && <EmptyDashboard />}
    </div>
  );
}
