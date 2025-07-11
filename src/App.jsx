import './App.css'
import { Router,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Banner from './Components/Cards/Banner'
import { Outlet } from 'react-router-dom'
import WelcomeAnimation from './Components/Pages/Animation'

function App() {
  
  
  return (
    <>
      <Navbar/>
      <WelcomeAnimation/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App
