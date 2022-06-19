let dailyPredictionsList = ['Rivals will take greater risks against the US', 'The popular revolt against bankers will become impossible to resist', 'A vaccine will rid the world of Aids', 'All sorts of things will just be sold in plain packages', `We'll be able to plug information streams directly into the cortex`];

let questionAnswerList = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.",
"Don’t count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.",
"Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.",
"Yes.", "Yes – definitely.", "You may rely on it."]

let dailyQuoteList = ['The greatest glory in living lies not in never falling, but in rising every time we fall', 'The way to get started is to quit talking and begin doing', `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking`, 
'If life were predictable it would cease to be life, and be without flavor', `Life is what happens when you're busy making other plans`,
 `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough`]

const dailyPredictionsOutput = () => {
    let dailyPrediction = Math.floor(Math.random() * dailyPredictionsList.length);
    return `Today's Prediction is: ${dailyPredictionsList[dailyPrediction]}`;
}

const questionAnswerOutput = () => {
    let questionAnswer = Math.floor(Math.random() * questionAnswerList.length);
    return  `The answer to the question you've been asking yourself is: ${questionAnswerList[questionAnswer]}`;
}

const dailyQuoteOutput = () => {
    let dailyQuote = Math.floor(Math.random() * dailyQuoteList.length);
    return `Today's quote for you is: ${dailyQuoteList[dailyQuote]}`;
}
console.log(dailyPredictionsOutput());
console.log(questionAnswerOutput());
console.log(dailyQuoteOutput());