const LambdaTester = require("lambda-tester")
const handler = require("../handler/index").handler
const fs = require("fs")
require("dotenv").config()

describe("handler", () => {
  it("should return message if no name is given", async () => {
    const image = await fs.readFileSync(__dirname + "/image.txt", "utf8")
    await LambdaTester(handler)
      .event({ image })
      .expectResult((result) => {
        console.log(result)
        expect("test").toEqual("Hello World!")
      })
  })
})
