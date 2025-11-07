import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Badge({ children }: Props) {
  return (
    <span className='text-text-secondary text-sm font-medium py-1 px-3 border-[1px] border-surface rounded-3xl'>
      {children}
    </span>
  );
}
