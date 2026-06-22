export const dynamic = 'force-static'
//? ai text first line deta hoy . ai text dela website tharate reload hoy.
//? ar ai text deya  data catching kola hoy



//! localhost:3000/url -> ai route hit korla ai url asva

export async function GET() {
    const data = await fetch("https://api.vercel.app/blog")
    const posts = await data.json();

    return Response.json(posts)

}
