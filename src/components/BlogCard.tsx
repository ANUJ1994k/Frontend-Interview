import { Card } from "./ui/card";

const BlogCard = ({ blog, onClick }: { blog: any; onClick: () => void }) => (
  <Card className="cursor-pointer p-4" onClick={onClick}>
    <h3 className="font-bold text-lg">{blog.title}</h3>
    <p className="text-sm text-gray-500">{blog.category.join(', ')}</p>
    <p className="mt-2">{blog.description}</p>
  </Card>
);

export default BlogCard;
