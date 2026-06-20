import { headers } from "next/headers";
import { NextRequest } from "next/server";

//? postman thaka authorization value 

export async function GET(request:NextRequest){

    //? request method
    // const requestHeader = new Headers(request.headers)
    // console.log(requestHeader.get("Authorization"));
    
     //! another wey
    //? nextRequest Method
     const headerList = await headers() ;
     //* Authorization -> postman jakan thaka value asva thar name 
     const token = headerList.get("Authorization") as string ; 

     console.log(token);
     
     return new Response("Headers Method Server running...",{
        status:200,
        headers:{
            token:token ,
             "Content-type" : "application"
        }
     })
}