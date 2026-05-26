import React from 'react'

async function page({ params }: { params: { id: string, category: string } }) {

    const { category, id } =await params;

    return (
        <div>
            <div classNameName='w-sm mx-auto shadow-lg p-6 '>
                <h1 classNameName='text-xl'>Shop product Details</h1>
                <h2 classNameName='text-orange-300'>Product Category : {category}</h2>
                <p classNameName='text-sky-300'>Product Items : {id}</p>
            </div>
        </div>
    )
}

export default page
