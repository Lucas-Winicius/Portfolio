import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-row justify-between items-center py-5 px-10 border-t-2 border-zinc-900">
      <Image src="/logo.svg" alt="Logo" height={80} width={80} className="hidden md:block" />
      <p className="text-sm">
        Copyright &copy; {new Date().getFullYear()} All Rights Reserved by Lucas
        Winicius
      </p>
    </footer>
  );
}

export default Footer;
