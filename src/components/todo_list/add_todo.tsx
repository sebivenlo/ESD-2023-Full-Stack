"use client";

import { RouterOutputs, api } from "@/utils/api";
import { useState } from "react";

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
          className="rounded-md bg-gray-800 p-1"
          key="description"
          type="text"
          placeholder="Todo..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-md bg-gray-800 px-4 py-1 hover:bg-gray-700"
        >
          Add
        </button>
      </form>
    </>
  );
}

export const optimisticTodo: RouterOutputs["todos"]["getTodos"][0] = {
  id: "optimistic_id",
  description: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  isComplete: false,
};

function useTodoMutation() {
  const trpcContext = api.useContext();

  const { mutate } = api.todos.addTodo.useMutation({
    // Runs on error
    onError: (error) => {
      trpcContext.todos.getTodos.invalidate();
      alert(error.message);
    },
    // Runs on success or error
    onSettled() {
      trpcContext.todos.getTodos.invalidate();
    },
    // Runs when the mutation is called
    onMutate(variables) {
      trpcContext.todos.getTodos.cancel();
      trpcContext.todos.getTodos.setData(undefined, (prev) => {
        return [
          {
            ...optimisticTodo,
            description: variables.description,
          },
          ...(prev ?? []),
        ];
      });
    },
  });

  return mutate;
}
