import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './Components/About-Us/AboutUs.jsx'
import ContactUs from './Components/Contact-Us/ContactUs.jsx'
import Home from './Components/Home/Home.jsx'
import Github from './Components/Github/Github.jsx'
import User from './Components/User/User.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/aboutUs',
        element: <AboutUs />
      },
      {
        path:'/contactUs',
        element: <ContactUs />
      },
      {
        path:'/github',
        element: <Github />
      },
      {
        path:'user/:userid',
        element: <User />
      }
      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
