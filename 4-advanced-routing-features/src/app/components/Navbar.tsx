import Link from "next/link"

const Navbar = () =>{
  return (
    <div>
        <nav className="flex gap-4 bg-gray-800 text-white">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/dashboard/reports">Reports</Link>
            <Link href="/dashboard/overview">Overview</Link>
            <Link href="/dashboard/settings">Settings</Link>
        </nav>
    </div>
  )
}
export default Navbar 