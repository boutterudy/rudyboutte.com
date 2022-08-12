/**
 * Capitalize the first letter of a string
 * @param s String to capitalize
 * @returns Capitlized string (only first letter)
 */
const capitalizeFirstLetter = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1)

const removeAccents = (s: string) =>
  s.normalize('NFD').replace(/\p{Diacritic}/gu, '')

const stringToId = (s: string) => {
  return removeAccents(
    s
      .split(',')[0]
      .split('(')[0]
      .trim()
      .replace(/:\s*/g, '')
      .replace(/ /g, '-')
      .replace(/^[^a-z]+|[^\w:.-]+/gi, '')
      .replace(/^-+|-+$/g, '')
      .toLowerCase()
  )
}

export { capitalizeFirstLetter, removeAccents, stringToId }
