import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div>
            Intercepting router page
            <div className='space-x-5 mt-5'>
                <Link href="/interceptingRoute/photos" className='px-2 text-xl border-2 '>Go to photos</Link>
                <Link href="/image/123" className='px-2 text-xl border-2 '>Go to Image </Link>
                <Link href="/twoLevel/setting/123" className='px-2 text-xl border-2 '>Go to setting page  </Link>
            </div>
        </div>
    )
}

export default page
