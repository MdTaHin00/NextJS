import Link from 'next/link'
import React from 'react'

const navItem =[
    {name:"Home", href:"/"},
    {name:"About", href:"/about"},
    {name:"Contact", href:"/contact"},
    {name:"Blog", href:"/blog"},
]

function NavBar() {
  return (
    <div>
      <header className='flex  justify-between items-center max-w-7xl mx-auto p-4 border-b'>
          <div>
            <Link href="/">Logo</Link>
          </div>
          <ul className='flex space-x-4 items-center'>
            {
                navItem.map((item,index) => (
                    <li key={index}><Link href={item.href}>{item.name}</Link></li>
                ))
            }
          </ul>
      </header>
    </div>
  )
}

export default NavBar
