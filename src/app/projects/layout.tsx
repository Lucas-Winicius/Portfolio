import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "P",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[calc(100vh-67px)] w-full flex flex-wrap space-y-5 justify-center items-center my-10">
      {children}
    </div>
  );
}
