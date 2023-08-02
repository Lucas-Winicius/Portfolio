"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowSquareOut } from "@phosphor-icons/react";
import EmptyDashboard from "@/components/EmptyDashboard";
import Project, { ProjectType } from "@/components/Project";
import Cookies from "js-cookie";
import Loading from "@/components/Loading";

interface User {
  id: string;
  nick: string;
  hex: string;
  createdAt: string;
  updatedAt: string;
  iat: number;
  exp: number;
}

interface DataRequest {
  loading: boolean;
  mode: "projects" | "posts" | "technologies" | null;
  data: ProjectType[];
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

  const [data, setData] = useState<DataRequest>({
    loading: false,
    mode: null,
    data: [],
  });

  useEffect(() => {
    axios
      .post("/api/users/info")
      .then((r) => r.data)
      .then((d) => {
        setUser(d.user.data);
      })
      .catch(() => {
        Cookies.remove("UserToken");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data.mode) {
      setData((prev) => ({ ...prev, loading: true }));

      axios
        .get(`/api/${data.mode}`)
        .then(({ data }) => {
          setData((prev) => ({
            ...prev,
            data,
            loading: false,
          }));
        })
        .catch((error) => {
          setData((prev) => ({
            ...prev,
            loading: false,
          }));
          // Lida com o erro da requisição, se necessário
        });
    }
  }, [data.mode]);

  const updateData = (newData: Partial<DataRequest>) => {
    setData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <div className="flex w-screen">
      <div className="h-[calc(100vh-67px)] flex flex-col p-4 justify-between border-r-2 border-zinc-800 w-52">
        <ul className="flex space-y-2 flex-col">
          <li
            className="py-1 hover:bg-zinc-700 px-2 rounded-sm cursor-pointer"
            onClick={() => updateData({ mode: "projects" })}
          >
            Projetos
          </li>
          <li
            className="py-1 hover:bg-zinc-700 px-2 rounded-sm cursor-pointer"
            onClick={() => updateData({ mode: "posts" })}
          >
            Postagens
          </li>
          <li
            className="py-1 hover:bg-zinc-700 px-2 rounded-sm cursor-pointer"
            onClick={() => updateData({ mode: "technologies" })}
          >
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
      {!data.mode && <EmptyDashboard />}
      {data.loading && <Loading />}
      {!data.loading &&
        !!data.data.length &&
        data.mode === "projects" &&
        data.data.map((data, id) => <Project data={data} key={id} />)}
    </div>
  );
}
