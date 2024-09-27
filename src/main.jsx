import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './Example11'
import './index.css'
import Example from './Example11'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Example/>
    <App/>
  </StrictMode>,
)
