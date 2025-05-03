import React from 'react'
import Navbar from './Component/Navbar'
import { Routes,Route, useLocation } from 'react-router-dom'
import Privatejob from './Component/Pages/Privatejob'
import Home from './Component/Pages/Home'
import GovtJobs from './Component/Pages/GovtJobs'
import Login from './Component/Login'

const App = () => {
  const location=useLocation()
  return (
    <div>
      {location.pathname !=='/login' && <Navbar/>}
      <div className="container">     
         <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/govtjobs" element={<GovtJobs/>}/>
        <Route path="/privatejob" element={<Privatejob/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
    </div>

  )
}

export default App
