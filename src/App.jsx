import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './component/Navbar'
import Navbar from './component/Navbar'
import Home from './Home'
import { About } from './component/About'
import { Service } from './component/Service'
import {Doctor} from './component/Doctor'
import{Appointment} from './component/Appointment'
import{Blog} from './component/Blog'
import{Footer} from './component/Footer'
import {Preloader} from './component/Preloader'


  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Preloader />
  <Navbar /> 
  <Home />
  <About />
  <Service />
  <Doctor />
  <Appointment />
  <Blog />
  <Footer/>
  

      
    </>
  )
}

export default App
