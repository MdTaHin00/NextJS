import ClientApiTypes from "../clientApiMethod/clientTypes";

const ServerApiPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json();

    return (
        <div>
            <h1>Server Api Method Post data</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {
                    posts.slice(0, 20).map((post : ClientApiTypes) => (
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

export default ServerApiPost