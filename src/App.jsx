import React from 'react'
import './App.css'
import { Navbar , Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  


  return (
       <div className="App relative flex flex-col min-h-screen w-full bg-zinc-900  text-white">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow container mx-auto">
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default App
