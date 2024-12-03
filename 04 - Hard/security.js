// https://edabit.com/challenge/SimxWM2Tz9jvXqLM3

const security = (str) => { return; }

// Tests

console.log(security("xxTxxx$xxxTxxxGxxT"), "ALARM!")
console.log(security("xGxx$xxGxxxTTT"), "Safe")
console.log(security("TxGxx$xxx$xxxGxxT"), "Safe")
console.log(security("GxxxTxxGxxTxx$xx$xxTxxG"), "ALARM!")
console.log(security("xxGTxx$xx$xxxxxxG"), "ALARM!")