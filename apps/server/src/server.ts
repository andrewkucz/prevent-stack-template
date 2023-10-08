import 'dotenv/config'

import cookieParser from 'cookie-parser'
import express from 'express'
import http from 'http'
import { join, resolve } from 'path'

import env from '~/env'
import { trpcMiddleware } from '~/trpc/middleware'

const app = express()
const server = http.createServer(app)
server.listen(env.PORT, () => console.log(`🚀 Server has launched`))

app.use(cookieParser())
app.use('/trpc', trpcMiddleware)

// serve build files
if (env.isProd) {
  const buildPath = resolve(__dirname, '../../../../web/dist')
  app.use(express.static(buildPath))
  app.get('*', (_, res) => res.sendFile(join(buildPath, 'index.html')))
}
