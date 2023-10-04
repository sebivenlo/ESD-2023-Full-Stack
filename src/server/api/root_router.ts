import { exampleRouter } from "@/server/api/routers/example";
import { createTRPCRouter } from "@/server/api/trpc";
import { todoRouter } from "./routers/todo_router";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  todos: todoRouter,
});

export type AppRouter = typeof appRouter;
