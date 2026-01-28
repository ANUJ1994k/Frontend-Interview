// src/components/ui/button.tsx
import { forwardRef } from 'react';

export const Input = forwardRef(({ children, ...props }: any, ref) => (
  <input ref={ref} {...props} className="px-4 py-2 bg-grey-500 text-white rounded">
    {children}
  </input>
));
