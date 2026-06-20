import { user } from "../data/user";
import { NextRequest, NextResponse } from "next/server";


//?  user type method 
interface Address{
    city?:string
} ;
interface User{
    id:number ,
    name : string ,
    email : string ,
    address?: Address
}

//! multiple query search method
export async function GET(request:NextRequest){
    const searchParams = request.nextUrl.searchParams ;
    let filterUsers : User[] = [...user] ;

    const filterMapping :{
      [key:string] :(users:User[], value:string) => User[]
    } = {
        query:(users,value) => users.filter(user => user.name.toLowerCase().includes(value.toLowerCase())),
        city:(users,value) => users.filter(user => user?.address?.city?.toLowerCase().includes(value.toLowerCase())) 
        //* add more filter map value
    }

    for (const [key,value] of searchParams.entries()){
        const lowerKey = key.toLowerCase() ;
        if(filterMapping[lowerKey]){
            filterUsers = filterMapping[lowerKey](filterUsers,value)
        }
    }

    return NextResponse.json(filterUsers)
}


//! get method
// ? necar get function janno ai function comment korce
export async function GET(){
    return Response.json(user)
}

//! post method 
export async function POST(request:Request){
   try {
     const userData = await request.json() ;
    const newUser = {
        id: user.length + 1 ,    "genre": "Dark Academia",
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



//!  query search method
export async function GET(request:NextRequest){
    //* nextUrl ,  searchParams -> next,js ar default function ja search janno kas kola
  const searchParams = request.nextUrl.searchParams ;

  //* get -> ja name ar oper base kola search kola hova
  const query = searchParams.get('query') ;

  const filterUser = query ? user.filter(data => data.name?.toLowerCase().includes(query.toLowerCase()) ): user ;

  return Response.json(filterUser) 
}
