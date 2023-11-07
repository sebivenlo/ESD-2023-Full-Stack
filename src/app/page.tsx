import ExamplesList from "@/components/examplke_list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 ">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <p className="text-2xl">Welcome to the Next.js - tRPC Workshop</p>
      <div>
        <p className="text-xl font-bold">
          List of pages with different code examples
        </p>
        <ExamplesList />
      </div>
    </main>
  );
}
