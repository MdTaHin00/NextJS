import Link from 'next/link'
import React from 'react'

const photos = [
  {id:1,url:'/images/photo1.avif', title:'Photo 1'},
  {id:2,url:'/images/photo2.avif', title:'Photo 2'},
  {id:3,url:'/images/photo3.avif', title:'Photo 3'},
  {id:4,url:'/images/photo4.avif', title:'Photo 4'},
  {id:5,url:'/images/photo5.avif', title:'Photo 5'},
  {id:6,url:'/images/photo6.avif', title:'Photo 6'},
]

function Home() {
  return (
    <div className='w-xl mx-auto shadow-lg  py-5 px-3'>
       <h1 className='text-2xl text-center font-bold mb-6'>NextGram photo show Case</h1>
       <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 '>
          {photos.map((photo) => (
            <Link key={photo.id} href={`/photos/${photo.id}`} className='bg-gray-200 px-10 py-10 shadow-md rounded-md hover:scale-75 cursor-pointer duration-700 '> {photo.title}</Link>
          ))}
       </div>
    </div>
  )
}

export default Home
