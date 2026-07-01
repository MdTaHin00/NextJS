export interface User{
    id:number ,
    name:string ,
    username: string ,
    email : string 
}

export interface UserIdPops {
  userId:number ,
  id:number ,
  title:string,
  body:string
}

//! id base for data
export async function getUser(id:string) : Promise<User>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`) ;
  if(!res.ok){
    console.log('Failed to fetch user')
  }
  return res.json()
}

//! userId base for data
export async function getUserPosts(userId: number): Promise<UserIdPops[]>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

  if(!res.ok){
    console.log("Failed to fetch posts for user");
  }
  return res.json()
}