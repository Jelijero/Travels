import React from 'react'
import { useNavigate } from 'react-router-dom'

const Book = ({name,setname,no,setno,date,setdate}) => {
    const handleSubmit=(e)=>{
        e.preventDefault()
        setname("")
        setno("")
        setdate("")
        Navigate('/home')
      }
    const Navigate=useNavigate()
  return (
    
     
      <div className='positions'>
      <h1 className='feed'>Book Here</h1>
      
      <form  className='forms'onSubmit={(e)=>handleSubmit(e)} >
        <label>Username</label>
      <input type='text' value={name}  required placeholder='Enter your name' onChange={((e)=>setname(e.target.value))}/>
      <label>Phone No</label>
      <input type='tel' value={no}  required placeholder='Enter your Phone No' onChange={((e)=>setno(e.target.value))}/>
      <label>Date</label>
      <input type='date' value={date} required placeholder='Enter the Date' onChange={((e)=>setdate(e.target.value))}/>
      <button type='submit'>Submit</button>
      <button onClick={(()=>Navigate("/home"))}>Cancel</button> 
      </form>
      
  
    </div>
  )
}

export default Book