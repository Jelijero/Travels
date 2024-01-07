import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
const Contact = () => {
  const navigate=useNavigate()
  return (
    <div className='position'>
      <h1 className='contact'>CONTACT US</h1>
      <RxCrossCircled onClick={(()=>navigate("/home"))} />

    </div>
  )
}

export default Contact