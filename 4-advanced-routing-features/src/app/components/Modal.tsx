"use client"

import { useRouter } from "next/navigation"


type ModalProps ={
    id : string 
}

function Modal({id} :  ModalProps) {

    const router = useRouter()

  return (
    <div>
      <div className='size-30 bg-black mx-auto px-2'>
         <h3 className='text-white font-bold py-5'>Image id: {id}</h3>
        <button onClick={ () => router.back() } className='bg-sky-400 text-white px-2 py-1'>Close</button>
      </div>
    </div>
  )
}

export default Modal
