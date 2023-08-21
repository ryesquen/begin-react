import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { UsuariosComponent } from './fetch/UsuariosComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Contador value={0} /> */}
    {/* <Listado /> */}
    {/* <ListadoArray /> */}
    {/* <HooksApp /> */}
    <UsuariosComponent></UsuariosComponent>
  </React.StrictMode>
)
