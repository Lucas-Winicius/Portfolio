import Title from "@/components/Title";
import SendMessage from "./SendMessage";
import GitHub from "@/components/GitHub";
import Linkedin from "@/components/Linkedin";
import Instagram from "@/components/Instagram";

function Contact() {
  return (
    <section className="h-screen">
      <Title title="Contato" className="text-2xl relative top-14 left-7" />
      <div className="h-full w-full flex justify-evenly items-center">
        <article className="w-1/4 space-y-3">
          <p>
            Estou ansioso para ouvir suas ideias e necessidades. Fique à vontade
            para entrar em contato comigo. Se você tiver alguma pergunta ou
            proposta, estou aqui para responder prontamente. Vamos colaborar e
            transformar sua visão em realidade!
          </p>
          <div className="flex flex-row justify-around">
            <GitHub />
            <Linkedin />
            <Instagram />
          </div>
        </article>
        <SendMessage />
      </div>
    </section>
  );
}

export default Contact;
