import { appRouter } from "@/server/api/root";
import { createInnerTRPCContext } from "@/server/api/trpc";

/**
 * Server API
 *
 * This can be used to call tRPC procedures from the server. This is useful for things like
 * pre-rendering pages that need data from the database.
 */
export const serverApi = async () => {
  // Async because you may add stuff like server side user authentication.
  return appRouter.createCaller(
    createInnerTRPCContext({
      session: null,
    })
  );
};