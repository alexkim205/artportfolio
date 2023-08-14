import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {resetContext} from "kea";
import posthog from 'posthog-js'

resetContext({
    plugins: [],
})

posthog.init('phc_xr7rXLgAonX1dt5xwANhxzla7a5Uj5gWMkfGuoj8eui', { api_host: 'https://app.posthog.com',
    autocapture: false,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
