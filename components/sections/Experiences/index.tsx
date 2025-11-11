import Badge from '@/components/ui/Badge';

export default function Experiences() {
  return (
    <section className='max-w-main my-12 mx-auto'>
      <div>
        <Badge>Experiência</Badge>
        <h2 className='text-text-important text-2xl font-semibold my-2'>
          Minha jornada.
        </h2>
        <p className='text-text-description font-normal my-4'>
          Conheça um pouco mais da minha jornada.
        </p>
      </div>
    </section>
  );
}
