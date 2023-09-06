"use client"
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

const SingleBlog= ({params, searchParams}) => {
    // console.log( params);
    const [year, id]= params.segments || [];
    const params2 = useParams();
    const searchParams2 = useSearchParams();
    console.log(params2.segments, searchParams2.get("title"));
    
    return (
        <div>
            SingleBlog <br></br>
            {/* {params.segments} */}
            {year || new Date().getFullYear()} for {id}
            <br></br>
            {searchParams.title}
        </div>
    );
};

export default SingleBlog;