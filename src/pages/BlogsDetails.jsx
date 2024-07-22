import React from "react";
import { useLocation } from "react-router-dom";


const BlogsDetails = () => {
  const location=useLocation();
  const blog=location.state.blog;

  return <section className=" min-h-[550px] pt-20">
    <div className="h-[330px] overflow-hidden">
      <img src={blog.image} alt="not loaded" 
      className="mx-auto h-[330px] w-full object-cover transition duration-700 hover:scale-110"/>
    </div>
    <div className="container pb-14">
      <p className="text-slate-600 text-sm py-3">Written by {blog.author} on date {blog.date}</p>
    <h1 className="text-2xl font-semibold mb-10">{blog.title}</h1>
    <p className="text-justify">{blog.description}</p>
    </div>
    
  </section>;
};

export default BlogsDetails;
