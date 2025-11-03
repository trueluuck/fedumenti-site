// src/components/common/GlassCard.tsx
'use client';

import type { HTMLAttributes, PropsWithChildren } from 'react';

export default function GlassCard({
  children,
  className = '',
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={[
        'rounded-[28px]',
        'bg-white/6 dark:bg-white/5',
        'backdrop-blur-md',
        'ring-1 ring-white/15 dark:ring-white/10',
        'shadow-[0_12px_60px_rgba(0,0,0,0.25)]',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
