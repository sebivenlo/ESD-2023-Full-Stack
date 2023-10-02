import TRPCClientExample from "@/components/trpc_client_example";
import { serverApi } from "@/utils/server_api";
import Link from "next/link";

async function fetchDataOnServer() {
  const api = await serverApi();
  return api.example.hello({
    text: "from trpc. This is server side rendering!",
  });
}

export default async function TRPCExample() {
  const data = await fetchDataOnServer();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 ">
      <h1 className="text-4xl font-bold">{data}</h1>
      <TRPCClientExample />
      <Link href={`/examples/trpc`}>Go back to main page</Link>
    </div>
  );
}
