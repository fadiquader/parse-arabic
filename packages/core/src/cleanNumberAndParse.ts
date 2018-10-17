import {parseArabic} from './parseArabic';

export const cleanNumberAndParse: Function = (value: string): number => {
  if (!value ) return NaN;
  value += '';
  const characters = value.split('');
  const num = characters.reduce((acc, item) => {
    const num = parseArabic(item);
    if (!isNaN(num)) {
      acc += `${num}`;
      return acc;
    }
    return acc;
  }, '');
  return Number(num);
};
