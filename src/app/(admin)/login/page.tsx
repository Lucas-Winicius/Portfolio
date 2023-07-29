import FlashMessage from "@/components/FlashMessage";
import Link from "next/link";

export default function Login() {
  return (
    <div>
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <input
                type="text"
                name="nick"
                id="nick"
                placeholder="Nick"
                className="border-b-2 border-pink-600 px-4 py-2 focus:outline-none focus:border-pink-800 w-full"
              />
            </div>

            <div>
              <input
                type="password"
                name="pass"
                id="pass"
                placeholder="Password"
                className="border-b-2 border-pink-600 px-4 py-2 focus:outline-none focus:border-pink-800 w-full"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 focus:bg-pink-700"
          >
            Login
          </button>
        </div>
    </div>
  );
}
