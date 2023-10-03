"use client";

import { RouterOutputs, api } from "@/utils/api";

type TodoProps = {
  todos: RouterOutputs["todos"]["getTodos"];
};

export default function TodoList({ todos }: TodoProps) {
  const query = api.todos.getTodos.useQuery(undefined, {
    initialData: todos,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (query.isLoading) return <div>Loading...</div>;

  if (query.isError) return <div>Error: {query.error.message}</div>;

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ul>
    </div>
  );
}
