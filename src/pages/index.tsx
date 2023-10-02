import { api } from "@/utils/api";
import Head from "next/head";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>ESDE - NextJS Workshop</title>
        <meta name="description" content="TODO:" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col items-center justify-center">
        <div className="">
          <h1 className="text-3xl">ESDE - NextJS Workshop</h1>
          <p className="text-lg">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
        </div>
      </main>
    </>
  );
}
