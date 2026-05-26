import Link from "next/link"

const bookPost = [
    { id: 1, title: "Learn Next.js", slug: "nextjs-course", from: "homepage" },
    { id: 2, title: "tailwind css", slug: "tailwind-guide", from: "newsletter" },
    { id: 3, title: "React.js", slug: "react-hook-course", from: "twitter" },
    { id: 4, title: "redux.js", slug: "redux-course", from: "backend code template" },
]

const BookPage = () => {
    return (
        <>
            <div classNameName="text-2xl font-bold mb-4  mt-5">
                <h2>Books Post</h2>
                <ul classNameName="space-y-2">
                    {
                        bookPost.map((book, index) => (
                            <li key={index}>
                                <Link href={`/books/${book.slug}`}>{book.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
export default BookPage