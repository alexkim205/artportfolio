import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {resetContext} from "kea";

resetContext({
    plugins: [],
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
