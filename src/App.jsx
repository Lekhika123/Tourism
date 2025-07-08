import './App.css'
import { Router,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Banner from './Components/Cards/Banner'
import { Outlet } from 'react-router-dom'

function App() {
  
  
  return (
    <>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App
