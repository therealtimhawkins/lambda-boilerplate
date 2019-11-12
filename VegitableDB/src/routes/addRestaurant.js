module.exports = addRestaurant = (data, knex) => {
  return new Promise(async (resolve, reject) => {
    let restaurant = await knex('restaurants').where({
      name: data.body.restaurant.name,
      postcode: data.body.restaurant.postcode
    })
    if (restaurant.length) {
      reject({
        status: 409,
        error: 'Email exists'
      })
      return
    }
    restaurant = await knex('restaurants').insert({
      createdAt: new Date(),
      name: data.body.restaurant.name,
      coordinates: data.body.restaurant.coordinates,
      postcode: data.body.restaurant.postcode,
      rating: data.body.restaurant.rating
    })
    resolve({
      status: 200,
      message: `Restaurant ${data.body.restaurant.name} has been added successfully.`
    })
  })
}
