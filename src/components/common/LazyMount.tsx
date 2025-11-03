// src/components/common/LazyMount.tsx
'use client';
import { useEffect, useRef, useState } from 'react';

export default function LazyMount({ children, rootMargin = '200px' }: { children: React.ReactNode; rootMargin?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShow(true)),
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return <div ref={ref}>{show ? children : null}</div>;
}
