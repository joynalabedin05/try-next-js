import getAllCategory from '@/utils/getAllCategory';
import React from 'react';
import SingleCategory from './SingleCategory';

const Categories = async() => {
    const categories = await getAllCategory();
    return (
        <div className='container mx-auto'>
           
            {
                categories.map((category)=> <SingleCategory category={category} key={category.id}></SingleCategory>)
            }
        </div>
    );
};

export default Categories;