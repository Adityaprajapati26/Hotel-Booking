import React from 'react'

import { Route,Routes } from 'react-router-dom'
import Room from '../Admin/Room'
import Login from '../Auth/Login'
import Sign from '../Auth/Signup'
import Hotel from '../User/Hotel'


const Mainroutes = () => {
  return (
    <div>
        <Routes>
           <Route path="/" element={<Sign/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Admin" element={<Room/>}/>
            <Route path="/hotel" element={<Hotel/>}/>
        </Routes>
    </div>
  )
}

export default Mainroutes