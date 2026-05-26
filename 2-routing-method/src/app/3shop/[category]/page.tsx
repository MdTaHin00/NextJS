import React from 'react'

async function CategoryPage ({params} : {params:{category : string}}) {

    const {category} = await params

  return (
    <div>
      <h1>Product CategoryPage <span classNameName='text-2xl font-bold text-gray-300'>{category}</span></h1>
    </div>
  )
}

export default CategoryPage

