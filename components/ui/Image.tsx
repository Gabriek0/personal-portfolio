import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import NextImage, { ImageProps } from 'next/image';
import React, { useCallback } from 'react';

type Props = ImageProps & VariantProps<typeof imageContainerVariants>;

const imageContainerVariants = cva(
  'relative flex items-center justify-center',
  {
    variants: {
      variant: {
        circle:
          'relative rounded-full bg-background overflow-hidden border-text-description border-[1px]  p-4',
        square: 'rounded-3xl',
      },
    },
  }
);

export default function Image({ variant, className, ...props }: Props) {
  const ImageComponent = useCallback(
    (props: ImageProps) => {
      switch (variant) {
        case 'circle':
          return (
            <div className='relative h-full w-full'>
              <NextImage {...props} className='rounded-full' fill={true} />
            </div>
          );
        case 'square':
          return (
            <NextImage
              src={props.src}
              alt={props.alt}
              fill={props.fill}
              quality={props.quality}
            />
          );
        default:
          return <React.Fragment />;
      }
    },
    [variant]
  );

  return (
    <div className={cn(imageContainerVariants({ variant, className }))}>
      <ImageComponent {...props} />
    </div>
  );
}
