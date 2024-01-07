import React from 'react'

import van1 from './images/1.png'
import van2 from './images/2.png'
import van3 from './images/3.png'
import van4 from './images/4.png'

const Slide3 = ({l}) => {
 
    const img=[van1,van2,van3,van4]
  return (
    <div className='slider3'>
    
       <img src={img[l]}/>
       <div className='description3'>
        <p>mznmfgdjtebywbciretvkecywcretkewuybut</p>
       </div>
    </div>
  )
}

export default Slide3