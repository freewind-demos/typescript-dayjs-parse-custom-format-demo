import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat);

const date1 = dayjs('11/22/2019').toDate()
console.log(date1);

const date2 = dayjs('22/11/2019', 'DD/MM/YYYY').toDate()
console.log(date2);
