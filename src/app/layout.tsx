import Provider from "@/components/provider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "ESDE Web Dev Workshop",
  description: "this is a workshop for modern web development using Next.js",
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
