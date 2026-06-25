
//! dynamic route use korlay .next/dev/server/app 
//! ar modo exta file add hoy tai ai code 
//? false -> exta file asva na
//? true -> exta file asva
export const dynamicParams = false ;


interface PostInter{
    userId: number ,
    id:number ,
    title : string ,
    body : string 
}

 async function generateStaticParams({params} : {params : Promise<{id:string}>}){
    const {id} = await params ;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) 
    const posts = await res.json() 
    
return(
 <div>
    <h1>Single Blog Page</h1>
     {posts.map((post : PostInter) => (
        <div key={post.id}>
            <h2>{post.id}</h2>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
        </div>
     ))}
 </div>
)
    
}

export default generateStaticParams