import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home a={1} b={2} />
  </React.StrictMode>,
)
