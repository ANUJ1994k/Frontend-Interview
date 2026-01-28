const BlogCard = ({
    blog,
    onSelect,
    isSelected,
  }: {
    blog: any;
    onSelect: (id: number) => void;
    isSelected?: boolean;
  }) => (
    <div
      onClick={() => onSelect(blog.id)}
      className={`p-4 border rounded cursor-pointer mb-2 ${
        isSelected ? "border-blue-500 bg-blue-50" : "hover:shadow-lg"
      }`}
    >
      <h2 className="font-bold text-lg">{blog.title}</h2>
      <p className="text-sm text-gray-500">{blog.category?.join(", ")}</p>
      <p className="mt-2">{blog.description}</p>
    </div>
  );
  
  export default BlogCard;
  