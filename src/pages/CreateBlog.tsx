import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBlog } from '@/api/blogs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      setTitle('');
      setAuthor('');
      setContent('');
    },
  });

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <Textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <Button
        onClick={() => mutation.mutate({ title, author, content })}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Creating...' : 'Create Blog'}
      </Button>
    </div>
  );
};