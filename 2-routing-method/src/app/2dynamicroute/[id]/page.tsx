const DynamicRoute = async ({ params }: { params: Promise<{ id: string }> }) => {

    //! id -> ja name dynamic name hova
    const { id } = await params

    return (
        <>
            <div>
                Dynamic Route Value <span className="text-3xl text-sky-300"> {id}</span>
            </div>
        </> 
    )
}
export default DynamicRoute