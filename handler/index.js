const Multipart = require("lambda-multipart")
const AWS = require("aws-sdk")
const sharp = require("sharp")

exports.handler = async function (event, context, callback) {
  const { image } = event
  let imageBuffer = Buffer.from(image, "base64")
  const data = await sharp(imageBuffer)
    .resize({ height: 600, width: 1200 })
    .toFile("output.png")
  callback(null, data)
}
