import { Suspense } from "react";
import Comments from "./Comments";
import Lifecycle from "./Lifecycle";


type Post = {
    userId : number ,
    id:number ,
    title : string ,
    body : string 
}

async function getPost(id:string):Promise<Post>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) ;
  return res.json() ;
}

const PostPage = async ({params} : {params: Promise<{id:string}>}) =>{
    const {id} = await params ;
    const post = await getPost(id) ;
    console.log(post);   
    
    return(
        <div className="max-w-xl container mx-auto py-8 px-4 shadow-lg ">
           <h1 className="text-xl font-bold mb-3">Post Details</h1> 
           <h2>UserId : {post.userId}</h2>
           <h3> Id Number : {post.id}</h3>
           <p className="text-gray-400 py-3">{post.body}</p>
           <h4 className="text-blue-500 font-semibold underline">Comments</h4>

           {/* Suspense -> use kore hoy components loading show korlar janno */}
           <Suspense fallback={<p className="text-2xl font-bold m-10">Loading comments...</p>}>
            <Comments postId={id}/>
           </Suspense>

          <div className="mt-10">
             <Lifecycle/>
          </div>

        </div>
    )
    
}



export default PostPage