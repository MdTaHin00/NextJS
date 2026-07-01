import { getPostsData, getUserData } from "../user/data"

const ParallelDataFetching = async ()=>{
   const [users,posts] = await Promise.all([
    getUserData(),
    getPostsData()
   ])
   return(
    <div>
        <h1>Parallel data fetching method</h1>
        <p>Total users: {users.length}</p>
        <p>Total posts: {posts.length}</p>
    </div>
   )
}

export default ParallelDataFetching