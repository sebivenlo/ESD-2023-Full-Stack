import { api } from "@/utils/trpc/client";
import { optimisticTodo } from "./add_todo";
import { RouterOutputs } from "@/utils/trpc/shared";

type TodoItemProps = {
  todo: RouterOutputs["todos"]["getTodos"][0];
};

export default function TodoItem({ todo }: TodoItemProps) {
  const trpcContext = api.useContext();

  const { mutate: updateMutation } = api.todos.updateTodo.useMutation({
    onError: (error) => {
      trpcContext.todos.getTodos.invalidate();
      alert(error.message);
    },
    onSettled() {
      trpcContext.todos.getTodos.invalidate();
    },
    onMutate(variables) {
      trpcContext.todos.getTodos.cancel();
      trpcContext.todos.getTodos.setData(undefined, (prev) => {
        const newTodos = [...(prev ?? [])];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.id === variables.id,
        );
        if (todoIndex === -1) return prev;
        newTodos[todoIndex] = {
          ...newTodos[todoIndex],
          ...variables,
        };
        return newTodos;
      });
    },
  });

  const { mutate: deleteMutation } = api.todos.deleteTodo.useMutation({
    onError: (error) => {
      trpcContext.todos.getTodos.invalidate();
      alert(error.message);
    },
    onSettled() {
      trpcContext.todos.getTodos.invalidate();
    },
    onMutate(variables) {
      trpcContext.todos.getTodos.cancel();
      trpcContext.todos.getTodos.setData(undefined, (prev) => {
        const newTodos = [...(prev ?? [])];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.id === variables.id,
        );
        if (todoIndex === -1) return prev;
        newTodos.splice(todoIndex, 1);
        return newTodos;
      });
    },
  });

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
      <button
        className="rounded-md bg-gray-800 px-4 py-1 hover:bg-gray-700 disabled:opacity-50"
        disabled={todo.id === optimisticTodo.id}
        onClick={() => {
          deleteMutation({
            id: todo.id,
          });
        }}
      >
        Delete
      </button>
    </li>
  );
}
