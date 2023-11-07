"use client";

import { api } from "@/utils/trpc/client";
import { RouterOutputs } from "@/utils/trpc/shared";
import { useState } from "react";
import Button from "../button";

type AddTodoProps = {};

export default function AddTodo({}: AddTodoProps) {
  const [description, setDescription] = useState("");

  const mutate = useTodoMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({ description });
    setDescription("");
  };

  return (
    <>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <input
          className="bg-primary-background border-primary-foreground w-64 rounded-md border-2 p-1"
          key="description"
          type="text"
          placeholder="Todo..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit" className="px-4 py-1">
          Add
        </Button>
      </form>
    </>
  );
}

export const optimisticTodoPrefix = "optimisticId";
const optimisticTodo: (
  description: string,
) => RouterOutputs["todos"]["getTodos"][0] = (description) => ({
  id: `${optimisticTodoPrefix}-${Math.random().toString()}`,
  description: description,
  createdAt: new Date(),
  updatedAt: new Date(),
  isComplete: false,
});

function useTodoMutation() {
  const trpcContext = api.useContext();

  const { mutate } = api.todos.addTodo.useMutation({
    // Runs on error
    onError: (error) => {
      alert(error.message);
    },
    // Runs on success or error
    onSettled() {
      trpcContext.todos.getTodos.invalidate(undefined);
    },
    // Runs when the mutation is called
    onMutate(variables) {
      trpcContext.todos.getTodos.cancel();
      trpcContext.todos.getTodos.setData(undefined, (prev) => {
        return [optimisticTodo(variables.description), ...(prev ?? [])];
      });
    },
  });

  return mutate;
}
