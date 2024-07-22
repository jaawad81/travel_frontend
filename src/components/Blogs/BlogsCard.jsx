import React from "react";
import { Link } from "react-router-dom";
import Animation from "../Animation/Animation";


const BlogsCard = ({ blog }) => {
  return (
    <Link
      to={`/blogs/${blog.id}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      state={{ blog }}
    >
        <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl">
          <div className="overflow-hidden">
            <img
              src={blog.image}
              alt="Not Loaded"
              className="mx-auto h-[250px] w-full object-cover transition-all duration-700 hover:skew-x-2 hover:scale-110"
            />
          </div>
          <div className="flex justify-between pt-2 text-slate-600">
            <p>{blog.date}</p>
            <p>by {blog.author}</p>
          </div>
          <div className="space-x-2 py-3">
            <h1 className="line-clamp-1 font-bold ">{blog.title}</h1>
            <p className="line-clamp-2">{blog.description}</p>
          </div>
        </div>
    </Link>
  );
};

export default BlogsCard;
