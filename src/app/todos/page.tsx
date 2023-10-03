import TodoList from "@/components/todo_component";
import { serverApi } from "@/utils/server_api";

async function fetchToDos() {
  const api = await serverApi();
  return api.todos.getTodos();
}

export default async function Todos() {
  const todos = await fetchToDos();
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
}
