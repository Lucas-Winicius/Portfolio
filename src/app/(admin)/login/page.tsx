import FlashMessage from "@/components/FlashMessage";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-67px)] flex-col">
      <form className="form-container bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div className="mb-4 bg-transparent">
          <label htmlFor="nick" className="block text-gray-700 text-sm font-bold mb-2 bg-transparent">
            Nick
          </label>
          <input
            type="text"
            name="nick"
            id="nick"
            className="appearance-none border rounded w-full py-2 bg-transparent px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6 bg-transparent">
          <label htmlFor="pass" className="block text-gray-700 text-sm font-bold mb-2 bg-transparent">
            Password
          </label>
          <input
            type="password"
            name="pass"
            id="pass"
            className="appearance-none border rounded w-full py-2 px-3 bg-transparent text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center bg-transparent">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
      <p className="text-slate-50 text-sm mt-4">
        Ainda não tem uma conta?{" "}
        <Link className="text-blue-500 font-bold" href="/new-user">
          Crie uma aqui!
        </Link>
      </p>
      <FlashMessage
      message="Antes de prosseguir precisamos validar sua identidade"
      color="blue"
      />
    </div>
  );
}
