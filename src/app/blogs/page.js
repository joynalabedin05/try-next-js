// "use client"
import loadBlogData from '@/utils/loadBlogData';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
export const metadata = {
    title: 'Blogs || Next App',
    description: 'next app',
};

//   const blogs = [
//     {
//         id: 1,
//         year: 2016,
//         title: 'title 1',
//     },
//     {
//         id: 2,
//         year: 2016,
//         title: 'title 2',
//     },
//     {
//         id: 3,
//         year: 2016,
//         title: 'title 3',
//     },
//     {
//         id: 4,
//         year: 2016,
//         title: 'title 4',
//     },
//   ]

const BlogsPage = async () => {
    // const router = useRouter();
    const blogs = await loadBlogData();
    return (
        <div className='container mx-auto'>
            {
                blogs.map(({ id, body, title }) =>
                    <div className=' border border-blue-500 p-2 m-2' key={id}>
                       <h2 className='text-2xl'>{id}. {title}</h2>
                        <p>{body}</p>
                        <Link
                            href={`/blogs/${id}`}

                        >
                           <button>Details</button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default BlogsPage;