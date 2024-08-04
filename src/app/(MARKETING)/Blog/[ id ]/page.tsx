import React from 'react'
import { blogs } from '@/constants';

type BlogDetailPageProps = {
    params : {
        id : string;
    }
}
const findBlogDetail = (id:number)=>{ 
    console.log("findBlogDetail id: ", id)
     return blogs.find((item)=>{
       item.id === id
    })
  
}

function BlogDetail({ params}: BlogDetailPageProps){
    console.log("BlogDetail params: ", params.id);
    const blog = findBlogDetail(Number(params.id));
   
  return (
    <div>
      Blog Detail
      <div className="py-5">
        <h1 className="font-bold">
            {blog?.title}
        </h1>
        <p>{blog?.content}</p>
        <p>{blog?.author}</p>

      </div>
    </div>
  )
}

export default BlogDetail;
