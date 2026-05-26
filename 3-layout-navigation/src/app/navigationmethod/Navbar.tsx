'use client'
//! client page tai -> 'use client' deta hoyca

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItem =[
    {name:"Home", href:"/"},
    {name:"About", href:"/about"},
    {name:"Contact", href:"/contact"},
    {name:"Blog", href:"/blog"},
    {name:"Books", href:"/books"},
]

function NavBar() {

  //! usePathname -> use kore tai operal 'use client' code deta hoy
  const pathName = usePathname()
  

  return (
    <div>
      <header classNameName='flex  justify-between items-center max-w-7xl mx-auto p-4 border-b'>
          <div>
            <Link href="/">Logo</Link>
          </div>
          <ul classNameName='flex space-x-4 items-center'>
            {
                navItem.map((item,index) => {
                  const isActive = pathName === item.href ;
                  return (
                    <li key={index}><Link classNameName={`${isActive ? "font-bold text-red-400" : ""}`} href={item.href}>{item.name}</Link></li>
                )})
            }
          </ul>
      </header>
    </div>
  )
}

export default NavBar
