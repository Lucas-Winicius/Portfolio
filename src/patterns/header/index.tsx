"use client";
import * as H from "./styled";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.svg";

export default function Header() {
  return (
    <H.header>
      <Image src={Logo} alt="Logo" width={100} />
      <H.nav>
        <ul>
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Contato</Link>
          </li>
        </ul>
      </H.nav>
    </H.header>
  );
}
