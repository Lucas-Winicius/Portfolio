import Image from "next/image";
import * as L from "./styled";
import arrow from "../../../public/arrow.svg";

export default function Landing() {
  return (
    <L.landing>
      <L.primary>
        <p>Olá, Me chamo Lucas Winicius</p>
        <h1>Desenvolvedor Fullstack</h1>
      </L.primary>
      <L.arrow>
        <p>Vamos começar</p>
        <Image src={arrow} alt="Arrow" />
      </L.arrow>
    </L.landing>
  );
}
