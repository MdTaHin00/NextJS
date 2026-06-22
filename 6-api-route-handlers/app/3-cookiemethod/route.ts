import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest){

     const cookieStore = await cookies() ;
      //* set cookie 
      //* ("abc","abc12345") -> abc -> cookie name | abc12345 -> cookie value
     const abcSetToken = cookieStore.set("abc","abc12345") ;
     //* set cookie run kola
     const abcToken = cookieStore.get("abc");
     console.log("second cookie set value",abcToken);


         //! cookie set another wey
      
    //* get."token" -> token holo cookie name , ja name cookie set korce
    const token = request.cookies.get("token") ; 
    console.log("Token Cookie from", token);
 
    return new Response("User Cookie Method",{
        headers:{
            "Content-type":"text/plain",
            //* cookie set kola 
            //* token -> cookie name
            //* 123456 -> cookie value
            "Set-Cookie" : `token=123456`
        }
    });




}