const addRestaurant = require('./routes/addRestaurant')

module.exports = router = (data, knex) => {
  switch (data.route) {
    case 'addRestaurant':
      return addRestaurant(data, knex)
    default:
      return
  }
}
