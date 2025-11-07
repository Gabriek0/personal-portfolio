import Badge from '@/components/ui/Badge';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section className='max-w-main my-0 mx-auto'>
      <div>
        <Badge>Projetos</Badge>
        <h2 className='text-text-important text-2xl font-semibold my-2'>
          Sim, é o meu portfólio
        </h2>
        <p className='text-text-description font-normal my-4'>
          Os meus principais projetos.
        </p>
      </div>

      <div className='grid grid-cols-2'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
