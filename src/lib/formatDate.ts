import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

function formatDateToNow(date: string): string {
  const dateObject = new Date(date);
  const distanceToNow = formatDistanceToNow(dateObject, {
    addSuffix: true,
    locale: ptBR,
  });
  return distanceToNow;
}

export default formatDateToNow;
