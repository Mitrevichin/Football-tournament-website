export function isValidDate(dateString) {
  const patterns = {
    'YYYY-MM-DD': /^\d{4}-\d{2}-\d{2}$/,
    'MM/DD/YYYY': /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/\d{4}$/,
    'DD/MM/YYYY': /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/,
    'MM-DD-YYYY': /^(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])-\d{4}$/,
    'YYYY/MM/DD': /^\d{4}\/(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])$/,
  };

  for (const [format, regex] of Object.entries(patterns)) {
    if (regex.test(dateString)) {
      return format;
    }
  }

  return 'Invalid Date Format';
}
