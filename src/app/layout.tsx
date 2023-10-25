import "@/styles/globals.css";
import { TRPCReactProvider } from "@/utils/trpc/client";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "ESDE Web Dev Workshop",
  description: "this is a workshop for modern web development using Next.js",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
