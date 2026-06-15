"use client" 
//! "use client"  -> client janno use tai ai code

import { useRouter } from "next/navigation";

const LogOut = () =>{

    //! useRouter -> next/navigation ai thaka asva
     //* useRouter -> anno page a patey day
    const router = useRouter() ;

    const handelLogout = () =>{
        router.push("/")
    }

    return (
        <div>
            <button className="text-sky-500 bg-sky-500/15 m-20 px-2 py-1 text-2xl" onClick={handelLogout}>Logout</button>
        </div>
    )
}

export default LogOut ;