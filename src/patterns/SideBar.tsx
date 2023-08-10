import { ArrowSquareOut } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SideBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const changeMode = (mode: string): void => {
    const params = new URLSearchParams();
    params.set("mode", mode);

    const stringParams = params.toString();

    router.push(pathname + "?" + stringParams);
  };

  return (
    <aside className="h-[calc(100vh-67px)] flex flex-col p-4 justify-between border-r-2 border-zinc-800 w-52">
      <ul className="flex space-y-2 flex-col">
        <li
          className="py-1 hover:bg-zinc-700 px-2 rounded-sm cursor-pointer"
          onClick={() => changeMode("projects")}
        >
          Projetos
        </li>
        <li
          className="py-1 hover:bg-zinc-700 px-2 rounded-sm cursor-pointer"
          onClick={() => changeMode("posts")}
        >
          Postagens
        </li>
        <li
          className="py-1 hover:bg-zinc-700 px-2 rounded-sm cursor-pointer"
          onClick={() => changeMode("technologies")}
        >
          Tecnologias
        </li>
        <li className="py-1 px-2 rounded-sm cursor-pointer flex items-center space-x-2">
          <Link href="/register">Criar Usuario</Link>
          <ArrowSquareOut size={20} />
        </li>
      </ul>
      <div>
        <h1 className="text-center">teste</h1>
      </div>
    </aside>
  );
}

export default SideBar;
