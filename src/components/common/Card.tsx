// src/components/common/Card.tsx
import type { HTMLAttributes, PropsWithChildren } from 'react';

export default function Card({
  children,
  className = '',
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={`surface p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
