// "use client"
// import { useParams, useSearchParams } from 'next/navigation';
import loadBlogData from '@/utils/loadBlogData';
import loadSingleBlogData from '@/utils/loadSingleBlogData';
import Link from 'next/link';
import React from 'react';

export const generateMetadata = async({params})=>{
    const { title } = await loadSingleBlogData(params.id);

    return {
        title: title,
    };
};

export const generateStaticParams = async()=>{
    const blogs = await loadBlogData();
    return blogs.map((blog)=>({
        id: blog.id.toString(),
    }));
}

const SingleBlog = async ({ params }) => {
    // console.log( params);
    // const [year, id]= params.segments || [];
    // const params2 = useParams();
    // const searchParams2 = useSearchParams();
    // console.log(params2.segments, searchParams2.get("title"));
    const {id, title, body} = await loadSingleBlogData(params.id);
    return (
        <div className=' border border-blue-500 p-2 m-2' key={id}>
            <h2 className='text-2xl'>{id}. {title}</h2>
            <p>{body}</p>
            <Link
                href={`/blogs/${id}`}

            >
                <button>Details</button>
            </Link>
        </div>
    );
};

export default SingleBlog;