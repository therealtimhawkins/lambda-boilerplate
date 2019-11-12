const LambdaTester = require('lambda-tester');
const handler = require('../VegitableDB/index').handler;

describe('handler', () => {
  it('should return message if no name is given', (done) => {
    LambdaTester(handler)
      .event({
        "route": "addRestaurant",
        "body": {
          "restaurant": {
            "name": "Nandos",
            "coordinates": "51.5135,0.0291",
            "postcode": "E147DX",
            "rating": 8
          }
        }
      })
      .expectResult(result => {
        expect(result.message).toEqual('Hello World!');
      })
      .verify(done);
  });
});
