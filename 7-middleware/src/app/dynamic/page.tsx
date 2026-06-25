import { cookies } from "next/headers"

async function dynamic() {

    const cookieStore = await cookies();
    const theme = cookieStore.get("theme")
    console.log(theme);

    return (
        <div>
            dynamic page
        </div>
    )
}

export default dynamic

