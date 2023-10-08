import { initTRPC } from '@trpc/server'

import { type Context } from './router'

const t = initTRPC.context<Context>().create()

export const publicProcedure = t.procedure

export const { middleware, router } = t
