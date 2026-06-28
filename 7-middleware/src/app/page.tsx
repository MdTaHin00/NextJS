"use client"
import ThemeSwitcher from './context/ThemeSwitcher'

function Home() {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center my-5'>Middleware Method</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate dolore labore rem? Voluptatibus nobis similique consectetur hic nulla animi consequuntur.</p>
      <ThemeSwitcher/>
    </div>
  )
}

export default Home
