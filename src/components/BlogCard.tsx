import { Link } from 'react-router-dom';

const BlogCard = ({ blog }: { blog: any }) => (
  <Link to={`/blogs/${blog.id}`}>
    <div className="p-4 border rounded shadow hover:shadow-lg cursor-pointer">
      <h2 className="font-bold text-lg">{blog.title}</h2>
      <p className="text-sm text-gray-500">{blog.category?.join(', ')}</p>
      <p className="mt-2">{blog.description}</p>
    </div>
  </Link>
);

export default BlogCard;
