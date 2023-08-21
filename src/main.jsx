import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Users } from './components/Users'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Contador value={0} /> */}
    {/* <Listado /> */}
    {/* <ListadoArray /> */}
    <Users />
  </React.StrictMode>
)
