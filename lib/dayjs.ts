import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

import 'dayjs/locale/en';
import 'dayjs/locale/es';
import 'dayjs/locale/pt-br';

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

const changeDayjsLocale = (locale: string) => {
  const lowerCaseLocale = locale?.toLowerCase();
  dayjs.locale(lowerCaseLocale);
};

const formatDate = (date?: string | null): string | null => {
  if (date) return dayjs(date).format('L');
  return null;
};

const calculateTimeDifference = (
  start: string,
  end: string | null
): string | null => {
  if (!end) return null;

  const startDate = dayjs(start);
  const endDate = dayjs(end);

  if (endDate.isAfter(startDate)) {
    const years = endDate.diff(startDate, 'year');
    const months = endDate.diff(startDate, 'month');
    const diffDuration = dayjs.duration({ years, months }).humanize();

    return diffDuration;
  }

  return null;
};

export { calculateTimeDifference, changeDayjsLocale, formatDate };
