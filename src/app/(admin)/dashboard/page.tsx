"use client";
import axios from "axios";
import Cookie from "js-cookie";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    axios
      .post("/api/users/info")
      .then((r) => r.data)
      .then((d) => {
        setUser(d);
        console.log(user);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{user && <h1>Olá, {user.user.data.nick}</h1>}</>;
}
