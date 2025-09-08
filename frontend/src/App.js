import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home  from './components/home/Home'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Signup from './components/signup/Signup'
import SignIn from './components/signup/SignIn'
import Todo from './components/todo/Todo'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/todo' element={<Todo/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/signin' element={<SignIn/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App