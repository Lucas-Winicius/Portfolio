import Title from "@/components/Title";
import Image from "next/image";

function About() {
  return (
    <section className="h-screen">
      <Title title="Sobre Mim" className="text-2xl relative top-14 left-7" />
      <article className="flex flex-col md:flex-row justify-center items-center h-full space-y-10 md:space-x-10 md:space-y-0">
        <section className="w-full md:w-4/12 text-lg">
          <p className="px-7 md:px-0">
            Olá, meu nome é Lucas Winicius. Atualmente, estou focado no estudo
            do <strong>backend</strong>. Desde 2021, venho me aprofundando em
            tecnologias como <strong>JavaScript</strong>, <strong>HTML</strong>{" "}
            e <strong>CSS</strong>. No final de 2021, dei início aos meus
            estudos em frameworks como <strong>Next.js</strong> e{" "}
            <strong>Nuxt.js</strong>. Agora, em 2023, estou entusiasmado por ter
            mergulhado no mundo do <strong>backend</strong>.
          </p>
        </section>
        <aside className="flex-shrink-0">
          <Image
            src="https://avatars.githubusercontent.com/u/70043649?v=4"
            alt="Imagem de perfil do GitHub"
            height={250}
            width={250}
            className="rounded-full"
          />
        </aside>
      </article>
    </section>
  );
}

export default About;
