const AWS = require("aws-sdk")
const sharp = require("sharp")
const { v4: uuidv4 } = require("uuid")

const aws = {
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
  region: "eu-west-1",
}
AWS.config.update(aws)
const S3 = new AWS.S3(aws)

exports.handler = async function (event, context, callback) {
  const { image } = event
  const imageBuffer = Buffer.from(image, "base64")
  const Body = await sharp(imageBuffer)
    .resize({ height: 500, width: 1000 })
    .toBuffer()
  const Key = uuidv4()
  const upload = {
    Bucket: process.env.AWS_PATH,
    Key,
    Body,
    ContentEncoding: "base64",
    ContentType: "image/png",
  }
  try {
    const { Location: location } = await S3.upload(upload).promise()
    callback(null, { location, key })
  } catch (error) {
    callback(error)
  }
}
