import React from 'react'

function NestedRoute({children }: {children: React.ReactNode}) {
  return (
    <div className='flex h-screen flex-col md:flex-row'>
       <div className='md:w-64 w-full flex-none'>
         Side Bar
       </div>
       <div className='flex-grow p-6 md:p-12 border'>{children}</div>
    </div>
  )
}

export default  NestedRoute ;

