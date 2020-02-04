const LambdaTester = require('lambda-tester');
const handler = require('../LambdaFunction/index').handler;

describe('handler', () => {
  it('should return message if no name is given', (done) => {
    LambdaTester(handler)
      .event({})
      .expectResult(result => {
        expect(result.message).toEqual('Hello World!');
      })
      .verify(done);
  });

  it('should return message if name is given', (done) => {
    LambdaTester(handler)
      .event({name: 'Tim Hawkins'})
      .expectResult(result => {
        expect(result.message).toEqual('Hello Tim Hawkins!');
      })
      .verify(done);
  });
});
