import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './Components/About'
import { Skills } from './Components/Skills'
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Components/Home/Home'


function App() {

  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<h1 className='text-6xl text-center my-60 font-bold'>Page Nhi Mila<br />🤦‍♂️🤦‍♀️😜😜😁😁<br />(Page Not Found)</h1>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
