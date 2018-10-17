export const parseArabic: Function = (str: string) => {
  const value = String(str);
  if(!value.trim()) return NaN;

  value
    // Convert Arabic numbers
    .replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d: any): any => d.charCodeAt(0) - 1632)
    // Convert Persian numbers
    .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, (d: any): any => d.charCodeAt(0) - 1776);
  return Number(value);
};
