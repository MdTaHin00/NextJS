"use client"

interface ErrorProps{
    error:Error,
    reset:()=> void 
}

function Error({error,reset} : ErrorProps) {
  return (
    <div>
       <h2>Something went wrong</h2>
       <p className="mb-3">{error?.message}</p>
       <button onClick={() => reset()
       } className="p-1 border">Try Again</button>
    </div>
  )
}

export default Error
