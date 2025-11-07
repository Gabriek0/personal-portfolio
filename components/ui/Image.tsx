import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import NextImage from 'next/image';

type Props = React.ComponentProps<'div'> &
  VariantProps<typeof imageContainerVariants>;

const imageContainerVariants = cva('flex items-center justify-center', {
  variants: {
    variant: {
      circle: 'relative rounded-full bg-background overflow-hidden border-text-description border-[1px]  p-4',
      square: 'rounded-3xl',
    },
  },
});

export default function Image({ variant, className, ...props }: Props) {
  return (
    <div
      className={cn(imageContainerVariants({ variant, className }))}
      {...props}
    >
      {variant === 'circle' ? (
        <div className='relative h-full w-full'>
          <NextImage
            alt='Image'
            fill={true}
            quality={100}
            src={'/me.jpg'}
            className='rounded-full'
          />
        </div>
      ) : (
        <NextImage alt='Image' fill={true} quality={100} src={'/me.jpg'} />
      )}
    </div>
  );
}
