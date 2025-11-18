import { ImageProps } from 'next/image';
import { ReactNode } from 'react';

export interface ProjectsProps {
  children: ReactNode;
}

export type ProjectsCardProps = Pick<ImageProps, 'src'> & {
  title: string;
  description: string;
};
