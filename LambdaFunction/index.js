exports.handler = function(event, context, callback) {
  const name = event.name || 'World';
  const response = {message: `Hello ${name}!`};
  callback(null, response);
};