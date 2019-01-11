const moment = require('moment')
moment.locale('pt')

const numeral = require('numeral')

const ocomeco = moment('2019-01-01')
const ofim = moment('2023-01-01')
const totalDaysInOffice = ofim.diff(ocomeco, 'days')

const daysLeft = () => {
  return ofim.diff(moment(),'days')
}

const hoursLeft = () => {
  return ofim.diff(moment(),'hours')
}

const minutesLeft = () => {
  return ofim.diff(moment(),'minutes')
}

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
