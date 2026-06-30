"use client"


import { useEffect, useState } from "react"
import ClientApiTypes from "./clientTypes";

const ClientApi = () => {
    const [posts, setPosts] = useState<ClientApiTypes[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error("Failed to fetch posts")
                }
                const data: ClientApiTypes[] = await response.json()
                setPosts(data)
            } catch (error) {
                setError(true)
                console.log(error);

            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])
    if (loading) {
        return <div>Loading..</div>
    }

    if (error) {
        return <div>Error</div>
    }


    return (
        <div>
            <h1>Client Post Api</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {
                    posts.slice(0,20).map((post) => (
                        <div key={post.id} className="shadow-lg p-5 ">
                            <h2>{post.id}</h2>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}



export default ClientApi 