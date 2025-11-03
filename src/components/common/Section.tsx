import type { HTMLAttributes, PropsWithChildren } from 'react';
import { cx } from '@/lib/cx';

type Props = PropsWithChildren<
  HTMLAttributes<HTMLElement> & { wide?: boolean }
>;

export default function Section({ children, className, wide, ...rest }: Props) {
  return (
    <section
      {...rest}
      className={cx(
        'mx-auto px-6 py-12 transition-colors duration-300',
        wide ? 'max-w-7xl' : 'max-w-6xl',
        className
      )}
    >
      {children}
    </section>
  );
}
