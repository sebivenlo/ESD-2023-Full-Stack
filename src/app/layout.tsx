import "@/styles/globals.css";
import { TRPCReactProvider } from "@/utils/trpc/client";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "ESDE Web Dev Workshop",
  description: "this is a workshop for modern web development using Next.js",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-end pr-8 pt-4">
          <Link href={`/`}>Back to main page</Link>
        </div>
        <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
