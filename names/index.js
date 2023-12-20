const nameList = require('../country/state/city/index')
const getFirstNames = require('../utilities/utils/index')

const getPeopleInCity = () => {
  return getFirstNames(nameList)
}

module.exports = getPeopleInCity
