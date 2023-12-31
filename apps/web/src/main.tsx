import './styles/global.css'

import ReactDOM from 'react-dom/client'
import { App } from './App'

import { Providers } from './components/Providers'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <Providers>
      <App />
   </Providers>
)
