import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'
import Management from './pages/Management'
import Success from './pages/Success'
import ManagerLogin from './pages/ManagerLogin'
import ManagerDashboard from './pages/ManagerDashboard'

function App() {
  const Router = createBrowserRouter([
    {
      path:'/',
      element : <Home/>
    },
    {
      path:'/CreateAccount',
      element : <Management/>
    },
    {
      path:'/Success',
      element : <Success/>
    },
    {
      path:'/ManagerLogin',
      element : <ManagerLogin/>
    },
    {
      path:'/ManagerDashboard',
      element : <ManagerDashboard/>
    },
    
  ])
  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
