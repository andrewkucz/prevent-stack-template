import { publicProcedure, router } from "~/trpc/trpc";


export const userRouter = router({
  greeting: publicProcedure.query(() => 'hello tRPC v10!'),
})