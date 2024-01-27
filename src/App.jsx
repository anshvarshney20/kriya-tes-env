import React from 'react'
import { BrowserRouter, Routes, Router, Route, } from 'react-router-dom'
import Home from './Components/Home'
import Terms from './Components/Terms'
import Policy from './Components/Policy'
import Complain from './Components/Complain'
import Refund from './Components/Refund'
import Nav from './Components/Nav'
import Collab from './Components/Collab'
import Creator from './Components/Creator'
import Contact from './Components/Contact'
import Creatorcard from './Components/Creatorcard'
import Admin from './Components/Admin'
import Whatsapp from './Components/Whatsapp'
import Dashboard from './Components/Dashboard'
import { UserAuthContextProvider } from './Components/AuthContext'
// import CreatorForm from './Components/CreatorForm'
import Userform from './Components/CreatorForm'
import UpdateForm from './Components/UpdateForm'

function App() {

  return (
    <>
      <BrowserRouter>
        <UserAuthContextProvider>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/termsandconditions' element={<Terms />}></Route>
            <Route path='/privacypolicy' element={<Policy />}></Route>
            <Route path='/riskandcompliance' element={<Complain />}></Route>
            <Route path='/refundpolicy' element={<Refund />}></Route>
            <Route path='/Nav' element={<Nav />}></Route>
            <Route path='/collaboration' element={<Collab />}></Route>
            <Route path='/creators' element={<Creator />}></Route>
            <Route path='/contactus' element={<Contact />}></Route>
            <Route path='/creator-register' element={<Userform/>}></Route>
            <Route path='/:username' element={<Creatorcard />}></Route>
            <Route path='/Admin' element={<Admin />}></Route>
            <Route path='/update/:username' element={<UpdateForm />}></Route>

            <Route path='/dashboard' element={<Dashboard />} ></Route>
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
