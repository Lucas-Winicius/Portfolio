import formatDateToNow from "@/lib/formatDate";
import { Trash } from "@phosphor-icons/react";
import axios from "axios";
import Link from "next/link";

interface MessageType {
  id: string;
  email: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

function Message({ data }: { data: MessageType }) {
  const deleteMessage = () => {
    axios
      .delete(`/api/messages?id=${data.id}`)
      .then(() => document.location.reload());
  };

  return (
    <div className="space-y-5">
      <h1 className="text-center text-xl font-bold">{data.title}</h1>
      <p>{data.content}</p>
      <div className="flex justify-between items-center">
        <p>
          Criado {formatDateToNow(data.createdAt)} por{" "}
          <Link href={`mailto:${data.email}`} className="text-blue-500 font-semibold">{data.email}</Link>
        </p>
        <button onClick={deleteMessage} className="flex items-center space-x-3 bg-red-600 py-2 px-3 rounded cursor-pointer hover:bg-red-700 focus:bg-red-700">
          <p>Apagar</p>
          <Trash size={16} />
        </button>
      </div>
      <hr className="border-neutral-800" />
    </div>
  );
}

export default Message;
