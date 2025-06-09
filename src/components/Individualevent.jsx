import React, { useState } from 'react'

const Individualevent = () => {
    const [istab,setistab]= useState('')
  return (
    <div>
        <div className='flex flex-col p-8'>
            <h3 className='text-white text-4xl'>Event details</h3>
            <div className=' flex gap-4'>
                <div><button onClick={()=>setistab(!istab)}> TechnoJam</button>
                {
                    istab &&(
                        <p>Clicked tab1</p>
                    )
                }
                </div>
                 <div><button> Presentation</button></div>
                 <div><button> Brain Busters</button></div>
                 <div><button> Click your thoughts</button></div>
                 

            </div>
        </div>
    </div>
  )
}

export default Individualevent