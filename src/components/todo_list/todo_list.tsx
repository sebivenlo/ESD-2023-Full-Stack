"use client";

import { api } from "@/utils/trpc/client";
import { RouterOutputs } from "@/utils/trpc/shared";
import TodoItem from "./todo_item";

type TodoProps = {};

export default function TodoList({}: TodoProps) {
  // TODO: Implement query function and handle loading and error states
  const todosQuery = useTodosQuery();

  return (
    <>
      <ul className="flex flex-col gap-2">
        {todosQuery.data.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

function useTodosQuery() {
  return null as any;
}
