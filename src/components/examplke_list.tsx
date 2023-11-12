import Link from "next/link";

type ExampleListProps = {};

export default function ExamplesList({}: ExampleListProps) {
  return (
    <>
      <ul className="flex flex-col">
        <li>
          <Link href={`/examples/trpc`} className="hover:text-gray-400">
            Simple TRPC data fetching example
          </Link>
        </li>
        <li>
          <Link href={`/todos`} className="hover:text-gray-400">
            Advanced TODO-App example with optimistic updates
          </Link>
        </li>
      </ul>
    </>
  );
}
