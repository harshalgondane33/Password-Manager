import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import Manager from './components/Manager'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div  className='min-h-screen flex flex-col '>
      <Navbar/>
      <div className=''>
      <Routes>
        <Route path="/" element={<Manager />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
      <Footer/>
      </div>
    </Router>
  )
}

export default App
