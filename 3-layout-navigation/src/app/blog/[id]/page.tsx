async function SingleBlog({params} : {params: Promise<{id:string}>}) {

    const{id} = await params ;

  return (
    <div>
      Single Blog page  {id}
    </div>
  )
}

export default SingleBlog
