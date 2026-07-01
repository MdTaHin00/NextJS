import { getUser, getUserPosts } from "../data"

 const UserDetails = async ({params}: {params : Promise  < {id:string}   >}) =>{
   const {id} = await params 

   //! fetch user details by id 
   const user = await getUser(id) ;

   //! fetch user details by userId
   const userIdData = await getUserPosts(user.id)
   console.log(userIdData);

   return (
    <div>
        <h1>User Details: {user.name}</h1>
        <p>Email: {user.email}</p>
         <p>Username: {user.username}</p>
    </div>
   )
   
}

export default UserDetails