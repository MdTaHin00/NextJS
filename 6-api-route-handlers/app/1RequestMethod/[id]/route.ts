
//! dynamic search by id 
//? single data search method

import { user } from "@/app/data/user";

export async function GET( _request: Request , {params} : {params : Promise <{id : string }>}){
    const {id} = await params ; 

    const userData = user.find((data) => data.id  === parseInt(id)) ;

    return Response.json(userData)
}


//! update user 
export async function PATCH (request : Request , {params} : {params : Promise<{id: string}>}){
    const {id} = await params ;
 
    //? body thaka data 
    const body = await request.json() ;

    const index  = user.findIndex((data) => data.id === parseInt(id)) ;

    if(index === -1 ){
        return new Response (JSON.stringify({message:"User Not Found"}), {
            status:404 ,
            headers:{"Content-Type" : "application/json"}
        })
    }

    //? data update kola save hoya method
    user[index] = {...user[index] , ...body } ;

    return Response.json(user[index]) ;

}


//! delete user by id 
export async function DELETE(request:Request,{params} : {params : Promise <{id:string}>}){
    const {id} = await params ;
    const index = user.findIndex((data) => data.id === parseInt(id)) ; 

    const deleteUser = user[index] ;
    user.splice(index, 1) ;

    return Response.json({message: "User deleted successFully", deleteUser})
}