import { cn } from '@/lib/utils';

type DividerProps = {
  className?: string;
};

export default function Divider({ className }: DividerProps) {
  return (
    <div
      className={cn(
        'block h-px w-full bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent',
        className,
      )}
    />
  );
}
