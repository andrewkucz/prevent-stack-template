import { PrismaClient } from '@prisma/client'
import type { inferAsyncReturnType } from '@trpc/server'
import type { CreateExpressContextOptions } from '@trpc/server/adapters/express'

import { userRouter } from '~/api/users/router'
import { router } from '~/trpc/trpc'


export const appRouter = router({
   user: userRouter
})

const prisma = new PrismaClient();

export const createContext = ({ req, res }: CreateExpressContextOptions) => ({
   req,
   res,
   prisma
})

export type AppRouter = typeof appRouter
export type Context = inferAsyncReturnType<typeof createContext>