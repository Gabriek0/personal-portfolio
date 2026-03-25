import { getTranslation } from '@/src/shared/lib/dictionaries';
import { Lang, TranslationStructure } from '@/src/shared/types';
import { BlogDictKey } from '../../types';

export const blogDict = {
  en: {
    back: 'Back',
    readingTime: 'min read',
    notTranslated: "This post isn't available in your selected language yet. Showing the English version.",
  },
  es: {
    back: 'Volver',
    readingTime: 'min de lectura',
    notTranslated: 'Esta publicación aún no está disponible en español. Se muestra la versión en inglés.',
  },
  'pt-br': {
    back: 'Voltar',
    readingTime: 'min de leitura',
    notTranslated: 'Esta publicação ainda não está disponível em português. Exibindo a versão em inglês.',
  },
} satisfies TranslationStructure;

export const t = (key: BlogDictKey, lang: string) => {
  const language = lang.toLocaleLowerCase() as Lang;
  return getTranslation(blogDict, language, key);
};
