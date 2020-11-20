import { parseISO, formatDistance } from 'date-fns';
import { enUS } from 'date-fns/locale';

const dateDistance = date =>
  formatDistance(parseISO(date), new Date(), {
    addSuffix: true,
    locale: enUS,
  });

export default {
  dateDistance,
};
