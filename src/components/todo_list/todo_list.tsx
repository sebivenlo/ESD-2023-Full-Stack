"use client";

import AddTodo from "@/components/todo_list/add_todo";
import { RouterOutputs, api } from "@/utils/api";
import TodoItem from "./todo_item";

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
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-3xl">Todo List</h1>
      <AddTodo />
      <ul className="flex flex-col gap-1">
        {query.data.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
