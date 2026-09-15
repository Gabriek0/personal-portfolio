import { promises as fs } from 'fs';
import path from 'path';
import { Locale } from '@/src/lib/i18n';
import { portfolioContentSchema } from '@/src/lib/content/schema';
import { PortfolioContent, PortfolioContentProvider } from '@/src/lib/content/types';

export class FilesystemPortfolioContentProvider implements PortfolioContentProvider {
  async getContent(locale: Locale): Promise<PortfolioContent | null> {
    const filePath = path.join(process.cwd(), 'content', 'portfolio', `${locale}.json`);

    try {
      const source = await fs.readFile(filePath, 'utf8');
      const parsed = JSON.parse(source);

      return portfolioContentSchema.parse(parsed);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        return null;
      }

      throw error;
    }
  }
}
