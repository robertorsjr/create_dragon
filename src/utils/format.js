import { format } from 'date-fns';

export function formatDate(value) {
  const formatType = 'dd/MM/yyyy';
  const data = '';
  if (value !== null) {
    return format(new Date(value), formatType);
  }
  return data;
}
