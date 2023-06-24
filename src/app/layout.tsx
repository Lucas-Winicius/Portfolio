import { AppProvider } from "@/provider";
import { Montserrat } from "next/font/google";
import Header from "@/patterns/header/index";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Lucas Winicius",
  description: ""
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AppProvider>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
