import { getServerApiKey } from './utills'

function page() {

    const apiKey = getServerApiKey() ;
    console.log("Api key " , apiKey);
    

  return (
    <div>
      <h1>Env Method</h1>
    </div>
  )
}

export default page
