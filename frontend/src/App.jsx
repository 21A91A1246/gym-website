import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/home'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
       <Home/>
      <Footer/>
    </>
  )
}

export default App
