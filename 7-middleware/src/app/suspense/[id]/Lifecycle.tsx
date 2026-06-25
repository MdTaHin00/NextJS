"use client"

import { useState } from "react"

//? useState() use korlar janno "use client" use korta hova

function Lifecycle() {

    const [count,setCount] = useState(0)

    const handelIncrement = () =>{
        setCount((pre) => pre + 1)
    }

  return (
    <div>
       <p>Count : {count}</p>
       <button onClick={handelIncrement} className="text-white bg-sky-500">Increment</button>
    </div>
  )
}

export default Lifecycle
