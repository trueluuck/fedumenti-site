// src/components/lp/google360/Viewer360.tsx
'use client';

type Props = {
  src: string;
  title: string;
};

export default function Viewer360({ src, title }: Props) {
  return (
    <iframe
      title={title}
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      className="h-full w-full rounded-[18px] border border-border"
      style={{ border: 0 }}
    />
  );
}
