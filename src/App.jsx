import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Banner from './Components/Cards/Banner'
import Home from './Components/Home'
import StatePage from './Components/Pages/StatePage'

function App() {
  
  return (
    <>
      <Navbar/>
      {/* <Banner/>
      <Home/> */}
      <StatePage/>
      <Footer/>
    </>
  )
}

export default App
