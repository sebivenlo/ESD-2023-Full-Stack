import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 ">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <p className="text-2xl">Argus</p>
      <Link href={`/examples/trpc`}>Go to TRPC example</Link>
      <Link href={`/todos`}>Go to TODO example</Link>
    </main>
  );
}
