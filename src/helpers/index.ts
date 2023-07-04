import dayjs, { Dayjs } from 'dayjs';
import { DATE_TIME_FORMAT } from '~/constants';

export const formatDateTime = (
  date: Date | Dayjs,
  format = DATE_TIME_FORMAT,
) => {
  return date ? dayjs(date).format(format) : null;
};
