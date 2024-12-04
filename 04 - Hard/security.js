// https://edabit.com/challenge/SimxWM2Tz9jvXqLM3

const security = (str) => {
  // Pattern to match unguarded paths between T and $
  const unsafePattern = /T[^G]*\$/;

  // Check if the pattern exists in the string or reversed string
  if (unsafePattern.test(str) || unsafePattern.test([...str].reverse().join(''))) {
    return "ALARM!";
  }

  return "Safe";
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