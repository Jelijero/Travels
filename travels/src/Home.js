import {useState,React }from 'react'
import { Link, Outlet} from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import logo from './images/logo1.png'
import Slide from './Slide'
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate()
    const handleSubmit=(e)=>{
      e.preventDefault()
      






      
      
    }
  const [i,seti]=useState(0)
  const[j,setj]=useState(0)
  const[k,setk]=useState(0)
  const[l,setl]=useState(0)
  const handleForward=(()=>{
   if(i<3){
    seti(i+1)
   }
   else{
    seti(0)
   }
   

  })
  const handleForward1=(()=>{
    if(j<3){
     setj(j+1)
    }
    else{
     setj(0)
    }
    
 
   })
   const handleForward2=(()=>{
    if(k<3){
     setk(k+1)
    }
    else{
     setk(0)
    }
    
 
   })
   const handleForward3=(()=>{
    if(l<3){
     setl(l+1)
    }
    else{
     setl(0)
    }
    
 
   })
  const handleBackward=(()=>{
    if(i>0){
      seti(i-1)
     }
    else {
     seti(3)
    }
   
   })
   const handleBackward1=(()=>{
    if(j>0){
      setj(j-1)
     }
    else {
     setj(3)
    }
   
   })
   const handleBackward2=(()=>{
    if(k>0){
      setk(k-1)
     }
    else {
     setk(3)
    }
   
   })
   const handleBackward3=(()=>{
    if(l>0){
      setl(l-1)
     }
    else {
     setl(3)
    }
   
   })
   
  return (
  
    <div className='home'>
      <div className='home1'>
       <Link to='/home/aboutus' className='details'><p>About</p></Link>
       <Link to='/home/contact' className='details'> <p>Contact</p></Link>
       <Link to='/home/feedback' className='details'>  <p>Feedback</p></Link>
       

       <Outlet/>
       </div>
       <h1>VIGNESHWARAN TRAVELS</h1>
      

       <img src={logo}/>
       <div className='whole'>
    
        <div className='whole1'>
          
       <div className='arrow'>
       <IoIosArrowBack onClick={(()=>handleBackward())} />
       <IoIosArrowForward  className='forward' onClick={(()=>handleForward())}/>
       <div>
        <Link className='book'to='/home/book'>Book Now</Link>
       </div>
       <Slide i={i}/>
       </div>
       <div className='arrow1'>

       <IoIosArrowBack onClick={(()=>handleBackward1())} />
       <IoIosArrowForward  className='forward' onClick={(()=>handleForward1())}/>
       <div>
        <Link className='book'to='/home/book'>Book Now</Link>
       </div>
       <Slide1 j={j}/>
       </div>
       <div className='arrow2'>

            <IoIosArrowBack onClick={(()=>handleBackward2())} />
            <IoIosArrowForward  className='forward' onClick={(()=>handleForward2())}/>
            <div>
        <Link className='book' to='/home/book'>Book Now</Link>
       </div>
            <Slide2 k={k}/>
            </div>
            <div className='arrow3'>

            <IoIosArrowBack onClick={(()=>handleBackward3())} />
            <IoIosArrowForward  className='forward' onClick={(()=>handleForward3())}/>
            <div>
        <Link className='book'to='/home/book'>Book Now</Link>
       </div>
            <Slide3 l={l}/>
            
            </div>

            </div>
            
            </div>
        
            </div>
       
        
       
    
    
    
  )
}

export default Home