"use strict";

// const quoteList = [
//   {"name": "quote1"},
//   {"name": "quote2"}
// ]

// const testing = () => {
  const quoteList = [
    "quote1",
    "quote2",
    "quote3",
    "quote4",
    "quote5",
    "quote6",
    "quote7",
    "quote8",
    "quote9"
  ]

  const randomQuote = () => {
    let random = Math.floor(Math.random() * quoteList.length);
    // console.log(quoteList[random]);
    return quoteList[random];
  }
  randomQuote();
  module.exports = randomQuote;
// }