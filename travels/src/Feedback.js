import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RxCrossCircled } from "react-icons/rx";
import axios from 'axios'
const Feedback = ({name,setname,no,setno,feedback,setfeed}) => {

  
  const handleSubmit=(e)=>{
    e.preventDefault()
    try{
     
      axios.post('http://localhost:3001/app/feedback',{
        name,
        no,
        feedback
      })
      .then(res=>{
        if(res.data==='Posted'){
          alert('posted')
        }
      })
    
      setfeed("")
      setname("")
      setno("")
    }
    catch(e){
      alert("error")

    }
   
  }
  const Navigate=useNavigate()
  return (
    <div className='position'>
    <h1 className='feed'>FEEDBACK</h1>
    <RxCrossCircled onClick={(()=>Navigate("/home"))} />
    <form  className='forms'onSubmit={(e)=>handleSubmit(e)} >
      <label>Username</label>
    <input type='text' value={name}  required placeholder='Enter your name' onChange={((e)=>setname(e.target.value))}/>
    <label>Phone No</label>
    <input type='tel' value={no}  required placeholder='Enter your Phone No' onChange={((e)=>setno(e.target.value))}/>
    <label>Feedback</label>
    <textarea type='text' value={feedback} required placeholder='Enter your Feedback' onChange={((e)=>setfeed(e.target.value))}/>
    <button type='submit'>Submit</button>
    </form>
    

  </div>
    
  )
}

export default Feedback