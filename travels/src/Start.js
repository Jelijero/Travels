import React from 'react'
import van from './images/van.jpeg'
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'



const Start = () => {

  return (

    <div className='start'>
      <Link to="home"> <p className='click'>Start Your Travel</p></Link> 
      <p className='click1'></p>
        <img src={van}/>
        <h1>VIGNESHWARAN TRAVELS</h1>
        </div>
       
  )
}

export default Start