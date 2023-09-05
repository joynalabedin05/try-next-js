import React from 'react';

const SingleBlog= ({params}) => {
    // console.log( params);
    const [year, id]= params.segments || [];
    
    return (
        <div>
            SingleBlog <br></br>
            {/* {params.segments} */}
            {year || new Date().getFullYear()} for {id}
        </div>
    );
};

export default SingleBlog;