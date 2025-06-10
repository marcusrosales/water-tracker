import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 id='MainH1'>Water Bottle Tracker</h1>
    <App />
  </StrictMode>,
)
