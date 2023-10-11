import React from 'react'
import ReactDOM from 'react-dom/client'
import NotesContext from './context/NotesContext.jsx';
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotesContext>
       <App />
    </NotesContext>
  
  </React.StrictMode>,
)