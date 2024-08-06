import React, { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import UserLogin from './components/UserLogin'
import AdminLogin from './components/AdminLogin'
import Register from './components/Register'
import Home from './components/Home'
import AddQns from './components/AddQns'
import ReportPage from './components/ReportPage'
import Logout from './components/Logout'
import Ct from './components/Ct'

import Python from './components/Python'
import JavaScript from './components/JavaScript'
import ReactJS from './components/ReactJS'
import ExpressJS from './components/ExpressJS'

import PythonMCQ from './components/PythonMCQ'
import JavaScriptMCQ from './components/JavaScriptMCQ'
import ReactMCQ from './components/ReactMCQ'
import ExpressMCQ from './components/ExpressMCQ'

const App=()=> { 
  let[data,setData]=useState({"token":"","_id":"","name":"",isadmin:false})
  let fun=(resdata)=>{
    setData({...resdata})
  }
  let obj={"data":data,"fun":fun}
  return (
    <BrowserRouter>
    <Ct.Provider value={obj}>
    <Navigation/>
    <Routes>
      <Route path='/' element={<UserLogin/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/reg' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/addqns' element={<AddQns/>}/>
      <Route path='/report' element={<ReportPage/>}/>
      <Route path='/logout' element={<Logout/>}/>

      <Route path='/python' element={<Python/>}/>
      <Route path='/javascript' element={<JavaScript/>}/>
      <Route path='/react' element={<ReactJS/>}/>
      <Route path='/express' element={<ExpressJS/>}/>


      <Route path='/pythonmcq' element={<PythonMCQ/>}/>
      <Route path='/javascriptmcq' element={<JavaScriptMCQ/>}/>
      <Route path='/reactmcq' element={<ReactMCQ/>}/>
      <Route path='/expressmcq' element={<ExpressMCQ/>}/>



    </Routes>
    </Ct.Provider>
    </BrowserRouter>
  )
}

export default App