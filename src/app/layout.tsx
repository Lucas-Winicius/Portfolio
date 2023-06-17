"use client"
import StyledComponentsRegistry from "../lib/registry";
import "@/styles/globals.css";
import "../styles/Globals";


 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
