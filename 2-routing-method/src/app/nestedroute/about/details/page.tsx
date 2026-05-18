import React from 'react'
import AboutDetails from './AboutDetails'

function page() {
  return (
    <div className='mt-20 space-y-2'>
        <h1 className='text-2xl text-red-300'>Nested Route Method</h1>
      <h3>Search Url : about/details</h3>
      About Details
      <AboutDetails/>
    </div>
  )
}

export default page
