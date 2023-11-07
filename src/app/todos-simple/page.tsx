import TodoList from "@/components/todo_list_simple/todo_list";
import { serverApi } from "@/utils/trpc/server";

async function fetchToDos() {
  return serverApi.todos.getTodos.query();
}

export default async function Todos() {
  const todos = await fetchToDos();
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
}
