import AddTodo from "@/components/todo_list/add_todo";
import TodoList from "@/components/todo_list/todo_list";
import { serverApi } from "@/utils/trpc/server";

export default async function Todos() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-3xl">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}
