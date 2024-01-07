import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate=useNavigate()
  return (
    <div className='position'>
      <h1>VIGNESHWARAN TRAVELS</h1>
      <RxCrossCircled onClick={(()=>{navigate('/home')})} />

    </div>
  )
}

export default About