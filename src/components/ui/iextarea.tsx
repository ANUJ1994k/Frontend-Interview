// src/components/ui/button.tsx
import { forwardRef } from 'react';

export const Textarea = forwardRef(({ children, ...props }: any, ref) => (
  <textarea ref={ref} {...props} className="px-4 py-2 bg-blue-500 text-white rounded">
    {children}
  </textarea>
));
