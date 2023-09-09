import React from 'react';

const getAllCategory = async() => {
   // const res = await fetch("http://localhost:5000/posts", {
   //  next: {
   //    revalidate: 5,
   //  }

   // });
   const res = await fetch("http://localhost:5000/posts", {
  
   });

   return res.json();
};

export default getAllCategory;