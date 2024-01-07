import React, { useState } from 'react'
import Start from './Start'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Feedback from './Feedback'
import Slide from './Slide'
import Book from './Book'

const App = () => {
  const [name,setname]=useState("")
  const [no,setno]=useState("")
  const [date,setdate]=useState("")
  const [feedback,setfeed]=useState("")
  return (
    <div>
    <Routes>
      
        <Route path='/' element={<Start/>}/>
        <Route path='/home' element={<Home/>}>
          <Route path='book' element={<Book name={name} setname={setname} no={no} setno={setno} date={date} setdate={setdate}/>}/>
          
          <Route path='aboutus' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='feedback' element={<Feedback name={name} setname={setname} no={no} setno={setno} feedback={feedback} setfeed={setfeed}/>}/>
        </Route>
      
    </Routes>
    </div>
  )
}

export default App