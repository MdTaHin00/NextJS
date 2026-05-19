import React from 'react'

const CatchSegmentsDetails = async({params} : {params : Promise<{catchSeg:string[]}>})=> {
 //? catchSeg:string[] -> catchSeg value string array asva tai

    //! CatchSegments route data array hoy asay
    const{catchSeg} = await params ;

    return (
    <div className='w-sm shadow-lg p-6 mx-auto '>
       <h1 className='text-3xl  text-center'>Catch Segment All Data Show</h1>
       {
        catchSeg?.length > 0 && catchSeg.map((item,index) => <li className='list-none text-xl text-sky-400 font-mono' key={index}>{item}</li>)
       }
    </div>
  )
}

export default CatchSegmentsDetails
