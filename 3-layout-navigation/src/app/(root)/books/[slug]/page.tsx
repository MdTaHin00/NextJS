
type PageProps = {
    params: { slug: string },
    searchParams: { [key: string]: string | string[] | undefined }
}

const SingleBooksPage = async ({ params, searchParams }) => {

    const { slug } = await params;

    const resolvedSearchParams = await searchParams

    return (
        <div className="space-y-3 mt-5 ">
            <p>Single books Page : {slug}</p>
            <ul>
                {
                    Object.entries(resolvedSearchParams).map(([key, value]) => (
                        <li key={key}>
                            {key} : {Array.isArray(value) ? value.join(', ') : value}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SingleBooksPage;