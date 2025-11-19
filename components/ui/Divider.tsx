import { cn } from '@/lib/utils';

type DividerProps = {
  className?: string;
};

export default function Divider({ className }: DividerProps) {
  return (
    <div
      className={cn(
        'block h-px w-full my-8 bg-gradient-to-r from-transparent via-[var(--color-surface)] to-transparent',
        className
      )}
    />
  );
}
