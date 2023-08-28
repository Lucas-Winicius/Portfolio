"use client";
import Loading from "@/components/Loading";
import {
  Article,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

function ViewAbout() {
  const [about, setAbout] = useState<any>();

  useEffect(() => {
    axios
      .get("/api/about")
      .then((data) => data.data)
      .then((response) => setAbout(response))
      .catch(() => setAbout({}));
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    setAbout({
      ...about,
      [target.name]: target.value,
    });
    console.log(about);
  };

  const updateAbout = () => {
    axios.put("/api/about", about).then(() => document.location.reload());
  };

  const saveAbout = () => {
    axios.post("/api/about", about).then(() => document.location.reload());
  };

  if (about === undefined) return <Loading />;

  if (about.id)
    return (
      <section className="w-full h-full flex justify-center items-center flex-col space-y-4">
        <div className="flex flex-row space-x-2">
          <Article size={20} />
          <p></p>
          <textarea
            name="aboutText"
            onChange={handleChange}
            rows={1}
            placeholder="Sobre"
            value={about.aboutText}
            className="bg-transparent"
          />
        </div>
        <div className="flex flex-row space-x-2">
          <InstagramLogo size={20} />
          <p>/</p>
          <input
            type="text"
            name="instagram"
            onChange={handleChange}
            placeholder="Instagram"
            value={about.instagram}
            className="bg-transparent"
          />
        </div>
        <div className="flex flex-row space-x-2">
          <GithubLogo size={20} />
          <p>/</p>
          <input
            type="text"
            name="github"
            onChange={handleChange}
            placeholder="GitHub"
            value={about.github}
            className="bg-transparent"
          />
        </div>
        <div className="flex flex-row space-x-2">
          <LinkedinLogo size={20} />
          <p>/</p>
          <input
            type="text"
            name="linkedin"
            onChange={handleChange}
            placeholder="Linkedin"
            value={about.linkedin}
            className="bg-transparent"
          />
        </div>
        <button
          onClick={updateAbout}
          className="bg-green-600 hover:bg-green-700 focus:bg-green-700 py-2 px-6 font-bold rounded"
        >
          Salvar
        </button>
      </section>
    );

  return (
    <section className="w-full h-full flex justify-center items-center flex-col space-y-4">
      <div className="flex flex-row space-x-2">
        <Article size={20} />
        <p></p>
        <textarea
          name="aboutText"
          onChange={handleChange}
          rows={1}
          placeholder="Sobre"
          value={about.aboutText}
          className="bg-transparent"
        />
      </div>
      <div className="flex flex-row space-x-2">
        <InstagramLogo size={20} />
        <p>/</p>
        <input
          type="text"
          name="instagram"
          onChange={handleChange}
          placeholder="Instagram"
          value={about.instagram}
          className="bg-transparent"
        />
      </div>
      <div className="flex flex-row space-x-2">
        <GithubLogo size={20} />
        <p>/</p>
        <input
          type="text"
          name="github"
          onChange={handleChange}
          placeholder="GitHub"
          value={about.github}
          className="bg-transparent"
        />
      </div>
      <div className="flex flex-row space-x-2">
        <LinkedinLogo size={20} />
        <p>/</p>
        <input
          type="text"
          name="linkedin"
          onChange={handleChange}
          placeholder="Linkedin"
          value={about.linkedin}
          className="bg-transparent"
        />
      </div>
      <button
        onClick={saveAbout}
        className="bg-green-600 hover:bg-green-700 focus:bg-green-700 py-2 px-6 font-bold rounded"
      >
        Salvar
      </button>
    </section>
  );
}

export default ViewAbout;
