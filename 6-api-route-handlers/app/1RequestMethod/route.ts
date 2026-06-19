import { user } from "../data/user";

//! get method
// export async function GET(){
//     return Response.json(user)
// }

//! post method 
export async function POST(request:Request){
   try {
     const userData = await request.json() ;

    const newUser = {
        id: user.length + 1 ,
        ...userData 
    }

    user.push(newUser) ;

    return new Response (JSON.stringify(newUser) , {
        headers:{
            "Content-Type" : "application/json"
        },
        status:201
    } )
   } catch (error) {
    console.log(error);
   } 
}

import { NextRequest } from "next/server";


//!  query search method
export async function GET(request:NextRequest){
    //* nextUrl ,  searchParams -> next,js ar default function ja search janno kas kola
  const searchParams = request.nextUrl.searchParams ;

  //* get -> ja name ar oper base kola search kola hova
  const query = searchParams.get('query')?.trim() ;

  const filterUser = query ? user.filter(data => data.title?.toLowerCase().includes(query.toLowerCase()) ): user ;

  return Response.json(filterUser)
}
