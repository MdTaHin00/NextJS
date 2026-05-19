const BlogLayOut = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-between items-center border">
            <div>{children}</div>
            <div className="w-64">Sidebar</div>
        </div>
    )
}

export default BlogLayOut;