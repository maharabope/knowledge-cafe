import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handelBookmark}) => {

    const [blogs, setBlogs]= useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
        
    },[])
    console.log(blogs)

    return (
        <div className="w-2/3">
            {blogs.map(blog=><Blog key={blog.id}  handelBookmark={handelBookmark} blog={blog}></Blog>)}
        </div>
    );
};

Blogs.propTypes={
    handelBookmark:PropTypes.func
}

export default Blogs;