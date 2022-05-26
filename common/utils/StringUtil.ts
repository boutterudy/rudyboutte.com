/**
 * Capitalize the first letter of a string
 * @param s String to capitalize
 * @returns Capitlized string (only first letter)
 */
const capitalizeFirstLetter = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1);

export { capitalizeFirstLetter };
