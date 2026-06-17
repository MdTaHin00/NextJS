import React from 'react'

async function PhotoPage({params} : {params : Promise <{id:string}>}) {
 
  const photosId = (await params) .id
    return (
    <div>
      PhotoPage
    </div>
  )
}

export default PhotoPage
