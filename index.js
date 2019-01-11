const moment = require('moment')
const humanizeDuration = require('humanize-duration')
const numeral = require('numeral')

const ocomeco = moment('2019-01-01')
const ofim = moment('2023-01-01')
const totalDaysInOffice = ofim.diff(ocomeco, 'days')

const left = (units) => {
  const diff = ofim.diff(moment(),'milliseconds')
  if (!units) return diff
  return humanizeDuration(diff, { language: 'pt', units, round: true })
}

const daysLeft = (format) => left(format ? ['d'] : null)
const hoursLeft = (format) => left(format ? ['h'] : null)
const minutesLeft = (format) => left(format ? ['m'] : null)

const progress = (format) => {
  const daysInOffice = moment().diff(ocomeco, 'days')
  const p = daysInOffice / totalDaysInOffice
  if (!format) return p
  return `${numeral(p).format('0.000')}%`
}

module.exports = {
  daysLeft,
  hoursLeft,
  minutesLeft,
  progress
}
