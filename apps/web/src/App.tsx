import {
   Outlet,
   RootRoute,
   Route,
   Router,
   RouterProvider
} from '@tanstack/react-router'
import { Example } from './pages/Example/Example'
import { Home } from './pages/Home/Home'

const rootRoute = new RootRoute({ component: () => <Outlet /> })
const home = new Route({
   getParentRoute: () => rootRoute,
   path: '/',
   component: Home,
})

const exampleRoute = new Route({
   getParentRoute: () => rootRoute,
   path: '/example',
   component: Example,
 })

const routeTree = rootRoute.addChildren([home, exampleRoute])
const router = new Router({ routeTree })

export const App = () => (<RouterProvider router={router} />)

declare module '@tanstack/react-router' {
   interface Register {
     router: typeof router
   }
 }
