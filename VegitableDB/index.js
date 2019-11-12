const router = require('./src/router')

exports.handler = async function(event, context, callback) {
  let knex;
  try {
    console.log("Connecting to RDS...");
    knex = await require("knex")({
      client: "mysql",
      connection: {
        host: process.env.RDS_HOSTNAME,
        user: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DB
      }
    });
    console.log("Connected to RDS.");
  } catch (err) {
    return callback(err);
  }

  try {
    const result = await router(event, knex)
    knex.destroy();
    return callback(null, result);
  } catch (err) {
    knex.destroy();
    return callback(err);
  }
};
