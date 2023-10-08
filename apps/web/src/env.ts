import { cleanEnv, str as string } from 'envalid'
import { loadEnv } from 'vite'

const getEnv = (env: unknown) => cleanEnv(env, {
   MODE: string({
      desc: 'The mode the web is running in',
      example: 'development',
      choices: ['development', 'test', 'production'] as const,
      default: 'development',
      docs: 'https://vitejs.dev/guide/env-and-mode.html',
   }),
})


export const envPlugin = (mode:  string) => {
   const env = loadEnv(mode, process.cwd())
   return {
      name: 'env',
      transform: () => {
         getEnv(env)
      },
   }
}
