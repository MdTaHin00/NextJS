import Link from 'next/link'
import React from 'react'

function Notification() {
  return (
    <div>
      <h3 className='text-lg font-semibold'>Notification</h3>
     <Link href="/advanced-dashboard/alert" className='text-xl text-white px-2 py-1 rounded bg-sky-500'>Alert</Link>
    </div>
  )
}

export default Notification
