import Image from '@/components/ui/Image';
import Me from '@/public/img/Me.png';

export default function AboutImage() {
  return (
    <div>
      <Image
        src={Me}
        alt='Me'
        fill={true}
        variant='circle'
        className='h-46.5 w-46.5 lg:h-62.5 lg:w-62.5'
      />
    </div>
  );
}
