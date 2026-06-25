import React, { use } from 'react'

type CommentsInter = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}


//! ata better method
async function Comments({ postId }: { postId: string }) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    const comments = await res.json()
    console.log(comments);


    return (
        <div className='space-y-2 mt-5'>
            {
                comments.map((comment: CommentsInter) => (
                    <div key={comment.id} className='border-b border-sky-400 py-4 space-y-2 shadow-lg p-4'>
                        <p className='text-xl text-sky-300'>{comment.name}</p>
                        <p className='text-gray-400'>{comment.email}</p>
                        <p>{comment.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments


//? another wey client method 

//! use client method

const UseClientMethod = ({ postId }: { postId: string }) => {
    //? use() -> use() function use kolrata clients method hoyca
    const comments = use(
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(res => res.json())
    )
    return (
        <div className='space-y-2 mt-5'>
            {
                comments.map((comment: CommentsInter) => (
                    <div key={comment.id} className='border-b border-sky-400 py-4 space-y-2 shadow-lg p-4'>
                        <p className='text-xl text-sky-300'>{comment.name}</p>
                        <p className='text-gray-400'>{comment.email}</p>
                        <p>{comment.body}</p>
                    </div>
                ))
            }
        </div>
    )
}
