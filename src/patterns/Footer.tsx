import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-5 px-10 border-t-2 border-zinc-900">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row justify-between">
          <div className="w-1/2 space-y-1">
            <h2 className="font-extrabold text-xl">Mais</h2>
            <p className="text-sm">
              Agradeço por ter chegado até aqui. Caso queira saber mais sobre
              mim ou sobre o que estou fazendo, acesse meu blog. Caso você tenha
              me enviado uma mensagem, aguarde que irei responder o mais breve
              possível, e certifique-se de que tenha colocado o email correto.
              Caso tenha encontrado algum erro, bug ou simplesmente tenha uma
              sugestão, basta me enviar uma mensagem utilizando o formulário da
              área de contato.
            </p>
          </div>
          <div className="">
            <h2 className="font-extrabold text-xl">Links</h2>
            <ul>
              <li><Link className="text-sm" href="/">Início</Link></li>
              <li><Link className="text-sm" href="/blog">Blog</Link></li>
              <li><Link className="text-sm" href="/projects">Projetos</Link></li>
              <li><Link className="text-sm" href="/dashboard">Dashboard</Link></li>
            </ul>
          </div>
        </div>
        <hr className="border-zinc-800" />
        <div className="flex flex-row justify-between">
          <Image src="/logo.svg" alt="Logo" height={80} width={80} />
          <p>Copyright &copy; 2023 All Rights Reserved by Lucas Winicius.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
