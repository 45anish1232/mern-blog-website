import { useState } from "react";
import axios from "axios";

export default function BlogForm() {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/blogs", blog);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <input
        placeholder="Title"
        className="w-full border p-2 mb-2"
        onChange={e => setBlog({ ...blog, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        className="w-full border p-2 mb-2"
        onChange={e => setBlog({ ...blog, content: e.target.value })}
      />
      <input
        placeholder="Author"
        className="w-full border p-2 mb-2"
        onChange={e => setBlog({ ...blog, author: e.target.value })}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Blog
      </button>
    </form>
  );
}
