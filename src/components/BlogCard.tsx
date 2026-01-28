import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Blog } from '@/api/blogs';
import { Link } from 'react-router-dom';

export const BlogCard = ({ blog }: { blog: Blog }) => (
  <Card className="hover:shadow-lg transition">
    <CardHeader>
      <CardTitle>{blog.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-600 mb-2">By {blog.author}</p>
      <Link
        to={`/blogs/${blog.id}`}
        className="text-blue-600 hover:underline"
      >
        Read more →
      </Link>
    </CardContent>
  </Card>
);