import { api } from "@/utils/trpc/client";
import { RouterOutputs } from "@/utils/trpc/shared";
import { optimisticTodoPrefix } from "./add_todo";
import Button from "../button";

type TodoItemProps = {
  todo: RouterOutputs["todos"]["getTodos"][0];
};

export default function TodoItem({ todo }: TodoItemProps) {
  const updateMutation = useUpdateMutation();

  const deleteMutation = useDeleteMutation();

  return (
    <li className="flex items-center gap-2" key={todo.id}>
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={(e) => {
          // TODO: Update isComplete state of todo
        }}
      />
      <span className={`w-96 ${todo.isComplete ? "text-gray-400" : ""}`}>
        {todo.description}
      </span>
      <Button
        className="px-4 py-1 disabled:opacity-50"
        disabled={todo.id.startsWith(optimisticTodoPrefix)}
        onClick={() => {
          // TODO: Delete todo
        }}
      >
        Delete
      </Button>
    </li>
  );
}

function useUpdateMutation() {
  return null as any;
}

function useDeleteMutation() {
  return null as any;
}
