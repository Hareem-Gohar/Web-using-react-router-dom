import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <div className="w-full max-w-6xl px-10 flex justify-center items-center mx-auto">
          <Outlet />
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App