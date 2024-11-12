import { getTranslations } from 'next-intl/server'

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
const getDifferenceBetweenDates = async (d1: Date, d2: Date) => {
  const t = await getTranslations('common')
  const diffInMs = Math.abs(d2.getTime() - d1.getTime())

  // If in months (round to month if >= 28 days)
  if (diffInMs >= 28 * dayInMs) {
    return t('months', {
      count: Math.round(diffInMs / monthInMs),
    })
  }

  // If in days
  if (diffInMs >= dayInMs) {
    const diffInDays = Math.round(diffInMs / dayInMs)
    return t('days', { count: diffInDays })
  }

  // If in hours
  if (diffInMs >= hourInMs) {
    const diffInHours = Math.round(diffInMs / hourInMs)
    return t('hours', { count: diffInHours })
  }

  // If in seconds
  if (diffInMs >= secondInMs) {
    const diffInSeconds = Math.round(diffInMs / secondInMs)
    return t('seconds', { count: diffInSeconds })
  }

  // If in milliseconds
  return t('milliseconds', { count: diffInMs })
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
