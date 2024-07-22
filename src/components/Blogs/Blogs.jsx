import React from "react";
import { BlogsCard } from "../index";
import { BlogsData } from "../../constants/blogs";
const Blogs = () => {
  return (
    <section className="min-h-screen pt-14">
      <div className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Latest Blogs{" "}
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {BlogsData.map((blog, index) => (
            <BlogsCard blog={blog} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
