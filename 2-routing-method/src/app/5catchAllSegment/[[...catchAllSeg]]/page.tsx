

//! ai method a  -> 5cathAllSegment ar page file o asva

import NotFound from "../not-found";

const CatchAllSegments = async ({params} : {params : Promise<{catchAllSeg:string[]}>})=>{

     //? catchSeg:string[] -> catchSeg value string array asva tai

    //! CatchSegments route data array hoy asay
    const{catchAllSeg} = await params ;

    //! not-found method call 
    if(catchAllSeg?.length > 3){
        NotFound()
    }

    return(
        <>
          <div className='w-sm shadow-lg p-6 mx-auto '>
       <h1 className='text-3xl  text-center'>Catch Segment All Data Show</h1>
       {
        catchAllSeg?.length > 0 && catchAllSeg.map((item,index) => <li className='list-none text-xl text-sky-400 font-mono' key={index}>{item}</li>)
       }
    </div>
        </>
    )
}
export default CatchAllSegments ;