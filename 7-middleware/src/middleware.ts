import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    //* logic
    const isLoggedIn = request.cookies.get("token");
    //* request.nextUrl.pathname.startsWith("/dashboard") -> 
    //* localhost:3000/dashboard ai path aca ki na check
    if (!isLoggedIn && request.nextUrl.pathname.startsWith("/dashboard")) {
        //* token na thakay login page java
        return NextResponse.redirect(new URL("/login", request.url))
    }
    return NextResponse.next();
}

export const config = {
    //* matcher -> next.js default code 
    matcher: '/dashboard'
    //? akadik folder name hola 
    //* matcher:['/dashboard/:pathe']
    //*  ['/dashboard/:pathe*'] -> * ai path redirect hova na
}



//! another expel
export function middlewareTwo(request: NextRequest) {
    const response = NextResponse.next();

    //? localhost:3000/about ai path a hit korla ai code kas korva
    if (request.nextUrl.pathname.startsWith("/about")) {
        //? set cookies
        response.cookies.set("token2", "12345", {
            path: "/",
            maxAge: 60 * 60 * 24 //* 24 hours
        });
        //? set headers
        response.headers.set("my-headers", "jihad123")
    }
    //? cookies aca ki na check
    const isLoggedIn = request.cookies.get("token2");
    if (!isLoggedIn && request.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    return response;
};

