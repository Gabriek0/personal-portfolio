const AVERAGE_WPM = 260;

export function calculateReadingTime(postContent: string): number {
  const postContentSanitized = postContent.replace(/[^a-zA-Z0-9` ]/g, '');
  const numOfWords = postContentSanitized.split('').length;
  return Math.ceil(numOfWords / AVERAGE_WPM);
}
