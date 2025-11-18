'use client';

import { cn } from '@/lib/utils';

type SectionSharedProps = {
  children?: React.ReactNode;
};

type SectionProps = SectionSharedProps & React.ComponentProps<'span'>;
type SectionTitleProps = SectionSharedProps & React.ComponentProps<'h2'>;
type SectionWrapperProps = SectionSharedProps & React.ComponentProps<'div'>;
type SectionDescriptionProps = SectionSharedProps & React.ComponentProps<'p'>;
type SectionBadgeProps = SectionSharedProps & React.ComponentProps<'section'>;

function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        'max-w-fit text-text-secondary text-xs font-medium py-1 px-3 border-[1px] border-surface rounded-3xl md:text-sm',
        className
      )}
    >
      {children}
    </span>
  );
}

function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        'text-text-important text-xl font-semibold my-2 lg:text-2xl',
        className
      )}
    >
      {children}
    </h2>
  );
}

function SectionDescription({ children, className }: SectionDescriptionProps) {
  return (
    <p
      className={cn(
        'text-text-description text-sm font-normal my-4 lg:text-base',
        className
      )}
    >
      {children}
    </p>
  );
}

function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <div
      className={cn(
        'my-0 mx-auto min-w-80 max-w-80 md:max-w-155 md:min-w-155 lg:min-w-192',
        className
      )}
    >
      {children}
    </div>
  );
}

function Section({ className, children }: SectionProps) {
  return <section className={cn('flex', className)}>{children}</section>;
}

export {
  Section,
  SectionBadge,
  SectionDescription,
  SectionTitle,
  SectionWrapper,
};
