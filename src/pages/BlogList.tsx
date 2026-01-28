import { useQuery } from '@tanstack/react-query';
import { getBlogs } from '../api/blogs';
import BlogCard from '../components/BlogCard';
const BlogList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogs,
  });

  if (isLoading) return <p className="p-4">Loading blogs...</p>;
  if (error) return <p className="p-4 text-red-500">Error loading blogs</p>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {data?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
