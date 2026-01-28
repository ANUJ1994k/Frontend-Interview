import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../api/blogs";

const BlogDetails = ({ blogId }: { blogId: number | null }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId!),
    enabled: !!blogId,
  });

  if (!blogId) return <p className="p-4 text-gray-500">Select a blog to view details</p>;
  if (isLoading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error loading blog</p>;

  return (
    <div className="p-6 max-w-2xl">
      <img
        src={data.coverImage}
        alt={data.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-500 mb-4">Category: {data.category?.join(", ")}</p>
      <p className="leading-relaxed">{data.content}</p>
    </div>
  );
};

export default BlogDetails;
