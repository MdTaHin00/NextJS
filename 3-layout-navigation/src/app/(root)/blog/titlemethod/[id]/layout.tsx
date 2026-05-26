const BlogLayOut = ({ children }: { children: React.ReactNode }) => {
    return (
        <div classNameName="flex justify-between items-center border">
            <div>{children}</div>
            <div classNameName="w-64">Sidebar</div>
        </div>
    )
}

export default BlogLayOut;