import React from 'react'

async function PhotoPage({params} : {params : Promise <{id : string}>}) {

    const {id} = await params ;

  return (
    <div className='m-10'>
        <div className='bg-gray-200 w-30 h-30 flex justify-center items-center text-xl p-5 rounded '>
        Photo Number {id}
        </div>
    </div>
  )
}

export default PhotoPage
