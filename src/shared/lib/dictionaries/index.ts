import { Lang, TranslationStructure } from '../../types';

export function getTranslation<D extends TranslationStructure>(
  dict: D,
  lang: Lang,
  key: keyof D['en'],
): string {
  return dict[lang][key as string];
}
