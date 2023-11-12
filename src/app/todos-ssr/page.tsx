import AddTodo from "@/components/todo_list/add_todo";
import TodoListSSR from "@/components/todo_list/todo_list_ssr";
import { Suspense } from "react";

export default async function Todos() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-3xl">Todo List</h1>
      <AddTodo />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <TodoListSSR />
      {/* </Suspense> */}
    </div>
  );
}
