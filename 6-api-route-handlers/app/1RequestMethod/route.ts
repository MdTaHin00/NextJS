import { user } from "../data/user";

//! get method
export async function GET(){
    return Response.json(user)
}

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