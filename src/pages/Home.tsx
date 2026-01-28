import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../api/blogs";
import BlogCard from "../components/BlogCard";
import BlogDetails from "./BlogDetails";
import CreateBlog from "./CreateBlog";
const HomePage = () => {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <p className="p-4">Loading blogs...</p>;
  if (error) return <p className="p-4 text-red-500">Error loading blogs</p>;

  return (
    <>
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-1/3 overflow-y-auto border-r p-4">
        {blogs?.map((blog: any) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onSelect={setSelectedBlogId}
            isSelected={blog.id === selectedBlogId}
          />
        ))}
      </div>

      {/* Right Details Panel */}
      <div className="w-2/3 p-6 overflow-y-auto">
        <BlogDetails blogId={selectedBlogId} />
      </div>
    </div>
    </>
  );
};

export default HomePage;
