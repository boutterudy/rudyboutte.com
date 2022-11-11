const getMonthName = (d: Date) => d.toLocaleString('default', { month: 'long' })

const secondInMs = 1000
const minuteInMs = secondInMs * 60
const hourInMs = minuteInMs * 60
const dayInMs = hourInMs * 24
const monthInMs = dayInMs * 30.4167

/**
 * Get difference between dates with scale (e.g: 10 months)
 * @param d1 Date (begin)
 * @param d2 Date (end)
 * @returns Difference between dates as string
 */
const getDifferenceBetweenDates = (d1: Date, d2: Date) => {
  const diffInMs = Math.abs(d2.getTime() - d1.getTime())
  // If in months (round to month if >= 28 days)
  if (diffInMs >= 28 * dayInMs) {
    return Math.round(diffInMs / monthInMs) + ' mois'
  }

  // If in days
  if (diffInMs >= dayInMs) {
    const diffInDays = diffInMs / dayInMs
    return diffInDays + ' jour' + (diffInDays > 1 ? 's' : '')
  }

  // If in hours
  if (diffInMs >= hourInMs) {
    const diffInHours = diffInMs / dayInMs
    return diffInHours + ' heure' + (diffInHours > 1 ? 's' : '')
  }

  // If in seconds
  if (diffInMs >= secondInMs) {
    const diffInSeconds = diffInMs / secondInMs
    return diffInSeconds + ' seconde' + (diffInSeconds > 1 ? 's' : '')
  }

  return diffInMs + ' milliseconde' + (diffInMs > 1 ? 's' : '')
}

/**
 * Get age from birthdate
 * @param birthdate Birthdate
 * @returns Age
 */
const getAgeFromBirthdate = (birthdate: Date) => {
  const timeDiff = Math.abs(Date.now() - birthdate.getTime())
  return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25)
}

export { getMonthName, getDifferenceBetweenDates, getAgeFromBirthdate }
