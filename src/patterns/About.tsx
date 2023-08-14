import Title from "@/components/Title";
import Image from "next/image";

function About() {
  return (
    <div className="h-screen">
      <Title title="Sobre Mim" className="text-2xl relative top-14 left-7" />
      <div className="flex justify-center items-center h-full space-x-10">
        <p className="w-4/12 text-lg">
          Olá, Me chamo Lucas Winicius e atualmente estou estudando{" "}
          <strong>backend</strong>. Desde 2021, venho estudando tecnologias como{" "}
          <strong>JavaScript</strong>, <strong>HTML</strong> e{" "}
          <strong>CSS</strong>. Por volta do final de 2021, iniciei meus estudos
          em frameworks como <strong>Next.js</strong> e <strong>Nuxt.js</strong>.
          Ao fim de 2022, pude finalmente começar meus estudos em{" "}
          <strong>backend</strong>.
        </p>
        <Image
          src="https://avatars.githubusercontent.com/u/70043649?v=4"
          alt="GitHub profile image"
          height={250}
          width={250}
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default About;
