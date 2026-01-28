import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getBlogById } from '@/api/blogs';

const BlogDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => getBlogById(id!),
    enabled: !!id,
  });

  if (isLoading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error loading blog</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{data?.title}</h1>
      <p className="text-gray-500 mb-4">By {data?.author}</p>
      <p className="leading-relaxed">{data?.content}</p>
    </div>
  );
};

export default BlogDetails;