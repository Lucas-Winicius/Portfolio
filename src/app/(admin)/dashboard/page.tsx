"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import SideBar from "@/patterns/SideBar";
import DashboardManager from "@/patterns/DashboardManager";

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
      })
      .catch(() => {
        Cookies.remove("UserToken");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-screen">
      <SideBar userName={user.nick} />
      <div className="flex flex-wrap w-full max-h-max overflow-y-scroll">
        <DashboardManager />
      </div>
    </div>
  );
}
