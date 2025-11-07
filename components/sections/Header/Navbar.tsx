import { Select } from './Select';

const options = [
  {
    id: 1,
    option: 'Início',
  },
  {
    id: 2,
    option: 'Sobre',
  },
  {
    id: 3,
    option: 'Portfólio',
  },
  {
    id: 4,
    option: 'Artigos',
  },
  {
    id: 5,
    option: 'Experiência',
  },
  {
    id: 6,
    option: 'Contato',
  },
];

function Navbar() {
  return (
    <nav className='min-w-main flex items-center justify-center py-4.5 border-surface bg-surface-subtle border-[1px] rounded-2xl'>
      <ul className='flex gap-6'>
        {options.map(({ id, option }) => (
          <li key={id}>
            <a
              href='#'
              className='text-theme-icon textcursor-pointer font-medium text-sm'
            >
              {option}
            </a>
          </li>
        ))}
      </ul>

      <hr className='w-[1px] h-5 bg-surface mx-6' />

      <Select />
    </nav>
  );
}

export default Navbar;
