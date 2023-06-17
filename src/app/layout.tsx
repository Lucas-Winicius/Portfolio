"use client"
import { StyledProvider } from '@/provider/styled-components';
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
        <StyledProvider>
          {children}
        </StyledProvider>
      </body>
    </html>
  );
}
