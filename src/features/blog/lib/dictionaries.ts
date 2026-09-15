import { Locale } from '@/src/lib/i18n';
import { BlogDictionaryKey } from '@/src/features/blog/types';

const dictionary = {
  en: {
    back: 'Back',
    readingTime: 'min read',
    notTranslated:
      "This post isn't available in your selected language yet. Showing the English version.",
    title: 'Blog',
    description: 'Notes about software, product building, and learning in public.',
    allPosts: 'All posts',
    tags: 'Tags',
  },
  es: {
    back: 'Volver',
    readingTime: 'min de lectura',
    notTranslated:
      'Esta publicación aún no está disponible en el idioma seleccionado. Se muestra la versión en inglés.',
    title: 'Blog',
    description: 'Notas sobre software, creación de productos y aprendizaje en público.',
    allPosts: 'Todos los posts',
    tags: 'Etiquetas',
  },
  'pt-BR': {
    back: 'Voltar',
    readingTime: 'min de leitura',
    notTranslated:
      'Esta publicação ainda não está disponível no idioma selecionado. Exibindo a versão em inglês.',
    title: 'Blog',
    description: 'Notas sobre software, construção de produtos e aprendizado em público.',
    allPosts: 'Todos os posts',
    tags: 'Tags',
  },
} satisfies Record<Locale, Record<BlogDictionaryKey, string>>;

export function t(locale: Locale, key: BlogDictionaryKey) {
  return dictionary[locale][key];
}
