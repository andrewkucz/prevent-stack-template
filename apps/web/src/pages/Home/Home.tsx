
import { Label } from 'ui'
import { trpc } from '~/trpc'

export const Home = () => {
   const { data } = trpc.user.greeting.useQuery()

   return (
      <div className="p-5">
         <Label>Greeting: {data}</Label>
      </div>
   )
}


