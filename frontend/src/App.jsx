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
import AddPatient from './pages/AddPatient'
import CreateDiet from './pages/CreateDiet'
import Pantry from './pages/Pantry'
import TrackMeals from './pages/TrackMeals'
import Morning from './pages/Morning'
import Evening from './pages/Evening'
import Night from './pages/Night'
import PantryLogin from './pages/PantryLogin'
import PantryDashboard from './pages/PantryDashboard'
import MorningShift from './pages/MorningShift'
import EveningShift from './pages/EveningShift'
import NightShift from './pages/NightShift'
import CreateDelivery from './pages/CreateDelivery'

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
    {
      path:'/AddPatient',
      element : <AddPatient/>
    },
    {
      path:'/CreateDiet',
      element : <CreateDiet/>
    },
    {
      path:'/PantryBox',
      element : <Pantry/>
    },
    {
      path:'/TrackMeals',
      element : <TrackMeals/>
    },
    {
      path:'/Morning',
      element : <Morning/>
    },
    {
      path:'/Evening',
      element : <Evening/>
    },
    {
      path:'/Night',
      element : <Night/>
    },
    {
      path:'/PantryLogin',
      element : <PantryLogin/>
    },
    {
      path:'/PantryDashboard',
      element : <PantryDashboard/>
    },
    {
      path:'/MorningShift',
      element : <MorningShift/>
    },
    {
      path:'/EveningShift',
      element : <EveningShift/>
    },
    {
      path:'/NightShift',
      element : <NightShift/>
    },
    {
      path:'CreateDelivery',
      element : <CreateDelivery/>
    },
   
    
  ])
  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
