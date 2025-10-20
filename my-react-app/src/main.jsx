import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' // main javascript file, jsx is javascript (XML) that allows you to work with HTML in javascript

// creates a root element and includes our app component
createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <App /> 
  </StrictMode>,
)
