import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/navbar.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/login.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Navbar></Navbar>
  <Login></Login>
  <Footer></Footer>
  </React.StrictMode>,
)
