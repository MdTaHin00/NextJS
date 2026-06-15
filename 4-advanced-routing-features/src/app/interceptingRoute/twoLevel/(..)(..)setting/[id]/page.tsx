import Modal from '@/app/components/Modal'
import React from 'react'


  async function page({params} : {params: Promise <{id : string}>}) {

    const {id} = await params

  return (
    <div>
      Intercepted image page {id}
      <Modal id={id} />

    </div>
  )
}

export default page
