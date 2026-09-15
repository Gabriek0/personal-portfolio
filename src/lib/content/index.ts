import { FilesystemPortfolioContentProvider } from '@/src/lib/content/filesystem-provider';
import { Locale } from '@/src/lib/i18n';

const filesystemProvider = new FilesystemPortfolioContentProvider();

export async function getPortfolioContent(locale: Locale) {
  return filesystemProvider.getContent(locale);
}
