"use client";
import { InstagramLogo } from "@phosphor-icons/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function Instagram({ showText }: { showText?: boolean }) {
  const [instagram, setInstagram] = useState("#");

  useEffect(() => {
    axios
      .get("/api/about?mode=instagram")
      .then((response) => response.data)
      .then((data) => setInstagram(data.instagram));
  }, []);

  return (
    <div>
      <Link
        target="_blank"
        href={instagram}
        className="flex flex-row space-x-1 items-center opacity-70 hover:opacity-100 focus:opacity-100 hover:scale-150 focus:scale-150 transition-all"
      >
        <InstagramLogo size={20} />
        <span className={`flex flex-row space-x-2 ${!showText && "hidden"}`}>
          <p className="text-sm">/</p>
          <p className="text-sm">sr_pumpkin_</p>
        </span>
      </Link>
    </div>
  );
}

export default Instagram;
