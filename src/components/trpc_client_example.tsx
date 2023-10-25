"use client";

import { api } from "@/utils/trpc/client";

export default function TRPCClientExample() {
  const query = api.example.hello.useQuery({
    text: "from trpc. This is client side rendering!",
  });

  if (query.isLoading) return <div>Loading...</div>;

  if (query.isError) return <div>Error: {query.error.message}</div>;

  return <p className="text-3xl">{query.data}</p>;
}
