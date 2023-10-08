import { createExpressMiddleware } from '@trpc/server/adapters/express'
import { createContext, appRouter as router } from './router'


export const trpcMiddleware = createExpressMiddleware({
   router,
   createContext,
})
