import { parseISO, formatDistance } from 'date-fns';
import { enUS } from 'date-fns/locale';

const dateDistance = (date: string): string =>
  formatDistance(parseISO(date), new Date(), {
    addSuffix: true,
    locale: enUS,
  });

export default {
  dateDistance,
};
