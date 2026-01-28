import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getBlogById } from '../api/blogs';

const BlogDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => getBlogById(Number(id)),
    enabled: !!id,
  });

  if (isLoading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error loading blog</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-4">
      <img src={data?.coverImage} alt={data?.title} className="w-full h-64 object-cover rounded" />
      <h1 className="text-3xl font-bold">{data?.title}</h1>
      <p className="text-gray-500">Category: {data?.category?.join(', ')}</p>
      <p className="leading-relaxed">{data?.content}</p>
    </div>
  );
};

export default BlogDetails;
