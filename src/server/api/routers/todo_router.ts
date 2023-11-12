import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { todos } from "@/server/db/schema";
import { desc, eq } from "drizzle-orm";
import { sleep } from "@/utils/utils";

export const todoRouter = createTRPCRouter({
  getTodos: publicProcedure.query(async ({ ctx }) => {
    await sleep(400);
    const todosResult = await ctx.db
      .select()
      .from(todos)
      .orderBy(desc(todos.createdAt))
      .execute();
    return todosResult;
  }),
  addTodo: publicProcedure
    .input(
      z.object({
        description: z.string().min(1),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      // Endpoint logic
      await ctx.db
        .insert(todos)
        .values({ description: input.description })
        .execute();
    }),
  updateTodo: publicProcedure
    .input(
      z.object({
        id: z.string(),
        description: z.string().min(1).optional(),
        isComplete: z.boolean().optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.db
        .update(todos)
        .set({
          description: input.description,
          isComplete: input.isComplete,
        })
        .where(eq(todos.id, input.id))
        .execute();
    }),
  deleteTodo: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.db.delete(todos).where(eq(todos.id, input.id)).execute();
    }),
});
