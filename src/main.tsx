import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Logoaplication from './logoaplication.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Logoaplication />
  </StrictMode>,
)
