import wait from '@/utils/wait';
import Link from 'next/link';
import React from 'react';

const SingleCategory = async({category}) => {
    await wait();
    const {id, title, author} = category;
    return (
        <Link href={`/products?categoryId=${id}`}>
            <h2>{author}</h2>
        </Link>
        
    );
};

export default SingleCategory;