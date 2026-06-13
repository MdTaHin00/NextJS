import React from "react"

type LayoutProps = {
  children: React.ReactNode;
  invoices: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  notifications:React.ReactNode
}

function layout({ children, invoices, users, revenue , notifications}: LayoutProps) {
  return (
    <div className='flex min-h-screen'>
      <div className="w-56 border p-5">Sidebar</div>
      <div className='border p-5 w-full '>
        <div className='flex gap-5 justify-center border-b pb-5'>
          <div className="mb-5">{children}</div>
          <div className="font-bold text-xl">{users}</div>
          <div className="font-bold text-xl">{invoices}</div>
        </div>
        <div className='pt-8 justify-around flex'>  
          {revenue}
          {invoices}
          {notifications}
        </div>
      </div>
    </div>
  )
}

export default layout
