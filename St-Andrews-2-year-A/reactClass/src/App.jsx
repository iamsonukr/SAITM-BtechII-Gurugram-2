import React from 'react'
import Home from './pages/Home/Home'
import ContactUs from './pages/ContactUs/ContactUs'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <h1>This is App</h1>
      <Navbar/>
      <Home/>
      <ContactUs/>
    </div>
  )
}

export default App