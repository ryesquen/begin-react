import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './components/Hooks/HooksApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Contador value={0} /> */}
    {/* <Listado /> */}
    {/* <ListadoArray /> */}
    <HooksApp />
  </React.StrictMode>
)
