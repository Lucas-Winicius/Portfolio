import Loading from "@/components/Loading";
import Message from "@/components/Messages";
import axios from "axios";
import { useEffect, useState } from "react";

interface MessageType {
  id: string;
  email: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

function ViewMessages() {
  const [messages, setMessages] = useState<MessageType[]>();

  useEffect(() => {
    axios
      .get("/api/messages")
      .then((data) => data.data)
      .then((response) => setMessages(response));
  }, []);

  if (messages === undefined) return <Loading />;

  if (!messages.length)
    return (
      <div className="h-full w-full flex items-center justify-center">
        <p className="text-xl font-extrabold">Nenhuma mensagem foi enviada</p>
      </div>
    );

  return (
    <div className="flex flex-col w-full space-y-7 mx-5">
      {messages.map((message, id) => (
        <Message data={message} key={id} />
      ))}
    </div>
  );
}

export default ViewMessages;
