"use client";
import Image from "next/image";
import Link from "next/link";
import "@/styles/Header.css";
import { GithubLogo } from '@phosphor-icons/react'

export default function Header() {
  return (
    <header className="flex justify-between p-2 px-7">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={120} height={35.3} />
      </Link>

      <ul className="flex space-x-7">
        <li>
          <Link className="navLink pb-1" href="/">
            Início
          </Link>
        </li>
        <li>
          <Link className="navLink pb-1" href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="navLink pb-1" href="/projects">
            Projetos
          </Link>
        </li>
      </ul>
    </header>
  );
}
