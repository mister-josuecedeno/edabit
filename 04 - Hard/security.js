// https://edabit.com/challenge/SimxWM2Tz9jvXqLM3

const security = (str) => {
  const regex = /[GT$]/g;
  return str.match(regex);
}

// Tests

console.log(security("xxTxxx$xxxTxxxGxxT"), "ALARM!")
console.log(security("xGxx$xxGxxxTTT"), "Safe")
console.log(security("TxGxx$xxx$xxxGxxT"), "Safe")
console.log(security("GxxxTxxGxxTxx$xx$xxTxxG"), "ALARM!")
console.log(security("xxGTxx$xx$xxxxxxG"), "ALARM!")
console.log(security("xxTxxxxxxxx$xGxxxxxxT"), "ALARM!")
console.log(security("xx$xxGxxxx$xxxxxxxxxxT"), "ALARM!")
console.log(security("xxxTxxxxT"), "Safe")
console.log(security("xxGxxxGGG"), "Safe")
console.log(security("x$xx$x$x$xx"), "Safe")