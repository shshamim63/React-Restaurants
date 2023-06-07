import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.scss'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
