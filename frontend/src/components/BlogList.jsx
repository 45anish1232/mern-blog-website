import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/blogs")
      .then(res => setBlogs(res.data));
  }, []);

  const deleteBlog = async (id) => {
    await axios.delete(`http://localhost:8000/api/blogs/${id}`);
    setBlogs(blogs.filter(blog => blog._id !== id));
  };

  return (
    <div>
      {blogs.map(blog => (
        <div key={blog._id} className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p>{blog.content}</p>
          <p className="text-sm text-gray-500">By {blog.author}</p>
          <button
            onClick={() => deleteBlog(blog._id)}
            className="text-red-500 mt-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
