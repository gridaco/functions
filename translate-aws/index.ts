import * as AWS from "aws-sdk"

const comprehend = new AWS.Comprehend()
comprehend.detectDominantLanguage().promise()