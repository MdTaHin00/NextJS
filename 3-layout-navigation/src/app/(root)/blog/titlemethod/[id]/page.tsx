import { Metadata } from "next";


type Props ={
  params: Promise <{id:string}>
}

export async function generateMetadata(
  {params} : Props
) : Promise<Metadata> {
  const id = ((await params).id)

  return {
    title:`Blog Post - ${id}`,
    description:`This is Blog post id ${id}`
  }
}

async function SingleBlog({params} : {params: Promise<{id:string}>}) {
    const{id} = await params ;
  return (
    <div>
      Single Blog page  {id}
    </div>
  )
}

export default SingleBlog
