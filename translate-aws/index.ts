import * as AWS from "aws-sdk"


function detectLanguage() {
    const awscomprehend = new AWS.Comprehend()
    awscomprehend.detectDominantLanguage({
        Text: "만나서 반갑다"
    }).promise().then(c => {
        console.log(c)
    })
}


function translate() {
    const awstranslate = new AWS.Translate({
        region: "us-west-1"
    })
    awstranslate.translateText({
        Text: "아몰라몰라 그냥 밥이나 줘",
        SourceLanguageCode: "ko",
        TargetLanguageCode: "en"
    }).promise().then(c => {
        console.log(c)
    })
}

translate()