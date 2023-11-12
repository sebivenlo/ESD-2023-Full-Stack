"use client";

import { api } from "@/utils/trpc/client";
import { RouterOutputs } from "@/utils/trpc/shared";
import { useState } from "react";
import Button from "../button";

type AddTodoProps = {};

export default function AddTodo({}: AddTodoProps) {
  const [description, setDescription] = useState("");

  const addTodoMutation = useTodoMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // TODO: Add todo and reset form
  };

  return (
    <>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <input
          className="w-64 rounded-md border-2 border-primary-foreground bg-primary-background p-1"
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
  return null as any;
}
