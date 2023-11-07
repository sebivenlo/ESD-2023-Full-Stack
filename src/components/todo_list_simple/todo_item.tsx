import { api } from "@/utils/trpc/client";
import { RouterOutputs } from "@/utils/trpc/shared";
import { optimisticTodoPrefix } from "./add_todo";
import Button from "../button";

type TodoItemProps = {
  todo: RouterOutputs["todos"]["getTodos"][0];
};

export default function TodoItem({ todo }: TodoItemProps) {
  const { mutate: updateMutation } = useUpdateMutation();

  const { mutate: deleteMutation } = useDeleteMutation();

  return (
    <li className="flex items-center gap-2" key={todo.id}>
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={(e) => {
          updateMutation({
            id: todo.id,
            isComplete: e.target.checked,
          });
        }}
      />
      <span className={`w-96 ${todo.isComplete ? "text-gray-400" : ""}`}>
        {todo.description}
      </span>
      <Button
        className="px-4 py-1 disabled:opacity-50"
        disabled={todo.id.startsWith(optimisticTodoPrefix)}
        onClick={() => {
          deleteMutation({
            id: todo.id,
          });
        }}
      >
        Delete
      </Button>
    </li>
  );
}

function useUpdateMutation() {
  const trpcContext = api.useContext();

  return api.todos.updateTodo.useMutation({
    onError: (error) => {
      alert(error.message);
    },
    onSettled() {
      trpcContext.todos.getTodos.invalidate();
    },
  });
}

function useDeleteMutation() {
  const trpcContext = api.useContext();

  return api.todos.deleteTodo.useMutation({
    onError: (error) => {
      alert(error.message);
    },
    onSettled() {
      trpcContext.todos.getTodos.invalidate();
    },
  });
}
