import TRPCClientExample from "@/components/trpc_client_example";
import { serverApi } from "@/utils/trpc/server";
import Link from "next/link";

async function fetchDataOnServer() {
  return serverApi.example.hello.query({
    text: "from trpc. This is server side rendering!",
  });
}

export default async function TRPCExample() {
  const data = await fetchDataOnServer();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 ">
      <h1 className="text-4xl font-bold">{data}</h1>
      <TRPCClientExample />
      <Link href={`/`}>Go back to main page</Link>
    </div>
  );
}
