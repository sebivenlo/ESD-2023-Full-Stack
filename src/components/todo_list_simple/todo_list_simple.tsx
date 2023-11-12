"use client";

import AddTodoSimple from "./add_todo_simple";
import TodoItemSimple from "./todo_item_simple";
import { api } from "@/utils/trpc/client";
import { RouterOutputs } from "@/utils/trpc/shared";

type TodoProps = {
  todos: RouterOutputs["todos"]["getTodos"];
};

export default function TodoListSimple({ todos: initialTodos }: TodoProps) {
  const query = useGetTodos(initialTodos);

  if (query.isLoading) return <div>Loading...</div>;

  if (query.isError) return <div>Error: {query.error.message}</div>;

  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-3xl">Todo List</h1>
      <AddTodoSimple />
      <ul className="flex flex-col gap-2">
        {query.data.map((todo) => (
          <TodoItemSimple key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
function useGetTodos(todos: TodoProps["todos"]) {
  return api.todos.getTodos.useQuery(undefined, {
    initialData: todos,
  });
}
