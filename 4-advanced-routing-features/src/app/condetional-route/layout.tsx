import { redirect } from 'next/navigation';
import React from 'react'

function layout() {

    //! conditional route method
    const isLoggedIn = false ;
     if(!isLoggedIn) {
        redirect("/login")
     }

  return (
    <div>
    </div>
  )
}

export default layout
