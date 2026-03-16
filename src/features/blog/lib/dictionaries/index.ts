import { getTranslation } from '@/src/shared/lib/dictionaries';
import { Lang, TranslationStructure } from '@/src/shared/types';
import { BlogDictKey } from '../../types';

export const blogDict = {
  en: { back: 'Back', readingTime: 'min read' },
  es: { back: 'Volver', readingTime: 'min de lectura' },
  'pt-br': { back: 'Voltar', readingTime: 'min de leitura' },
} satisfies TranslationStructure;

export const t = (key: BlogDictKey, lang: string) => {
  const language = lang.toLocaleLowerCase() as Lang;
  return getTranslation(blogDict, language, key);
};
