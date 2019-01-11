const moment = require('moment')
const humanizeDuration = require('humanize-duration')
const numeral = require('numeral')

const ocomeco = moment('2019-01-01')
const ofim = moment('2023-01-01')
const totalDaysInOffice = ofim.diff(ocomeco, 'days')

const left = (units) => {
  const diff = ofim.diff(moment(),'milliseconds')
  return humanizeDuration(diff, { language: 'pt', units, round: true })
}

const daysLeft = () => left(['d'])
const hoursLeft = () => left(['h'])
const minutesLeft = () => left(['m'])

const progress = () => {
  const daysInOffice = moment().diff(ocomeco, 'days')
  return numeral(daysInOffice / totalDaysInOffice).format('0.000')
}

module.exports = {
  daysLeft,
  hoursLeft,
  minutesLeft,
  progress
}
