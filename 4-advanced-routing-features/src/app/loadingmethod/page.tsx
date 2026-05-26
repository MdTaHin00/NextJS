
async function page() {

  await new Promise(
    (resolve) => {
      setTimeout (() =>{
        resolve('done')
        //? loading thakalay loading hova tarpor ai page code run hova
      }, 2000) 
    }
  )

  return (
    <div>
      Loading method
    </div>
  )
}

export default page
