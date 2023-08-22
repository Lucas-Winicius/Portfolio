import { ArrowSquareOut } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SideBar({ userName }: { userName: string }) {
  const mode = useSearchParams().get("mode");
  const pathname = usePathname();
  const router = useRouter();

  const changeMode = (mode: string): void => {
    const params = new URLSearchParams();
    params.set("mode", mode);

    const stringParams = params.toString();

    router.push(pathname + "?" + stringParams);
  };

  return (
    <aside className="h-[calc(100vh-67px)] flex flex-col py-4 justify-between border-r-2 border-zinc-800 w-52">
      <ul className="flex space-y-2 flex-col">
        <li>
          <button
            onClick={() => changeMode("projects")}
            className={`py-1 hover:bg-zinc-900 transition px-4 cursor-pointer w-full text-left ${
              mode === "projects" ? "bg-zinc-800 bg-opacity-80" : ""
            }`}
          >
            Projetos
          </button>
        </li>
        <li>
          <button
            onClick={() => changeMode("posts")}
            className={`py-1 hover:bg-zinc-900 px-4 cursor-pointer w-full text-left ${
              mode === "posts" ? "bg-zinc-800 bg-opacity-80" : ""
            }`}
          >
            Postagens
          </button>
        </li>
        <li>
          <button
            className={`py-1 hover:bg-zinc-900 px-4 cursor-pointer w-full text-left ${
              mode === "messages" ? "bg-zinc-800 bg-opacity-80" : ""
            }`}
            onClick={() => changeMode("messages")}
          >
            Mensagens
          </button>
        </li>
        <li>
          <button
            className={`py-1 hover:bg-zinc-900 px-4 cursor-pointer w-full text-left ${
              mode === "about" ? "bg-zinc-800 bg-opacity-80" : ""
            }`}
            onClick={() => changeMode("about")}
          >
            Sobre
          </button>
        </li>
        <li>
          <button
            className={`py-1 hover:bg-zinc-900 px-4 cursor-pointer w-full text-left ${
              mode === "technologies" ? "bg-zinc-800 bg-opacity-80" : ""
            }`}
            onClick={() => changeMode("technologies")}
          >
            Tecnologias
          </button>
        </li>
        <li className="py-1 px-4 cursor-pointer flex items-center space-x-2">
          <Link href="/register">Criar Usuario</Link>
          <ArrowSquareOut size={20} />
        </li>
      </ul>
      <div>
        <h1 className="text-center">{userName}</h1>
      </div>
    </aside>
  );
}

export default SideBar;
