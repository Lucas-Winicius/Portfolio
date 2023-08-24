import Title from "@/components/Title";
import SendMessage from "./SendMessage";

function Contact() {
  return (
    <div className="h-screen">
      <Title title="Contato" className="text-2xl relative top-7 left-7" />
      <div className="h-full w-full flex justify-center items-center">
        <SendMessage />
      </div>
    </div>
  );
}

export default Contact;
